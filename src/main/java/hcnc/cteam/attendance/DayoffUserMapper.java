package hcnc.cteam.attendance;

import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface DayoffUserMapper {
	
	public int sendRequest(DayoffDTO dayoffdto);
	
	public List<DayoffDTO> requestResult(DayoffDTO dayoffdto);
}
