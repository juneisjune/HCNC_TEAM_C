package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface HrdMapper {
	
	
	public List<Map<String, Object>> getHrdList(Map<String,Object> param);
	
	public void updateHRD(Map<String,Object> param);
	
	public void updateMng();
	
	public List<Map<String, Object>> getHrdHistory(Map<String,Object> param);
	
	public int selectHrdHistoryForDepOut(Map<String,Object> param);
	
	public int countHrdHistory(Map<String,Object> param);
	
	public void insertHrdHistory(Map<String, Object> param);
	
	public void updateDepOutIsNull(Map<String, Object> param);
}
