package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface HrdService {
	
	public List<Map<String, Object>> getHrdList(Map<String,Object> param);
	
	public void updateHRD(Map<String,Object> param);
}
