package hcnc.cteam.attendance;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.fasterxml.jackson.databind.ObjectMapper;

import hcnc.cteam.employee.NgjEmpDTO;
import hcnc.cteam.employee.NgjEmpService;

@Controller
@RequestMapping(value = "/dayoff")
public class DayoffUserController {
	
	@Autowired
	private DayoffUserService doUserService;
	
	@Autowired
	private NgjEmpService empService;
	
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
	public String dayoffRequest(Model model,NgjEmpDTO emp, HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		int empCode = (int)session.getAttribute("userCode");
		
		emp = empService.empInfo(empCode);
		model.addAttribute("emp",emp);

		return "dayoffRequest";
	}
	//내역 페이지
	@RequestMapping(value="/requestList.do")
	public String requestList(Model model,NgjEmpDTO emp, HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		int empCode = (int)session.getAttribute("userCode");
		
		emp = empService.empInfo(empCode);
		model.addAttribute("emp",emp);
		
		return "dayoffResult";
	}
	
	//휴가신청
	//신청결과 페이지로 이동
	@RequestMapping(value="/sendRequest.do")
	public String sendRequest(Model model, @ModelAttribute DayoffDTO dayoff) {
		/*
		switch(dayoff.getOffType()) {
			case "연차":
				dayoff.setOffCode(1);
				break;
			case "공가":
				dayoff.setOffCode(2);
				break;
			case "병가":
				dayoff.setOffCode(3);
				break;
			case "하계휴가":
				dayoff.setOffCode(4);
				break;
			case "반차":
				dayoff.setOffCode(5);
				break;
		}
		*/
		int result = doUserService.sendRequest(dayoff);
	
		
		if(result == 0) {
			model.addAttribute("dayoffMsg","휴가신청에 실패했습니다. 다시신청해주세요");
			return "redirect: /dayoff/doRequest.do";
		} else {
			return "redirect: /dayoff/requestList.do";
		}
	}
	/*
	//휴기신청내역 조회
	@RequestMapping(value = "/requestListSearch.do", method = RequestMethod.POST)
	@ResponseBody
	public String requestListSearch(DayoffDTO dayoff,Model model, HttpServletRequest request) {

		String result = "";
		HttpSession session = request.getSession();
		EmpDTO empdto = (EmpDTO) session.getAttribute("user");
		
		Map<String, Object> map = new HashMap<String, Object>();

		try {
			dayoff.setEmpCode(empdto.getEmpCode());
			dayoff.setName(empdto.getName());
			
			System.out.println(dayoff);
			List<DayoffDTO> requestList = doUserService.requestResult(dayoff);
			System.out.println("리스트" + requestList.toString());
			map.put("msg", "ok");
			map.put("requestList", requestList);

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
	*/
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
