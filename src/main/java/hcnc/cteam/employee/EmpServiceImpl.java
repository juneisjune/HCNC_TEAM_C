package hcnc.cteam.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service("empService") // 빈 이름을 "empService"로 명확히 지정하여 충돌 방지
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmployeeMapper empMapper; // Mapper 주입

    @Override
    public List<EmployeeDTO> getEmployeeByName(String name) {
        return empMapper.getEmployeeByName(name); // Mapper 호출
    }

    @Override
    public List<EmployeeDTO> getEmployeesByDepartment(String depCode) {
        return empMapper.getEmployeesByDepartment(depCode); // Mapper 호출
    }
}
