package hcnc.cteam.evaluation;

import java.util.List;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface EvaluationMapper {
	List<EvaluationDTO> selectEval(Map<String, Object> param);
	List<EvalAllDTO> evalAll(Map<String, Object>param);
	List<EvalQuestionDTO> getQuestions(Map<String, Object> param);
	List<EvalQuestionDTO> editRegister(Map<String, Object> param);
	void insertEval(Map<String, Object> param);
	void insertEvalTotal(Map<String, Object> param);
	void updateRegister(Map<String, Object> param);
}