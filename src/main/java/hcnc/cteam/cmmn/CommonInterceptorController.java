package hcnc.cteam.cmmn;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/intercep")
public class CommonInterceptorController {
	
	@RequestMapping(value = "/sessinOut.do")
	public ModelAndView sessionOut() {
		ModelAndView view = new ModelAndView();
		view.setViewName("/sessionOut");
		
		return view;
	}
}
