package hcnc.cteam.evaluation;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EvalServiceImpl implements EvalService {
    
    @Autowired
    private EvaluationMapper mapper;
    
    @Override
    public List<EvaluationDTO> selectEval(Map<String, Object> param) {
        return mapper.selectEval(param);
    }
    
    @Override
    public List<EvalAllDTO> evalAll(Map<String, Object> param) {
        return mapper.evalAll(param);
    }
    
    @Override
    public void updateRegister(Map<String, Object> param) {
        mapper.updateRegister(param);
    }
    
    @Override
    public void insertEval(Map<String, Object> param) {
        mapper.insertEval(param);
    }
    
    @Override
    public void insertEvalTotal(Map<String, Object> param) {
        mapper.insertEvalTotal(param);
    }
    
	@Override
	public List<EvalQuestionDTO> getQuestions(Map<String, Object> param) {
		return mapper.getQuestions(param);
	}
	
	@Override
	public List<EvalQuestionDTO> editRegister(Map<String, Object> param) {
		return mapper.editRegister(param);
	}
}