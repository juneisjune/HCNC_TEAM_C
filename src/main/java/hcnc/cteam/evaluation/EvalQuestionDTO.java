package hcnc.cteam.evaluation;	

public class EvalQuestionDTO {
		
	private String question;
	private String guideCode;
	private String evalGrade;
	private String empCode;
	private String evalDate;
	private int totalScore;
	private int score;

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
    
    public String getguideCode() {
        return guideCode;
    }

    public void setguideCode(String guideCode) {
        this.guideCode = guideCode;
    }

	public String getEvalGrade() {
		return evalGrade;
	}

	public void setEvalGrade(String evalGrade) {
		this.evalGrade = evalGrade;
	}

	public int getTotalScore() {
		return totalScore;
	}

	public void setTotalScore(int totalScore) {
		this.totalScore = totalScore;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public String getEmpCode() {
		return empCode;
	}

	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}

	public String getEvalDate() {
		return evalDate;
	}

	public void setEvalDate(String evalDate) {
		this.evalDate = evalDate;
	}
	
}