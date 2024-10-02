package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class PayController {

    private Logger logger = LoggerFactory.getLogger(PayController.class);
    
    @Resource(name="txManager")
    PlatformTransactionManager transactionManager;
    
    @Autowired
    private PayService payService;  // 소문자로 변수명 유지
    
    @RequestMapping(value = "/selectPayList.do")
    public NexacroResult nexaSearchPay(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            // 서비스에서 데이터를 가져오며 'chk' 컬럼을 기본값 '0'으로 설정
            List<PayDTO> ds_Pay = payService.nexaGetPayListByCondition(param);

            // 조회된 데이터에 대해 chk 기본값 설정
            for (PayDTO pay : ds_Pay) {
                if (pay.getClass() == null) {
                    pay.setChk("0");  // 체크박스 기본값을 '0'으로 설정 (해제 상태)
                }
            }

            result.addDataSet("ds_Pay", ds_Pay);  // Nexacro에 데이터셋 추가
        } catch (Exception ee) {
            logger.error("급여 목록 조회 중 오류 발생: ", ee);
            result.setErrorCode(-1);
            result.setErrorMsg("급여 조회 오류 발생");
        }
        return result;
    }
    
    @Transactional(rollbackOn = Exception.class)
    @RequestMapping(value = "/updatePayEtc.do")
    public NexacroResult updatePayEtc(@ParamDataSet(name = "ds_Pay") List<PayDTO> ds_Pay) {
        NexacroResult result = new NexacroResult();
        try {
            for (PayDTO payDTO : ds_Pay) {
                // 로그 추가
                logger.info("수정 요청 - empCode: {}, payYear: {}, payMonth: {}, etc: {}");
                
                // 필수 값 확인
                if (payDTO.getEmpCode() == null || payDTO.getPayYear() == 0 || payDTO.getPayMonth() == 0 || payDTO.getEtc() == null) {
                    result.setErrorCode(-1);
                    String missingField = (payDTO.getEmpCode() == null) ? "사번" : (payDTO.getPayYear() == 0) ? "급여년도" : (payDTO.getPayMonth() == 0) ? "급여월" : "수정액";
                    result.setErrorMsg(missingField + "이(가) 누락되었습니다.");
                    return result;
                }

                // 수정 처리
                payService.updatePayEtc(payDTO);
            }
            result.setErrorCode(0);
            result.setErrorMsg("수정이 성공적으로 완료되었습니다.");
        } catch (Exception e) {
            logger.error("수정 중 오류 발생: ", e);
            result.setErrorCode(-1);
            result.setErrorMsg("데이터베이스 오류 또는 잘못된 데이터입니다.");
        }
        return result;
    }
    
    @RequestMapping(value = "/deletePayData.do")
    public NexacroResult deletePayData(@ParamDataSet(name = "ds_Pay") List<PayDTO> ds_Pay) {
        NexacroResult result = new NexacroResult();
        try {
            for (PayDTO payDTO : ds_Pay) {
                if ("1".equals(payDTO.getChk())) {  // 체크된 데이터만 삭제
                    payService.deletePay(payDTO);  // PayService에서 삭제 처리
                }
            }
            result.setErrorCode(0);
            result.setErrorMsg("선택된 데이터가 삭제되었습니다.");
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("삭제 중 오류 발생: " + e.getMessage());
        }
        return result;
    }
    
    


   

}






