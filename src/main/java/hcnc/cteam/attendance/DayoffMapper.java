package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface DayoffMapper {
	
	public List<Map<String,Object>> offRequest(Map<String,Object> param);
	
	public void updateConfirm(Map<String, Object> param);
	public void updateReturn(Map<String, Object> param);
	
	//atten으로 옮길예정
	public int startWork(NgjAttenDTO attenDto);
	public int endWork(NgjAttenDTO attenDto);
	//로그인 기능이 있는 매퍼로 옮길예정
	public NgjAttenDTO userAttendanceInfo(Map<String, Object> param);
	
}
