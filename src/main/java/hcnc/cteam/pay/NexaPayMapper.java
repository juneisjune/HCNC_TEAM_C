package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("nexaPayMapper")
public interface NexaPayMapper {
	//직책별 기본급 조회 
	int selectMonthly(int assignCode);
	
	//직책별 tax 조회
	int selectTax(int assignCode);
	
	//직책별 emp List 조회 
	List<Map< String, Object>> selectEmpList (int assignCode);
	
	//저번달 work_over 조회
	double selectWorkOver();
	
	//hourly 조회
	int selectHourly();
	
	//pay insert
	void insertPay(PayDTO payDTO); 
}
