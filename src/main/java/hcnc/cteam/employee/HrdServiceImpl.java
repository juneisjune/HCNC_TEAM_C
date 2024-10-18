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
		hrdm.updateMng();
	}

	@Override
	public void updateMng() {
		
	}

	@Override
	public List<Map<String, Object>> getHrdHistory(Map<String, Object> param) {
		return hrdm.getHrdHistory(param);
	}

	@Override
	public int selectHrdHistoryForDepOut(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return hrdm.selectHrdHistoryForDepOut(param);
	}

	@Override
	public int countHrdHistory(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return hrdm.countHrdHistory(param);
	}

	@Override
	public void insertHrdHistory(Map<String, Object> param) {
		// TODO Auto-generated method stub
		hrdm.insertHrdHistory(param);
	}

	@Override
	public void updateDepOutIsNull(Map<String, Object> param) {
		// TODO Auto-generated method stub
		hrdm.updateDepOutIsNull(param);
	}
	
}
