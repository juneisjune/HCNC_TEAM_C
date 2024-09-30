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
	//=======여기까지 이상무=//
	// 게시글 삭제
    void deletePost(int postCode) throws Exception;
 // 첨부파일 삭제 메서드 추가
    void deleteAttachment(int postCode) throws Exception;


	
}
