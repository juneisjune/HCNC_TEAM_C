package hcnc.cteam.employee;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("empMapper")
public interface EmpMapper {
	int userLogin(EmpDTO empDTO) throws Exception;
	
	EmpDTO selectUser(EmpDTO empDTO) throws Exception;
	
}	
