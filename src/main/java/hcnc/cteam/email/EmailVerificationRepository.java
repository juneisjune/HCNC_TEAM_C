package hcnc.cteam.email;

import org.springframework.stereotype.Repository;
import java.util.HashMap;
import java.util.Map;
import java.time.LocalDateTime;

@Repository
public class EmailVerificationRepository {
    // 메모리 기반 저장소 (DB 대신 사용)
    private Map<String, EmailVerificationToken> tokenStore = new HashMap<>();

    // 토큰 저장
    public void saveToken(String email, String token, LocalDateTime expirationTime) {
        EmailVerificationToken emailVerificationToken = new EmailVerificationToken(email, token, expirationTime);
        tokenStore.put(token, emailVerificationToken);
    }

    // 토큰 조회
    public EmailVerificationToken findByToken(String token) {
        return tokenStore.get(token);
    }

    // 토큰 삭제 (옵션)
    public void deleteToken(String token) {
        tokenStore.remove(token);
    }
}
