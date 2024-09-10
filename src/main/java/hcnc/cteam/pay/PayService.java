package hcnc.cteam.pay;

public interface PayService {

	PayVO selectMyPay() throws Exception;

	PayEmpVO selectEmp() throws Exception;
	
	int selectMonthly() throws Exception;
	
	int selectPlus() throws Exception;
	
	int selectMinus() throws Exception;
	
	int selectTotalDay() throws Exception;
	
	int selectTotalTime() throws Exception;
	
	double selectWorkOver() throws Exception;
}
