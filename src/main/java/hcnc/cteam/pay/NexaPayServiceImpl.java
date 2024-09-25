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
	public int selectMonthly(int assignCode) {
		return nexaPayMapper.selectMonthly(assignCode);
	}

	@Override
	public int selectTax(int assignCode) {
		return nexaPayMapper.selectTax(assignCode);
	}

	@Override
	public List<Map<String, Object>> selectEmpList(int assignCode) {
		return nexaPayMapper.selectEmpList(assignCode);
	}

	@Override
	public double selectWorkOver() {
		return nexaPayMapper.selectWorkOver();
	}

	@Override
	public int selectHourly() {
		return nexaPayMapper.selectHourly();
	}

	@Override
	public void insertPay(PayDTO payDTO) {
		
	}
	

}
