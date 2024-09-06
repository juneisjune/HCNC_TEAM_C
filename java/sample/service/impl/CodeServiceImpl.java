package sample.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import sample.service.CodeService;

@Service("codeService")
public class CodeServiceImpl extends EgovAbstractServiceImpl implements CodeService {
	private Logger logger = LoggerFactory.getLogger(CodeServiceImpl.class);

	@Resource(name="txManager")
	PlatformTransactionManager transationManager;

    @Resource(name = "codeMapper")
    private CodeMapper mapper;

    /**
     * 마스터 코드 리스트 조회
     */
	@Override
	public List<Map<String, Object>> selectCodeMst(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectCodeMst(param);
	}

	/**
	 * 마스터 코드 저장(등록/수정)
	 */
	@Override
	public void saveCodeMst(Map<String, Object> param) {
		// TODO Auto-generated method stub
		DefaultTransactionDefinition transDef = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRED);
		transDef.setReadOnly(false);
		transDef.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
		TransactionStatus txStatus = transationManager.getTransaction(transDef);
		try {
			//mapper.saveCodeMst(param);
			int checkId = 0;
			// 키값 체크 쿼리 실행
			checkId = mapper.checkCodeMst(param);
			if(checkId == 0) {
				// 중복되는 키값이 없음
				mapper.insertCodeMst(param);
			}else if(checkId > 0) {
				// 중복되는 키값이 있음
				mapper.updateCodeMst(param);
			}
			transationManager.commit(txStatus);
		}catch(Exception ee) {
			System.out.println(ee);
			transationManager.rollback(txStatus);
		}
	}
	


	/**
	 * 마스터 코드 삭제
	 */
	@Override
	public void deleteCodeMst(Map<String, Object> param) {
		// TODO Auto-generated method stub
		DefaultTransactionDefinition transDef = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRED);
		transDef.setReadOnly(false);
		transDef.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
		TransactionStatus txStatus = transationManager.getTransaction(transDef);
		try {
			mapper.deleteCodeMst(param);
			transationManager.commit(txStatus);
		}catch(Exception ee) {
			System.out.println(ee);
			transationManager.rollback(txStatus);
		}
	}

	/**
	 * 세부 코드 리스트 조회
	 */
	@Override
	public List<Map<String, Object>> selectCodeDtl(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectCodeDtl(param);
	}

	/**
	 * 세부 코드 저장
	 */
	@Override
	public void saveCodeDtl(Map<String, Object> param) {
		// TODO Auto-generated method stub
		DefaultTransactionDefinition transDef = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRED);
		transDef.setReadOnly(false);
		transDef.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
		TransactionStatus txStatus = transationManager.getTransaction(transDef);
		try {
			//mapper.saveCodeDtl(param);
			int checkId = 0;
			// 키값 체크 쿼리 실행
			checkId = mapper.checkCodeDtl(param);
			if(checkId == 0) {
				// 중복되는 키값이 없음
				mapper.insertCodeDtl(param);
			}else if(checkId > 0) {
				// 중복되는 키값이 있음
				mapper.updateCodeDtl(param);
			}
			transationManager.commit(txStatus);
		}catch(Exception ee) {
			System.out.println(ee);
			transationManager.rollback(txStatus);
		}
	}

	/**
	 * 세부 코드 삭제
	 */
	@Override
	public void deleteCodeDtl(Map<String, Object> param) {
		// TODO Auto-generated method stub
		DefaultTransactionDefinition transDef = new DefaultTransactionDefinition(TransactionDefinition.PROPAGATION_REQUIRED);
		transDef.setReadOnly(false);
		transDef.setIsolationLevel(TransactionDefinition.ISOLATION_READ_COMMITTED);
		TransactionStatus txStatus = transationManager.getTransaction(transDef);
		try {
			mapper.deleteCodeDtl(param);
			transationManager.commit(txStatus);
		}catch(Exception ee) {
			System.out.println(ee);
			transationManager.rollback(txStatus);
		}
	}
}