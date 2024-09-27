package hcnc.cteam.pay;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
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
	public NexacroResult selectAssign(@ParamDataSet(name="ds_Assign", required=false) Map<String, Object> param ) {
		NexacroResult result = new NexacroResult();
		
		Calendar cal = Calendar.getInstance();
		int curMon = cal.get(Calendar.MONTH) + 1; //Calendar.MONTH는 0부터 시작하므로 +1 필요
		param.put("curMon", curMon);

		try {
			List<Map<String, Object>> ds_EmpList = nexaPayService.selectEmpList(param);
			
			for (Map<String, Object> emp : ds_EmpList) {
			    emp.put("checkFlag", 1);	
			    
			    //기본급
			    int monthly = nexaPayService.selectMonthly(param);
			    emp.put("monthly", monthly);
			    System.out.println("monthly" + monthly);
			    
			    //연장근로수당
			    int pay_over = (int) (nexaPayService.selectHourly(param) * nexaPayService.selectWorkOver());
			    emp.put("pay_over", pay_over);
			    System.out.println("pay_over" + pay_over);
			    
			    //식대
			    int pay_meal = 100000;
			    emp.put("pay_meal", pay_meal);
			    System.out.println("pay_meal" + pay_meal);
			    
			    //결근
			    int absence = nexaPayService.selectHourly(param) * 8 * nexaPayService.selectAbsence(param);
			    emp.put("absence", absence);
			    System.out.println("absence" + absence);
			    
			    //지급액 = 기본급 + 연장근로수당 + 식대 - 결근 
			    int pay_amount = monthly + pay_meal + pay_over - absence;
			    emp.put("pay_amount", pay_amount);
			    System.out.println("pay_amount" + pay_amount);
			    
			    //세금(비율)
			    double tax = nexaPayService.selectTax(param);
			    
			    //공제액 
			    int income_tax = (int) (pay_amount * tax);
			    emp.put("income_tax", income_tax);
			    System.out.println("income_tax" + income_tax);
			    
			    int resident_tax = (int) (income_tax * 0.1);
			    emp.put("resident_tax", resident_tax);
			    System.out.println("resident_tax" + resident_tax);
			    
			    int national_tax = (int) (pay_amount * 0.045);
			    emp.put("national_tax", national_tax);
			    System.out.println("national_tax" + national_tax);
			    
			    int emp_insurance =  (int) (national_tax * 0.1);	
			    emp.put("emp_insurance", emp_insurance);
			    System.out.println("emp_insurance" + emp_insurance);
			    
			    int health_insurance = (int) (pay_amount * 0.0343);
			    emp.put("health_insurance", health_insurance);
			    System.out.println("health_insurance" + health_insurance);
			    
			    int longcare_insurance = (int) (health_insurance * 0.1);	
			    emp.put("longcare_insurance", longcare_insurance);
			    System.out.println("longcare_insurance" + longcare_insurance);
			    
			    //실지급액 = 지급액 - 공제액
			    int actual_pay = pay_amount - (income_tax + resident_tax + national_tax + emp_insurance + health_insurance + longcare_insurance);
			    //1의 자리에서 올림 
			    actual_pay = (int) Math.ceil(actual_pay / 10.0) * 10;
			    emp.put("actual_pay", actual_pay);
			    System.out.println("actual_pay" + actual_pay);
			}

			result.addDataSet("ds_EmpList", ds_EmpList);
			
		} catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		return result;
	}
	
	
	//////조회할때 dataset에 개인 정보 다 넣어놓고 param으로 받아서 등록
	///// 안되면 등록 버튼 누를때 DTO로 기본 정보만 받은 다음 개인 정보 set해서 insert  
	
	@RequestMapping("/insertPay.do")
	public NexacroResult insertPay(@ParamDataSet(name="ds_EmpList", required=false) Map<String, Object> param1,  
			@ParamDataSet(name="ds_GiveDate", required=false) Map<String, Object> param2 ) {
		NexacroResult result = new NexacroResult();
		
		/*
		 * System.out.println(param2.get("give_date")); System.out.println(param1);
		 * 
		 * param1.put("give_date", param2.get("give_date"));
		 */
		
		try {
			nexaPayService.insertPay(param2);
			//추후 세션 받아와서 reg_name 넣기 
		} catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		return result;
	}
	
}
