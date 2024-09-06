package sample.service;

import java.util.List;
import java.util.Map;

public interface CodeService {
	/**
	 * 마스터 코드 리스트 조회
	 * @param param
	 * @return
	 */
	List<Map<String, Object>> selectCodeMst(Map<String, Object> param);

	/**
	 * 마스터 코드 저장(등록/수정)
	 * @param param
	 */
	void saveCodeMst(Map<String, Object> param);

	/**
	 * 마스터 코드 삭제
	 * @param param
	 */
	void deleteCodeMst(Map<String, Object> param);

	/**
	 * 세부 코드 리스트 조회
	 * @param param
	 * @return
	 */
	List<Map<String, Object>> selectCodeDtl(Map<String, Object> param);

	/**
	 * 세부 코드 저장(등록/수정)
	 * @param param
	 */
	void saveCodeDtl(Map<String, Object> param);

	/**
	 * 세부 코드 삭제
	 * @param param
	 */
	void deleteCodeDtl(Map<String, Object> param);

}