package hcnc.cteam.attendance;

import java.util.Date;

public class NexaAttenDTO {

	private int empCode; // 직원 코드(사번)
	private String name; // 직원 이름
	private String assignName; //직급
	private String depName; // 부서명
	private Date workDate; // 근무 일자
	private String attenType; // 근무 형태
	private String workStart; // 출근 시간
	private String workEnd; // 퇴근 시간
	private double workOver; // 초과 근무 시간
	private String admin_name; //관리자 이름
	private String birth; // 직원 생일
	private String gender; // 직원 성별
	
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
	public String getAssignName() {
		return assignName;
	}
	public void setAssignName(String assignName) {
		this.assignName = assignName;
	}
	public String getDepName() {
		return depName;
	}
	public void setDepName(String depName) {
		this.depName = depName;
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
	public String getWorkStart() {
		return workStart;
	}
	public void setWorkStart(String workStart) {
		this.workStart = workStart;
	}
	public String getWorkEnd() {
		return workEnd;
	}
	public void setWorkEnd(String workEnd) {
		this.workEnd = workEnd;
	}
	public double getWorkOver() {
		return workOver;
	}
	public void setWorkOver(double workOver) {
		this.workOver = workOver;
	}
	public String getManagerName() {
		return admin_name;
	}
	public void setManagerName(String managerName) {
		this.admin_name = managerName;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
}
