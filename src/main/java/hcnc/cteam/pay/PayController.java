package hcnc.cteam.pay;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pay")
public class PayController {
	
	private static final RequestMethod[] POST = null;
	@Resource(name="payService")
	private PayService payService;
	
	@RequestMapping("/viewPayslip.do")
	public String viewPayslip(ModelMap model) throws Exception {
		
		PayVO myPay = payService.selectMyPay();
		model.addAttribute("myPay", myPay);
		
		PayEmpVO emp = payService.selectEmp();
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
		PayEmpVO emp = payService.selectEmp();
		model.addAttribute("emp", emp);
		
		return "pay/searchPay";
	}
	
	@PostMapping("/searchPay.do")
	public String searchPay(ModelMap model, HashMap<String, Integer> hashMap) throws Exception {
		
		
		return "pay/searchPay";
	}
	
	@RequestMapping("/header.do")
	public String viewHeader() {
		return "header";
	}
	
}
