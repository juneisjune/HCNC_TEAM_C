package hcnc.cteam.employee;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/test")
public class EmpController {
	
	
	@RequestMapping(value="/test11.do")
	public String pglogin() {
		System.out.println("123");
//		ModelAndView view = new ModelAndView();
//		view.setViewName("test");
			
		return "test01";
	}
}
