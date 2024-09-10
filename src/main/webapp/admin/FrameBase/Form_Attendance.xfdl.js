(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Attendance");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Title","15","15","350","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 출/퇴근 기록 관리");
            obj.set_font("32px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("SearchType","520","80","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","640","80","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Start","840","80","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_End","1030","80","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","1190","80","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1000","80","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_font("24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_Atten","20","130","1240","460",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"138\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"근무 일자\"/><Cell col=\"3\" text=\"근무 형태\"/><Cell col=\"4\" text=\"출근 시간\"/><Cell col=\"5\" text=\"퇴근 시간\"/><Cell col=\"6\" text=\"초과 근무 시간\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Submit","1180","600","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_code","200","600","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","330","600","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_work_date","530","600","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("edt_work_type","760","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","20","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("txt_emp_code","140","600","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사번 : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_name","270","600","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이름 : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_date","420","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("근무 일자  : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_type","660","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("근무 형태 : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Attendance_onload,this);
        };
        this.loadIncludeScript("Form_Attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
