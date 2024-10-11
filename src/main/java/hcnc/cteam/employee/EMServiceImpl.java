package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("EMService")  // 서비스 클래스에 "EMService"라는 이름을 지정하여 스프링이 관리하도록 설정
public class EMServiceImpl implements EMService {

    // MyBatis Mapper 인터페이스를 주입하여 DB와의 연결을 처리 (해당 Mapper는 SQL 쿼리 실행을 담당)
    @Resource(name = "EMMapper")  
    private EMMapper EMMapper;

    // 직원 목록 조회 메서드 구현
    @Override
    public List<Map<String, Object>> selectEmployeeList(Map<String, Object> param) {
        // Map<String, Object> param: 직원 목록을 조회할 때 필요한 검색 조건을 담고 있는 파라미터입니다.
        // 예를 들어, 검색어, 부서명, 직책명 등을 포함할 수 있으며, 키는 문자열(String)이고 값은 다양한 타입(Object)으로 받을 수 있습니다.
        // MyBatis Mapper를 통해 직원 목록을 DB에서 조회하여 리스트로 반환
        return EMMapper.selectEmployeeList(param);
    }

    // 직원 정보 등록 메서드 구현
    @Override
    public void insertEmployeeData(Map<String, Object> param) {
        // Map<String, Object> param: 직원 등록에 필요한 데이터가 담긴 파라미터입니다.
        // 예를 들어, 사번(empCode), 이름(name), 부서코드(depCode), 직책코드(assignCode) 등 다양한 정보가 담겨 있습니다.
        // 키는 데이터베이스 컬럼명과 대응되는 문자열이고, 값은 그에 해당하는 입력 값입니다.
        // MyBatis Mapper를 사용하여 직원 정보를 DB에 삽입
        EMMapper.insertEmployeeData(param);
    }

    // 직원 정보 수정 메서드 구현
    @Override
    public void updateEmployeeData(Map<String, Object> param) { 
        // 이 파라미터는 DB에서 해당 직원의 정보를 업데이트하는 데 사용됩니다.
       
        EMMapper.updateEmployeeData(param);
    }
    
    // 직원 정보 삭제 메서드 구현
    @Override
    public void deleteEmployee(Map<String, Object> param) {
        // 직원 정보를 삭제할 때, 이 파라미터에 포함된 값을 기반으로 해당 직원의 데이터를 DB에서 삭제합니다.
        EMMapper.deleteEmployee(param);  // Mapper를 사용하여 DB에서 직원 정보 삭제
    }

    // ID 중복 체크 메서드 구현
    @Override
    public boolean checkDuplicateId(Map<String, Object> param) {
        // 키는 "id"로, 해당 직원의 ID 값을 가져와서 중복 여부를 확인하는 데 사용됩니다.
        String id = (String) param.get("id");  // 파라미터에서 "id"라는 키로 값을 가져옴
        int count = EMMapper.countEmployeeById(id);  // DB에서 해당 ID로 직원 수를 조회
        return count > 0;  // 0보다 크면 중복된 것으로 판단
}
	@Override
	public EMDTO findEmp(Map<String, Object> param) {
		return EMMapper.findEmp(param);
	}
    
}
