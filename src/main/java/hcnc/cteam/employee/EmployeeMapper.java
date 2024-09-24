package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface EmployeeMapper {
	
    List<employeeDTO> getAllEmployees();
    
    List<employeeDTO> getEmployeeListByCondition(Map<String, Object> params);
    
    employeeDTO getEmployeeByEmpCode(int empCode);
}
