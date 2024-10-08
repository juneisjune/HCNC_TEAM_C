package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class EMController {

    // EMService 객체를 의존성 주입 (직원 관리 서비스 로직 처리)
    @Resource(name = "EMService")
    private EMService EMService;

    // 직원 정보 검색 기능을 담당하는 메서드
    @RequestMapping(value = "/selectEmployeeList.do")
    public NexacroResult selectEmployeeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult(); // 결과 객체 생성
        try {
            // 검색 유형과 검색어를 콘솔에 출력 (디버깅 용도)
            System.out.println("검색 유형: " + param.get("SEARCH_TYPE"));
            System.out.println("검색어: " + param.get("SEARCH_WORD"));
            
            // 서비스 레이어에서 직원 목록을 가져와 ds_empList에 저장
            List<EMDTO> ds_empList = EMService.selectEmployeeList(param);
            
            // 결과 객체에 직원 목록 데이터셋을 추가
            result.addDataSet("ds_empList", ds_empList);
        } catch (Exception ee) {
            // 예외 발생 시 에러 메시지와 코드를 설정
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("조회 오류 발생");
        }
        return result; // NexacroResult 객체 반환
    }
    
    // 직원 정보를 등록하는 메서드
    @RequestMapping(value = "/insertEmployeeData.do")
    public NexacroResult insertEmployeeData(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
        NexacroResult result = new NexacroResult(); // 결과 객체 생성
        try {
            // 입력된 직원 데이터를 콘솔에 출력 (디버깅 용도)
            System.out.println("직원 데이터: " + empData);
            
            // 서비스 레이어에 직원 등록 요청
            EMService.insertEmployeeData(empData);
            
            // 성공 시 에러 코드와 메시지를 설정
            result.setErrorCode(0);
            result.setErrorMsg("직원 등록 완료");
        } catch (Exception ee) {
            // 예외 발생 시 에러 메시지와 코드를 설정
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("등록 오류 발생");
        }
        return result; // NexacroResult 객체 반환
    }
    
    // 직원 정보를 수정하는 메서드
    @RequestMapping(value = "/updateEmployeeData.do")
    public NexacroResult updateEmployeeData(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
        NexacroResult result = new NexacroResult(); // 결과 객체 생성
        try {
            // 수정 요청된 데이터를 콘솔에 출력 (디버깅 용도)
            System.out.println("수정 요청 데이터: " + empData);
            
            // 서비스 레이어에 직원 수정 요청
            EMService.updateEmployeeData(empData);
            
            // 성공 시 에러 코드와 메시지를 설정
            result.setErrorCode(0);
            result.setErrorMsg("직원 수정 완료");
        } catch (Exception ee) {
            // 예외 발생 시 에러 메시지와 코드를 설정
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("수정 오류 발생");
        }
        return result; // NexacroResult 객체 반환
    }
    
    // 직원 정보를 삭제하는 메서드
    @RequestMapping(value = "/deleteEmployee.do")
    public NexacroResult deleteEmployee(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
        NexacroResult result = new NexacroResult(); // 결과 객체 생성
        try {
            // 삭제 요청된 데이터를 콘솔에 출력 (디버깅 용도)
            System.out.println("삭제 요청 데이터: " + empData);
            
            // 서비스 레이어에 직원 삭제 요청
            EMService.deleteEmployee(empData);
            
            // 성공 시 에러 코드와 메시지를 설정
            result.setErrorCode(0);
            result.setErrorMsg("직원 삭제 완료");
        } catch (Exception ee) {
            // 예외 발생 시 에러 메시지와 코드를 설정
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("삭제 오류 발생");
        }
        return result; // NexacroResult 객체 반환
    }
    
    // 직원 아이디 중복 체크 메서드
    @RequestMapping(value = "/checkDuplicateId.do")
    public NexacroResult checkDuplicateId(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
        NexacroResult result = new NexacroResult(); // 결과 객체 생성
        try {
            // 중복 체크 요청된 데이터를 콘솔에 출력 (디버깅 용도)
            System.out.println("중복 체크 요청 데이터: " + empData);
            
            // 서비스 레이어에 ID 중복 여부를 확인하는 메서드 호출
            boolean isDuplicate = EMService.checkDuplicateId(empData);
            
            // 중복 여부에 따라 결과 설정
            if (isDuplicate) {
                result.setErrorCode(1);  // 중복된 경우
                result.setErrorMsg("중복된 아이디입니다.");
            } else {
                result.setErrorCode(0);  // 중복되지 않은 경우
                result.setErrorMsg("아이디 사용 가능");
            }
        } catch (Exception ee) {
            // 예외 발생 시 에러 메시지와 코드를 설정
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("아이디 중복 체크 오류 발생");
        }
        return result; // NexacroResult 객체 반환
    }
}
