package hcnc.cteam.email;

public interface EmailService {
    void sendEmail(String to, String subject, String text);
    boolean verifyToken(String token);  // verifyToken 메서드 선언
	String generateTokenAndSave(String email);
}

