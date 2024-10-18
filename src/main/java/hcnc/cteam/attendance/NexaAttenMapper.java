package hcnc.cteam.attendance;

import java.util.List;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface NexaAttenMapper {

	List<NexaAttenDTO> nexaGetAttenListByCondition(Map<String, Object> param);

	void editAttenList(Map<String, Object> param);

	List<NexaAttenDTO> nexaGetEmpListByCondition(Map<String, Object> param);

	void attenRegister(Map<String, Object> param);
	
	int attenRegisterCheck(Map<String, Object> param);

	Map<String, Object> selectUserInfo(Map<String, Object> param);
}
