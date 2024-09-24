package hcnc.cteam.employee;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;


@SessionAttributes("user")
@Controller
@RequestMapping(value="/emp")
public class NgjEmpController {
	
	@Autowired
	private NgjEmpService empService;
	
	
	@RequestMapping(value="/test11.do")
	public String pglogin() {
		System.out.println("123");
//		ModelAndView view = new ModelAndView();
//		view.setViewName("test");
			
		return "login2";
	}
	
	@RequestMapping(value="/login.do", method = RequestMethod.POST)
	public String empLogin(NgjEmpDTO empDto, Model model) {
		System.out.println(empDto.getId());
		System.out.println(empDto.getPassword());
		
		int result = empService.selectUser(empDto) ;
		if(result !=0 ) {
			//공지사항 보이는 메인페이지로 이동 예정
			empDto = empService.empInfo(empDto);
			model.addAttribute("user",empDto);
			model.addAttribute("emp",empDto);
			model.addAttribute("dayoffMsg","로그인 성공!");
			return "dayoffRequest";
		} else {
			return "forward: /emp/test11.do";
		}
	}
}
