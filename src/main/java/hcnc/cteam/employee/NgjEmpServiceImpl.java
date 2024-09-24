package hcnc.cteam.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NgjEmpServiceImpl implements NgjEmpService{

	@Autowired
	private NgjEmpMapper empMapper;
	
	
	@Override
	public int selectUser(NgjEmpDTO empDto) {
		
		return empMapper.selectUser(empDto);
	}


	@Override
	public NgjEmpDTO empInfo(int emp) {
		return empMapper.empInfo(emp);
	}


}
