package hcnc.cteam.evaluation;

public class EvaluationDTO {
    
    private String empCode;
    private String name;
    private String evalDate;
    private int totalScore;
    private int score;
    private String evalGrade;
    private String guideCode;
    private String regName;
    private String depCode;
    
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
	public String getEvalDate() {
		return evalDate;
	}
	public void setEvalDate(String evalDate) {
		this.evalDate = evalDate;
	}
	public int gettotalScore() {
		return totalScore;
	}
	public void settotalScore(int totalScore) {
		this.totalScore = totalScore;
	}
	public String getEvalGrade() {
		return evalGrade;
	}
	public void setEvalGrade(String evalGrade) {
		this.evalGrade = evalGrade;
	}
	public String getGuideCode() {
        return guideCode;
    }
    public void setGuideCode(String guideCode) {
        this.guideCode = guideCode;
    }
    public String getRegName() {
        return regName;
    }
    public void setRegName(String regName) {
        this.regName = regName;
    }
	public String getDepCode() {
		return depCode;
	}
	public void setDepCode(String depCode) {
		this.depCode = depCode;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	
    
}
