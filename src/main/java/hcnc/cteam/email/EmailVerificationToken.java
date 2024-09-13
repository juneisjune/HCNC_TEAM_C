package hcnc.cteam.email;

import java.time.LocalDateTime;

public class EmailVerificationToken {
    private String email;
    private String token;
    private LocalDateTime expirationTime;

    // 생성자
    public EmailVerificationToken(String email, String token, LocalDateTime expirationTime) {
        this.email = email;
        this.token = token;
        this.expirationTime = expirationTime;
    }

    // getter와 setter
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }

    public LocalDateTime getExpirationTime() {
        return expirationTime;
    }

    public void setExpirationTime(LocalDateTime expirationTime) {
        this.expirationTime = expirationTime;
    }
}
