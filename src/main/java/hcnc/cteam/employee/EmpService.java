package hcnc.cteam.employee;

import java.util.List;

public interface EmpService {
    List<EmployeeDTO> getEmployeeByName(String name); // 이름으로 직원 조회
    List<EmployeeDTO> getEmployeesByDepartment(String depCode); // 부서로 직원 조회
}
