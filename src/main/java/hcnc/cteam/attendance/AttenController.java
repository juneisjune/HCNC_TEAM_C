package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="/atten")
public class AttenController {
	
	@Autowired
    private AttenService attenService;
	
	// 직원 근태 목록 페이지
	@RequestMapping(value = "/attenlist.do", method = RequestMethod.GET)
    public String listAtten(Map<String, Object> params, Model model) {
		
		int empCode = 3;
		
		params.put("empCode", empCode);		
		
        List<AttenDTO> attenList = attenService.getAttenList(params);
        model.addAttribute("attenList", attenList);
        return "Atten/attenlist";
    }
	
	// 조건에 따른 직원 근태 목록 조회
	@RequestMapping(value = "/searchAtten.do", method = RequestMethod.POST)
    public String searchAtten(@RequestParam Map<String, Object> params, Model model) {
		
		int empCode = 3;
		
		params.put("empCode", empCode);
		
        List<AttenDTO> attenList = attenService.getAttenListByCondition(params);
        model.addAttribute("attenList", attenList);
        return "Atten/attenlist";
    }
}
