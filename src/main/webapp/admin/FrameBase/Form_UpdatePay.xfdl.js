(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_UpdatePay");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">ALL</Col><Col id=\"Name\">전체</Col></Row><Row><Col id=\"Value\">ASSIGNMENT</Col><Col id=\"Name\">직책</Col></Row><Row><Col id=\"Value\">DEPARTMENT</Col><Col id=\"Name\">부서</Col></Row><Row><Col id=\"Value\">NAME</Col><Col id=\"Name\">이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"START_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"END_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"END_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pay", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"payYear\" type=\"STRING\" size=\"256\"/><Column id=\"payMonth\" type=\"STRING\" size=\"256\"/><Column id=\"actualPay\" type=\"STRING\" size=\"256\"/><Column id=\"etc\" type=\"STRING\" size=\"256\"/><Column id=\"totalPay\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"admName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_Search","130","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","755","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","835","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","449","110","40","30",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("3");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year","258","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("2021");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month","365","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_Month");
            obj.set_codecolumn("month");
            obj.set_datacolumn("month");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year00","499","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("2024");
            obj.set_value("2024");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","332","110","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("년");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","420","110","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("월");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","574","110","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("년");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","670","110","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("월");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","31","20","167","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("급여 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month00","614","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_value("10");
            obj.set_index("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearType","30","110","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("Name");
            obj.set_codecolumn("Value");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","915","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","30","150","955","280",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_Pay");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"102\"/><Column size=\"99\"/><Column size=\"110\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"급여년도\"/><Cell col=\"6\" text=\"급여월\"/><Cell col=\"7\" text=\"공제후지급액\"/><Cell col=\"8\" text=\"기타금액\"/><Cell col=\"9\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:payYear\" textAlign=\"center\" displaytype=\"text\" mask=\"####\"/><Cell col=\"6\" text=\"bind:payMonth\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:actualPay\"/><Cell col=\"8\" text=\"bind:etc\"/><Cell col=\"9\" text=\"bind:totalPay\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst2","30","444","437","153",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_Pay");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"130\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\" textAlign=\"center\"/><Cell col=\"1\" text=\"이름\" textAlign=\"center\"/><Cell col=\"2\" text=\"기타금액\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:etc\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","com_year","value","ds_Search","START_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","com_Month","value","ds_Search","START_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","com_year00","value","ds_Search","END_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","com_Month00","value","ds_Search","END_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_UpdatePay.xfdl", function() {
        // 화면이 로드될 때 호출되는 함수
        this.Form_UpdatePay_onload = function(obj, e) {

        	 // 현재 년도 가져오기
            var currentYear = new Date().getFullYear();

            for (var i = 0; i < 3; i++) {
                var row = this.ds_Year.addRow();
                this.ds_Year.setColumn(row, "year", (currentYear - i).toString());
            }
        	for (var i=1; i<=12; i++){
        		var row = this.ds_Month.addRow();
        		this.ds_Month.setColumn(row, "month", i);
        	}
            // 검색 조건 콤보박스 값 초기화 (전체 자동 선택)
            this.ds_Search.setColumn(0, "SEARCH_TYPE", "ALL");

            // 년도 및 월을 바로 설정 (조회 전에 자동으로 설정되도록)
            this.fnSetYearsAndMonths();  // 년도 및 월 설정 함수 호출

            // 첫 조회 실행
            this.fnSearch();
        };

        // 조회 버튼 클릭 시 호출되는 함수
        this.btn_Search_onclick = function(obj, e) {
        	this.grd_CodeMst.setFocus();

            // 조회 실행
            this.fnSearch();
        };

        // 조회 함수
        this.fnSearch = function() {

            var empCode = this.ds_Search.getColumn(0, "SEARCH_EMP_CODE");
            var name = this.ds_Search.getColumn(0, "SEARCH_NAME");

            var strSvcId    = "searchPay";
            var strSvcUrl   = "svc::selectPayList.do";
            var inData      = "ds_Search=ds_Search";
            var outData     = "ds_Pay=ds_Pay";  // 서버에서 받은 데이터를 ds_Pay에 저장
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            // 데이터 트랜잭션 시작
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 년도 및 월 자동 설정 함수
        this.fnSetYearsAndMonths = function() {
            var currentYear = new Date().getFullYear();
            var startYear = currentYear;  // 현재 년도에서 -2년
            var endYear = currentYear;  // 현재 년도

            // ds_Search에 START_YEAR과 END_YEAR 설정
            this.ds_Search.setColumn(0, "START_YEAR", startYear);
            this.ds_Search.setColumn(0, "END_YEAR", endYear);

            // 월 자동 설정 (첫 번째 월은 1월, 두 번째 월은 10월)
            var startMonth = new Date().getMonth();
            var endMonth = new Date().getMonth() + 1;

            this.ds_Search.setColumn(0, "START_MONTH", startMonth);
            this.ds_Search.setColumn(0, "END_MONTH", endMonth);
        };

        // 처리 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            // 에러 처리
            if (errorCode == -1) {
                this.alert(errorMsg);
                return;
            }

            switch (svcID) {
                case "searchPay":
                    // 조회된 데이터에서 chk 컬럼 값이 제대로 설정되었는지 확인
                    for (var i = 0; i < this.ds_Pay.getRowCount(); i++) {
                        var chkValue = this.ds_Pay.getColumn(i, "chk");

                        // 만약 chk 값이 없다면 기본값 설정
                        if (chkValue == null || chkValue === "") {
                            this.ds_Pay.setColumn(i, "chk", "0");  // 기본적으로 체크 해제
                        }
                    }
                    break;
                default:
                    break;
            }
        };




        ////////////////////////////////////////////////////////////삭제


        this.btn_Delete_onclick = function(obj, e) {
        	this.grd_CodeMst.setFocus();

            var deleteList = [];

            // 체크된 데이터 수집
            for (var i = 0; i < this.ds_Pay.getRowCount(); i++) {
                if (this.ds_Pay.getColumn(i, "chk") == "1") {  // 체크된 경우
                    deleteList.push(i);  // 삭제할 데이터의 인덱스를 수집
                }
            }

            if (deleteList.length > 0) {
                // 서버로 삭제 요청 (삭제할 데이터 전송)
                var strSvcId    = "deletePayData";
                var strSvcUrl   = "svc::deletePayData.do";
                var inData      = "ds_Pay=ds_Pay";  // 삭제할 데이터를 포함하는 데이터셋 전송
                var outData     = "";
                var strArg      = "";  // 추가적인 데이터는 없음
                var callBackFnc = "fnDeleteCallback";
                var isAsync     = true;

                if (confirm("선택된 데이터를 삭제하시겠습니까?")) {
                    this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
                }
            } else {
                alert("삭제할 데이터를 선택하세요.");
            }
        };

        // 삭제 후 콜백 함수
        this.fnDeleteCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == -1) {
                this.alert("삭제 중 오류 발생: " + errorMsg);
                return;
            }

            switch (svcID) {
                case "deletePayData":
                    this.alert("삭제가 성공적으로 완료되었습니다.");

                    // 삭제된 데이터 그리드에서 제거
                    for (var i = this.ds_Pay.getRowCount() - 1; i >= 0; i--) {
                        if (this.ds_Pay.getColumn(i, "chk") == "1") {
                            this.ds_Pay.deleteRow(i);  // 그리드에서 행 삭제
                        }
                    }
                    break;
                default:
                    break;
            }
        };





        ////////////////////////////////////////////////////////////////////////수정


        this.btn_Update_onclick = function(obj, e) {
        	this.grd_CodeMst.setFocus();

            // 수정 액 입력 부분을 두 번째 그리드에서 직접 입력 받음 (이전 edt_Code, edt_CodeNm, edt_ModPay는 더 이상 사용하지 않음)
            var selectedRow = this.ds_Pay.rowposition; // 두 번째 그리드에서 선택된 행
            var modPay = this.ds_Pay.getColumn(selectedRow, "etc"); // 수정액 필드

            if (isNaN(modPay)) {
                this.alert("수정액을 올바르게 입력해주세요.");
        		this.grd_CodeMst2.setFocus();
                return;
            }

            // 수정자의 이름을 가져옴 (전역 변수 또는 세션에서 로그인된 사용자 정보)
            var admName = nexacro.getApplication().ds_userInfo.getColumn(0, "name");

            // 지급액과 수정액 반영
            var actualPay = this.ds_Pay.getColumn(selectedRow, "actualPay");

        	var newActPay = modPay + actualPay;

            this.ds_Pay.setColumn(selectedRow, "actualPay", newActPay);  // 지급액 업데이트
            this.ds_Pay.setColumn(selectedRow, "etc", modPay);         // 수정액 업데이트
            this.ds_Pay.setColumn(selectedRow, "admName", admName);         // 수정자의 이름 업데이트

            // 서버로 수정 내용 전송
            var strSvcId = "updatePayEtc";
            var strSvcUrl = "svc::updatePayEtc.do";
            var inData = "ds_Pay=ds_Pay";
            var outData = "ds_Pay=ds_Pay";
            var strArg = "";
            var callBackFnc = "fnCallback";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 트랜잭션 완료 후 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == -1) {
                this.alert("오류 발생: " + errorMsg);
                return;
            }

            switch(svcID) {
                case "updatePayEtc":
                    this.alert("수정이 성공적으로 완료되었습니다.");
        			this.fnSearch();
                    break;
                default:
                    break;
            }
        };

        // 그리드 헤드 더블 클릭 시 정렬
        this.grd_CodeMst_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 1) {
                colId = "empCode";
            } else if (e.col == 2) {
                colId = "name";
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
            this.addEventHandler("onload",this.Form_UpdatePay_onload,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.com_year.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_year00.addEventHandler("onitemchanged",this.com_year00_onitemchanged,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.com_Month00.addEventHandler("onitemchanged",this.com_Month00_onitemchanged,this);
            this.cmb_SearType.addEventHandler("onitemchanged",this.cmb_SearType_onitemchanged,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.grd_CodeMst.addEventHandler("onheadclick",this.grd_CodeMst_onheadclick,this);
            this.grd_CodeMst.addEventHandler("onheaddblclick",this.grd_CodeMst_onheaddblclick,this);
        };
        this.loadIncludeScript("Form_UpdatePay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
