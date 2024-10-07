package hcnc.cteam.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmployeeMapper employeeMapper;

    @Override
    public List<EmpDTO> getEmployeeData() {
        return employeeMapper.getAllEmployees();
    }

    @Override
    public List<EmpDTO> employeeSearch(Map<String, Object> params) {
        return employeeMapper.getEmployeeListByCondition(params);
    }
    
    @Override
    public EmpDTO getEmployeeByEmpCode(int empCode) {
        return employeeMapper.getEmployeeByEmpCode(empCode);
    
    }
    
}
