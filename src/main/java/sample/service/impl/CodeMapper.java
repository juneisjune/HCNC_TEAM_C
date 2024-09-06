
package sample.service.impl;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("codeMapper")
public interface CodeMapper {
	List<Map<String, Object>> selectCodeMst(Map<String, Object> param);

	void saveCodeMst(Map<String, Object> param);

	void deleteCodeMst(Map<String, Object> param);
	
	int checkCodeMst(Map<String, Object> param);
	
	void insertCodeMst(Map<String, Object> param);
	
	void updateCodeMst(Map<String, Object> param);

	List<Map<String, Object>> selectCodeDtl(Map<String, Object> param);

	void saveCodeDtl(Map<String, Object> param);

	void deleteCodeDtl(Map<String, Object> param);

	int checkCodeDtl(Map<String, Object> param);
	
	void insertCodeDtl(Map<String, Object> param);
	
	void updateCodeDtl(Map<String, Object> param);

}