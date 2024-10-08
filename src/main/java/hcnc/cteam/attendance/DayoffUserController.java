package hcnc.cteam.attendance;

import java.sql.Date;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import hcnc.cteam.employee.EmpDTO;
import hcnc.cteam.employee.EmpService;

@Controller
@RequestMapping(value = "/dayoff")
public class DayoffUserController {
	
	@Autowired
	private DayoffUserService doUserService;
	
	@Autowired
	private EmpService empService;
	
	@InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);

        // java.util.Date 변환기를 사용하여 String을 java.sql.Date로 변환
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true) {
            @Override
            public void setAsText(String text) throws IllegalArgumentException {
                if (text != null && !text.isEmpty()) {
                    // java.util.Date를 java.sql.Date로 변환하여 사용
                    try {
						setValue(new java.sql.Date(dateFormat.parse(text).getTime()));
					} catch (ParseException e) {
						e.printStackTrace();
					}
                } else {
                    setValue(null);
                }
            }
        });
    }
	
	//휴가신청 페이지
	@RequestMapping(value="/doRequest.do")
	public String dayoffRequest(Model model,EmpDTO emp, HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		int empCode = (int)session.getAttribute("userCode");
		
		emp = empService.getEmployeeByEmpCode(empCode);	
		model.addAttribute("emp",emp);

		return "atten/dayoffRequest";
	}
	//내역 페이지
	@RequestMapping(value="/requestList.do")
	public String requestList(Model model,EmpDTO emp, HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		int empCode = (int)session.getAttribute("userCode");
		
		emp = empService.getEmployeeByEmpCode(empCode);
		model.addAttribute("emp",emp);
		
		return "atten/dayoffResult";
	}
	
	//휴가신청
	//신청결과 페이지로 이동
	@RequestMapping(value="/sendRequest.do")
	public String sendRequest(Model model, @ModelAttribute DayoffDTO dayoff) {
		
		//휴가신청 insert문
		int result = doUserService.sendRequest(dayoff);
		if(result == 0) {
			model.addAttribute("dayoffMsg","휴가신청에 실패했습니다. 다시신청해주세요");
			return "redirect: /dayoff/doRequest.do";
		} else {
			
			return "redirect: /dayoff/requestList.do";
		}
	}
	
	@RequestMapping(value = "/requestListSearch.do", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView requestListSearch(DayoffDTO dayoff,Model model, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView("jsonView");
		
		String result = "";
		HttpSession session = request.getSession();
		int empCode = (int)session.getAttribute("userCode");
		String name = (String)session.getAttribute("userName");
		
		try {
			dayoff.setEmpCode(empCode);
			dayoff.setName(name);
			
			List<DayoffDTO> requestList = doUserService.requestResult(dayoff);
			mv.addObject("msg", "ok");
			mv.addObject("requestList", requestList);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return mv;
	}
}
