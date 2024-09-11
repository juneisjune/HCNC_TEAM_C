package hcnc.cteam.post;

import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class LoginController {

    @Resource(name = "loginService")
    private LoginService loginService;

    @RequestMapping("/login.do")
    public NexacroResult login(@ParamDataSet(name = "ds_login") Map<String, Object> loginInfo) {
        NexacroResult result = new NexacroResult();
        
        String userId = (String) loginInfo.get("user_id");
        String password = (String) loginInfo.get("password");
        
        // 서비스 레이어에서 인증 처리
        boolean isAuthenticated = loginService.authenticate(userId, password);
        
        if (isAuthenticated) {
            result.setErrorCode(0);  // 성공
            result.setErrorMsg("로그인 성공");
        } else {
            result.setErrorCode(-1); // 실패
            result.setErrorMsg("권한이 없거나 아이디 비밀번호를 확인해주세요!");
        }
        
        return result;
    }
}
