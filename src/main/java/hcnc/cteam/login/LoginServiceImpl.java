package hcnc.cteam.login;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import hcnc.cteam.attendance.AttenDTO;

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

	@Override
	public AttenDTO selectWork(int empCode) throws Exception {
		return loginMapper.selectWork(empCode);
	}
	
	@Override
    public Map<String, Object> getUserInfoByUserId(Map<String, Object> loginInfo) {
        return loginMapper.getUserByUserId(loginInfo);
    }

	@Override
	public Map<String, Object> FindId(Map<String, Object> param) {
		return loginMapper.FindId(param);
	}

	@Override
	public Map<String, Object> FindPassword(Map<String, Object> param) {
		return loginMapper.FindPassword(param);
	}

	@Override
	public void UpdatePassword(Map<String, Object> param) {
		loginMapper.UpdatePassword(param);
	}
}
