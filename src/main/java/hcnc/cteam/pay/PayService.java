package hcnc.cteam.pay;

import java.util.List;

public interface PayService {

	PayDTO selectMyPay() throws Exception;

	PayEmpDTO selectEmp() throws Exception;
	
	int selectMonthly() throws Exception;
	
	int selectPlus() throws Exception;
	
	int selectMinus() throws Exception;
	
	int selectTotalDay() throws Exception;
	
	int selectTotalTime() throws Exception;
	
	double selectWorkOver() throws Exception;
	
	List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception;
}
