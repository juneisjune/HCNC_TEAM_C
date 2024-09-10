package hcnc.cteam.post;

import java.util.List;
import java.util.Map;

public interface PostService {
    // 게시글 목록 조회
    List<Map<String, Object>> selectPost(Map<String, Object> param);
}
