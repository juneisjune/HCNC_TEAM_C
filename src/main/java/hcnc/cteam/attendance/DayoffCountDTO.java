package hcnc.cteam.attendance;

import java.sql.Date;

public class DayoffCountDTO {
	
	private Date create_date;
	private int emp_code;
	private Date drop_date;
	private int dayoff_cnt;
	private double used_cnt;
	private double remain_cnt;
	private String reg_name;
	private String upd_name;
	
	
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public int getEmp_code() {
		return emp_code;
	}
	public void setEmp_code(int emp_code) {
		this.emp_code = emp_code;
	}
	public Date getDrop_date() {
		return drop_date;
	}
	public void setDrop_date(Date drop_date) {
		this.drop_date = drop_date;
	}
	public int getDayoff_cnt() {
		return dayoff_cnt;
	}
	public void setDayoff_cnt(int dayoff_cnt) {
		this.dayoff_cnt = dayoff_cnt;
	}
	public double getUsed_cnt() {
		return used_cnt;
	}
	public void setUsed_cnt(double used_cnt) {
		this.used_cnt = used_cnt;
	}
	public double getRemain_cnt() {
		return remain_cnt;
	}
	public void setRemain_cnt(double remain_cnt) {
		this.remain_cnt = remain_cnt;
	}
	public String getReg_name() {
		return reg_name;
	}
	public void setReg_name(String reg_name) {
		this.reg_name = reg_name;
	}
	public String getUpd_name() {
		return upd_name;
	}
	public void setUpd_name(String upd_name) {
		this.upd_name = upd_name;
	}
	
	
}
