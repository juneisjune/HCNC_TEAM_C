package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

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
    
    // 급여 목록 조회
    @RequestMapping(value = "/selectPayList.do")
    public NexacroResult nexaSearchPay(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            // 서비스에서 조건에 맞는 급여 목록을 가져옵니다.
            List<PayDTO> ds_Pay = payService.nexaGetPayListByCondition(param);  // 올바르게 호출
            result.addDataSet("ds_Pay", ds_Pay);  // Nexacro에 데이터셋 추가
        } catch (Exception ee) {
            logger.error("급여 목록 조회 중 오류 발생: ", ee);
            result.setErrorCode(-1);
            result.setErrorMsg("급여 조회 오류 발생");
        }
        return result;
    }
}

