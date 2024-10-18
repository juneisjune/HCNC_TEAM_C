package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface PostService {
    // 게시글 목록 조회
    List<Map<String, Object>> selectPost(Map<String, Object> param);
    
    //게시글 상세 조회
    Map<String, Object> selectPostDetail(int postCode);
    //조회수 증가 관련
    void increaseViewCount(int postCode);
    // 공지사항 등록 메서드
    //void insertPost(Map<String, Object> param, List<MultipartFile> fileList) throws Exception;
    void insertPost(Map<String, Object> param, List<Map<String, Object>> fileList) throws Exception;

    //파일 첨부 관련 메서드
    void saveAttachment(Map<String, Object> fileParam) throws Exception;
    //===================================//
    // 첨부파일 목록 조회 메서드 추가
    List<Map<String, Object>> selectAttachments(int postCode);

	Map<String, Object> selectAttachment(int attachCode);
	// 게시글 삭제
    void deletePost(int postCode) throws Exception;
    // 첨부파일 삭제 메서드 추가
    void deleteAttachment(int postCode) throws Exception;
    void updatePost(Map<String, Object> postInfo, List<Map<String, Object>> fileList) throws Exception;
    //===========================
    List<Map<String, Object>> selectPostWithPaging(int offset, int pageSize); // 페이징 적용된 게시글 조회
    int getTotalPostCount(); // 전체 게시글 수 조회
    // 게시글 다중 삭제 메서드 추가
    void deletePosts(List<Integer> postCodes) throws Exception;


	
}
