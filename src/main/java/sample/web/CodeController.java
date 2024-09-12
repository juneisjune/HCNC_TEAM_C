package sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import sample.service.CodeService;

@Controller
public class CodeController {
  private Logger logger = LoggerFactory.getLogger(CodeController.class);
	
    @Resource(name = "codeService")
    private CodeService service;

    @RequestMapping(value = "/testCall.do")
    public NexacroResult testCall(@ParamDataSet(name = "ds_1", required = false) Map<String,Object> ds_param1
    		                     ,@ParamDataSet(name = "ds_2", required = false) Map<String,Object> ds_param2
    		                     ,@ParamDataSet(name = "ds_3", required = false) Map<String,Object> ds_param3
    		                     ,@ParamVariable(name = "var_1", required = false) Map<String,Object> var_param1
    		                     ,@ParamVariable(name = "var_2", required = false) Map<String,Object> var_param2
    		                     ,@ParamVariable(name = "var_3", required = false) Map<String,Object> var_param3) {

    	NexacroResult result = new NexacroResult();
    	System.out.println("ds_param1 = " + ds_param1);
    	System.out.println("ds_param2 = " + ds_param2);
    	System.out.println("ds_param3 = " + ds_param3);
    	System.out.println("var_param1 = " + var_param1);
    	System.out.println("var_param2 = " + var_param2);
    	System.out.println("var_param3 = " + var_param3);
        return result;
    }
    
    /**
     * 마스터 코드 리스트 조회
     * @param param
     * @return
     */
    @RequestMapping(value = "/selectCodeMst.do")
    public NexacroResult selectCodeMst(@ParamDataSet(name = "ds_Search", required = false) Map<String,Object> param) {
    	NexacroResult result = new NexacroResult();
    	try {
    		List<Map<String, Object>> ds_CodeMstList = service.selectCodeMst(param);
    		result.addDataSet("ds_CodeMstList", ds_CodeMstList);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }

    /**
     * 마스터 코드 저장(등록/수정)
     * @param param
     * @return
     */
    @RequestMapping(value = "/saveCodeMst.do")
    public NexacroResult saveCodeMst(@ParamDataSet(name = "ds_CodeMst", required = false) Map<String,Object> param){
    	NexacroResult result = new NexacroResult();
    	try {
    		service.saveCodeMst(param);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }

    /**
     * 마스터 코드 삭제
     * @param param
     * @return
     */
    @RequestMapping(value = "/deleteCodeMst.do")
    public NexacroResult deleteCodeMst(@ParamDataSet(name = "ds_CodeMst", required = false) Map<String,Object> param){
    	NexacroResult result = new NexacroResult();
    	try {
    		service.deleteCodeMst(param);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
    
     
    
    
    /**
     * 세부 코드 리스트 조회
     * @param param
     * @return
     */
    @RequestMapping(value = "/selectCodeDtl.do")
    public NexacroResult selectCodeDtl(@ParamDataSet(name = "ds_SearchDtl", required = false) Map<String,Object> param) {
    	NexacroResult result = new NexacroResult();
    	try {
    		List<Map<String, Object>> ds_CodeDtlList = service.selectCodeDtl(param);
    		result.addDataSet("ds_CodeDtlList", ds_CodeDtlList);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
    
    /**
     * 세부 코드 저장(등록/수정)
     * @param param
     * @return
     */
    @RequestMapping(value = "/saveCodeDtl.do")
    public NexacroResult saveCodeDtl(@ParamDataSet(name = "ds_CodeDtl", required = false) Map<String,Object> param){
    	NexacroResult result = new NexacroResult();
    	try {
    		service.saveCodeDtl(param);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
    
    /**
     * 세부 코드 삭제
     * @param param
     * @return
     */
    @RequestMapping(value = "/deleteCodeDtl.do")
    public NexacroResult deleteCodeDtl(@ParamDataSet(name = "ds_CodeDtl", required = false) Map<String,Object> param){
    	NexacroResult result = new NexacroResult();
    	try {
    		service.deleteCodeDtl(param);
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
}
