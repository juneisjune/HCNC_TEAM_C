package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface NexaPayService {
	int selectHourly(Map< String, Object> param); 
	
	double selectTax(Map< String, Object> param);
	
	List<Map< String, Object>> selectEmpList (Map< String, Object> param);
	
	int selectMonthly(Map< String, Object> param);
	
	double selectWorkOver(Map< String, Object> param);
	
	int selectAbsence(Map< String, Object> param);
	
	int duplidacatedPay(Map< String, Object> param); 
	
	void insertPay(Map< String, Object> param); 

}
