package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("nexaPayMapper")
public interface NexaPayMapper {
	
	//직책별 시급 조회
	int selectHourly(Map< String, Object> param); 

	//직책별 tax 조회
	double selectTax(Map< String, Object> param);
	
	//직책별 emp List 조회 
	List<Map< String, Object>> selectEmpList (Map< String, Object> param);
	
	//직책별 기본급 조회 
	int selectMonthly(Map< String, Object> param);
	
	//지난달 work_over 조회
	double selectWorkOver(Map< String, Object> param);
	
	//지난달 결근 조회
	int selectAbsence(Map< String, Object> param); 
	
	//중복된 급여등록 조회
	int duplidacatedPay(Map< String, Object> param); 

	//pay insert
	void insertPay(Map< String, Object> param); 
}
