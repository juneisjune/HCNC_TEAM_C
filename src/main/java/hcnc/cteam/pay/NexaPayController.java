package hcnc.cteam.pay;

import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class NexaPayController {

	@Resource(name = "nexaPayService")
	private NexaPayService nexaPayService;
	
	 private Logger logger = LoggerFactory.getLogger(PayController.class);
	    
    @Resource(name="txManager")
    PlatformTransactionManager transactionManager;
    
    @Autowired
    private PayService payService;  // 소문자로 변수명 유지

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
				
				//월지급액
				int month = nexaPayService.selectMonth(emp);

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
				emp.put("month", month - absence);
				emp.put("absence", absence);

				// 지급액 = 기본급 or 일급 + 연장근로수당 + 식대 - 결근
				int pay_amount = month + pay_over + pay_meal;
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
	
	    
	@RequestMapping(value = "/selectPayList.do")
	public NexacroResult nexaSearchPay(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
	    NexacroResult result = new NexacroResult();
	    try {
	        // 서비스에서 데이터를 가져오며 'chk' 컬럼을 기본값 '0'으로 설정
	        List<PayDTO> ds_Pay = payService.nexaGetPayListByCondition(param);

	        // 조회된 데이터에 대해 chk 기본값 설정
	        for (PayDTO pay : ds_Pay) {
	            if (pay.getClass() == null) {
	                pay.setChk("0");  // 체크박스 기본값을 '0'으로 설정 (해제 상태)
	            }
	        }

	        // Nexacro에 데이터셋 추가 (updName 포함)
	        result.addDataSet("ds_Pay", ds_Pay);  
	    } catch (Exception ee) {
	        logger.error("급여 목록 조회 중 오류 발생: ", ee);
	        result.setErrorCode(-1);
	        result.setErrorMsg("급여 조회 오류 발생");
	    }
	    return result;
	}



	@Transactional(rollbackOn = Exception.class)
	@RequestMapping(value = "/updatePayEtc.do")
	public NexacroResult updatePayEtc(@ParamDataSet(name = "ds_Pay") List<PayDTO> ds_Pay, HttpSession session) {
	    NexacroResult result = new NexacroResult();
	    try {
	        
	        String updName = (String) session.getAttribute("userName"); 
	        
	        for (PayDTO payDTO : ds_Pay) {
	            // 필수 값 확인
	            if (payDTO.getPayYear() == 0 || payDTO.getPayMonth() == 0 || payDTO.getEtc() == 0) {
	                result.setErrorCode(-1);
	                result.setErrorMsg("필수 값이 누락되었습니다.");
	                return result;
	            }

	            // 수정하는 사용자 이름 설정
	            payDTO.setUpdName(updName);  

	            // 수정 처리
	            payService.updatePayEtc(payDTO);
	        }
	        result.setErrorCode(0);
	        result.setErrorMsg("수정이 성공적으로 완료되었습니다.");
	    } catch (Exception e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("수정 중 오류 발생: " + e.getMessage());
	    }
	    return result;
	}  





	    
	    @RequestMapping(value = "/deletePayData.do")
	    public NexacroResult deletePayData(@ParamDataSet(name = "ds_Pay") List<PayDTO> ds_Pay) {
	        NexacroResult result = new NexacroResult();
	        try {
	            for (PayDTO payDTO : ds_Pay) {
	                if ("1".equals(payDTO.getChk())) {  // 체크된 데이터만 삭제
	                    payService.deletePay(payDTO);  // PayService에서 삭제 처리
	                }
	            }
	            result.setErrorCode(0);
	            result.setErrorMsg("선택된 데이터가 삭제되었습니다.");
	        } catch (Exception e) {
	            result.setErrorCode(-1);
	            result.setErrorMsg("삭제 중 오류 발생: " + e.getMessage());
	        }
	        return result;
	    }

	    

}
