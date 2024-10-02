package hcnc.cteam.pay;

public class PayDTO {
	private String empCode;        // 사번
    private String name;           // 이름
    private String depName;        // 부서명
    private String assignName;     // 직책명
    private int payYear;           // 급여년도
    private int payMonth;          // 급여월
    private int actualPay;         // 지급액 (원래 금액, 변경 없음)
    private String etc;            // 수정된 금액 (etc에 반영)
    private String chk; 
    
    public String getEmpCode() {
        return empCode;
    }

    public void setEmpCode(String empCode) {
        this.empCode = empCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getActualPay() {
        return actualPay;
    }

    public void setActualPay(int actualPay) {
        this.actualPay = actualPay;
    }

    public String getEtc() {
        return etc;
    }

    public void setEtc(String etc) {
        this.etc = etc;
    }

    public String getChk() {
        return chk;
    }

    public void setChk(String chk) {
        this.chk = chk;
		
	}


	}




