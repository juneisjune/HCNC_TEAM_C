package hcnc.cteam.login;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class NexaLoginController {

	@Autowired
	private MailSendService mailSendService;

	@Autowired
	private LoginService loginService;

	// 관리자 로그인
	@RequestMapping("/Nexalogin.do")
	public NexacroResult login(@ParamDataSet(name = "ds_login") Map<String, Object> loginInfo) {
		NexacroResult result = new NexacroResult();

		Map<String, Object> ds_userInfo = loginService.getUserInfoByUserId(loginInfo);

		if (ds_userInfo != null) {

			// 디버깅용 출력
			System.out.println("ds_userInfo: " + ds_userInfo);

			// Nexacro에서 사용할 데이터셋에 추가
			result.addDataSet("ds_userInfo", ds_userInfo); // 사용자 정보 전체 반환
			result.setErrorCode(0); // 성공
			result.setErrorMsg("로그인 성공");
		} else {
			result.setErrorCode(-1); // 실패
			result.setErrorMsg("권한이 없거나 아이디 및 비밀번호를 확인해주세요.");
		}

		return result;
	}

	// Nexa 2단계 인증
	@RequestMapping(value = "/NexaAuth.do", method = RequestMethod.POST)
	public NexacroResult nexaAuth(@ParamDataSet(name = "ds_email", required = false) Map<String, String> ds_email) {
		NexacroResult result = new NexacroResult();

		Map<String, Object> map = new HashMap<String, Object>();

		// ds_email로 전달된 데이터 확인
		if (ds_email == null || ds_email.get("email") == null || ds_email.get("email").trim().isEmpty()) {
			result.setErrorCode(-1);
			result.setErrorMsg("Invalid email address");
			return result;
		}

		try {
			String email = ds_email.get("email"); // 이메일 값 가져오기
			String authKey = mailSendService.sendAuthMail(email);
			map.put("authKey", authKey);
			result.addDataSet("ds_Auth", map);
		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1);
			result.setErrorMsg("Error occurred while sending auth mail.");
		}

		return result;
	}

	// 사용자 Id 찾기
	@RequestMapping("/FindId.do")
	public NexacroResult FindId(@ParamDataSet(name = "ds_FindLoginInfo") Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		Map<String, Object> ds_Result = loginService.FindId(param);

		if (ds_Result != null) {

			// Nexacro에서 사용할 데이터셋에 추가
			result.addDataSet("ds_Result", ds_Result);
			result.setErrorCode(0); // 성공
			result.setErrorMsg("성공");
		} else {
			result.setErrorCode(-1); // 실패
			result.setErrorMsg("권한이 없거나 이름 및 이메일을 확인해주세요.");
		}

		return result;
	}

	// 사용자 Id 찾기
	@RequestMapping("/FindPassword.do")
	public NexacroResult FindPassword(@ParamDataSet(name = "ds_FindLoginInfo") Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		Map<String, Object> ds_Result = loginService.FindPassword(param);

		if (ds_Result != null) {
			result.setErrorCode(0); // 성공
			result.setErrorMsg("성공");
		} else {
			result.setErrorCode(-1); // 실패
			result.setErrorMsg("권한이 없거나 Id 및 이메일을 확인해주세요.");
		}

		return result;
	}

	// 사용자 password update
	@RequestMapping("/UpdatePassword.do")
	public NexacroResult UpdatePassword(@ParamDataSet(name = "ds_NewPassword") Map<String, Object> param) {
		NexacroResult result = new NexacroResult();

		loginService.UpdatePassword(param);

		try {
			result.setErrorCode(0); // 성공
			result.setErrorMsg("성공");
		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1); // 실패
			result.setErrorMsg("권한이 없거나 Id 및 이메일을 확인해주세요.");
		}

		return result;
	}
}
