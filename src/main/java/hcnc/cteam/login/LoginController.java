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
	public String viewLogin(HttpSession session) {
		session.invalidate();
		return "login/login";
	}
	
	//1단계 로그인 
	@ResponseBody
	@RequestMapping(value="/login.do", method = RequestMethod.POST)
	public String userLogin(LoginDTO loginDTO, HttpServletRequest request) throws Exception {
		
		String msg = "";
		
		int result = loginService.userLogin(loginDTO);
		
		if(result == 100) {
			
			msg = "empty";
			
		} else if (result == 1) {
			//부서 배정과 직책 배정이 되지 않았을 경우 로그인 안되도록
			if(loginService.selectUser(loginDTO).getAssignCode() == null || loginService.selectUser(loginDTO).getAssignCode().equals("") 
					|| loginService.selectUser(loginDTO).getDepCode() == null || loginService.selectUser(loginDTO).getDepCode().equals("") ){
				
				msg = "empty";
				
			 } else {
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
		         
		        //master(대표 아이디)는 2단계 인증하지 않고 바로 홈으로 접속  
		        if(loginService.selectUser(loginDTO).getEmpCode() == 1) {
		        	msg = "master";
		        }
			 }   
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
			
		        // 앞 1자리
		        markedId.append(id.substring(0, 1));
		        // 중간 부분 마스킹 
		        for (int i = 1; i < id.length() - 1; i++) {
		            markedId.append('*');
		        }    
		        // 끝 1자리 추가
		        markedId.append(id.substring(id.length() - 1));
		  
			
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
		    System.out.println("인증번호 : " + authKey);
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
