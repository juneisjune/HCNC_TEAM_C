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
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col></Row><Row><Col id=\"month\">2</Col></Row><Row><Col id=\"month\">3</Col></Row><Row><Col id=\"month\">4</Col></Row><Row><Col id=\"month\">5</Col></Row><Row><Col id=\"month\">6</Col></Row><Row><Col id=\"month\">7</Col></Row><Row><Col id=\"month\">8</Col></Row><Row><Col id=\"month\">9</Col></Row><Row><Col id=\"month\">10</Col></Row><Row><Col id=\"month\">11</Col></Row><Row><Col id=\"month\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pay", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"payYear\" type=\"STRING\" size=\"256\"/><Column id=\"payMonth\" type=\"STRING\" size=\"256\"/><Column id=\"actualPay\" type=\"STRING\" size=\"256\"/><Column id=\"etc\" type=\"INT\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"admName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox_Search","105","99","860","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_visible("true");
            obj.set_opacity("1");
            obj.set_tooltiptype("default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","230","119","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","870","113","77","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Static("emp_code","90","572","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사번");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("emp_nsme","246","575","60","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","144","579","92","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","297","579","106","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","630","574","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","585","122","40","28",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("7");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year","364","119","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_Search");
            obj.set_datacolumn("START_YEAR");
            obj.set_codecolumn("START_YEAR");
            obj.set_text("2021");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month","491","119","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_Month");
            obj.set_codecolumn("month");
            obj.set_datacolumn("month");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year00","635","119","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_Search");
            obj.set_datacolumn("END_YEAR");
            obj.set_codecolumn("END_YEAR");
            obj.set_text("2024");
            obj.set_value("2024");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ModPay","498","579","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","448","123","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("년");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","560","122","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("월");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","720","124","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("년");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","826","126","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("월");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("emp_","431","579","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("수정액");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","31","20","167","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("급여 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month00","760","119","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_value("10");
            obj.set_index("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearType","131","119","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("Name");
            obj.set_codecolumn("Value");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","775","574","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","30","177","935","381",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_Pay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"급여년도\"/><Cell col=\"6\" text=\"급여월\"/><Cell col=\"7\" text=\"지급액\"/><Cell col=\"8\" text=\"수정액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:payYear\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:payMonth\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:actualPay\"/><Cell col=\"8\" text=\"bind:etc\"/></Band></Format></Formats>");
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

            obj = new BindItem("item2","edt_ModPay","value","ds_Pay","etc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_Code","value","ds_Pay","empCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_CodeNm","value","ds_Pay","name");
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
            // 검색 조건 콤보박스 값 초기화 (전체 자동 선택)
            this.ds_Search.setColumn(0, "SEARCH_TYPE", "ALL");

            // 년도 및 월을 바로 설정 (조회 전에 자동으로 설정되도록)
            this.fnSetYearsAndMonths();  // 년도 및 월 설정 함수 호출

            // 첫 조회 실행
            this.fnSearch();
        };

        // 조회 버튼 클릭 시 호출되는 함수
        this.btn_Search_onclick = function(obj, e) {
            var searchType = this.ds_Search.getColumn(0, "SEARCH_TYPE");

            if (searchType === "ALL") {
                // 전체가 선택된 경우 년도 및 월 자동 설정
                this.fnSetYearsAndMonths();
            }

            // 조회 실행
            this.fnSearch();
        };

        // 조회 함수
        this.fnSearch = function() {
            // 검색 조건 확인 (필요하다면 조건 추가)
            console.log("SEARCH_TYPE = " + this.ds_Search.getColumn(0, "SEARCH_TYPE"));
            console.log("SEARCH_WORD = " + this.ds_Search.getColumn(0, "SEARCH_WORD"));

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
            var startYear = currentYear - 2;  // 현재 년도에서 -2년
            var endYear = currentYear;        // 현재 년도

            // ds_Search에 START_YEAR과 END_YEAR 설정
            this.ds_Search.setColumn(0, "START_YEAR", startYear);
            this.ds_Search.setColumn(0, "END_YEAR", endYear);

            // ComboBox에 년도 값 설정
            this.com_year.set_value(startYear);
            this.com_year00.set_value(endYear);

            // 월 자동 설정 (첫 번째 월은 1월, 두 번째 월은 10월)
            var startMonth = 1;
            var endMonth = 10;

            this.ds_Search.setColumn(0, "START_MONTH", startMonth);
            this.ds_Search.setColumn(0, "END_MONTH", endMonth);

            // ComboBox에 월 값 설정
            this.com_Month.set_value(startMonth);
            this.com_Month00.set_value(endMonth);
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
                        console.log("Row " + i + ": chk = " + chkValue);

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
            var empCode = this.edt_Code.value;
            var name = this.edt_CodeNm.value;
            var modPay = this.edt_ModPay.value;

            if (!empCode || !name || !modPay || isNaN(modPay)) {
                this.alert("사번, 이름, 수정액을 모두 입력해주세요.");
                return;
            }

            var selectedRow = this.ds_Pay.findRowExpr("empCode == '" + empCode + "' && name == '" + name + "'");
            if (selectedRow == -1) {
                this.alert("해당 사번의 데이터를 찾을 수 없습니다.");
                return;
            }

        	var admName = nexacro.getApplication().ds_userInfo.getColumn(0, "name");

            // 지급액과 수정액 반영
            var actualPay = this.ds_Pay.getColumn(selectedRow, "actualPay");
            var modPayValue = parseInt(modPay);
            var newActualPay = actualPay + modPayValue;

            this.ds_Pay.setColumn(selectedRow, "actualPay", newActualPay);  // 지급액 업데이트
            this.ds_Pay.setColumn(selectedRow, "etc", modPayValue);         // 수정액 업데이트
        	this.ds_Pay.setColumn(selectedRow, "admName", admName);


            // 서버로 수정 요청 전송
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

                    // 데이터셋 업데이트 후 변경된 값이 반영되었는지 확인
                    this.ds_Pay.applyChange();  // 그리드에 반영
                    break;
                default:
                    break;
            }
        };












        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_UpdatePay_onload,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.emp_code.addEventHandler("onclick",this.emp_onclick,this);
            this.edt_Code.addEventHandler("onchanged",this.edt_Code_onchanged,this);
            this.edt_CodeNm.addEventHandler("onchanged",this.edt_CodeNm_onchanged,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.com_year.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_year00.addEventHandler("onitemchanged",this.com_year00_onitemchanged,this);
            this.edt_ModPay.addEventHandler("onchanged",this.edt_ModPay_onchanged,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.com_Month00.addEventHandler("onitemchanged",this.com_Month00_onitemchanged,this);
            this.cmb_SearType.addEventHandler("onitemchanged",this.cmb_SearType_onitemchanged,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.grd_CodeMst.addEventHandler("onheadclick",this.grd_CodeMst_onheadclick,this);
        };
        this.loadIncludeScript("Form_UpdatePay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
