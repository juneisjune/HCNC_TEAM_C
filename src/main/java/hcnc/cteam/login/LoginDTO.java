package hcnc.cteam.login;

import java.time.LocalDate;
import java.time.LocalTime;

public class LoginDTO {
	private int empCode;
	private Integer assignCode;
	private Integer depCode;
	private String id;
	private String password;
	private String name;
	private String email;
	
	private LocalTime workStart;
	private LocalTime workEnd;
	private LocalDate workDate;
	
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
	}
	public Integer getAssignCode() {
		return assignCode;
	}
	public void setAssignCode(Integer assignCode) {
		this.assignCode = assignCode;
	}
	public Integer getDepCode() {
		return depCode;
	}
	public void setDepCode(Integer depCode) {
		this.depCode = depCode;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public LocalDate getWorkDate() {
		return workDate;
	}
	public void setWorkDate(LocalDate workDate) {
		this.workDate = workDate;
	}
	

}
