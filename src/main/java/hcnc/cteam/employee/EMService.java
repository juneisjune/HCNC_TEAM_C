package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

public interface EMService {
    // 직원 목록 조회 메서드
    List<EMDTO> selectEmployeeList(Map<String, Object> param); 
    
    int selectEmployeeData(Map<String, Object> param);
    
    void updateEmployeeData(Map<String, Object> param);
    
    void deleteEmployee(Map<String, Object> param); 

    boolean checkDuplicateId(Map<String, Object> param);
    
    EMDTO findEmp (Map<String, Object> param);
    
}




