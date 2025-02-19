package hcnc.cteam.login;

import java.util.Map;

import hcnc.cteam.attendance.AttenDTO;

public interface LoginService {
	
	int userLogin(LoginDTO loginDTO) throws Exception;
	
	LoginDTO selectUser(LoginDTO loginDTO) throws Exception;
	
	String selectEmail(int empCode) throws Exception;
	
	AttenDTO selectWork(int empCode) throws Exception;
	
	Map<String, Object> getUserInfoByUserId(Map<String, Object> loginInfo);
	
	Map<String, Object> FindId(Map<String, Object> param);
	
	Map<String, Object> FindPassword(Map<String, Object> param);

	void UpdatePassword(Map<String, Object> param);	
}
