package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class HrdController {
	
	@Autowired
	private HrdService hrds;
	
	//인사직원조회
	@RequestMapping(value = "/hrdList.do")
    public NexacroResult getHrdList(@ParamDataSet(name = "ds_Search", required = false) Map<String,Object> param) {
		
    	NexacroResult result = new NexacroResult();
    	try {
    		List<Map<String, Object>> ds_Hrdlist = hrds.getHrdList(param);
    		result.addDataSet("ds_Hrdlist", ds_Hrdlist);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	System.out.println("조회 완료");
    	return result;
    }
	
	//변경사항 저장
	@RequestMapping(value = "/hrdListUpdate.do")
    public NexacroResult confirmOff(@ParamDataSet(name = "ds_Hrdlist", required = false) List<Map<String,Object>> param){
		
		NexacroResult result = new NexacroResult();
		System.out.println("저장 컨트롤러 진입");
		System.out.println(param);
		
		// param이 null인지 확인
	    if (param == null || param.isEmpty()) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("데이터셋이 없습니다.");
	        return result;
	    }

	    System.out.println("데이터셋: " + param);  // 데이터셋 확인
		
    	try {	
    			for(Map<String,Object> offRequest : param) {
    				System.out.println("승인");
    				hrds.updateHRD(offRequest);
	    		}
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
}
