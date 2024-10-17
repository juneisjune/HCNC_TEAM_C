(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Atten");
            this.set_titletext("근태 정보");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AttenList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"STRING\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"STRING\" size=\"256\"/><Column id=\"workEnd\" type=\"STRING\" size=\"256\"/><Column id=\"condition\" type=\"INT\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Title", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WorkType", this);
            obj._setContents("<ColumnInfo><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">출근</Col></Row><Row><Col id=\"Name\">결근</Col></Row><Row><Col id=\"Name\">휴가</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_Title","190","25","220","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_background("whitesmoke");
            obj.set_cssclass("stc_popup");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_empCode","30","120","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사번");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_name","290","120","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_assignName","30","210","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("직책");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_depName","290","210","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부서명");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_workDate","30","300","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("근무일자");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_workType","290","300","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("근무형태");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_workStart","30","390","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출근시간");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("sta_workEnd","290","390","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("퇴근시간");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","260","480","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_workType","370","300","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_WorkType");
            obj.set_codecolumn("Name");
            obj.set_datacolumn("Name");
            obj.set_font("bold 16px/normal \"HY궁서B\"");
            obj.set_text("출근");
            obj.set_value("출근");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empCode","110","122","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","370","122","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_assignName","110","210","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depName","370","210","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_workDate","110","300","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy년 MM월 dd일");
            obj.set_editformat("yyyy년 MM월 dd일");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maskedt_workStart","110","390","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maskedt_workEnd","370","390","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("string");
            obj.set_format("##:##");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","sta_Title","text","ds_Title","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_empCode","value","ds_AttenList","empCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_name","value","ds_AttenList","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_assignName","value","ds_AttenList","assignName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_depName","value","ds_AttenList","depName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cmb_workType","value","ds_AttenList","attenType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_workDate","value","ds_AttenList","workDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","maskedt_workEnd","value","ds_AttenList","workEnd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","maskedt_workStart","value","ds_AttenList","workStart");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Atten.xfdl", function() {

        this.Popup_Atten_onload = function(obj,e)
        {
        	this.ds_AttenList.clearData();
        	this.ds_AttenList.addRow();
        	this.ds_AttenList.setColumn(0, "condition", this.parent.condition);

        	// 등록 시 dataset
        	if(this.ds_AttenList.getColumn(0, "condition") == 0) {
        		this.ds_Title.setColumn(0, "title", "근태 정보 등록");
        	}

        	// 수정 시 dataset
        	if(this.ds_AttenList.getColumn(0, "condition") == 1) {
        		this.ds_Title.setColumn(0, "title", "근태 정보 수정");

        		this.ds_AttenList.setColumn(0, "empCode", this.parent.empCode);
        		this.ds_AttenList.setColumn(0, "name", this.parent.name);
        		this.ds_AttenList.setColumn(0, "assignName", this.parent.assignName);
        		this.ds_AttenList.setColumn(0, "depName", this.parent.depName);
        		this.ds_AttenList.setColumn(0, "workDate", this.parent.workDate);
        		this.ds_AttenList.setColumn(0, "attenType", this.parent.attenType);
        		this.ds_AttenList.setColumn(0, "workStart", this.parent.workStart);
        		this.ds_AttenList.setColumn(0, "workEnd", this.parent.workEnd);

        	}
        	this.edt_name.setFocus();
        };

        // 저장 버튼
        this.btn_Save_onclick = function(obj,e)
        {
        	this.edt_name.setFocus();

        	// 출근 입력 시 유효성 검사
        	if (this.ds_AttenList.getColumn(0, "attenType")=="출근") {

        		var workStart = this.ds_AttenList.getColumn(0, "workStart");
        		var workEnd = this.ds_AttenList.getColumn(0, "workEnd");

                if(!workStart || !workEnd) {
        			alert("출근시간 또는 퇴근시간을 입력하세요.");
        			this.cmb_workType.setFocus();
        			return;
        		}

        		var startHour = parseInt(workStart.slice(0, 2), 10);
        		var startMinute = parseInt(workStart.slice(2, 4), 10);
        		var endHour = parseInt(workEnd.slice(0, 2), 10);
        		var endMinute = parseInt(workEnd.slice(2, 4), 10);

        		if (startHour > 23 || startMinute > 59) {
        			alert("출근시간을 올바르게 입력해주세요.");
        			this.maskedt_workStart.setFocus();
        			return;
        		}

        		if (endHour > 23 || endMinute > 59) {
        			alert("퇴근시간을 올바르게 입력해주세요.");
        			this.maskedt_workEnd.setFocus();
        			return;
        		}

        		if (startHour > endHour || (startHour == endHour && startMinute > endMinute)) {
        			alert("시간을 올바르게 입력해주세요.");
        			this.maskedt_workEnd.setFocus();
        			return;
        		}
            }

        		this.ds_AttenList.setColumn(0, "admin_name", nexacro.getApplication().ds_userInfo.getColumn(0, "name"));

        	var strSvcId    = "attenSave";
        	var strSvcUrl   = "svc::attenSave.do";
        	var inData      = "ds_AttenList=ds_AttenList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 콜백 함수
        this.fnCallback = function (svcID, errorCode, errorMsg) {

        	// 근태 저장 콜백
        	if(svcID == "attenSave"){
        		if (errorCode < 0) {
        			alert(errorMsg);
        			return;
        		}

        		alert("저장이 완료되었습니다.");
        		this.close('Close Popup');

        		this.opener.fnSearch();
        	}

        	// 사번 입력 후 콜백
        	if(svcID == "selectUserInfo"){
        		if (errorCode < 0) {
        			alert(errorMsg);

        			this.ds_AttenList.setColumn(0, "empCode", null);
        			this.ds_AttenList.setColumn(0, "name", "");
        			this.ds_AttenList.setColumn(0, "assignName", "");
        			this.ds_AttenList.setColumn(0, "depName", "");

        			return;
        		}
        	}
        };

        // 사번 입력 후 해당 직원 정보 가져오기
        this.edt_empCode_onchanged = function(obj,e)
        {
        	var strSvcId    = "selectUserInfo";
        	var strSvcUrl   = "svc::selectUserInfo.do";
        	var inData      = "ds_AttenList=ds_AttenList";
        	var outData     = "ds_AttenList=ds_AttenList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_Atten_onload,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.edt_empCode.addEventHandler("onchanged",this.edt_empCode_onchanged,this);
        };
        this.loadIncludeScript("Popup_Atten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
