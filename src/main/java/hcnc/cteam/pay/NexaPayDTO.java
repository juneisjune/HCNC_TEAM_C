package hcnc.cteam.pay;

import java.sql.Date;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class NexaPayDTO {	
	private String chkVal;
	
	private int emp_code;
	private int pay_year;
	private int pay_month;
	
	private Date give_date;
	
	private int pay_over;
	private int pay_meal = 100000;
	private int absence;
	private int pay_amount;
	
	private int income_tax;
	private int resident_tax;
	private int national_tax;
	private int emp_insurance;
	private int health_insurance;
	private int longcare_insurance;
	private int actual_pay;
	private int etc;
	
	private double tax;
	
	private LocalDateTime reg_date;
	private String reg_name;
	private LocalDateTime upd_date;
	private String upd_name;
	
	
	
	public String getChkVal() {
		return chkVal;
	}
	public void setChkVal(String chkVal) {
		this.chkVal = chkVal;
	}
	public int getEmp_code() {
		return emp_code;
	}
	public void setEmp_code(int emp_code) {
		this.emp_code = emp_code;
	}
	public int getPay_year() {
		return pay_year;
	}
	public void setPay_year(int pay_year) {
		this.pay_year = pay_year;
	}
	public int getPay_month() {
		return pay_month;
	}
	public void setPay_month(int pay_month) {
		this.pay_month = pay_month;
	}
	public Date getGive_date() {
		return give_date;
	}
	public void setGive_date(Date give_date) {
		this.give_date = give_date;
	}
	public int getPay_over() {
		return pay_over;
	}
	public void setPay_over(int pay_over) {
		this.pay_over = pay_over;
	}
	public int getPay_meal() {
		return pay_meal;
	}
	public void setPay_meal(int pay_meal) {
		this.pay_meal = pay_meal;
	}
	public int getAbsence() {
		return absence;
	}
	public void setAbsence(int absence) {
		this.absence = absence;
	}
	public int getPay_amount() {
		return pay_amount;
	}
	public void setPay_amount(int pay_amount) {
		this.pay_amount = pay_amount;
	}
	public int getIncome_tax() {
		return income_tax;
	}
	public void setIncome_tax(int income_tax) {
		this.income_tax = income_tax;
	}
	public int getResident_tax() {
		return resident_tax;
	}
	public void setResident_tax(int resident_tax) {
		this.resident_tax = resident_tax;
	}
	public int getNational_tax() {
		return national_tax;
	}
	public void setNational_tax(int national_tax) {
		this.national_tax = national_tax;
	}
	public int getEmp_insurance() {
		return emp_insurance;
	}
	public void setEmp_insurance(int emp_insurance) {
		this.emp_insurance = emp_insurance;
	}
	public int getHealth_insurance() {
		return health_insurance;
	}
	public void setHealth_insurance(int health_insurance) {
		this.health_insurance = health_insurance;
	}
	public int getLongcare_insurance() {
		return longcare_insurance;
	}
	public void setLongcare_insurance(int longcare_insurance) {
		this.longcare_insurance = longcare_insurance;
	}
	public int getActual_pay() {
		return actual_pay;
	}
	public void setActual_pay(int actual_pay) {
		this.actual_pay = actual_pay;
	}
	public int getEtc() {
		return etc;
	}
	public void setEtc(int etc) {
		this.etc = etc;
	}
	public double getTax() {
		return tax;
	}
	public void setTax(double tax) {
		this.tax = tax;
	}
	public LocalDateTime getReg_date() {
		return reg_date;
	}
	public void setReg_date(LocalDateTime reg_date) {
		this.reg_date = reg_date;
	}
	public String getReg_name() {
		return reg_name;
	}
	public void setReg_name(String reg_name) {
		this.reg_name = reg_name;
	}
	public LocalDateTime getUpd_date() {
		return upd_date;
	}
	public void setUpd_date(LocalDateTime upd_date) {
		this.upd_date = upd_date;
	}
	public String getUpd_name() {
		return upd_name;
	}
	public void setUpd_name(String upd_name) {
		this.upd_name = upd_name;
	}

	
	
}
