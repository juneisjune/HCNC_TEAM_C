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

	
}
