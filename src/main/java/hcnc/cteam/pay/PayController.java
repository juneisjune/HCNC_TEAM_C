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
            List<PayDTO> ds_Pay = payService.nexaGetPayListByCondition(param);
            result.addDataSet("ds_Pay", ds_Pay);  // Nexacro에 데이터셋 추가
        } catch (Exception ee) {
            logger.error("급여 목록 조회 중 오류 발생: ", ee);
            result.setErrorCode(-1);
            result.setErrorMsg("급여 조회 오류 발생");
        }
        return result;
    }


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
                    result.setErrorMsg("필수 입력값이 누락되었습니다.");
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
            result.setErrorMsg("수정 중 오류 발생");
        }
        return result;
    }

}
