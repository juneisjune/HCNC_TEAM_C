package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("postMapper")
public interface PostMapper {
    // 게시글 목록을 조회하는 메서드
    List<Map<String, Object>> selectPost(Map<String, Object> param);
    
    //게시글 상세 조회 메서드 추가
    Map<String, Object > selectPostDetail(int postCode);
    
    //조회수 증가 관련
    void increaseViewCount(int postCode);
}
