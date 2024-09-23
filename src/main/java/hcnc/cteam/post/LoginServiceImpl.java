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
        
        // 입력받은 비밀번호를 SHA-256으로 해시화
        String hashedPassword = org.apache.commons.codec.digest.DigestUtils.sha256Hex(password);
        
        // 사용자 입력 비밀번호와 DB 비밀번호 비교
        if (user != null && user.get("password").equals(hashedPassword)) {
            return true;  // 로그인 성공
        }
        return false;  // 로그인 실패
    }

    @Override
    public Map<String, Object> getUserInfoByUserId(String userId) {
        // 사용자 정보를 데이터베이스에서 조회하는 메서드 구현
        return loginMapper.getUserByUserId(userId);
    }
}
