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
            // 사용자 정보를 가져와서 반환 (아이디, 비밀번호, 관리자 이름, 이메일)
            Map<String, Object> userInfo = loginService.getUserInfoByUserId(userId);

            // 디버깅용 출력
            System.out.println("userInfo: " + userInfo);

            // Nexacro에서 사용할 데이터셋에 추가
            result.addDataSet("ds_login", userInfo);  // 사용자 정보 전체 반환
            result.setErrorCode(0);  // 성공
            result.setErrorMsg("로그인 성공");
        } else {
            result.setErrorCode(-1); // 실패
            result.setErrorMsg("권한이 없거나 아이디 비밀번호를 확인해주세요!");
        }
        
        return result;
    }

}
