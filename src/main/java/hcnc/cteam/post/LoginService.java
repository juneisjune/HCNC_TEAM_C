package hcnc.cteam.post;

public interface LoginService {
    boolean authenticate(String userId, String password);
}
