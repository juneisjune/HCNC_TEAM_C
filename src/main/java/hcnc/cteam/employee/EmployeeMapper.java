package hcnc.cteam.employee;

import java.util.List;

public interface EmployeeMapper {
    List<EmployeeDTO> getEmployeeByName(String name);
    List<EmployeeDTO> getEmployeesByDepartment(String depCode);
}
