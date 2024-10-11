package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import hcnc.cteam.attendance.DayoffService;

@Controller
public class HrdController {
	
	@Autowired
	private HrdService hrds;
	
	@Autowired
	private DayoffService dayoffService;
	
	//인사직원조회
	@RequestMapping(value = "/hrdList.do")
    public NexacroResult getHrdList(@ParamDataSet(name = "ds_Search", required = false) Map<String,Object> param) {
		
    	NexacroResult result = new NexacroResult();
    	try {
    		List<Map<String, Object>> ds_Hrdlist = hrds.getHrdList(param);
    		result.addDataSet("ds_Hrdlist", ds_Hrdlist);
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
	
	//변경사항 저장
	@RequestMapping(value = "/hrdListUpdate.do")
    public NexacroResult confirmOff(@ParamDataSet(name = "ds_UpdateHrdlist", required = false) List<Map<String,Object>> param){
		
		NexacroResult result = new NexacroResult();
		
		// param이 null인지 확인
	    if (param == null || param.isEmpty()) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("데이터셋이 없습니다.");
	        return result;
	    }

		
    	try {	
    			for(Map<String,Object> offRequest : param) {
    				hrds.updateHRD(offRequest);
    				//emp_code로 dayoffCount 조회하고
    				int findResult = dayoffService.findDayoff(offRequest);
    				if(findResult == 0) {
    					//없으면 새로 등록 (넥사 관리자 이름 추가후 확인해야함)
    					dayoffService.insertDayoffCount(offRequest);
    				}
	    		}
    	}catch(Exception ee) {
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
}
