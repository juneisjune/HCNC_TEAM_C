package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping(value="/post")
public class JspPostController {
	
	@Resource(name = "postService")
    private PostService postService;
	
	
	
	@RequestMapping(value="/viewPost.do")
	public String getPostList(Model model) {
		// 게시글 목록 조회
        List<Map<String, Object>> postList = postService.selectPost(null);
        
        // 모델에 게시글 목록 추가
        model.addAttribute("postList", postList);
        
        // post.jsp로 이동
        return "post";
	}
	
	@RequestMapping("/postDetail.do")
    public String getPostDetail(@RequestParam("post_code") int postCode, Model model) {
		//조회수 1증가
		postService.increaseViewCount(postCode);
        // 게시글 상세 정보 조회
        Map<String, Object> postDetail = postService.selectPostDetail(postCode);
        
        // 모델에 상세 정보 추가
        model.addAttribute("postDetail", postDetail);
        
        // postDetail.jsp로 이동
        return "postDetail";
    }
	
	
}
