package hcnc.cteam.login;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import hcnc.cteam.attendance.AttenDTO;

@Mapper("loginMapper")
public interface LoginMapper {
	int userLogin(LoginDTO loginDTO) throws Exception;
	
	LoginDTO selectUser(LoginDTO loginDTO) throws Exception;
	
	String selectEmail(int empCode) throws Exception;
	
	AttenDTO selectWork(int empCode) throws Exception;

	Map<String, Object> getUserByUserId(Map<String, Object> loginInfo);
	
}	
