package hcnc.cteam.employee;

import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface EmpService {
	
    List<employeeDTO> getEmployeeData();
    
    List<employeeDTO> employeeSearch(Map<String, Object> params);
    
    employeeDTO getEmployeeByEmpCode(int empCode);
    
  
}

