package hcnc.cteam.pay;

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
		
		try {
			List<Map<String, Object>> ds_EmpList = nexaPayService.selectEmpList(param);
			
			for (Map<String, Object> emp : ds_EmpList) {
			    emp.put("checkFlag", 1);	
			    
			    //지급액 = 기본급 + 식대 + 연장근로수당 - 결근 
			    int monthly = nexaPayService.selectMonthly(param);
			    emp.put("monthly", monthly);
			    
			    int pay_over = (int) (nexaPayService.selectHourly(param) * nexaPayService.selectWorkOver());
			    emp.put("pay_over", pay_over);
			    
			    //결근
			    int absence = nexaPayService.selectHourly(param) * 8 * nexaPayService.selectAbsence(param);
			   
			    int pay_amount = monthly + 100000 + pay_over - absence;
			    
			    ////////////퇴사하면 세금 어케 떼는지...?/////////////
			   
			    
			    ///변수들 nexa dataset에 생성하기/////
			    
			    double tax = nexaPayService.selectTax(param);
			    
			    //공제액 
			    int income_tax = (int) ((monthly + 100000 + pay_over - absence) * tax);
			    int resident_tax = (int) (income_tax * 0.1);
			    int national_tax = (int) ((monthly + 100000 + pay_over - absence) * 0.045);
			    int emp_insurance =  (int) (national_tax * 0.1);	
			    int health_insurance = (int) ((monthly + 100000 + pay_over - absence) * 0.0343);
			    int longcare_insurance = (int) (health_insurance * 0.1);	
			    
			}
			


			result.addDataSet("ds_EmpList", ds_EmpList);
			
		} catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		return result;
	}
	
	@RequestMapping("/insertPay.do")
	public NexacroResult insertPay(@ParamDataSet(name="ds_Emp", required=false) Map<String, Object> param ) {
		NexacroResult result = new NexacroResult();
		
		PayEmpDTO payEmpDTO = new PayEmpDTO();
		
		try {
			nexaPayService.insertPay(payEmpDTO);
		} catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
		return result;
	}
	
}
