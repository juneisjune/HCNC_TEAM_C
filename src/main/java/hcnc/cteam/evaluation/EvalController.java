package hcnc.cteam.evaluation;

import java.util.List;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class EvalController {
	private Logger logger = LoggerFactory.getLogger(EvalController.class);
	
	@Autowired
	private EvalService service;
	
	@RequestMapping(value = "/getQuestions.do")
	public NexacroResult getQuestions(@ParamDataSet(name = "dsEvaluation", required = false) Map<String, Object> param) {
	    NexacroResult result = new NexacroResult();
	    try {
	        List<EvalQuestionDTO> dsSurvey = service.getQuestions(param);
	        result.addDataSet("dsSurvey", dsSurvey);
	    } catch (Exception e) {
	        System.out.println(e);
	        result.setErrorCode(-1);
	        result.setErrorMsg("질문 조회 실패");
	    }
	    return result;
	}
	
	@RequestMapping(value= "/evallist.do")
	public NexacroResult selectEval(@ParamDataSet(name = "dsSearch", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		try {
			List<EvaluationDTO> dsEvaluation = service.selectEval(param);
	        result.addDataSet("dsEvaluation", dsEvaluation);
	      } catch (Exception ee) {
	         System.out.println(ee);
	         result.setErrorCode(-1);
	         result.setErrorMsg("catch 조회 오류");
	      }
	      return result;
	}
	
	@RequestMapping(value = "/editRegister.do")
	public NexacroResult editRegister(@ParamDataSet(name = "dsQuestions", required = false) Map<String, Object> param) {
	    NexacroResult result = new NexacroResult();
	    try {
	        List<EvalQuestionDTO> dsQuestions = service.editRegister(param);
	        result.addDataSet("dsQuestions", dsQuestions);
	    } catch (Exception e) {
	        System.out.println(e);
	        result.setErrorCode(-1);
	        result.setErrorMsg("질문 조회 실패");
	    }
	    return result;
	}
	
	@RequestMapping(value = "/updateRegister.do")
    public NexacroResult updateRegister(@ParamDataSet(name = "dsEditSave", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            service.updateRegister(param);
            result.setErrorCode(0);
            result.setErrorMsg("평가 저장 성공");
        } catch (Exception e) {
            System.out.println(e);
            result.setErrorCode(-1);
            result.setErrorMsg("평가 저장 실패");
        }
        return result;
    }
	
	@RequestMapping(value = "/insertEval.do")
    public NexacroResult insertEval(@ParamDataSet(name = "dsSave", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            service.insertEval(param);
            result.setErrorCode(0);
            result.setErrorMsg("평가 저장 성공");
        } catch (Exception e) {
            System.out.println(e);
            result.setErrorCode(-1);
            result.setErrorMsg("평가 저장 실패");
        }
        return result;
    }
	
	@RequestMapping(value = "/insertEvalTotal.do")
    public NexacroResult insertEvalTotal(@ParamDataSet(name = "dsSave", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            service.insertEvalTotal(param);
            result.setErrorCode(0);
            result.setErrorMsg("평가 저장 성공");
        } catch (Exception e) {
            System.out.println(e);
            result.setErrorCode(-1);
            result.setErrorMsg("평가 저장 실패");
        }
        return result;
    }
	
	@RequestMapping(value= "/evalAll.do")
	public NexacroResult evalAll(@ParamDataSet(name = "dsSearch", required = false) Map<String, Object> param) {
		NexacroResult result = new NexacroResult();
		try {
			List<EvalAllDTO> dsEvalAll = service.evalAll(param);
	        result.addDataSet("dsEvalAll", dsEvalAll);
	      } catch (Exception eee) {
	         System.out.println(eee);
	         result.setErrorCode(-1);
	         result.setErrorMsg("catch 조회 오류");
	      }
	      return result;
	}
}