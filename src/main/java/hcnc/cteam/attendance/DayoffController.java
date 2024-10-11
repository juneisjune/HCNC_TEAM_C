package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

//관리자용 컨트롤러
@Controller
public class DayoffController {
	
	@Autowired
	private DayoffService dayoffService;
	
	//연차신청조회
	@RequestMapping(value = "/dayOffList.do")
    public NexacroResult dayoffList(@ParamDataSet(name = "ds_offList", required = false) Map<String,Object> param) {
		
    	NexacroResult result = new NexacroResult();
    	try {
    		List<Map<String, Object>> ds_doRequestList = dayoffService.offRequest(param);
    		result.addDataSet("ds_doRequestList", ds_doRequestList);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
	
	//직급에 따라서 실행메서드 다르게
	//연차 승인
	@RequestMapping(value = "/confirmDayoff.do")
    public NexacroResult confirmOff(@ParamDataSet(name = "checkedDataset", required = false) List<Map<String,Object>> param){
		
		NexacroResult result = new NexacroResult();
		
		// param이 null인지 확인
	    if (param == null || param.isEmpty()) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("데이터셋이 없습니다.");
	        return result;
	    }
    	try {	
    			for(Map<String,Object> offRequest : param) {
    				dayoffService.updateConfirm(offRequest);

    				Object assignCodeObj = offRequest.get("admin_assign");
    				String assignCode = assignCodeObj != null ? assignCodeObj.toString() : null;
    				
    				//대표자가 최종승인시 연차개수 변경
    				if(assignCode.equals("7")) {
    					dayoffService.updateDayoffCnt(offRequest);
    				}
	    		}
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
	
	//직급에 따라서 실행메서드 다르게
	//연차 반려
	@RequestMapping(value = "/returnDayoff.do")
    public NexacroResult returnOff(@ParamDataSet(name = "checkedDataset", required = false) List<Map<String,Object>> param){

		//로그인정보에서 직책코드 가져올 예정
		NexacroResult result = new NexacroResult();
		
		// param이 null인지 확인
	    if (param == null || param.isEmpty()) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("데이터셋이 없습니다.");
	        return result;
	    }
    	try {	
    		for(Map<String,Object> offRequest : param) {
				dayoffService.updateReturn(offRequest);
    		}
    		
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
}
