package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;


@Mapper
public interface AttenMapper {

	List<AttenDTO> getAttenList();

	List<AttenDTO> getAttenListByCondition(Map<String, Object> params);
	
	//atten으로 옮길예정
	public int startWork(AttenDTO attenDto);
	public int endWork(AttenDTO attenDto);
	//로그인 기능이 있는 매퍼로 옮길예정
	public AttenDTO userAttendanceInfo(Map<String, Object> param);
}
