package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@RequestMapping(value="/atten")
public class AttenController {
	
	@Autowired
    private AttenService attenService;
	
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
}
