(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_RegisterAtten");
            this.set_titletext("출/퇴근 정보 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">전체</Col><Col id=\"Value\">ALL</Col></Row><Row><Col id=\"Name\">이름</Col><Col id=\"Value\">NAME</Col></Row><Row><Col id=\"Name\">직책</Col><Col id=\"Value\">ASSIGNMENT</Col></Row><Row><Col id=\"Name\">부서명</Col><Col id=\"Value\">DEPARTMENT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WorkType", this);
            obj._setContents("<ColumnInfo><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">출근</Col></Row><Row><Col id=\"Name\">결근</Col></Row><Row><Col id=\"Name\">휴가</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttenList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"DATE\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"STRING\" size=\"256\"/><Column id=\"workEnd\" type=\"STRING\" size=\"256\"/><Column id=\"managerName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_SearchTitle","50","30","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 검색");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_SearchEmp","50","90","810","260",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_EmpList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"생년월일\"/><Cell col=\"5\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:birth\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy년 MM월 dd일\"/><Cell col=\"5\" text=\"bind:gender\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_RegisterTitle","50","370","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("근태 입력");
            obj.set_font("28px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","720","40","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SearchReset","800","40","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","410","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","520","40","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","950","30","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_Register","50","430","1000","130",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_AttenList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"120\"/><Column size=\"108\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"103\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"근무일자\"/><Cell col=\"5\" text=\"근무형태\"/><Cell col=\"6\" text=\"출근시간\"/><Cell col=\"7\" text=\"퇴근시간\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:workDate\" displaytype=\"date\" calendardateformat=\"yyyy년 MM월 dd일\" textAlign=\"center\" edittype=\"date\" calendareditformat=\"yyyy년 MM월 dd일\" calendardisplayinvalidtype=\"none\"/><Cell col=\"5\" text=\"bind:attenType\" displaytype=\"text\" textAlign=\"center\" edittype=\"combo\" combodataset=\"ds_WorkType\" combocodecol=\"Name\" combodatacol=\"Name\" comboautoselect=\"false\" autosizecol=\"default\" autosizerow=\"default\"/><Cell col=\"6\" text=\"bind:workStart\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"##:##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:workEnd\" textAlign=\"center\" edittype=\"mask\" maskedittype=\"string\" displaytype=\"mask\" calendareditformat=\"HH:mm\" maskeditformat=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Register","950","370","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("등록하기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_SearchType","value","ds_SearchEmp","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00","value","ds_SearchEmp","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_RegisterAtten.xfdl", function() {

        this.Popup_RegisterAtten_onload = function(obj,e)
        {
        	// 검색 조건 콤보박스값 임의 부여
        	this.ds_SearchEmp.setColumn(0, "SEARCH_TYPE", "ALL");

        	this.fnSearch();
        };

        //조회 함수
        this.fnSearch = function(){

         	console.log("SEARCH_TYPE = " + this.ds_SearchEmp.getColumn(0, "SEARCH_TYPE"));
         	console.log("SEARCH_WORD = " + this.ds_SearchEmp.getColumn(0, "SEARCH_WORD"));

        	var strSvcId    = "selectEmpList"; 					// 콜백 서비스명
        	var strSvcUrl   = "svc::selectEmpList.do"; 			// 호출 URL
        	var inData      = "ds_SearchEmp=ds_SearchEmp"; 		// 앞=뒤 //앞은 컨트롤러단에서 받는 파라미터명 / 뒤는 넥사크로에서 보낼 파라미터명
        	var outData     = "ds_EmpList=ds_EmpList"; 			//inData와는 반대
        	var strArg      = ""; 								// 특정 문자열을 넘길 때 사용하는 매개변수, 구분자는 스페이스(공백)
        	var callBackFnc = "fnCallback"; 					// 콜백 후 실행 할 함수
        	var isAsync     = true; 							// 동기/ 비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        // 직원 정보 검색 버튼
        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        // 초기화 버튼
        this.btn_SearchReset_onclick = function(obj,e)
        {
        	this.ds_SearchEmp.setColumn(0, "SEARCH_TYPE", "ALL");
        	this.ds_SearchEmp.setColumn(0, "SEARCH_WORD", "");
        };

        // 팝업 닫기 버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 직원 정보를 선택할 때
        this.grid_SearchEmp_oncellposchanged = function(obj,e)
        {
        	this.ds_AttenList.setColumn(0, "empCode", this.ds_EmpList.getColumn(this.ds_EmpList.rowposition, "empCode"))
        	this.ds_AttenList.setColumn(0, "name", this.ds_EmpList.getColumn(this.ds_EmpList.rowposition, "name"))
        	this.ds_AttenList.setColumn(0, "assignName", this.ds_EmpList.getColumn(this.ds_EmpList.rowposition, "assignName"))
        	this.ds_AttenList.setColumn(0, "depName", this.ds_EmpList.getColumn(this.ds_EmpList.rowposition, "depName"))
        	this.ds_AttenList.setColumn(0, "workDate", new Date())
        };

        this.btn_Register_onclick = function(obj,e) {

        	this.ds_AttenList.setColumn(0, "managerName", nexacro.getApplication().ds_userInfo.getColumn(0, "name"));

        	console.log(this.ds_AttenList.saveXML());

        	if (this.ds_AttenList.getColumn(0, "attenType")=="출근") {

        		var workStart = this.ds_AttenList.getColumn(0, "workStart");
        		var workEnd = this.ds_AttenList.getColumn(0, "workEnd");

                if(!workStart || !workEnd) {
        		alert("출근시간 또는 퇴근시간을 입력하세요.");
                return;
        		}

        		var startHour = parseInt(workStart.slice(0, 2), 10);
        		var startMinute = parseInt(workStart.slice(2, 4), 10);
        		var endHour = parseInt(workEnd.slice(0, 2), 10);
        		var endMinute = parseInt(workEnd.slice(2, 4), 10);

        		if (startHour > 23 || startMinute > 59) {
                alert("출근시간을 올바르게 입력해주세요.");
                return;
        		}

        		if (endHour > 23 || endMinute > 59) {
        			alert("퇴근시간을 올바르게 입력해주세요.");
        			return;
        		}

        		if (startHour > endHour || (startHour == endHour && startMinute > endMinute)) {
        			alert("시간을 올바르게 입력해주세요.");
        			return;
        		}
            }

        	console.log(this.ds_AttenList.saveXML());

        	var strSvcId    = "attenRegister";
        	var strSvcUrl   = "svc::attenRegister.do";
        	var inData      = "ds_AttenList=ds_AttenList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	alert("등록이 완료되었습니다.");
        	this.close('Close RegisterPopup');

        	this.opener.fnSearch();
        };

        this.cmb_SearchType_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_RegisterAtten_onload,this);
            this.grid_SearchEmp.addEventHandler("oncellposchanged",this.grid_SearchEmp_oncellposchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_SearchReset.addEventHandler("onclick",this.btn_SearchReset_onclick,this);
            this.cmb_SearchType.addEventHandler("onitemchanged",this.cmb_SearchType_onitemchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_Register.addEventHandler("onclick",this.btn_Register_onclick,this);
        };
        this.loadIncludeScript("Popup_RegisterAtten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
