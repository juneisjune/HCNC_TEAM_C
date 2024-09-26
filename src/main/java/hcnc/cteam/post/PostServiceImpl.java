package hcnc.cteam.post;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
    public void insertPost(Map<String, Object> param, List<MultipartFile> fileList) throws Exception {
        // 공지사항 등록
    	// 공지사항 등록
        postMapper.insertPost(param);

        // param 맵에 post_code가 설정되었는지 확인
        System.out.println("param: " + param);

        // 생성된 게시글 번호 가져오기
        Object postCodeObj = param.get("post_code");
        if (postCodeObj == null) {
            throw new Exception("게시글 번호를 가져올 수 없습니다.");
        }
        int postCode = Integer.parseInt(String.valueOf(postCodeObj));

        // 첨부파일 저장
        if (fileList != null && !fileList.isEmpty()) {
            for (MultipartFile file : fileList) {
                String originalFileName = file.getOriginalFilename();
                String savedFileName = UUID.randomUUID().toString() + "_" + originalFileName;
                String uploadPath = "/upload/" + savedFileName; // 실제 업로드 경로 설정 필요

                // 파일 저장
                File dest = new File(uploadPath);
                file.transferTo(dest);

             // 첨부파일 정보 저장
                Map<String, Object> fileParam = new HashMap<>();
                fileParam.put("post_code", postCode);
                fileParam.put("emp_code", param.get("emp_code"));
                fileParam.put("attach_name", originalFileName);
                fileParam.put("attach_url", uploadPath);
                fileParam.put("reg_name", param.get("reg_name"));
                fileParam.put("upd_name", param.get("upd_name"));
                
                //첨부파일 정보 저장 관련 
                postMapper.insertAttachment(fileParam);
            }
        }
    }
    //첨부파일 관련
    @Override
    public void saveAttachment(Map<String, Object> fileParam) throws Exception {
        postMapper.insertAttachment(fileParam);
    }

    

    
}
