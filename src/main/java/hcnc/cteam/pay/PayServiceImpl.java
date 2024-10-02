package hcnc.cteam.pay;

import java.util.List;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("payService")
public class PayServiceImpl extends EgovAbstractServiceImpl implements PayService {
	
	 private Logger logger = LoggerFactory.getLogger(PayServiceImpl.class);

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

	@Override
    public List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param) {
        return payMapper.nexaGetPayListByCondition(param);
    }
    
    @Override
    public void updatePayEtc(PayDTO payDTO) {
        payMapper.updatePayEtc(payDTO);  // Mapper를 통해 DB에 수정된 값 저장

    }
    @Override
    public void deletePay(PayDTO payDTO) {
        payMapper.deletePay(payDTO);

		
	}

	
	
}
