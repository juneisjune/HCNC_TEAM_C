package hcnc.cteam.pay;

import java.util.List;

public interface PayService {

	PayDTO selectMyPay(PaySearchDTO paySearchDTO) throws Exception;

	PayEmpDTO selectEmp(int empCode) throws Exception;
	
	Integer selectMinus(PaySearchDTO paySearchDTO) throws Exception;
	
	Integer selectTotalDay(PaySearchDTO paySearchDTO) throws Exception;
	
	Integer selectTotalTime(PaySearchDTO paySearchDTO) throws Exception;
	
	Double selectWorkOver(PaySearchDTO paySearchDTO) throws Exception;
		
	List<PayDTO> selectPayList(int empCode) throws Exception;
	
	List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception;
}
