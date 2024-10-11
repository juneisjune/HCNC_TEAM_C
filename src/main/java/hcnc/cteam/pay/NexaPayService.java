package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

public interface NexaPayService {
	int selectHourly(Map< String, Object> param); 
	
	double selectTax(Map< String, Object> param);
	
	List<Map< String, Object>> selectEmpList (Map< String, Object> param);
	
	int selectMonth(Map< String, Object> param);
	
	double selectWorkOver(Map< String, Object> param);
	
	int selectAbsence(Map< String, Object> param);
	
	Integer selectEtc(Map< String, Object> param);
	
	int duplidacatedPay(Map< String, Object> param); 
	
	void insertPay(Map< String, Object> param); 
	
   List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param);

   void updatePayEtc(PayDTO payDTO);  // DB에 수정된 값 반영하는 쿼리
   
   void deletePay(PayDTO payDTO);

}
