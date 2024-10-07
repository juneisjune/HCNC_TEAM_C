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

	@Override
	public void increaseDayoffCnt(Map<String, Object> param) {
		// TODO Auto-generated method stub
		dayoffMapper.increaseDayoffCnt(param);
	}

	@Override
	public void insertDayoffCount(Map<String, Object> param) {
		// TODO Auto-generated method stub
		dayoffMapper.insertDayoffCount(param);
	}

	@Override
	public int findDayoff(Map<String, Object> param) {
		return dayoffMapper.findDayoff(param);
	}

	
	
	
}
