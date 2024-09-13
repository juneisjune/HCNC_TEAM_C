package hcnc.cteam.pay;

public class PaySearchDTO {
	private int empCode;
	
	private int startYear;
	private int startMonth;
	private int endYear;
	private int endMonth;
	
	private int payYear;
	private int payMonth;
	
	public PaySearchDTO() {
		
	}
	
	public PaySearchDTO (int empCode, int payYear, int payMonth) {
		this.empCode = empCode;
		this.payYear = payYear;
		this.payMonth = payMonth;
	}
	
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
	}
	public int getStartYear() {
		return startYear;
	}
	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}
	public int getStartMonth() {
		return startMonth;
	}
	public void setStartMonth(int startMonth) {
		this.startMonth = startMonth;
	}
	public int getEndYear() {
		return endYear;
	}
	public void setEndYear(int endYear) {
		this.endYear = endYear;
	}
	public int getEndMonth() {
		return endMonth;
	}
	public void setEndMonth(int endMonth) {
		this.endMonth = endMonth;
	}
	public int getPayYear() {
		return payYear;
	}
	public void setPayYear(int payYear) {
		this.payYear = payYear;
	}
	public int getPayMonth() {
		return payMonth;
	}
	public void setPayMonth(int payMonth) {
		this.payMonth = payMonth;
	}
	
		
	
}
