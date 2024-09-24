package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

public interface AttenService {

	public List<AttenDTO> getAttenList(Map<String, Object> params);

	public List<AttenDTO> getAttenListByCondition(Map<String, Object> params);
	
}
