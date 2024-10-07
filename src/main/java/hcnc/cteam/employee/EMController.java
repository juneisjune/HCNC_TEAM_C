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

    @Resource(name = "EMService")
    private EMService EMService;

    // 직원 정보 검색 기능
    @RequestMapping(value = "/selectEmployeeList.do")
    public NexacroResult selectEmployeeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            System.out.println("검색 유형: " + param.get("SEARCH_TYPE"));
            System.out.println("검색어: " + param.get("SEARCH_WORD"));
            
            // 서비스 레이어에서 직원 목록을 가져옴
            List<EMDTO> ds_empList = EMService.selectEmployeeList(param);
            result.addDataSet("ds_empList", ds_empList);
        } catch (Exception ee) {
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("조회 오류 발생");
        }
        return result;
        
       
    }
    @RequestMapping(value = "/selectEmployeeData.do")
    public NexacroResult selectEmployeeData(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
        NexacroResult result = new NexacroResult();
        try {
        	System.out.println("이거 들어오나?"+ empData);
            // 서비스 레이어에 직원 등록 요청
            EMService.selectEmployeeData(empData);
            result.setErrorCode(0);
            result.setErrorMsg("직원 등록 완료");
        } catch (Exception ee) {
            System.out.println(ee);
            result.setErrorCode(-1);
            result.setErrorMsg("등록 오류 발생");
        }
        return result;
   
    }
        @RequestMapping(value = "/updateEmployeeData.do")
        public NexacroResult updateEmployeeData(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
            NexacroResult result = new NexacroResult();
            try {
                System.out.println("수정 요청 들어옴: " + empData);
                // 서비스 레이어에 직원 수정 요청
                EMService.updateEmployeeData(empData);
                result.setErrorCode(0);
                result.setErrorMsg("직원 수정 완료");
            } catch (Exception ee) {
                System.out.println(ee);
                result.setErrorCode(-1);
                result.setErrorMsg("수정 오류 발생");
            }
            return result;
        
        
    }
        @RequestMapping(value = "/deleteEmployee.do")
        public NexacroResult deleteEmployee(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
            NexacroResult result = new NexacroResult();
            try {
                System.out.println("삭제 요청 들어옴: " + empData);
                // 서비스 레이어에 직원 삭제 요청
                EMService.deleteEmployee(empData);
                result.setErrorCode(0);
                result.setErrorMsg("직원 삭제 완료");
            } catch (Exception ee) {
                System.out.println(ee);
                result.setErrorCode(-1);
                result.setErrorMsg("삭제 오류 발생");
            }
            return result;
 }

        
        
        @RequestMapping(value = "/checkDuplicateId.do")
        public NexacroResult checkDuplicateId(@ParamDataSet(name = "ds_employee") Map<String, Object> empData) {
            NexacroResult result = new NexacroResult();
            try {
                System.out.println("중복 체크 요청 들어옴: " + empData);
                // 서비스 레이어에 ID 중복 여부를 확인하는 메서드를 호출
                boolean isDuplicate = EMService.checkDuplicateId(empData);
                
                // 중복 여부 결과 반환
                if (isDuplicate) {
                    result.setErrorCode(1);  // 중복된 경우
                    result.setErrorMsg("중복된 아이디입니다.");
                } else {
                    result.setErrorCode(0);  // 중복되지 않은 경우
                    result.setErrorMsg("아이디 사용 가능");
                }
            } catch (Exception ee) {
                System.out.println(ee);
                result.setErrorCode(-1);
                result.setErrorMsg("아이디 중복 체크 오류 발생");
            }
            return result;
 }

}