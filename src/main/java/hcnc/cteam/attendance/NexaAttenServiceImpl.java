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
	public List<NexaAttenDTO> nexaGetAttenListByCondition(Map<String, Object> param) {
		return mapper.nexaGetAttenListByCondition(param);
	}
	
	@Override
	public void editAttenList(Map<String, Object> param) {
		mapper.editAttenList(param);
	}

	@Override
	public List<NexaAttenDTO> nexaGetEmpListByCondition(Map<String, Object> param) {
		return mapper.nexaGetEmpListByCondition(param);
	}

	@Override
	public void attenRegister(Map<String, Object> param) {
		mapper.attenRegister(param);
	}

	@Override
	public int attenRegisterCheck(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.attenRegisterCheck(param);
	}
	
}