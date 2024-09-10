package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;


@Mapper
public interface AttenMapper {

	List<AttenDTO> getAttenList();

	List<AttenDTO> getAttenListByCondition(Map<String, Object> params);

	
}
