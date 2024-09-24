package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import hcnc.cteam.login.LoginService;

@Controller
@RequestMapping(value="/atten")
public class AttenController {
	
	@Autowired
    private AttenService attenService;
	
	@Resource(name = "loginService")
	private LoginService loginService;
	
	// 직원 근태 목록 조회
	@GetMapping(value = "/attenlist.do")
    public String listAtten(Model model, HttpSession session) {
		
        List<AttenDTO> attenList = attenService.getAttenList();
        model.addAttribute("attenList", attenList);
        
        return "Atten/attenlist";
    }
	
	// 조건에 따른 직원 근태 목록 조회
	@RequestMapping(value = "/searchAtten.do", method = RequestMethod.POST)
    public String searchAtten(@RequestParam Map<String, Object> params, Model model) {
        List<AttenDTO> attenList = attenService.getAttenListByCondition(params);
        model.addAttribute("attenList", attenList);
        return "Atten/attenlist";
    }
	
	//Atten으로 옮길예정
	@RequestMapping(value="/startWork.do", method= RequestMethod.POST)
    public ResponseEntity<String> startWork(@RequestParam String start_time, 
    										AttenDTO attenDto, HttpServletRequest request) {
		HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");
		String name = (String) session.getAttribute("userName");
		
		attenDto.setEmpCode(empCode);
		attenDto.setName(name);
		attenDto.setAttenCode(1);
		
		//attenDto는 현재 료그인한 유저의 emp코드를 기준으로 입력
		attenService.startWork(attenDto);
        return ResponseEntity.ok("출근 시간 저장 완료");
    }
	
    @PostMapping(value="/endWork.do")
    public ResponseEntity<String> endWork(@RequestParam String end_time,
    										AttenDTO attenDto, HttpServletRequest request) {
    	HttpSession session = request.getSession();
		int empCode = (int) session.getAttribute("userCode");
		String name = (String) session.getAttribute("userName");
		try {
			attenDto = loginService.selectWork(empCode);
		} catch (Exception e) {
			e.printStackTrace();
		}
    	//attenDto는 현재 료그인한 유저의 emp코드를 기준으로 입력
    	attenService.endWork(attenDto);
        return ResponseEntity.ok("퇴근 시간 저장 완료");
    }
}
