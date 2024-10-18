package hcnc.cteam.attendance;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


public class DayoffDTO {

	private int empCode;
	private String name;
	private String depName;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date startDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date endDate;
	
	private int offCode;
	
	private String offType;
	private String reason;
	
	private String mngConfirm;
	private String mdConfirm;
	private String ceoConfirm;
	private String offResult;
	
	//조회 검색용
	private int startYear;
	private int endYear;
	private int startMonth;
	private int endMonth;
	
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepName() {
		return depName;
	}
	public void setDepName(String depName) {
		this.depName = depName;
	}

	public int getStartYear() {
		return startYear;
	}
	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}
	public int getEndYear() {
		return endYear;
	}
	public void setEndYear(int endYear) {
		this.endYear = endYear;
	}
	public int getStartMonth() {
		return startMonth;
	}
	public void setStartMonth(int startMonth) {
		this.startMonth = startMonth;
	}
	public int getEndMonth() {
		return endMonth;
	}
	public void setEndMonth(int endMonth) {
		this.endMonth = endMonth;
	}
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
	}
	

	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getOffType() {
		return offType;
	}
	public void setOffType(String offType) {
		this.offType = offType;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getMngConfirm() {
		return mngConfirm;
	}
	public void setMngConfirm(String mngConfirm) {
		this.mngConfirm = mngConfirm;
	}
	public String getMdConfirm() {
		return mdConfirm;
	}
	public void setMdConfirm(String mdConfirm) {
		this.mdConfirm = mdConfirm;
	}
	public String getCeoConfirm() {
		return ceoConfirm;
	}
	public void setCeoConfirm(String ceoConfirm) {
		this.ceoConfirm = ceoConfirm;
	}
	public int getOffCode() {
		return offCode;
	}
	public void setOffCode(int offCode) {
		this.offCode = offCode;
	}
	public String getOffResult() {
		return offResult;
	}
	public void setOffResult(String offResult) {
		this.offResult = offResult;
	}
	
	
	
	
	
}
