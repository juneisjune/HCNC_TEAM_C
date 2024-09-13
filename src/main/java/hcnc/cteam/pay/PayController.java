package hcnc.cteam.pay;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import oracle.sql.DATE;

@Controller
@RequestMapping("/pay")
public class PayController {

	private static final RequestMethod[] POST = null;

	@Resource(name = "payService")
	private PayService payService;
	
	//저번달 급여명세서 조회 
	@RequestMapping("/viewPayslip.do")
	public String viewPayslip(ModelMap model) throws Exception {
		LocalDate currentDate = LocalDate.now();
		int payYear = currentDate.getYear();
		int payMonth = currentDate.getMonthValue() - 1;

		PaySearchDTO paySearchDTO = new PaySearchDTO(payYear, payMonth);

		PayDTO myPay = payService.selectMyPay(paySearchDTO);
		model.addAttribute("myPay", myPay);

		PayEmpDTO emp = payService.selectEmp();
		model.addAttribute("emp", emp);

		int monthly = payService.selectMonthly();
		model.addAttribute("monthly", monthly);

		int minus = payService.selectMinus(paySearchDTO);
		model.addAttribute("minus", minus);

		int totalDay = payService.selectTotalDay(paySearchDTO);
		model.addAttribute("totalDay", totalDay);

		int totalTime = payService.selectTotalTime(paySearchDTO);
		model.addAttribute("totalTime", totalTime);

		double overTime = payService.selectWorkOver(paySearchDTO);
		model.addAttribute("overTime", overTime);

		return "pay/payslip";
	}

	//해당 년,월 급여 조회
	@RequestMapping("/viewPayslip/{payYear}/{payMonth}.do")
	public String viewPayMonth(@PathVariable int payYear, @PathVariable int payMonth, ModelMap model) throws Exception {
		PaySearchDTO paySearchDTO = new PaySearchDTO(payYear, payMonth);

		PayDTO myPay = payService.selectMyPay(paySearchDTO);
		model.addAttribute("myPay", myPay);

		PayEmpDTO emp = payService.selectEmp();
		model.addAttribute("emp", emp);

		int monthly = payService.selectMonthly();
		model.addAttribute("monthly", monthly);

		int minus = payService.selectMinus(paySearchDTO);
		model.addAttribute("minus", minus);

		int totalDay = payService.selectTotalDay(paySearchDTO);
		model.addAttribute("totalDay", totalDay);

		int totalTime = payService.selectTotalTime(paySearchDTO);
		model.addAttribute("totalTime", totalTime);

		Double overTime = payService.selectWorkOver(paySearchDTO);
		overTime = (overTime != null) ? overTime : 0.0;
		model.addAttribute("overTime", overTime);

		return "pay/payslip";
	}

	//해당 직원 급여 내역 모두 조회
	@RequestMapping("/searchPay.do")
	public String searchPayView(ModelMap model) throws Exception {
		PayEmpDTO emp = payService.selectEmp();
		model.addAttribute("emp", emp);

		List<PayDTO> payList = payService.selectPayList();

		if (payList != null && !payList.isEmpty()) {
			model.addAttribute("payList", payList);

			int monthly = payService.selectMonthly();
			model.addAttribute("monthly", monthly);
		}

		return "pay/searchPay";
	}

	//해당 기간 급여 조회 
	@RequestMapping(value = "/searchPay.do", method = RequestMethod.POST)
	@ResponseBody
	public String searchPay1(PaySearchDTO paySearchDTO, ModelMap model) {

		String result = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {
			List<PayDTO> searchList = payService.selectPeriod(paySearchDTO);
			int monthly = payService.selectMonthly();

			map.put("msg", "ok");
			map.put("searchList", searchList);
			map.put("monthly", monthly);

		} catch (Exception e) {
			e.printStackTrace();
		}

		try {
			result = new ObjectMapper().writeValueAsString(map);
		} catch (Exception e) {
			result = "{'msg':'error'}";
		}

		return result;
	}


	
	  
	 

}
