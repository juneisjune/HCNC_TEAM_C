package hcnc.cteam.attendance;

import java.sql.Date;
import java.time.LocalTime;

public class AttenDTO {

	private int empCode; // 직원 코드(사번)
	private String name; // 직원 이름
	private Date workDate; // 근무 일자
	private String attenType; // 근무 형태
	private LocalTime workStart; // 출근 시간
	private LocalTime workEnd; // 퇴근 시간
	private long workOver; // 초과 근무 시간
	private int attenCode; //근태코드

	public int getAttenCode() {
		return attenCode;
	}

	public void setAttenCode(int attenCode) {
		this.attenCode = attenCode;
	}

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

	public LocalTime getWorkStart() {
		return workStart;
	}

	public void setWorkStart(LocalTime workStart) {
		this.workStart = workStart;
	}

	public LocalTime getWorkEnd() {
		return workEnd;
	}

	public void setWorkEnd(LocalTime workEnd) {
		this.workEnd = workEnd;
	}

	public long getWorkOver() {
		return workOver;
	}

	public void setWorkOver(long workOver) {
		this.workOver = workOver;
	}

}
