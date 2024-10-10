package hcnc.cteam.pay;

import java.sql.Date;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;


public class PayDTO {
    private String depName;        // 부서명
    private String assignName;     // 직책명
    private String name;
    private String chk; 
    

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    public String getAssignName() {
        return assignName;
    }

    public void setAssignName(String assignName) {
        this.assignName = assignName;
    }
    
    

    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getChk() {
        return chk;
    }

    public void setChk(String chk) {
        this.chk = chk;
		
	}


	private int empCode;
	private int payYear;
	private int payMonth;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date giveDate;
	
	private int month;
	private int payOver;
	private int payMeal = 100000;
	private int absence;
	private int payAmount;
	private int incomeTax;
	private int residentTax;
	private int nationalTax;
	private int empInsurance;
	private int healthInsurance;
	private int longcareInsurance;
	private int actualPay;
	private int etc;
	
	private double tax;

	private LocalDateTime regDate;
	private String regName;
	private LocalDateTime updDate;
	private String admName;
	
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
	
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
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
	public int getAbsence() {
		return absence;
	}
	public void setAbsence(int absence) {
		this.absence = absence;
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
    public String getAdmName() {
        return admName;
    }
    public void setAdmName(String admName) {
        this.admName = admName;
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
	
}
