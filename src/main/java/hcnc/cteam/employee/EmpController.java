package hcnc.cteam.employee;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value="/test")
public class EmpController {
	
	
	@RequestMapping(value="/test11.do")
	public String pglogin() {
		System.out.println("123");
//		ModelAndView view = new ModelAndView();
//		view.setViewName("test");
			
		return "menu";
	}
}
