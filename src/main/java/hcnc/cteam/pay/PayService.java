package hcnc.cteam.pay;

import java.util.List;

public interface PayService {

	PayDTO selectMyPay(PaySearchDTO paySearchDTO) throws Exception;

	PayEmpDTO selectEmp() throws Exception;
	
	int selectMonthly() throws Exception;
		
	int selectMinus(PaySearchDTO paySearchDTO) throws Exception;
	
	int selectTotalDay(PaySearchDTO paySearchDTO) throws Exception;
	
	int selectTotalTime(PaySearchDTO paySearchDTO) throws Exception;
	
	Double selectWorkOver(PaySearchDTO paySearchDTO) throws Exception;
		
	List<PayDTO> selectPayList() throws Exception;
	
	List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception;
}
