package hcnc.cteam.pay;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import hcnc.cteam.login.LoginDTO;
import oracle.sql.DATE;

@Controller
@RequestMapping("/pay")
public class PayController {

	private static final RequestMethod[] POST = null;

	@Resource(name = "payService")
	private PayService payService;
	
	//최근 급여명세서 조회 
	@RequestMapping("/viewPayslip.do")
	public String viewPayslip(ModelMap model, HttpServletRequest request) throws Exception {
		LocalDate currentDate = LocalDate.now();
		
		//신년 1월이면 작년 12월 급여 명세서를 조회함
		int payMonth = (currentDate.getMonthValue() - 1) == 0 ? 12 : currentDate.getMonthValue() - 1;
		int payYear;
		if(payMonth == 12) {
			payYear = currentDate.getYear() - 1;
		} else {
			payYear = currentDate.getYear();
		}
		
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");	

		PaySearchDTO paySearchDTO = new PaySearchDTO(empCode, payYear, payMonth);

		PayDTO myPay = payService.selectMyPay(paySearchDTO);
		model.addAttribute("myPay", myPay);

		PayEmpDTO emp = payService.selectEmp(empCode);
		model.addAttribute("emp", emp);

		Integer minus = payService.selectMinus(paySearchDTO);
		model.addAttribute("minus", minus);

		Integer totalDay = payService.selectTotalDay(paySearchDTO);
		model.addAttribute("totalDay", totalDay);

		Integer totalTime = payService.selectTotalTime(paySearchDTO);
		model.addAttribute("totalTime", totalTime);

		Double overTime = payService.selectWorkOver(paySearchDTO);
		model.addAttribute("overTime", overTime);

		return "pay/payslip";
	}

	//해당 년,월 급여 조회
	@RequestMapping("/viewPayslip/{payYear}/{payMonth}.do")
	public String viewPayMonth(@PathVariable int payYear, @PathVariable int payMonth, ModelMap model, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");	
		
		PaySearchDTO paySearchDTO = new PaySearchDTO(empCode, payYear, payMonth);

		PayDTO myPay = payService.selectMyPay(paySearchDTO);
		model.addAttribute("myPay", myPay);

		PayEmpDTO emp = payService.selectEmp(empCode);
		model.addAttribute("emp", emp);

		Integer minus = payService.selectMinus(paySearchDTO);
		model.addAttribute("minus", minus);

		Integer totalDay = payService.selectTotalDay(paySearchDTO);
		model.addAttribute("totalDay", totalDay);

		Integer totalTime = payService.selectTotalTime(paySearchDTO);
		model.addAttribute("totalTime", totalTime);

		Double overTime = payService.selectWorkOver(paySearchDTO);
		overTime = (overTime != null) ? overTime : 0.0;
		model.addAttribute("overTime", overTime);

		return "pay/payslip";
	}

	//해당 직원 급여 내역 모두 조회
	@RequestMapping("/searchPay.do")
	public String searchPayView(ModelMap model, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");	
		
		PayEmpDTO emp = payService.selectEmp(empCode);
		
		model.addAttribute("emp", emp);

		List<PayDTO> payList = payService.selectPayList(emp.getEmpCode());

		if (payList != null && !payList.isEmpty()) {
			model.addAttribute("payList", payList);
		}

		return "pay/searchPay";
	}

	//해당 기간 급여 조회 
	@RequestMapping(value = "/searchPay.do", method = RequestMethod.POST)
	@ResponseBody
	public String searchPay1(PaySearchDTO paySearchDTO, HttpServletRequest request) {
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");	
		paySearchDTO.setEmpCode(empCode);

		String result = "";

		Map<String, Object> map = new HashMap<String, Object>();

		try {
			List<PayDTO> searchList = payService.selectPeriod(paySearchDTO);

			map.put("msg", "ok");
			map.put("searchList", searchList);

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






