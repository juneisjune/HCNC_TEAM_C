package hcnc.cteam.employee;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import hcnc.cteam.pay.PayMapper;
import hcnc.cteam.pay.PayService;

@Service("empService")
public class EmpServiceImpl extends EgovAbstractServiceImpl implements EmpService {
	@Resource(name = "empMapper")
	private EmpMapper empMapper;

	@Override
	public int userLogin(EmpDTO empDTO) throws Exception {
		return empMapper.userLogin(empDTO);
	}

	@Override
	public EmpDTO selectUser(EmpDTO empDTO) throws Exception {
		return empMapper.selectUser(empDTO);
	}

}
