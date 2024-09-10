package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class PostController {
    
    @Resource(name = "postService")
    private PostService postService;

    /**
     * 게시글 리스트 조회
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
}
