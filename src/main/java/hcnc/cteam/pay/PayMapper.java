package hcnc.cteam.pay;

import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("payMapper")
public interface PayMapper {
	//이번달 급여명세서 조회
	PayDTO selectMyPay() throws Exception;
	
	//해당 직원 정보 조회 
	PayEmpDTO selectEmp() throws Exception;
	
	//기본급 조회
	int selectMonthly() throws Exception;
	
	//지급총액 조회 
	int selectPlus() throws Exception;
	
	//공제총액 조회
	int selectMinus() throws Exception;
	
	//총 근무일수 조회
	int selectTotalDay() throws Exception;
	
	//총 근무시간 조회
	int selectTotalTime() throws Exception;
	
	//pay_over 조회
	double selectWorkOver() throws Exception;
	
	//기간별 급여 조회
	List<PayDTO> selectPeriod(PaySearchDTO paySearchDTO) throws Exception;
}
