package hcnc.cteam.email;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service("emailService")
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private EmailVerificationRepository emailVerificationRepository;

    @Override
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }
    @Override
    public boolean verifyToken(String token) {
        EmailVerificationToken verificationToken = emailVerificationRepository.findByToken(token);

        if (verificationToken == null) {
            return false;  // 토큰이 없으면 검증 실패
        }

        if (verificationToken.getExpirationTime().isBefore(LocalDateTime.now())) {
            return false;  // 토큰이 만료되었으면 검증 실패
        }

        return true;  // 토큰이 유효하면 검증 성공
    }

    @Override
    public String generateTokenAndSave(String email) {
        String token = UUID.randomUUID().toString();
        LocalDateTime expirationTime = LocalDateTime.now().plusHours(24); // 24시간 후 만료
        emailVerificationRepository.saveToken(email, token, expirationTime);

        return token;
    }
}
