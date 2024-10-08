package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface DayoffMapper {
	
	public List<Map<String,Object>> offRequest(Map<String,Object> param);
	
	public void updateConfirm(Map<String, Object> param);
	public void updateReturn(Map<String, Object> param);

	public void updateDayoffCnt(Map<String, Object> param);
	public void insertDayoffCount(Map<String, Object> param);
	
	public int findDayoff(Map<String, Object> param);
}
