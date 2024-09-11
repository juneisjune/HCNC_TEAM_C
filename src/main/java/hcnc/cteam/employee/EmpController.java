package hcnc.cteam.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
public class EmpController {

    @Autowired
    private EmpService empServiceImpl;  // 빈 이름 지정

    @RequestMapping("/test/test11.do")
    public String searchEmployees(String name, String depCode, Model model) {
        List<EmployeeDTO> employees;

        if (name != null && !name.isEmpty()) {
            employees = empServiceImpl.getEmployeeByName(name);
        } else if (depCode != null && !depCode.isEmpty()) {
            employees = empServiceImpl.getEmployeesByDepartment(depCode);
        } else {
            employees = empServiceImpl.getAllEmployees();
        }

        model.addAttribute("employees", employees);
        return "employee/employee";  // JSP 경로
    }
}
