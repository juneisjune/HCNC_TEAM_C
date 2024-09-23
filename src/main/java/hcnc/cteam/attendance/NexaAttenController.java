package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class NexaAttenController {
	private Logger logger = LoggerFactory.getLogger(NexaAttenController.class);
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Autowired
	private NexaAttenService nexaAttenService;
	
	@RequestMapping(value = "/selectAttenList.do")
	public NexacroResult nexaSearchAtten(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		try {
			List<NexaAttenDTO> ds_AttenList = nexaAttenService.nexaGetAttenListByCondition(param);
			result.addDataSet("ds_AttenList", ds_AttenList);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	@RequestMapping(value = "/editAttenList.do")
	public NexacroResult editAttenList(@ParamDataSet(name = "ds_AttenList", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		try {
			nexaAttenService.editAttenList(param);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
}
