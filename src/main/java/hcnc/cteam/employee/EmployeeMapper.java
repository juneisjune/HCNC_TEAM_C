package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface EmployeeMapper {
	
    List<EmpDTO> getAllEmployees();
    
    List<EmpDTO> getEmployeeListByCondition(Map<String, Object> params);
    
    EmpDTO getEmployeeByEmpCode(int empCode);
    
    
}
