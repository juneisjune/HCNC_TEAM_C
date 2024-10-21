package hcnc.cteam.attendance;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayoffUserServiceImpl implements DayoffUserService{

	
	@Autowired
	private DayoffUserMapper doMapper;
	
	@Override
	public int sendRequest(DayoffDTO dayoffdto) {
		return doMapper.sendRequest(dayoffdto);
	}

	@Override
	public List<DayoffDTO> requestResult(DayoffDTO dayoffdto) {
		return doMapper.requestResult(dayoffdto);
	}

	@Override
	public int findRequest(DayoffDTO dayoffdto) {
		// TODO Auto-generated method stub
		return doMapper.findRequest(dayoffdto);
	}
	

}
