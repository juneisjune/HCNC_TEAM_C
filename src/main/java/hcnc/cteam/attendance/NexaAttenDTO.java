package hcnc.cteam.attendance;

import java.sql.Date;
import java.sql.Time;

public class NexaAttenDTO {

	private int empCode; // 직원 코드(사번)
	private String name; // 직원 이름
	private Date workDate; // 근무 일자
	private String attenType; // 근무 형태
	private Time workStart; // 출근 시간
	private Time workEnd; // 퇴근 시간
	private long workOver; // 초과 근무 시간
	private String managerName; //관리자 이름
	
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getWorkDate() {
		return workDate;
	}
	public void setWorkDate(Date workDate) {
		this.workDate = workDate;
	}
	public String getAttenType() {
		return attenType;
	}
	public void setAttenType(String attenType) {
		this.attenType = attenType;
	}
	public Time getWorkStart() {
		return workStart;
	}
	public void setWorkStart(Time workStart) {
		this.workStart = workStart;
	}
	public Time getWorkEnd() {
		return workEnd;
	}
	public void setWorkEnd(Time workEnd) {
		this.workEnd = workEnd;
	}
	public long getWorkOver() {
		return workOver;
	}
	public void setWorkOver(long workOver) {
		this.workOver = workOver;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	
	
}
