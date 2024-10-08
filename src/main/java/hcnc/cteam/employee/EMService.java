package hcnc.cteam.employee;
import java.util.List;
import java.util.Map;

public interface EMService {
    
    // 직원 목록 조회 메서드: 조건에 맞는 직원 리스트를 반환
    List<EMDTO> selectEmployeeList(Map<String, Object> param); 
    
    // 직원 등록 메서드: 직원 정보를 DB에 등록
    void insertEmployeeData(Map<String, Object> param);
    
    // 직원 정보 수정 메서드: 직원 정보를 수정하여 DB에 반영
    void updateEmployeeData(Map<String, Object> param);
    
    // 직원 삭제 메서드: 해당 직원의 정보를 DB에서 삭제
    void deleteEmployee(Map<String, Object> param); 

    // ID 중복 체크 메서드: 직원 ID가 중복되는지 여부를 확인
    boolean checkDuplicateId(Map<String, Object> param);
}
