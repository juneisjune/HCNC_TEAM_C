package hcnc.cteam.employee;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class LoginController {
	
	@Resource(name = "empService")
	private EmpService empService;
	
	//로그인 화면 
	@RequestMapping(value="/login.do", method = RequestMethod.GET)
	public String viewLogin() {
		return "emp/login";
	}
	
	//로그인 
	@ResponseBody
	@RequestMapping(value="/login.do", method = RequestMethod.POST)
	public String userLogin(EmpDTO empDTO, HttpServletRequest request) throws Exception {
		String msg = "";
		
		int result = empService.userLogin(empDTO);
		
		 if (result == 1) {
			 HttpSession session = request.getSession();
			 int empCode = empService.selectUser(empDTO).getEmpCode();
			 session.setAttribute("loginUser", empCode);

	            msg = "ok";
	        }
		 
		 
		 return msg;
	}
	
	//로그아웃
	@RequestMapping("/logout.do")
    public String logout(HttpSession session, RedirectAttributes redirectAttributes) {
        session.invalidate();
		redirectAttributes.addFlashAttribute("successMsg", "로그아웃이 완료되었습니다.");
		return "redirect:/login.do"; 
    }
	
}
