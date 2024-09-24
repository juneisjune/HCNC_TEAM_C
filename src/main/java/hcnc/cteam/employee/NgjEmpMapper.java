package hcnc.cteam.employee;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface NgjEmpMapper {
	
	
	public int selectUser(NgjEmpDTO empDto);
	
	public NgjEmpDTO empInfo(NgjEmpDTO emp);
}
