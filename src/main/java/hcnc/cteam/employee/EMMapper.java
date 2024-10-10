package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper  // MyBatis Mapper 인터페이스임을 나타내는 어노테이션, 이를 통해 SQL 매핑 파일과 연결
public interface EMMapper {

    /**
     * 직원 목록 조회 메서드.
     * 
     * @param param 직원 목록을 조회할 때 사용할 검색 조건을 담고 있는 파라미터.
     *              Map의 key는 검색 필드(예: 이름, 부서명 등)이며, value는 검색어.
     *              이 파라미터는 SQL 쿼리에서 조건절에 사용됩니다.
     *              - 예시: {"name": "John", "depName": "HR"} 등.
     * @return 직원 목록을 담고 있는 리스트(List<EMDTO>).
     *         각 항목은 직원의 정보를 담고 있는 EMDTO 객체로 구성됩니다.
     */
    List<EMDTO> selectEmployeeList(Map<String, Object> param);

    /**
     * 직원 정보를 데이터베이스에 삽입하는 메서드.
     * 
     * @param param 등록할 직원의 정보를 담고 있는 파라미터.
     *              Map의 key는 데이터베이스 컬럼명(예: empCode, name 등)이며, value는 입력된 값.
     *              이 파라미터는 SQL 쿼리의 INSERT 문에 사용됩니다.
     *              - 예시: {"empCode": 101, "name": "John", "depCode": "HR"} 등.
     */
    void insertEmployeeData(Map<String, Object> param);

    /**
     * 기존 직원 정보를 데이터베이스에서 수정하는 메서드.
     * 
     * @param param 수정할 직원의 정보를 담고 있는 파라미터.
     *              Map의 key는 수정할 데이터베이스 컬럼명이며, value는 수정된 값.
     *              이 파라미터는 SQL 쿼리의 UPDATE 문에 사용됩니다.
     *              - 예시: {"empCode": 101, "name": "John Updated", "depCode": "HR"} 등.
     *              반드시 직원의 식별자(empCode)가 포함되어야 수정 대상이 명확히 구분됩니다.
     */
    
    void updateEmployeeData(Map<String, Object> param);

    /**
     * 특정 직원의 정보를 데이터베이스에서 삭제하는 메서드.
     * 
     * @param param 삭제할 직원의 식별자(사번 등)를 담고 있는 파라미터.
     *              Map의 key는 empCode(또는 다른 식별자)이며, value는 해당 직원의 식별값.
     *              이 파라미터는 SQL 쿼리의 DELETE 문에 사용됩니다.
     *              - 예시: {"empCode": 101} 등.
     */
    void deleteEmployee(Map<String, Object> param);

    /**
     * 특정 ID로 등록된 직원이 존재하는지 여부를 확인하는 메서드.
     * 
     * @param id 중복 체크할 직원의 ID.
     *           이 ID는 회원가입 또는 정보 수정 시 중복 여부를 확인하는 데 사용됩니다.
     *           SQL 쿼리에서 해당 ID로 직원이 존재하는지 카운트합니다.
     * @return 해당 ID로 등록된 직원의 수를 반환합니다.
     *         - 중복된 ID가 존재하면 1 이상의 값이 반환됩니다.
     *         - 중복되지 않으면 0이 반환됩니다.
     */
    int countEmployeeById(String id);
    
    EMDTO findEmp (Map<String, Object> param);
}
