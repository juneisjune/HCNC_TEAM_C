package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("nexaPayService")
public class NexaPayServiceImpl extends EgovAbstractServiceImpl implements NexaPayService {

	@Resource(name="nexaPayMapper")
	private NexaPayMapper nexaPayMapper;
	
	@Override
	public int selectMonthly(Map< String, Object> param) {
		return nexaPayMapper.selectMonthly(param);
	}

	@Override
	public double selectTax(Map< String, Object> param) {
		return nexaPayMapper.selectTax(param);
	}

	@Override
	public int selectHourly(Map<String, Object> param) {
		return nexaPayMapper.selectHourly(param);
	}
	
	@Override
	public int selectAbsence(Map<String, Object> param) {
		return nexaPayMapper.selectAbsence(param);
	}
	
	@Override
	public List<Map<String, Object>> selectEmpList(Map< String, Object> param) {
		return nexaPayMapper.selectEmpList(param);
	}

	@Override
	public double selectWorkOver() {
		return nexaPayMapper.selectWorkOver();
	}

	@Override
	public void insertPay(PayEmpDTO payEmpDTO) {
		nexaPayMapper.insertPay(payEmpDTO);
	}


}
