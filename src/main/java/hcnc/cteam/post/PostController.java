package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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




}
