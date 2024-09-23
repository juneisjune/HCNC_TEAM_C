package hcnc.cteam.login;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import hcnc.cteam.pay.PayMapper;
import hcnc.cteam.pay.PayService;

@Service("loginService")
public class LoginServiceImpl extends EgovAbstractServiceImpl implements LoginService {
	@Resource(name = "loginMapper")
	private LoginMapper loginMapper;

	@Override
	public int userLogin(LoginDTO loginDTO) throws Exception {
		return loginMapper.userLogin(loginDTO);
	}

	@Override
	public LoginDTO selectUser(LoginDTO loginDTO) throws Exception {
		return loginMapper.selectUser(loginDTO);
	}

	@Override
	public String selectEmail(int empCode) throws Exception {
		return loginMapper.selectEmail(empCode);
	}

}
