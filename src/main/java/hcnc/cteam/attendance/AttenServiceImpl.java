package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttenServiceImpl implements AttenService{

	@Autowired
	private AttenMapper attenMapper;
	
	@Override
	public List<AttenDTO> getAttenList(Map<String, Object> params) {
		return attenMapper.getAttenList(params);
	}

	@Override
	public List<AttenDTO> getAttenListByCondition(Map<String, Object> params) {
		return attenMapper.getAttenListByCondition(params);
	}

	@Override
	public int startWork(AttenDTO attenDto) {
		// TODO Auto-generated method stub
		return attenMapper.startWork(attenDto);
	}

	@Override
	public int endWork(AttenDTO attenDto) {
		// TODO Auto-generated method stub
		return attenMapper.endWork(attenDto);
	}

	@Override
	public AttenDTO userAttendanceInfo(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
