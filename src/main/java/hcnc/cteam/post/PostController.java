package hcnc.cteam.post;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;



@Controller
public class PostController {
    
    @Resource(name = "postService")
    private PostService postService;

    /**
     * 넥사크로 게시글 리스트 조회
    */
    @RequestMapping(value = "/selectPost.do")
    public NexacroResult selectPost(@ParamDataSet(name = "ds_Search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        
        try {
            // 서비스에서 데이터를 조회
            List<Map<String, Object>> ds_PostList = postService.selectPost(param);
            // 조회한 데이터를 Nexacro에 전달
            result.addDataSet("ds_Post", ds_PostList);
            
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("게시글 조회 중 오류 발생");
        }
        
        return result;
    }
    
    // 공지사항 등록 메서드 추가
    @RequestMapping(value = "/insertPost.do", method = RequestMethod.POST)
    public NexacroResult insertPost(
        @ParamDataSet(name = "ds_postInfo") Map<String, Object> param,
        @ParamDataSet(name = "ds_fileInfo") List<Map<String, Object>> fileList
    ) {
        NexacroResult result = new NexacroResult();

        try {
            // 공지사항 및 첨부파일 저장
            postService.insertPost(param, fileList);

            result.setErrorCode(0);
            result.setErrorMsg("공지사항이 성공적으로 등록되었습니다.");
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("공지사항 등록 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }

        return result;
    }
    //=======여기까지 이상무=//
    // 게시글 삭제 기능
    @RequestMapping(value = "/deletePost.do", method = RequestMethod.POST)
    public NexacroResult deletePost(@ParamDataSet(name = "ds_deleteCode") Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        
        try {
            // 전송된 post_code를 String으로 받아온 후, Integer로 변환
            String postCodeStr = (String) param.get("post_code");  // 문자열로 받아옴
            int postCode = Integer.parseInt(postCodeStr);  // 문자열을 int로 변환

            postService.deletePost(postCode);
            result.setErrorCode(0);
            result.setErrorMsg("게시글이 성공적으로 삭제되었습니다.");
        } catch (NumberFormatException e) {
            result.setErrorCode(-1);
            result.setErrorMsg("잘못된 게시글 번호 형식입니다: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("게시글 삭제 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }
        
        return result;
    }
    //=============================
    @RequestMapping(value = "/selectAttachments.do", method = RequestMethod.POST)
    public NexacroResult selectAttachments(@ParamDataSet(name = "ds_post") Map<String, Object> postParam) {
        NexacroResult result = new NexacroResult();

        try {
            int postCode = Integer.parseInt((String) postParam.get("post_code"));
            List<Map<String, Object>> attachmentList = postService.selectAttachments(postCode);  // 첨부파일 정보 조회
            result.addDataSet("Dataset00", attachmentList);  // 첨부파일 정보 추가
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("첨부파일 조회 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }

        return result;
    }
    @RequestMapping(value = "/updatePost.do", method = RequestMethod.POST)
    public NexacroResult updatePost(
        @ParamDataSet(name = "ds_postInfo") Map<String, Object> postInfo,
        @ParamDataSet(name = "ds_fileInfo") List<Map<String, Object>> fileList) {

        NexacroResult result = new NexacroResult();

        try {
            // 로그 출력
            System.out.println("postInfo: " + postInfo);
            System.out.println("fileList: " + fileList);

            postService.updatePost(postInfo, fileList);  // 게시글과 첨부파일 업데이트 처리
            result.setErrorCode(0);
            result.setErrorMsg("수정 사항이 성공적으로 반영되었습니다.");
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("게시글 수정 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }

        return result;
    }
    @RequestMapping(value = "/postDetail.do")
    public NexacroResult getPostDetail(@ParamDataSet(name = "ds_Post") Map<String, Object> param) {
        NexacroResult result = new NexacroResult();

        try {
            int postCode = Integer.parseInt(String.valueOf(param.get("post_code")));

            // 조회수 증가
            postService.increaseViewCount(postCode);

            // 게시글 상세 정보 조회
            Map<String, Object> postDetail = postService.selectPostDetail(postCode);

          

            // 첨부파일 목록 조회
            List<Map<String, Object>> attachments = postService.selectAttachments(postCode);

            // 결과를 NexacroResult에 담기
            List<Map<String, Object>> postDetailList = new ArrayList<>();
            postDetailList.add(postDetail);

            result.addDataSet("ds_Post", postDetailList);
            result.addDataSet("ds_Attachments", attachments);

        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("게시글 상세 조회 중 오류 발생: " + e.getMessage());
        }
        return result;
    }
    
    //버튼 삭제 관련
    @RequestMapping(value = "/deletePosts.do", method = RequestMethod.POST)
    public NexacroResult deletePosts(@ParamDataSet(name = "ds_Delete") List<Map<String, Object>> paramList) {
        NexacroResult result = new NexacroResult();

        try {
            List<Integer> postCodes = new ArrayList<>();
            for (Map<String, Object> param : paramList) {
                Object postCodeObj = param.get("post_code");
                if (postCodeObj == null) {
                    System.out.println("post_code 값이 null입니다.");
                    continue; // 또는 예외 처리
                }
                int postCode = Integer.parseInt(postCodeObj.toString());
                postCodes.add(postCode);
            }
            // 서비스 메서드 호출
            postService.deletePosts(postCodes);

            result.setErrorCode(0);
            result.setErrorMsg("게시글이 성공적으로 삭제되었습니다.");
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg("게시글 삭제 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }

        return result;
    }










}
