package hcnc.cteam.pay;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("payService")
public class PayServiceImpl extends EgovAbstractServiceImpl implements PayService {

	@Resource(name = "payMapper")
	private PayMapper payMapper;

	@Override
	public PayVO selectMyPay() throws Exception {
		return payMapper.selectMyPay();
	}

	@Override
	public EmpVO selectEmp() throws Exception {
		return payMapper.selectEmp();
	}

	@Override
	public int selectMonthly() throws Exception {
		return payMapper.selectMonthly();
	}

	@Override
	public int selectPlus() throws Exception {
		return payMapper.selectPlus();
	}

	@Override
	public int selectMinus() throws Exception {
		return payMapper.selectMinus();
	}

	@Override
	public int selectTotalDay() throws Exception {
		return payMapper.selectTotalDay();
	}
	
	@Override
	public int selectTotalTime() throws Exception {
		return payMapper.selectTotalTime();
	}
	
	@Override
	public double selectWorkOver() throws Exception {
		return payMapper.selectWorkOver();
	}

	

	
	
	
}
