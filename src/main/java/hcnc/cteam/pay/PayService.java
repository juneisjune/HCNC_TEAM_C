package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface PayService {

	 List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param);

    void updatePayEtc(PayDTO payDTO);  // etc 업데이트 메서드 선언


	void deletePay(PayDTO payDTO);



	}