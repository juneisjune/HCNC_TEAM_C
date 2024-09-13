package hcnc.cteam.pay;

import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("payMapper")
public interface PayMapper {
	//해당 월 급여 조회
	PayDTO selectMyPay(PaySearchDTO paySearchDTO) throws Exception;
	
	//해당 직원 정보 조회 
	PayEmpDTO selectEmp() throws Exception;
	
	//기본급 조회
	int selectMonthly() throws Exception;
	
	//공제총액 조회
	int selectMinus(PaySearchDTO paySearchDTO) throws Exception;
	
	//총 근무일수 조회
	int selectTotalDay(PaySearchDTO paySearchDTO) throws Exception;
	
	//총 근무시간 조회
	int selectTotalTime(PaySearchDTO paySearchDTO) throws Exception;
	
	//pay_over 조회
	Double selectWorkOver(PaySearchDTO paySearchDTO) throws Exception;
 	
	//급여 목록 조회
	List<PayDTO> selectPayList() throws Exception;
	
	//기간별 급여 조회
	List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception;
}
