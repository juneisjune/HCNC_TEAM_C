package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PayServiceImpl implements PayService {  // abstract 제거
    private Logger logger = LoggerFactory.getLogger(PayServiceImpl.class);

    @Autowired
    private PayMapper payMapper;


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
		
	

		



