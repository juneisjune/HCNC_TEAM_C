(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("Employee Management");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"empID\" type=\"STRING\" size=\"256\"/><Column id=\"empName\" type=\"STRING\" size=\"256\"/><Column id=\"empDept\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"empID\" type=\"STRING\" size=\"256\"/><Column id=\"empName\" type=\"STRING\" size=\"256\"/><Column id=\"empDept\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">empName</Col><Col id=\"name\">직원명 검색</Col></Row><Row><Col id=\"code\">empDept</Col><Col id=\"name\">부서명 검색</Col></Row><Row><Col id=\"code\">empID</Col><Col id=\"name\">직원 코드 검색</Col></Row><Row><Col id=\"code\">deptID</Col><Col id=\"name\">부서 코드 검색</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmb_SearchType","15","85","150","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_empSearchType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("empName");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SearchWordLabel","245","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("검색어");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","305","85","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("emp_Search","460","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","15","120","645","330",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_empList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"직원 ID\"/><Cell col=\"1\" text=\"직원명\"/><Cell col=\"2\" text=\"부서명\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:empID\"/><Cell col=\"1\" text=\"bind:empName\"/><Cell col=\"2\" text=\"bind:empDept\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code","10","470","40","30",null,null,null,null,null,null,this);
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","55","470","110","30",null,null,null,null,null,null,this);
            obj.set_value("bind:empName");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EmpDept","190","470","68","30",null,null,null,null,null,null,this);
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpDept","235","470","140","30",null,null,null,null,null,null,this);
            obj.set_value("bind:empDept");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save","375","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete","425","470","50","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EmployeeManagement.xfdl", function() {
        // 폼이 로드되었을 때 초기화 작업을 수행
        this.Form_Code_onload = function(obj, e) {
            this.fnInit();
        };

        // 데이터셋 및 UI 초기화
        this.fnInit = function() {
            this.edt_Code.set_readonly(true);
            this.edt_CodeNm.set_readonly(true);
            this.edt_EmpDept.set_readonly(true);
            this.emp_Save.set_enable(false);
            this.emp_Delete.set_enable(false);

            trace("폼 로드 완료 및 데이터셋 초기화");
            trace("ds_empSearch 데이터셋: " + this.ds_empSearch.saveXML());
            trace("ds_empDetail 데이터셋: " + this.ds_empDetail.saveXML());
        };

        // 직원 정보 조회 함수 (조회 버튼 클릭 시 호출)
        this.emp_Search_onclick = function(obj, e) {
            var searchValue = this.edt_Search.value;
            var searchType = this.cmb_SearchType.value;

            if (searchValue === "") {
                alert("검색어를 입력해주세요.");
                return;
            }

            this.ds_empSearch.setColumn(0, "SEARCH_TYPE", searchType);
            this.ds_empSearch.setColumn(0, "SEARCH_WORD", searchValue);

            var svcID = "selectEmployee";
            var strSvcUrl = "svc::selectEmployee.do";
            var inData = "ds_empSearch=ds_empSearch";
            var outData = "ds_empList=ds_empList";
            var argument = "searchType=" + searchType + " searchValue=" + searchValue;
            var callback = "fnCallback";
            var isAsync = true;

            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };

        // 직원 정보 저장 함수 (저장 버튼 클릭 시 호출)
        this.emp_Save_onclick = function(obj, e) {
            var empID = this.edt_Code.value;
            var empName = this.edt_CodeNm.value;
            var empDept = this.edt_EmpDept.value;

            if (!empID || !empName || !empDept) {
                alert("모든 필드를 입력해주세요.");
                return;
            }

            var svcID = "saveEmployee";
            var strSvcUrl = "svc::saveEmployee.do";
            var inData = "ds_empDetail=ds_empDetail";
            var outData = "";
            var argument = "";
            var callback = "fnCallback";
            var isAsync = true;

            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };

        // 직원 정보 삭제 함수 (삭제 버튼 클릭 시 호출)
        this.emp_Delete_onclick = function(obj, e) {
            var selectedRow = this.ds_empDetail.rowposition;

            if (selectedRow < 0) {
                alert("삭제할 직원을 선택해주세요.");
                return;
            }

            var empID = this.ds_empDetail.getColumn(selectedRow, "empID");

            if (confirm("정말로 이 직원 정보를 삭제하시겠습니까?")) {
                this.ds_empDetail.deleteRow(selectedRow);

                var svcID = "deleteEmployee";
                var strSvcUrl = "svc::deleteEmployee.do";
                var inData = "";
                var outData = "";
                var argument = "empID=" + empID;
                var callback = "fnCallback";

                this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
            }
        };

        // 트랜잭션이 완료된 후 실행되는 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {
                alert("Error: " + errorMsg);
            } else {
                alert("서버에서 직원 정보가 성공적으로 처리되었습니다.");
                this.ds_empList.clearData();
                this.ds_empList.loadXML(outData);
            }
        };

        // 직원 더블 클릭 시 정보 조회 및 수정
        this.emp_search_ondblclick = function(obj, e) {
            var searchValue = this.edt_Search.value;

            if (searchValue === "") {
                alert("검색어를 입력해주세요.");
                return;
            }

            var findRow = this.ds_empDetail.findRow("empName", searchValue);
            if (findRow < 0) {
                alert("일치하는 직원 정보가 없습니다.");
            } else {
                this.ds_empDetail.set_rowposition(findRow);
                alert("일치하는 직원 정보가 선택되었습니다.");

                this.edt_Code.set_value(this.ds_empDetail.getColumn(findRow, "empID"));
                this.edt_CodeNm.set_value(this.ds_empDetail.getColumn(findRow, "empName"));
                this.edt_EmpDept.set_value(this.ds_empDetail.getColumn(findRow, "empDept"));

                this.edt_Code.set_readonly(false);
                this.edt_CodeNm.set_readonly(false);
                this.edt_EmpDept.set_readonly(false);
                this.emp_Save.set_enable(true);
                this.emp_Delete.set_enable(true);
            }
        };

        // 수정 버튼 클릭 시 데이터 수정 처리
        this.emp_Modify_onclick = function(obj, e) {
            alert("수정 버튼이 클릭되었습니다.");
            // 추가 수정 기능 구현 필요
        };

        // 직원 수정 더블 클릭 처리
        this.emp_correction_ondblclick = function(obj, e) {
            alert("수정(보조) 버튼이 더블 클릭되었습니다.");
            // 추가 수정 기능 구현 필요
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.emp_Search.addEventHandler("onclick",this.emp_Search_onclick,this);
            this.edt_Code.addEventHandler("onchanged",this.edt_Code_onchanged,this);
            this.emp_Save.addEventHandler("onclick",this.emp_Save_onclick,this);
            this.emp_Delete.addEventHandler("onclick",this.emp_Delete_onclick,this);
        };
        this.loadIncludeScript("EmployeeManagement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
