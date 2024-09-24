package hcnc.cteam.attendance;

import java.util.List;

public interface DayoffUserService {
	
	public int sendRequest(DayoffDTO dayoffdto);
	
	public List<DayoffDTO> requestResult(DayoffDTO dayoffdto);

}
