package hcnc.cteam.login;

import hcnc.cteam.attendance.AttenDTO;

public interface LoginService {
	
	int userLogin(LoginDTO loginDTO) throws Exception;
	
	LoginDTO selectUser(LoginDTO loginDTO) throws Exception;
	
	String selectEmail(int empCode) throws Exception;
	
	AttenDTO selectWork(int empCode) throws Exception;
	
}
