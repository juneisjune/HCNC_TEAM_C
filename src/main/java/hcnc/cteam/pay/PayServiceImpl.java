package hcnc.cteam.pay;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("payService")
public class PayServiceImpl extends EgovAbstractServiceImpl implements PayService {

	@Resource(name = "payMapper")
	private PayMapper payMapper;

	@Override
	public PayDTO selectMyPay(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectMyPay(paySearchDTO);
	}

	@Override
	public PayEmpDTO selectEmp() throws Exception {
		return payMapper.selectEmp();
	}

	@Override
	public int selectMonthly() throws Exception {
		return payMapper.selectMonthly();
	}

	@Override
	public int selectMinus(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectMinus(paySearchDTO);
	}

	@Override
	public int selectTotalDay(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectTotalDay(paySearchDTO);
	}
	
	@Override
	public int selectTotalTime(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectTotalTime(paySearchDTO);
	}
	
	@Override
	public Double selectWorkOver(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectWorkOver(paySearchDTO);
	}
	
	@Override
	public List<PayDTO> selectPayList() throws Exception {
		return payMapper.selectPayList();
	}

	@Override
	public List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectPeriod(paySearchDTO);
	}

	

	
	
}
