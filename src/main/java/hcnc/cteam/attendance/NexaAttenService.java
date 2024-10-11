package hcnc.cteam.attendance;

import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface NexaAttenService {

	List<NexaAttenDTO> nexaGetAttenListByCondition(Map<String, Object> param);

	void editAttenList(Map<String, Object> param);

	List<NexaAttenDTO> nexaGetEmpListByCondition(Map<String, Object> param);

	void attenRegister(Map<String, Object> param);
	
	int attenRegisterCheck(Map<String, Object> param);
}
