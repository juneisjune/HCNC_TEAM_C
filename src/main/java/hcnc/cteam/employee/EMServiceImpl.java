package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("EMService")
public class EMServiceImpl implements EMService {

    @Resource(name = "EMMapper")
    private EMMapper EMMapper;  // MyBatis Mapper 인터페이스 주입

    // 직원 목록 조회 메서드 구현
    @Override
    public List<EMDTO> selectEmployeeList(Map<String, Object> param) {
        // MyBatis Mapper를 통해 직원 목록을 조회하여 반환
        return EMMapper.selectEmployeeList(param);
        
    
    }
    @Override
    public int selectEmployeeData(Map<String, Object> param) {
        return EMMapper.selectEmployeeData(param);
        
 
    }
    @Override
    public void updateEmployeeData(Map<String, Object> param) {
        EMMapper.updateEmployeeData(param);  // Mapper에서 직원 정보 수정
 }
    
    @Override
    public void deleteEmployee(Map<String, Object> param) {
        EMMapper.deleteEmployee(param);  // 삭제 기능 구현
}

    @Override
    public boolean checkDuplicateId(Map<String, Object> param) {
        String id = (String) param.get("id");
        int count = EMMapper.countEmployeeById(id);  // DB에서 해당 ID로 직원 수를 조회
        return count > 0;  // 0보다 크면 중복된 것으로 판단
}
	@Override
	public EMDTO findEmp(Map<String, Object> param) {
		return EMMapper.findEmp(param);
	}
    
}