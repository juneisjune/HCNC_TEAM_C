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
            this.set_titletext("출/퇴근 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1490,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AttenList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"STRING\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"STRING\" size=\"256\"/><Column id=\"workEnd\" type=\"STRING\" size=\"256\"/><Column id=\"workOver\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">전체</Col><Col id=\"Value\">ALL</Col></Row><Row><Col id=\"Name\">이름</Col><Col id=\"Value\">NAME</Col></Row><Row><Col id=\"Name\">직책</Col><Col id=\"Value\">ASSIGNMENT</Col></Row><Row><Col id=\"Name\">부서명</Col><Col id=\"Value\">DEPARTMENT</Col></Row><Row><Col id=\"Name\">근무형태</Col><Col id=\"Value\">WORK_TYPE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Condition", this);
            obj._setContents("<ColumnInfo><Column id=\"condition\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_Title","25","25","305","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 출/퇴근 기록 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","20","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","129","110","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Start","329","110","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_End","519","110","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","890","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_icon("url(\'imagerc::img_WF_search01.png\')");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","489","110","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_font("24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_Atten","20","150","1105","460",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_AttenList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"130\"/><Column size=\"104\"/><Column size=\"151\"/><Column size=\"173\"/><Column size=\"109\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"114\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"근무 일자\"/><Cell col=\"5\" text=\"근무 형태\"/><Cell col=\"6\" text=\"출근 시간\"/><Cell col=\"7\" text=\"퇴근 시간\"/><Cell col=\"8\" text=\"초과 근무 시간\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:workDate\" calendardateformat=\"yyyy년 MM월 dd일\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:attenType\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:workStart\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:workEnd\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:workOver\" textAlign=\"center\" maskeditformat=\"##0.0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EditAtten","975","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수정");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RegisterAtten","1055","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_cssclass("btn_regist");
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
        this.grid_Atten.setFocus();
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

        // 그리드에서 원하는 열 더블클릭 시 수정 팝업 호출
        this.grid_Atten_oncelldblclick = function(obj,e)
        {
        	this.ds_Condition.setColumn(0, "condition", 1);

        	var objParam = {condition:this.ds_Condition.getColumn(0, "condition")
        				  , empCode:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "empCode")
                          , name:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "name")
                          , assignName:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "assignName")
        				  , depName:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "depName")
        				  , workDate:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workDate")
        				  , attenType:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "attenType")
        				  , workStart:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workStart")
        				  , workEnd:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workEnd")};

        	this.showAtten(objParam);
        };

        // 수정 버튼 클릭 시 수정 팝업 호출
        this.btn_EditAtten_onclick = function(obj,e)
        {
        	this.grid_Atten.setFocus();
        	this.ds_Condition.setColumn(0, "condition", 1);

        	var objParam = {condition:this.ds_Condition.getColumn(0, "condition")
        				  , empCode:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "empCode")
                          , name:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "name")
                          , assignName:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "assignName")
        				  , depName:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "depName")
        				  , workDate:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workDate")
        				  , attenType:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "attenType")
        				  , workStart:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workStart")
        				  , workEnd:this.ds_AttenList.getColumn(this.ds_AttenList.rowposition, "workEnd")};

        	this.showAtten(objParam);
        };

        // 등록 버튼 클릭 시 등록 팝업 호출
        this.btn_RegisterAtten_onclick = function(obj,e)
        {
        	this.grid_Atten.setFocus();
        	this.ds_Condition.setColumn(0, "condition", 0);

        	var objParam = {condition:this.ds_Condition.getColumn(0, "condition")};

        	this.showAtten(objParam);
        };

        // 근태 팝업 호출
        this.showAtten = function (objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupRegisterAtten", 0, 0, 600, 600, null, null, "FrameBase::Popup_Atten.xfdl");
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("근태 화면");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");

        }

        // 헤드 더블 클릭 시 정렬
        this.grid_Atten_onheaddblclick = function(obj, e)
        {
            var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 0) {
                colId = "empCode";
            } else if (e.col == 1) {
                colId = "name";
            } else if (e.col == 4) {
                colId = "workDate";
            } else {
                return;
            }

            for (var i = 0; i < obj.getCellCount("head"); i++) {
                var sHeadText = obj.getCellText(-1, i);  // 헤더의 텍스트 가져오기
                var nLen = sHeadText.length - 1;  // 텍스트 길이 계산

                if (i == e.col) { // 클릭한 셀에 대해 처리
                    if (sHeadText.substr(nLen) == "▲") {  // 오름차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▼");
                        objDs.set_keystring("S:-" + colId);  // 내림차순 정렬
                    } else if (sHeadText.substr(nLen) == "▼") {  // 내림차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    } else {  // 정렬이 설정되지 않은 경우 기본 오름차순 적용
                        obj.setCellProperty("head", i, "text", sHeadText + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    }
                } else {
                    // 클릭되지 않은 다른 셀의 정렬 표시 제거
                    if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") {
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen));
                    }
                }
            }

            // 정렬 후 데이터셋 강제 적용
            objDs.applyChange();

        	// 정렬 후 첫 번째 행을 선택
            objDs.set_rowposition(0);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Attendance_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.grid_Atten.addEventHandler("oncelldblclick",this.grid_Atten_oncelldblclick,this);
            this.grid_Atten.addEventHandler("onheaddblclick",this.grid_Atten_onheaddblclick,this);
            this.btn_EditAtten.addEventHandler("onclick",this.btn_EditAtten_onclick,this);
            this.btn_RegisterAtten.addEventHandler("onclick",this.btn_RegisterAtten_onclick,this);
        };
        this.loadIncludeScript("Form_Attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
