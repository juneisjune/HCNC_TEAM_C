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
	public PayEmpDTO selectEmp(int empCode) throws Exception {
		return payMapper.selectEmp(empCode);
	}

	@Override
	public Integer selectMonthly(int empCode) throws Exception {
		return payMapper.selectMonthly(empCode);
	}

	@Override
	public Integer selectMinus(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectMinus(paySearchDTO);
	}

	@Override
	public Integer selectTotalDay(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectTotalDay(paySearchDTO);
	}
	
	@Override
	public Integer selectTotalTime(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectTotalTime(paySearchDTO);
	}
	
	@Override
	public Double selectWorkOver(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectWorkOver(paySearchDTO);
	}
	
	@Override
	public List<PayDTO> selectPayList(int empCode) throws Exception {
		return payMapper.selectPayList(empCode);
	}

	@Override
	public List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception {
		return payMapper.selectPeriod(paySearchDTO);
	}

	

	
	
}
