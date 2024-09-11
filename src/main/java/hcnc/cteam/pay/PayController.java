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
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

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

	@RequestMapping(value="/searchPay1.do", method = RequestMethod.POST)
	@ResponseBody
	public String searchPay1(PaySearchDTO paySearchDTO, ModelMap model) {
		
		String result = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			List<PayDTO> payList = payService.selectPeriod(paySearchDTO);		
			int monthly = payService.selectMonthly();
			
			map.put("msg", "ok");
			map.put("payList", payList);	
			map.put("monthly", monthly);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		
		try {
			result = new ObjectMapper().writeValueAsString(map);
		}catch (Exception e) {
			result = "{'msg':'error'}";
		}
		
		return result;
	}

	@RequestMapping(value="/searchPay2.do", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView searchPay2(PaySearchDTO paySearchDTO, ModelMap model) {
		ModelAndView mv = new ModelAndView("jsonView");
		String msg = "";
		try {
			List<PayDTO> payList = payService.selectPeriod(paySearchDTO);
			int monthly = payService.selectMonthly();
			msg = "ok";
			
			model.addAttribute("payList", payList);
			model.addAttribute("msg", msg);
			model.addAttribute("monthly", monthly);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return mv;
	}
	
	
}

	

