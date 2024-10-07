package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface EMMapper {
    // 직원 목록 조회 메서드
    List<EMDTO> selectEmployeeList(Map<String, Object> param);
    
    int selectEmployeeData(Map<String, Object> param);
    
    void updateEmployeeData(Map<String, Object> param);
    
    void deleteEmployee(Map<String, Object> param); 
    
    int countEmployeeById(String id);
    
    EMDTO findEmp (Map<String, Object> param);
}

