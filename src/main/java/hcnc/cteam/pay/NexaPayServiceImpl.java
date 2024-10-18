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
	public int selectHourly(Map<String, Object> param) {
		return nexaPayMapper.selectHourly(param);
	}
	
	@Override
	public double selectTax(Map< String, Object> param) {
		return nexaPayMapper.selectTax(param);
	}
	
	@Override
	public List<Map<String, Object>> selectEmpList(Map< String, Object> param) {
		return nexaPayMapper.selectEmpList(param);
	}
	
	@Override
	public int selectMonth(Map< String, Object> param) {
		return nexaPayMapper.selectMonth(param);
	}

	@Override
	public double selectWorkOver(Map< String, Object> param) {
		return nexaPayMapper.selectWorkOver(param);
	}
	
	@Override
	public int selectAbsence(Map<String, Object> param) {
		return nexaPayMapper.selectAbsence(param);
	}
	
	@Override
	public int selectDayOff(Map<String, Object> param) {
		return nexaPayMapper.selectDayOff(param);
	}
	
	@Override
	public Integer selectEtc(Map<String, Object> param) {
		return nexaPayMapper.selectEtc(param);
	}
	
	@Override
	public int duplidacatedPay(Map<String, Object> param) {
		return nexaPayMapper.duplidacatedPay(param);
	}

	@Override
	public void insertPay(Map< String, Object> param) {
		nexaPayMapper.insertPay(param);
	}
	
	@Override
    public List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param) {
        return nexaPayMapper.nexaGetPayListByCondition(param);
    }
	    
    @Override
    public void updatePayEtc(PayDTO payDTO) {
    	nexaPayMapper.updatePayEtc(payDTO);  // Mapper를 통해 DB에 수정된 값 저장

    }
	    
    @Override
    public void deletePay(PayDTO payDTO) {
    	nexaPayMapper.deletePay(payDTO);
   }

}
