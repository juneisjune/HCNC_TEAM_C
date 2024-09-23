package hcnc.cteam.login;

public interface LoginService {
	
	int userLogin(LoginDTO loginDTO) throws Exception;
	
	LoginDTO selectUser(LoginDTO loginDTO) throws Exception;
	
	String selectEmail(int empCode) throws Exception;
	
}
