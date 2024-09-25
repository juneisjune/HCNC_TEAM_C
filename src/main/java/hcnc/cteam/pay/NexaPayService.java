package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface NexaPayService {
	int selectMonthly(int assignCode);
	
	int selectTax(int assignCode);
	
	List<Map< String, Object>> selectEmpList (int assignCode);
	
	double selectWorkOver();
	
	int selectHourly();
	
	void insertPay(PayDTO payDTO); 

}
