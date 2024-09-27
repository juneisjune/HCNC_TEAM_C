package hcnc.cteam.login;

import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;

import hcnc.cteam.attendance.AttenDTO;

@Controller
public class LoginController {
	
	@Resource(name = "loginService")
	private LoginService loginService;
	
	@Autowired
	private MailSendService mailSendService;
	
	//로그인 화면 
	@RequestMapping(value="/login.do", method = RequestMethod.GET)
	public String viewLogin() {
		return "login/login";
	}
	
	//1단계 로그인 
	@ResponseBody
	@RequestMapping(value="/login.do", method = RequestMethod.POST)
	public String userLogin(LoginDTO loginDTO, HttpServletRequest request) throws Exception {
		String msg = "";
		
		int result = loginService.userLogin(loginDTO);
		
		 if (result == 1) {
			 
			 //세션 생성
			 HttpSession session = request.getSession();
			 int userCode = loginService.selectUser(loginDTO).getEmpCode();
			 session.setAttribute("userCode", userCode);
			 String userName = loginService.selectUser(loginDTO).getName();
			 session.setAttribute("userName", userName);

			 
			 AttenDTO workResult = loginService.selectWork(userCode);
			 
			 
			 if (workResult != null) {
				 LocalTime workStart = workResult.getWorkStart();
				 LocalTime workEnd = workResult.getWorkEnd();
				 
				 session.setAttribute("workStart", workStart);
				 session.setAttribute("workEnd", workEnd);
			 }
			 

	         msg = "ok";
	        }
		 
		 
		 return msg;
	}
	
	//2단계 인증 페이지 이동
	@RequestMapping(value="/viewAuth.do")
	public String viewAuth(ModelMap model, HttpServletRequest request) throws Exception {
		
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");	
		
		String email = loginService.selectEmail(empCode);
		model.addAttribute("email", email);
	
		int index = email.indexOf("@");
		
		if(index > 0) {
			//@ 앞까지 추출
			String id = email.substring(0, index);
			
			StringBuilder markedId = new StringBuilder();
			
		    for (int i = 0; i < id.length() - 1; i++) {
		        markedId.append('*');
		    }

		    //@앞 한자리 문자만 추가
		    markedId.append(id.charAt(id.length() - 1));
			
			model.addAttribute("markedEmail", markedId + email.substring(index));		
		}
		
		
		return "login/auth";
	}
	
	//2단계 인증
	@ResponseBody
	@RequestMapping("/auth.do")
	public String mailAuth(@RequestParam("email") String email) {
		
		String result = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
		    String authKey = mailSendService.sendAuthMail(email); 
		    map.put("authKey", authKey);
		    map.put("msg", "ok");
		    
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		try {
			result = new ObjectMapper().writeValueAsString(map);
		} catch (Exception e) {
			result = "{'msg':'error'}";
		}
		
	    return result;
	}
	
	//로그아웃
	@RequestMapping("/logout.do")
    public String logout(HttpSession session, RedirectAttributes redirectAttributes) {
        session.invalidate();
		redirectAttributes.addFlashAttribute("successMsg", "로그아웃이 완료되었습니다.");
		return "redirect:/login.do"; 
    }
	
}
