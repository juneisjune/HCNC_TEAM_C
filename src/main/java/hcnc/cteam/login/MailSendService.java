package hcnc.cteam.login;


import java.util.Random;

import javax.annotation.Resource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


@Service
public class MailSendService {
	
    @Resource(name="mailSender")
    private JavaMailSenderImpl mailSender;
    
    private String getKey(int size) {
		
		Random random = new Random(); 
		String sixDigitNumber = String.valueOf(100000 + random.nextInt(900000)); 
		
		return sixDigitNumber;  	
        
    }
    
    public String sendAuthMail(String mail) throws MessagingException {
        String authKey = getKey(6);
        
        MimeMessage mailMessage = mailSender.createMimeMessage();
        
        String mailContent = "인증번호 : " + authKey ;     //보낼 메시지 
        
        mailMessage.setSubject("(주)HCNC 로그인 2단계 인증", "utf-8");  //이메일 제목
        mailMessage.setText(mailContent, "utf-8");  
        mailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(mail)); //이메일 수신자 지정
        
        mailSender.send(mailMessage);
        
        return authKey;
    }
}

