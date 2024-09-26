package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

public interface AttenService {

	public List<AttenDTO> getAttenList(Map<String, Object> params);

	public List<AttenDTO> getAttenListByCondition(Map<String, Object> params);
	

	//atten으로 옮길예정
		public int startWork(AttenDTO attenDto);
		public int endWork(AttenDTO attenDto);
	//로그인기능
		public AttenDTO userAttendanceInfo(Map<String, Object> param);
}
