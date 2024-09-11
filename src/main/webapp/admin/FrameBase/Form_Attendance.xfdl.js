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
            obj = new Dataset("ds_AttenList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"DATE\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"TIME\" size=\"256\"/><Column id=\"workEnd\" type=\"TIME\" size=\"256\"/><Column id=\"workOver\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"END_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">전체</Col><Col id=\"Value\">ALL</Col></Row><Row><Col id=\"Name\">이름</Col><Col id=\"Value\">NAME</Col></Row><Row><Col id=\"Name\">근무형태</Col><Col id=\"Value\">WORK_TYPE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Title","15","15","350","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 출/퇴근 기록 관리");
            obj.set_font("32px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","520","80","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
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
            obj.set_binddataset("ds_AttenList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"130\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"138\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"근무 일자\"/><Cell col=\"3\" text=\"근무 형태\"/><Cell col=\"4\" text=\"출근 시간\"/><Cell col=\"5\" text=\"퇴근 시간\"/><Cell col=\"6\" text=\"초과 근무 시간\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:workDate\" calendardateformat=\"yyyy년 MM월 dd일\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:attenType\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:workStart\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:workEnd\"/><Cell col=\"6\" text=\"bind:workOver\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Submit","1180","600","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emp_code","200","600","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_work_date","390","600","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Combo("edt_work_type","630","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","20","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Static("txt_emp_code","140","600","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사번 : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_date","280","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("근무 일자  : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_type","530","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("근무 형태 : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_start","749","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("출근 시간  : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("txt_work_end","950","600","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("퇴근 시간  : ");
            obj.set_font("18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_SearchWord","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearchType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_Start","value","ds_Search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_End","value","ds_Search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Attendance.xfdl", function() {

        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.Form_Attendance_onload = function(obj,e)
        {
        	// 검색 조건 콤보박스값 임의 부여
        	this.ds_Search.setColumn(0, "SEARCH_TYPE", "ALL");

        	this.fnSearch();
        };

        //조회 함수
        this.fnSearch = function(){

         	console.log("SEARCH_TYPE = " + this.ds_Search.getColumn(0, "SEARCH_TYPE"));
         	console.log("SEARCH_WORD = " + this.ds_Search.getColumn(0, "SEARCH_WORD"));
         	console.log("START_DATE = " + this.ds_Search.getColumn(0, "START_DATE"));
         	console.log("END_DATE = " + this.ds_Search.getColumn(0, "END_DATE"));

        	var strSvcId    = "selectAttenList"; 					// 콜백 서비스명
        	var strSvcUrl   = "svc::selectAttenList.do"; 			// 호출 URL
        	var inData      = "ds_Search=ds_Search"; 			// 앞=뒤 //앞은 컨트롤러단에서 받는 파라미터명 / 뒤는 넥사크로에서 보낼 파라미터명
        	var outData     = "ds_AttenList=ds_AttenList"; 	//inData와는 반대
        	var strArg      = ""; 								// 특정 문자열을 넘길 때 사용하는 매개변수, 구분자는 스페이스(공백)
        	var callBackFnc = "fnCallback"; 					// 콜백 후 실행 할 함수
        	var isAsync     = true; 							// 동기/ 비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectAttenList":
        			break;
        		default :
        		// 위 서비스 ID에 해당하지 않을 경우
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Attendance_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
        };
        this.loadIncludeScript("Form_Attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
