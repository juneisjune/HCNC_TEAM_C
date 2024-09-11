package hcnc.cteam.pay;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/pay")
public class PayController {
	
	private static final RequestMethod[] POST = null;
	
	@Resource(name="payService")
	private PayService payService;
	
	@RequestMapping("/viewPayslip.do")
	public String viewPayslip(ModelMap model) throws Exception {
		
		PayDTO myPay = payService.selectMyPay();
		model.addAttribute("myPay", myPay);
		
		PayEmpDTO emp = payService.selectEmp();
		model.addAttribute("emp", emp);
		
		int monthly = payService.selectMonthly();
		model.addAttribute("monthly", monthly);
		
		int plus = payService.selectPlus();
		model.addAttribute("plus", plus);
		
		int minus = payService.selectMinus();
		model.addAttribute("minus", minus);
		
		int totalDay = payService.selectTotalDay();
		model.addAttribute("totalDay", totalDay);
		
		int totalTime = payService.selectTotalTime();
		model.addAttribute("totalTime", totalTime);
		
		double overTime = payService.selectWorkOver();
		model.addAttribute("overTime", overTime);

		return "pay/payslip";
	}
	
	@RequestMapping("/searchPay.do")
	public String searchPayView(ModelMap model) throws Exception {
		PayEmpDTO emp = payService.selectEmp();
		model.addAttribute("emp", emp);
		
		return "pay/searchPay";
	}
	
	@ResponseBody
	@RequestMapping(value="/searchPay.do", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> searchPay(PaySearchDTO paySearchDTO, ModelMap model) {
		String msg = "";
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			List<PayDTO> payList = payService.selectPeriod(paySearchDTO);
			model.addAttribute("payList", payList);
			
			msg = "ok";
			map.put("msg", msg);
			map.put("payList", payList);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	
	
	
	
	
}

	

