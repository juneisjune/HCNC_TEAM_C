package hcnc.cteam.employee;

import java.sql.Date;

public class employeeDTO {

	private int empCode;
	private int assignCode;
	private String assignName;
	
	private int depCode;
	private String depName;
	private String id;
	private String password;
	private String name;
	private Date birth;
	private String gender;
	private String phone;
	private String address;
	private String email;
	
	private Date joinDate;
	private Date resignDate;
	private String account;
	private int mngCode;
	
	private double dayoffCnt;
	private double remainCnt;
	
	
	public double getDayoffCnt() {
		return dayoffCnt;
	}
	public void setDayoffCnt(double dayoffCnt) {
		this.dayoffCnt = dayoffCnt;
	}
	public double getRemainCnt() {
		return remainCnt;
	}
	public void setRemainCnt(double remainCnt) {
		this.remainCnt = remainCnt;
	}
	public String getAssignName() {
		return assignName;
	}
	public void setAssignName(String assignName) {
		this.assignName = assignName;
	}
	
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
	}
	public int getAssignCode() {
		return assignCode;
	}
	public void setAssignCode(int assignCode) {
		this.assignCode = assignCode;
	}
	public int getDepCode() {
		return depCode;
	}
	public void setDepCode(int depCode) {
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
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public Date getResignDate() {
		return resignDate;
	}
	public void setResignDate(Date resignDate) {
		this.resignDate = resignDate;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public int getMngCode() {
		return mngCode;
	}
	public void setMngCode(int mngCode) {
		this.mngCode = mngCode;
	}
	public String getDepName() {
		return depName;
	}
	public void setDepName(String depName) {
		this.depName = depName;
	}

}
