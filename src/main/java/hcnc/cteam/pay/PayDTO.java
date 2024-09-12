package hcnc.cteam.pay;

import java.sql.Date;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class PayDTO {
	private int empCode;
	private int payYear;
	private int payMonth;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date giveDate;
	
	private int payMeal = 100000;
	private int payOver;
	private int payAmount;
	private int incomeTax;
	private int residentTax;
	private int nationalTax;
	private int empInsurance;
	private int healthInsurance;
	private int longcareInsurance;
	private int actualPay;

	private LocalDateTime regDate;
	private String regName;
	private LocalDateTime updDate;
	private String updName;
	
	public int getEmpCode() {
		return empCode;
	}
	public void setEmpCode(int empCode) {
		this.empCode = empCode;
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
	public Date getGiveDate() {
		return giveDate;
	}
	public void setGiveDate(Date giveDate) {
		this.giveDate = giveDate;
	}
	public int getPayOver() {
		return payOver;
	}
	public void setPayOver(int payOver) {
		this.payOver = payOver;
	}
	public int getPayMeal() {
		return payMeal;
	}
	public void setPayMeal(int payMeal) {
		this.payMeal = payMeal;
	}
	public int getPayAmount() {
		return payAmount;
	}
	public void setPayAmount(int payAmount) {
		this.payAmount = payAmount;
	}
	public int getIncomeTax() {
		return incomeTax;
	}
	public void setIncomeTax(int incomeTax) {
		this.incomeTax = incomeTax;
	}
	public int getResidentTax() {
		return residentTax;
	}
	public void setResidentTax(int residentTax) {
		this.residentTax = residentTax;
	}
	public int getNationalTax() {
		return nationalTax;
	}
	public void setNationalTax(int nationalTax) {
		this.nationalTax = nationalTax;
	}
	public int getEmpInsurance() {
		return empInsurance;
	}
	public void setEmpInsurance(int empInsurance) {
		this.empInsurance = empInsurance;
	}
	public int getHealthInsurance() {
		return healthInsurance;
	}
	public void setHealthInsurance(int healthInsurance) {
		this.healthInsurance = healthInsurance;
	}
	public int getLongcareInsurance() {
		return longcareInsurance;
	}
	public void setLongcareInsurance(int longcareInsurance) {
		this.longcareInsurance = longcareInsurance;
	}
	public int getActualPay() {
		return actualPay;
	}
	public void setActualPay(int actualPay) {
		this.actualPay = actualPay;
	}
	public LocalDateTime getRegDate() {
		return regDate;
	}
	public void setRegDate(LocalDateTime regDate) {
		this.regDate = regDate;
	}
	public String getRegName() {
		return regName;
	}
	public void setRegName(String regName) {
		this.regName = regName;
	}
	public LocalDateTime getUpdDate() {
		return updDate;
	}
	public void setUpdDate(LocalDateTime updDate) {
		this.updDate = updDate;
	}
	public String getUpdName() {
		return updName;
	}
	public void setUpdName(String updName) {
		this.updName = updName;
	}

}
