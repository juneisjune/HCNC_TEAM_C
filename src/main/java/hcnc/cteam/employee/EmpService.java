package hcnc.cteam.employee;

import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface EmpService {
	
    List<EmpDTO> getEmployeeData();
    
    List<EmpDTO> employeeSearch(Map<String, Object> params);
    EmpDTO getEmployeeByEmpCode(int empCode);
}
