package hcnc.cteam.pay;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pay")
public class PayController {
	
	@Resource(name="payService")
	private PayService payService;
	
	@RequestMapping("/viewPayslip.do")
	public String viewPayslip(ModelMap model) throws Exception {
		
		PayVO myPay = payService.selectMyPay();
		model.addAttribute("myPay", myPay);
		
		EmpVO emp = payService.selectEmp();
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
	public String searchPay() {
		return "pay/searchPay";
	}
	
	
}
