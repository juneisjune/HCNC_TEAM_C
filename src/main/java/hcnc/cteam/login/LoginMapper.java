package hcnc.cteam.login;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("loginMapper")
public interface LoginMapper {
	int userLogin(LoginDTO loginDTO) throws Exception;
	
	LoginDTO selectUser(LoginDTO loginDTO) throws Exception;
	
	String selectEmail(int empCode) throws Exception;
	
	LoginDTO selectWork(int empCode) throws Exception;
	
}	
