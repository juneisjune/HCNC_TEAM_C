package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayoffServiceImpl implements DayoffService{

	@Autowired
	private DayoffMapper dayoffMapper;

	@Override
	public List<Map<String, Object>> offRequest(Map<String, Object> param) {
		return dayoffMapper.offRequest(param);
	}

	@Override
	public void updateConfirm(Map<String, Object> param) {
		// TODO Auto-generated method stub
		dayoffMapper.updateConfirm(param);
		
	}

	@Override
	public void updateReturn(Map<String, Object> param) {
		// TODO Auto-generated method stub
		dayoffMapper.updateReturn(param);
	}

	
	//atten으로 옮길예정
	@Override
	public int startWork(NgjAttenDTO attenDto) {
		// TODO Auto-generated method stub
		return dayoffMapper.startWork(attenDto);
	}

	@Override
	public int endWork(NgjAttenDTO attenDto) {
		// TODO Auto-generated method stub
		return dayoffMapper.endWork(attenDto);
	}
	//로그인기능 있는 곳으로
	@Override
	public NgjAttenDTO userAttendanceInfo(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return dayoffMapper.userAttendanceInfo(param);
	}

	
	
	
}
