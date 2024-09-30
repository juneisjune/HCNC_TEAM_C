package hcnc.cteam.pay;

import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class NexaPayController {

	@Resource(name = "nexaPayService")
	private NexaPayService nexaPayService;

	@RequestMapping("/selectAssign.do")
	public NexacroResult selectAssign(@ParamDataSet(name = "ds_Assign", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		Calendar cal = Calendar.getInstance();
		int curMon = cal.get(Calendar.MONTH) + 1; // Calendar.MONTH는 0부터 시작하므로 +1 필요
		param.put("curMon", curMon);
		
		try {
			//직책코드로 사원 목록 조회
			List<Map<String, Object>> ds_EmpList = nexaPayService.selectEmpList(param);
			
			for (Map<String, Object> emp : ds_EmpList) {
				emp.put("chkVal", "1");
				
				// 기본급
				int monthly = nexaPayService.selectMonthly(emp);
				emp.put("monthly", monthly);

				//직책에 따른 시급
				int hourly = nexaPayService.selectHourly(emp);
				
				// 연장근로수당
				int pay_over = (int) (hourly * nexaPayService.selectWorkOver(emp));
				emp.put("pay_over", pay_over);

				// 식대
				int pay_meal = 100000;
				emp.put("pay_meal", pay_meal);

				// 결근
				int absence = hourly * 8 * nexaPayService.selectAbsence(emp);
				emp.put("absence", absence);

				// 지급액 = 기본급 or 일급 + 연장근로수당 + 식대 - 결근
				int pay_amount = monthly + pay_over + pay_meal - absence;
				emp.put("pay_amount", pay_amount);
				
				//직책에 따른 세금(비율)
				double tax = nexaPayService.selectTax(emp);

				// 공제액
				int income_tax = (int) (pay_amount * tax);
				emp.put("income_tax", income_tax);

				int resident_tax = (int) (income_tax * 0.1);
				emp.put("resident_tax", resident_tax);

				int national_tax = (int) (pay_amount * 0.045);
				emp.put("national_tax", national_tax);

				int emp_insurance = (int) (national_tax * 0.1);
				emp.put("emp_insurance", emp_insurance);

				int health_insurance = (int) (pay_amount * 0.0343);
				emp.put("health_insurance", health_insurance);

				int longcare_insurance = (int) (health_insurance * 0.1);
				emp.put("longcare_insurance", longcare_insurance);

				// 실지급액 = 지급액 - 공제액
				int actual_pay = pay_amount - (income_tax + resident_tax + national_tax + emp_insurance
						+ health_insurance + longcare_insurance);
				// 1의 자리에서 올림
				actual_pay = (int) Math.ceil(actual_pay / 10.0) * 10;
				emp.put("actual_pay", actual_pay);
			}

			result.addDataSet("ds_EmpList", ds_EmpList);

		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("관리자에게 문의하세요.");
		}
		return result;
	}

	@RequestMapping("/insertPay.do")
	public NexacroResult insertPay(@ParamDataSet(name = "ds_EmpListCopy", required = false) List<Map<String, Object>> param) {
		NexacroResult result = new NexacroResult();
		
		try {
			for(Map<String, Object> emp : param) { 
				if(nexaPayService.duplidacatedPay(emp) == 0) {
					nexaPayService.insertPay(emp);
				} else {
					result.setErrorCode(-1);
					result.setErrorMsg("중복된 급여 등록입니다.");
					return result;
				}
			}
			////////////////////////////추후 세션 받아와서 reg_name 넣기//////////////////////////////
			
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("관리자에게 문의하세요.");
		}
		return result;
	}

}
