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
    public Map<String, Object> getUserInfoByUserId(String userId) {
        return loginMapper.getUserByUserId(userId);
    }

	@Override
    public boolean authenticate(String userId, String password) {
        Map<String, Object> user = loginMapper.getUserByUserId(userId);
        
        // 입력받은 비밀번호를 SHA-256으로 해시화
        String hashedPassword = org.apache.commons.codec.digest.DigestUtils.sha256Hex(password);
        
        // 사용자 입력 비밀번호와 DB 비밀번호 비교
        if (user != null && user.get("password").equals(hashedPassword)) {
            return true;  // 로그인 성공
        }
        return false;  // 로그인 실패
    }



}
