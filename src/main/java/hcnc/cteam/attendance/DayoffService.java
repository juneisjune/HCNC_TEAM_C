package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface DayoffService {
	
	public List<Map<String,Object>> offRequest(Map<String,Object> param);
	
	public void updateConfirm(Map<String, Object> param);
	public void updateReturn(Map<String, Object> param);
	
		
}
