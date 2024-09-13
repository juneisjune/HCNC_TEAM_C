package hcnc.cteam.post;

import java.util.Map;

public interface LoginService {
    boolean authenticate(String userId, String password);

	Map<String, Object> getUserInfoByUserId(String userId);
}


