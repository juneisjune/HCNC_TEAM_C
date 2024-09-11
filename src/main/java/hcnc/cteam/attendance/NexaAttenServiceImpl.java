package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NexaAttenServiceImpl implements NexaAttenService {
	private Logger logger = LoggerFactory.getLogger(NexaAttenServiceImpl.class);
	
	@Autowired
	private NexaAttenMapper mapper;

	@Override
	public List<Map<String, Object>> nexaGetAttenListByCondition(Map<String, Object> param) {
		return mapper.nexaGetAttenListByCondition(param);
	}
	
	
}
