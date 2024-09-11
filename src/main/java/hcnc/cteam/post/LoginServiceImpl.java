package hcnc.cteam.post;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("loginService")
public class LoginServiceImpl implements LoginService {

    @Resource(name = "loginMapper")
    private LoginMapper loginMapper;

    @Override
    public boolean authenticate(String userId, String password) {
        Map<String, Object> user = loginMapper.getUserByUserId(userId);
        
        // 사용자 입력 비밀번호와 DB 비밀번호 비교
        if (user != null && user.get("password").equals(password)) {
            return true;  // 로그인 성공
        }
        return false;  // 로그인 실패
    }
}
