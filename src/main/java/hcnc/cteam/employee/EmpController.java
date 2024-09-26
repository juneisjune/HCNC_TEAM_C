package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam; 

@Controller
@RequestMapping("/employee")  
public class EmpController {

    @Autowired
    private EmpService empService;

    @RequestMapping(value = "/employee.do" , method = RequestMethod.GET) 
    public String employee(Model model) {
        List<EmpDTO> employeeData = empService.getEmployeeData();
        model.addAttribute("employeeData", employeeData); 
        
        return "employee/employee";  
    }
    
    @RequestMapping(value = "/searchEmployee.do", method = RequestMethod.POST)
    public String searchEmployee(@RequestParam Map<String, Object> params, Model model) {
        List<EmpDTO> employeeData = empService.employeeSearch(params);
        model.addAttribute("employeeData", employeeData);
        return "employee/employee"; 
    }
    
    @RequestMapping(value = "/myPage.do")
    public String myPage(Model model) {
        int empCode = 1;
        EmpDTO employee = empService.getEmployeeByEmpCode(empCode);
        model.addAttribute("employee", employee);
        return "employee/myPage";
    }
}
    

