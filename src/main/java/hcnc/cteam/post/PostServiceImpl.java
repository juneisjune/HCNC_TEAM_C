package hcnc.cteam.post;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("postService")
public class PostServiceImpl implements PostService {

    @Resource(name = "postMapper")
    private PostMapper postMapper;

    @Override
    public List<Map<String, Object>> selectPost(Map<String, Object> param) {
        // 데이터베이스에서 게시글 목록 조회
        return postMapper.selectPost(param);
    }
    
    @Override
    public Map<String, Object> selectPostDetail(int postCode){
    	return postMapper.selectPostDetail(postCode);
    }
    @Override
    public void increaseViewCount(int postCode) {
        postMapper.increaseViewCount(postCode);
    }
    @Override
    public void insertPost(Map<String, Object> param, List<Map<String, Object>> fileList) throws Exception {
        // 공지사항 등록
        postMapper.insertPost(param);

        // 생성된 게시글 번호 가져오기
        Object postCodeObj = param.get("post_code");
        if (postCodeObj == null) {
            throw new Exception("게시글 번호를 가져올 수 없습니다.");
        }
        int postCode = Integer.parseInt(String.valueOf(postCodeObj));

        // 첨부파일 정보 저장
        if (fileList != null && !fileList.isEmpty()) {
            System.out.println("fileList size: " + fileList.size());
            for (Map<String, Object> fileInfo : fileList) {
                System.out.println("fileInfo: " + fileInfo);

                // 키 값을 대문자로 사용
                String attachName = (String) fileInfo.get("filename");
                System.out.println("attachName: " + attachName);
                String attachUrl = (String) fileInfo.get("filename");
                System.out.println("attachUrl: " + attachUrl);
                

                // 값이 null인지 확인
                if (attachName == null || attachUrl == null) {
                    throw new Exception("파일 정보가 올바르지 않습니다. ATTACH_NAME 또는 ATTACH_URL이 null입니다.");
                }

                // 파일 저장 경로 설정
                String uploadPath = "D:\\upload\\" + attachUrl;

                Map<String, Object> fileParam = new HashMap<>();
                fileParam.put("post_code", postCode);
                fileParam.put("emp_code", param.get("emp_code"));
                fileParam.put("attach_name", attachName);
                fileParam.put("attach_url", uploadPath);
                fileParam.put("reg_name", param.get("reg_name"));
                fileParam.put("upd_name", param.get("upd_name"));
                
             // 서비스 코드에서
                System.out.println("fileInfo map:");
                for (Map<String, Object> fileInfo1 : fileList) {
                    for (Map.Entry<String, Object> entry : fileInfo1.entrySet()) {
                        System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
                    }
                }

                // 첨부파일 정보 저장
                postMapper.insertAttachment(fileParam);
            }
        } else {
            System.out.println("fileList is null or empty");
        }
    }
    //첨부파일 관련 디비 관련
    @Override
    public void saveAttachment(Map<String, Object> fileParam) throws Exception {
        postMapper.insertAttachment(fileParam);
    }
    //===================================//
    @Override
    public List<Map<String, Object>> selectAttachments(int postCode) {
        return postMapper.selectAttachments(postCode);
    }
    @Override
    public Map<String, Object> selectAttachment(int attachCode) {
        return postMapper.selectAttachment(attachCode);
    }
    

    

    
}
