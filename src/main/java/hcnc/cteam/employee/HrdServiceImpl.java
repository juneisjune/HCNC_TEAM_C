package hcnc.cteam.employee;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HrdServiceImpl implements HrdService{
	
	@Autowired
	private HrdMapper hrdm;

	@Override
	public List<Map<String, Object>> getHrdList(Map<String, Object> param) {
		return hrdm.getHrdList(param);
	}

	@Override
	public void updateHRD(Map<String, Object> param) {
		hrdm.updateHRD(param);
	}
	
}
