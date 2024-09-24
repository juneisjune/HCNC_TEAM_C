package hcnc.cteam.pay;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface PayMapper {

    List<PayDTO> nexaGetPayListByCondition(Map<String, Object> param);

	

	

	
}




