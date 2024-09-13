package hcnc.cteam.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VerificationController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/verify")
    public String verifyEmail(@RequestParam("token") String token) {
        boolean isVerified = emailService.verifyToken(token);

        if (isVerified) {
            return "이메일 인증이 성공했습니다!";
        } else {
            return "잘못된 인증 링크이거나 토큰이 만료되었습니다.";
        }
    }
}
