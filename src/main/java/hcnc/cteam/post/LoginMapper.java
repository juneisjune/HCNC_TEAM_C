package hcnc.cteam.post;

import java.util.Map;
import egovframework.rte.psl.dataaccess.mapper.Mapper;


@Mapper("loginMapper")
public interface LoginMapper {
    Map<String, Object> getUserByUserId(String userId);  // 사용자 아이디로 정보 조회
    int updateUserVerificationStatus(String userId);
}
