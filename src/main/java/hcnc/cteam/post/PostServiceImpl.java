package hcnc.cteam.post;

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
    
}
