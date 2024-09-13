package hcnc.cteam.attendance;

import java.util.List;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface NexaAttenMapper {

	List<NexaAttenDTO> nexaGetAttenListByCondition(Map<String, Object> param);
	
}
