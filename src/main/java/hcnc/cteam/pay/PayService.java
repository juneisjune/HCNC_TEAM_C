package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface PayService {

    List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param);

	}


