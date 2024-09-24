package hcnc.cteam.attendance;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface NexaAttenService {

	List<NexaAttenDTO> nexaGetAttenListByCondition(Map<String, Object> param);

}
