package hcnc.cteam.email;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendVerificationEmail")
    public String sendVerificationEmail(HttpServletRequest request) {
        // 세션에서 이메일 정보 가져오기
        HttpSession session = request.getSession();
        String userEmail = (String) session.getAttribute("email");

        if (userEmail == null) {
            return "로그인 상태에서 이메일 인증을 요청해 주세요.";
        }

        // UUID 토큰 생성
        String token = emailService.generateTokenAndSave(userEmail);
        
        // 인증 링크 생성
        String verificationLink = "http://localhost:8080/verify?token=" + token;

        // 이메일 발송
        emailService.sendEmail(userEmail, "이메일 인증", "이 링크를 클릭하여 인증하세요: " + verificationLink);
        
        return "이메일 발송 완료";
    }
}
