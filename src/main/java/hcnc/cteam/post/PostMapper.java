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
    
 // 공지사항 등록 메서드
    void insertPost(Map<String, Object> param);

    // 첨부파일 등록 메서드
    void insertAttachment(Map<String, Object> param);

    //===================================//
 // 첨부파일 목록 조회 메서드 추가
    List<Map<String, Object>> selectAttachments(int postCode);
 // 단일 첨부파일 조회 메서드 추가
    Map<String, Object> selectAttachment(int attachCode);
    //=======여기까지 이상무=//
 // 게시글 삭제 메서드
    void deletePost(int postCode);
 // 게시글에 연결된 첨부파일 삭제
    void deleteAttachment(int postCode);
 // 게시글 수정 메서드 (추가)
    void updatePost(Map<String, Object> param);  // 제목과 내용을 업데이트하는 메서드

}
