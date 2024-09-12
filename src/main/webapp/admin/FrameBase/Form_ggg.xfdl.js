(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ggg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assignment\">all</Col><Col id=\"department\">전체</Col><Col id=\"employee\">all</Col></Row><Row><Col id=\"assignment\">assignment</Col><Col id=\"department\">직책</Col><Col id=\"employee\">assignment</Col></Row><Row><Col id=\"assignment\">department</Col><Col id=\"department\">부서</Col><Col id=\"employee\">department</Col></Row><Row><Col id=\"assignment\">employee</Col><Col id=\"department\">이름</Col><Col id=\"employee\">employee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_payInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"pay_month\" type=\"INT\" size=\"256\"/><Column id=\"pay_date\" type=\"DATE\" size=\"256\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\"/><Column id=\"reg_date\" type=\"DATE\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/><Column id=\"upd_date\" type=\"DATE\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"emp_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assignment", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"monthly\" type=\"INT\" size=\"256\"/><Column id=\"hourly\" type=\"INT\" size=\"256\"/><Column id=\"total_cnt\" type=\"INT\" size=\"256\"/><Column id=\"tax\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"DATE\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/><Column id=\"upd_date\" type=\"DATE\" size=\"256\"/><Column id=\"Columupd_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assignment\">assignment</Col><Col id=\"department\">department</Col><Col id=\"employee\">employee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Day", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year00", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Day00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_Search","190","60","104","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","310","62","76","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","400","62","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("emp_code","44","456","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Static("nsme","186","461","70","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","84","461","92","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","221","462","106","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","344","462","73","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","433","461","74","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","44","60","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("department");
            obj.set_codecolumn("assignment");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","44","145","516","301",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_CodeMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직책\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:assignment\"/><Cell col=\"1\" text=\"bind:department\"/><Cell col=\"2\" text=\"bind:employee\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","274","113","33","28",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year","44","114","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month","134","114","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Day","202","112","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_Day");
            obj.set_datacolumn("day");
            obj.set_codecolumn("day");
            obj.set_text("");
            obj.set_value("Day");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year00","311","112","79","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month00","404","114","58","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Day00","475","114","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_Day");
            obj.set_datacolumn("day");
            obj.set_codecolumn("day");
            obj.set_text("");
            obj.set_value("Day");
            obj.set_index("-1");
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
        this.registerScript("Form_ggg.xfdl", function() {
        this.Form_onload = function(obj, e) {
            this.ds_Search.setColumn(0, "SEARCH_TYPE", "ALL");
            this.fnInit();
        };

        this.fnInit = function() {
            this.grd_CodeMst.set_binddataset("ds_CodeMstList");

            this.edt_Code.set_readonly(true);
            this.edt_CodeNm.set_readonly(true);
            this.btn_Save.set_enable(false);
            this.btn_Delete.set_enable(false);

            // 필요한 필드만 초기화
            this.ds_CodeMst.setColumn(0, "assignment", "");
            this.ds_CodeMst.setColumn(0, "department", "");
            this.ds_CodeMst.setColumn(0, "employee", "");
        };

        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {
                this.alert("오류 발생: " + errorMsg);
                return;
            }

            switch (svcID) {
                case "selectAssignment":
                    // 조회 후 처리 로직 추가
                    break;
                case "saveAssignment":
                    alert("저장되었습니다.");
                    this.fnSearch();  // 저장 후 조회
                    break;
                case "deleteAssignment":
                    alert("삭제되었습니다.");
                    this.fnSearch();  // 삭제 후 조회
                    break;
                default:
                    this.alert("알 수 없는 서비스 ID: " + svcID);
                    break;
            }
        };

        this.fnSearch = function() {
            this.transaction(
                "selectAssignment",
                "/selectAssignment.do",
                "in_ds=ds_Search",
                "out_ds=ds_CodeMstList=ds_CodeMstList",
                "",
                "fnCallback"
            );
        };

        this.btn_Search_onclick = function(obj, e) {
            this.fnSearch();
        };

        this.btn_Add_onclick = function(obj, e) {
            var newRow = this.ds_CodeMst.addRow();
            this.ds_CodeMst.setColumn(newRow, "assignment", "");
            this.ds_CodeMst.setColumn(newRow, "department", "");
            this.ds_CodeMst.setColumn(newRow, "employee", "");

            this.edt_Code.set_readonly(false);
            this.edt_CodeNm.set_readonly(false);
            this.btn_Save.set_enable(true);
            this.btn_Delete.set_enable(false);

        	    // 트랜잭션으로 등록 요청
            this.transaction(
                "addAssignment",  // 트랜잭션 ID
                "/addAssignment.do",  // 실제 서버 URL
                "in_ds=ds_CodeMst:U",  // 입력 데이터셋
                "",  // 출력 데이터 없음
                "",  // 파라미터 없음
                "fnCallback"  // 콜백 함수
            );
        };

        this.btn_Save_onclick = function(obj,e)
        {
        	    // 수정할 데이터가 있는지 확인
            if (this.ds_CodeMst.getUpdatedRowCount() > 0) {
                // 트랜잭션으로 수정 요청
                this.transaction(
                    "updateAssignment",  // 트랜잭션 ID
                    "/updateAssignment.do",  // 실제 서버 URL
                    "in_ds=ds_CodeMst:U",  // 입력 데이터셋 (변경된 데이터)
                    "",  // 출력 데이터 없음
                    "",  // 파라미터 없음
                    "fnCallback"  // 콜백 함수
                );
            } else {
                alert("수정할 데이터가 없습니다.");
            }
        };







        this.com_year_onitemchanged = function(obj,e)
        {  // 현재 연도부터 과거 몇 년까지 콤보박스에 추가할지 설정
            var currentYear = new Date().getFullYear();  // 현재 연도 가져오기
            var startYear = currentYear - 2;  // 100년 전부터 설정

            // Combo에 바인딩할 Dataset 초기화
            this.ds_Year.clearData();  // 데이터셋 비우기

            // 연도 데이터 추가
            for (var i = currentYear; i >= startYear; i--) {
                var nRow = this.ds_Year.addRow();  // 새 행 추가
                this.ds_Year.setColumn(nRow, "year", i.toString());  // "year" 컬럼에 연도 값 넣기
            }

            // Combo에 Dataset 연결
            this.cmb_Year.set_innerdataset(this.ds_Year);  // 연도 데이터셋 연결
            this.cmb_Year.set_codecolumn("year");  // 콤보박스에서 사용할 값 설정 (value)
            this.cmb_Year.set_datacolumn("year");  // 화면에 보이는 값 설정 (text)
        };





        this.com_Day_onitemchanged = function(obj,e)
        {
        	    // Combo에 바인딩할 Dataset 초기화
            this.ds_Day.clearData();  // 일 데이터셋 비우기

            // 1일부터 31일까지 일 데이터를 추가
            for (var i = 1; i <= 31; i++) {
                var nRow = this.ds_Day.addRow();  // 새 행 추가
                var dayString = i < 10 ? "0" + i.toString() : i.toString();  // 일을 두 자리 문자열로 만듦
                this.ds_Day.setColumn(nRow, "day", dayString);  // "day" 컬럼에 값 넣기
            }

            // Combo에 Dataset 연결
            this.cmb_Day.set_innerdataset(this.ds_Day);  // 일 데이터셋 연결
            this.cmb_Day.set_codecolumn("day");  // 콤보박스에서 사용할 값 설정 (code)
            this.cmb_Day.set_datacolumn("day");  // 화면에 보이는 값 설정 (text)
        };



        this.com_Month_onitemchanged = function(obj,e)
        {

            this.ds_Month.clearData();  // 데이터 초기화

            for (var i = 1; i <= 12; i++) {
                var nRow = this.ds_Month.addRow();  // 새 행 추가
                var monthString = i < 10 ? "0" + i.toString() : i.toString();  // 월을 두 자리 문자열로 만듦
                this.ds_Month.setColumn(nRow, "month", monthString);  // 월 값 입력
            }

            this.cmb_Month.set_innerdataset(this.ds_Month);  // Dataset 연결
            this.cmb_Month.set_codecolumn("month");  // 코드 컬럼 설정
            this.cmb_Month.set_datacolumn("month");  // 데이터 컬럼 설정
        };








        // 조회 버튼 클릭 시 실행되는 함수
        this.btn_Search_onclick = function(obj, e)
        {
            // 전체 선택 여부 확인
            var searchType = this.cmb_SearchType.value;

            if (searchType == "전체") {
                // 서버에 전체 데이터를 요청하는 트랜잭션 실행
                this.transaction(
                    "searchAllData",                     // 트랜잭션 ID
                    "svc::searchEmployee.do",            // 서버 URL (컨트롤러 메서드와 연결)
                    "",                                  // 입력 데이터셋 (필요 시 지정)
                    "out_ds=outputDataset",              // 출력 데이터셋: 서버에서 받아올 데이터셋을 지정
                    "",                                  // 추가 파라미터가 없을 경우 공백
                    "fnCallback",                        // 콜백 함수
                    true                                 // 비동기 여부
                );
            }
        };

        // 콜백 함수: 서버에서 데이터를 받은 후 처리
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode < 0) {
                // 오류가 발생한 경우 처리
                this.alert("조회에 실패하였습니다: " + errorMsg);
                return;
            }

            if (svcID == "searchAllData") {
                // 정상적으로 데이터를 받은 경우, 그리드에 데이터셋 연결
                this.grd_Employee.set_binddataset("outputDataset");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.emp_code.addEventHandler("onclick",this.emp_onclick,this);
            this.edt_CodeNm.addEventHandler("onchanged",this.edt_CodeNm_onchanged,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.com_year.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_Day.addEventHandler("onitemchanged",this.com_Day_onitemchanged,this);
            this.com_year00.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month00.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_Day00.addEventHandler("onitemchanged",this.com_Day_onitemchanged,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_ggg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
