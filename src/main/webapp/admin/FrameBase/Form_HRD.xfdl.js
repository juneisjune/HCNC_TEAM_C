(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_HRD");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">ALL</Col><Col id=\"Name\">전체</Col></Row><Row><Col id=\"Value\">EMP_CODE</Col><Col id=\"Name\">사번</Col></Row><Row><Col id=\"Value\">NAME</Col><Col id=\"Name\">이름</Col></Row><Row><Col id=\"Value\">DEP_NAME</Col><Col id=\"Name\">부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hrdlist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"mng_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"mng_code\" type=\"INT\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Department", this);
            obj._setContents("<ColumnInfo><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dep_code\">1</Col><Col id=\"dep_name\">경영지원부</Col></Row><Row><Col id=\"dep_code\">2</Col><Col id=\"dep_name\">SI사업부</Col></Row><Row><Col id=\"dep_code\">3</Col><Col id=\"dep_name\">솔루션개발부</Col></Row><Row><Col id=\"dep_code\">4</Col><Col id=\"dep_name\">기술개발부</Col></Row><Row><Col id=\"dep_code\">5</Col><Col id=\"dep_name\">자동화사업부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Assignment", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assign_code\">1</Col><Col id=\"assign_name\">사원</Col></Row><Row><Col id=\"assign_code\">2</Col><Col id=\"assign_name\">대리</Col></Row><Row><Col id=\"assign_code\">3</Col><Col id=\"assign_name\">과장</Col></Row><Row><Col id=\"assign_code\">4</Col><Col id=\"assign_name\">차장</Col></Row><Row><Col id=\"assign_code\">5</Col><Col id=\"assign_name\">부장</Col></Row><Row><Col id=\"assign_code\">6</Col><Col id=\"assign_name\">이사</Col></Row><Row><Col id=\"assign_code\">7</Col><Col id=\"assign_name\">대표</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_UpdateHrdlist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"mng_code\" type=\"INT\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_date\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assignDate", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSIGN_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","36","23","174","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","160","110","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_HrdListSearch","620","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_HrdList","36","150","742","400",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Hrdlist");
            obj.set_autoenter("none");
            obj.set_autoupdatetype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"122\"/><Column size=\"106\"/><Column size=\"77\"/><Column size=\"130\"/><Column size=\"115\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"3\" text=\"직책\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"부서장\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:emp_code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"combotext\" edittype=\"combo\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendarpopuptype=\"none\" text=\"bind:dep_code\" combodataset=\"ds_Department\" combocodecol=\"dep_code\" combodatacol=\"dep_name\" textAlign=\"center\"/><Cell col=\"3\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"combotext\" text=\"bind:assign_code\" edittype=\"combo\" combodataset=\"ds_Assignment\" combocodecol=\"assign_code\" combodatacol=\"assign_name\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:mng_name\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:join_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendarshowmonthspin=\"true\" calendarshowyearspin=\"true\" calendardisplaynulltype=\"none\" calendarautoselect=\"true\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:resign_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendarshowmonthspin=\"true\" calendarshowyearspin=\"true\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","36","110","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_innerdataset("ds_SearchType");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Savehrd","707","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_check");
            this.addChild(obj.name, obj);

            obj = new Calendar("Cal_Appointment","480","110","124","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","404","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("발령일");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_SearchWord","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearchType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Cal_Appointment","value","ds_assignDate","ASSIGN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_HRD.xfdl", function() {

        //처리콜백 함수
        this.fn_Callback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "hrdList":
        			break;
        		case "hrdListUpdate":
        			this.fnSearchList();
        			break;
        		default :
        			break;
        	}
        };


        // 조회 함수
        this.fnSearchList = function(){

        	// 컨트롤러 호출
        	var strSvcId    = "hrdList";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::hrdList.do";             // 호출 URL
        	var inData      = "ds_Search=ds_Search";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_Hrdlist=ds_Hrdlist";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fn_Callback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        }

        this.btn_HrdListSearch_onclick = function(obj,e)
        {
        	this.grd_HrdList.setFocus();
        	this.fnSearchList();
        };

        this.Form_HRD_onload = function(obj,e)
        {
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");
        	this.fnSearchList();
        };


        //저장 버튼
        this.btn_Savehrd_onclick = function(obj,e)
        {
        	this.grd_HrdList.setFocus();
        	 // 유효성 검사를 먼저 수행
            if (!this.validateBeforeUpdate()) {
                return;
            }

        	this.ds_UpdateHrdlist.clearData();  // 이전 데이터 초기화

        	// application 변수에서 emp_code와 assign_code를 가져옴
        	var loginAdminName = nexacro.getApplication().ds_userInfo.getColumn(0, "name");


            for (var i = 0; i < this.ds_Hrdlist.getRowCount(); i++) {
                var rowType = this.ds_Hrdlist.getRowType(i);

                // 변경된 데이터(ROWTYPE_UPDATE)만 처리
                if (rowType == Dataset.ROWTYPE_UPDATE) {
                    var newRow = this.ds_UpdateHrdlist.addRow();  // UpdateHrdlist에 새 행 추가
                    this.ds_UpdateHrdlist.copyRow(newRow, this.ds_Hrdlist, i);  // Hrdlist의 i번째 행을 복사
        			this.ds_UpdateHrdlist.setColumn(newRow,"admin_name",loginAdminName);
        			this.ds_UpdateHrdlist.setColumn(newRow, "assign_date", this.ds_assignDate.getColumn(0, "ASSIGN_DATE"));
                }
            }

                // 변경된 데이터가 있을 경우 저장 로직 실행
                var strSvcId    = "hrdListUpdate";                     // 콜백 서비스명
                var strSvcUrl   = "svc::hrdListUpdate.do";             // 호출 URL
                var inData      = "ds_UpdateHrdlist=ds_UpdateHrdlist";           // Request Dataset 파라미터, ':u'는 업데이트된 데이터만 전송
                var outData     = "";                                  // Response Dataset 파라미터
                var strArg      = "";                                  // Request 문자 파라미터
                var callBackFnc = "fn_Callback";                       // 콜백 후 실행 할 함수
                var isAsync     = true;                                // 동기/비동기 여부

                if(confirm("변경된 데이터를 저장하시겠습니까?")){
                    this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
                }
        };

        // 유효성 검사 함수 (Update 전)
        this.validateBeforeUpdate = function() {

            var dsHrdlist = this.lookup("ds_Hrdlist");

        	if(this.ds_assignDate.getColumn(0, "ASSIGN_DATE") == ''
        	|| this.ds_assignDate.getColumn(0, "ASSIGN_DATE") == 'undefined'
        	|| this.ds_assignDate.getColumn(0, "ASSIGN_DATE") == null){
        		alert("발령일을 입력하세요.");
        		return;
        	}

            // ds_Hrdlist의 모든 행을 검사
            for (var i = 0; i < dsHrdlist.getRowCount(); i++) {
                var joinDate = dsHrdlist.getColumn(i, "join_date"); // 입사일
                var resignDate = dsHrdlist.getColumn(i, "resign_date"); // 퇴사일

                // 퇴사일이 입사일 이전인지 확인
                if (resignDate && resignDate < joinDate) {
                    alert("퇴사일은 입사일 이전일 수 없습니다.");
                    return false;
                }

                // assign_code가 5인 경우 중복 여부 확인
                var assignCode = dsHrdlist.getColumn(i, "assign_code");
                var depCode = dsHrdlist.getColumn(i, "dep_code");

                if (assignCode == "5" || assignCode == 5) {
                    // ds_Hrdlist의 다른 행을 검사하여 동일한 부서에 assign_code 5가 있는지 확인
                    for (var j = 0; j < dsHrdlist.getRowCount(); j++) {
                        if (i === j) continue; // 동일한 행은 건너뜀

                        var hrdListDepCode = dsHrdlist.getColumn(j, "dep_code");
                        var hrdListAssignCode = dsHrdlist.getColumn(j, "assign_code");

                        // 동일한 부서에서 assign_code가 5인 데이터가 있는지 확인
                        if (hrdListDepCode == depCode && (hrdListAssignCode == "5" || hrdListAssignCode == 5)) {
                            alert("이미 해당 부서에 직책 코드 5(부장)가 존재합니다.");
                            return false;
                        }
                    }
                }
            }
            return true;
        };


        this.Cal_Appointment_onchanged = function(obj,e)
        {

        };

        // 그리드 헤드 더블 클릭 시 정렬
        this.grd_HrdList_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 0) {
                colId = "emp_code";
            } else if (e.col == 1) {
                colId = "name";
            } else if (e.col == 5) {
                colId = "join_date";
            } else if (e.col == 6) {
                colId = "resign_date";
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
            this.addEventHandler("onload",this.Form_HRD_onload,this);
            this.edt_SearchWord.addEventHandler("onchanged",this.edt_SearchWord_onchanged,this);
            this.btn_HrdListSearch.addEventHandler("onclick",this.btn_HrdListSearch_onclick,this);
            this.grd_HrdList.addEventHandler("onheaddblclick",this.grd_HrdList_onheaddblclick,this);
            this.cmb_SearchType.addEventHandler("onitemchanged",this.cmb_SearchType_onitemchanged,this);
            this.btn_Savehrd.addEventHandler("onclick",this.btn_Savehrd_onclick,this);
            this.Cal_Appointment.addEventHandler("onchanged",this.Cal_Appointment_onchanged,this);
        };
        this.loadIncludeScript("Form_HRD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
