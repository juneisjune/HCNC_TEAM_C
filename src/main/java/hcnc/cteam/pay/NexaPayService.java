package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface NexaPayService {
	int selectMonthly(Map< String, Object> param);
	
	double selectTax(Map< String, Object> param);
	
	int selectHourly(Map< String, Object> param); 
	
	int selectAbsence(Map< String, Object> param); 
	
	List<Map< String, Object>> selectEmpList (Map< String, Object> param);
	
	double selectWorkOver();
	
	void insertPay(Map< String, Object> param); 

}
