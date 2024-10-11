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
	
	// 근태 목록 조회
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
	
	// 근태 정보 등록을 위한 직원 정보 조회
	@RequestMapping(value = "/selectEmpList.do")
	public NexacroResult nexaSearchEmp(@ParamDataSet(name = "ds_SearchEmp", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		try {
			List<NexaAttenDTO> ds_EmpList = nexaAttenService.nexaGetEmpListByCondition(param);
			result.addDataSet("ds_EmpList", ds_EmpList);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	// 사번 입력 시 정보 가져오기
	@RequestMapping(value = "/selectUserInfo.do")
	public NexacroResult selectUserInfo(@ParamDataSet(name = "ds_AttenList", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		try {
			 Map<String, Object> ds_AttenList = nexaAttenService.selectUserInfo(param);
			 result.addDataSet("ds_AttenList", ds_AttenList);
		} catch (Exception ee) {
			System.out.println(ee);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 조회 오류");
		}
		return result;
	}
	
	// 근태 정보 저장
	@RequestMapping(value = "/attenSave.do")
	public NexacroResult attenSave(@ParamDataSet(name = "ds_AttenList", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
			
		System.out.println(param);
		
		// 해당 일자에 근태 정보가 있는지 체크
		int KeyCheck = nexaAttenService.attenRegisterCheck(param);
		
		System.out.println("키 체크 값 : " + KeyCheck);
		
		if (KeyCheck == 0) {
			try {
				nexaAttenService.attenRegister(param);
			} catch (Exception ee) {
					System.out.println(ee);
				result.setErrorCode(-1);
				result.setErrorMsg("입력 정보가 올바른지 다시 확인하세요.");
			}
		} else {
			try {
				nexaAttenService.editAttenList(param);
			} catch (Exception ee) {
					System.out.println(ee);
				result.setErrorCode(-1);
				result.setErrorMsg("입력 정보가 올바른지 다시 확인하세요.");
			}
		}
		
		return result;
		}
}
