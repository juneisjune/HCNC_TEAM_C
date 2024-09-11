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
            
            // UI Components Initialize
            obj = new Combo("cmb_SearchType","15","85","150","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_empSearchType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("empName");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SearchWordLabel","480","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("검색어");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","530","85","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("emp_Search","685","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","15","120","725","190",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_empList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"직원 ID\"/><Cell col=\"1\" text=\"직원명\"/><Cell col=\"2\" text=\"부서명\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:empID\"/><Cell col=\"1\" text=\"bind:empName\"/><Cell col=\"2\" text=\"bind:empDept\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Code","15","325","40","30",null,null,null,null,null,null,this);
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","60","325","140","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("stc_EmpDept","15","360","68","30",null,null,null,null,null,null,this);
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpDept","60","360","140","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save","205","360","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete","255","360","50","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save00","205","325","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete00","255","325","50","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_taborder("12");
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
        this.registerScript("test.xfdl", function() {
        // 폼이 로드되었을 때 초기화 작업을 수행
        this.emp_Form_Code_onload = function(obj, e) {
            this.emp_fnInit();
        };

        // 데이터셋 및 UI 초기화
        this.emp_fnInit = function() {
            this.edt_Code.set_readonly(true);
            this.edt_CodeNm.set_readonly(true);
            this.edt_EmpDept.set_readonly(true);
            this.emp_Save.set_enable(false);
            this.emp_Delete.set_enable(false);

            // Edit 필드에 임의의 값 설정
            this.edt_CodeNm.set_value("홍길동");  // 직원명에 임의값 설정
            this.edt_EmpDept.set_value("인사부");  // 부서명에 임의값 설정

            // 데이터셋 초기화 로그 확인
            trace("폼 로드 완료 및 데이터셋 초기화");
            trace("ds_empSearch 데이터셋: " + this.ds_empSearch.saveXML());
            trace("ds_empDetail 데이터셋: " + this.ds_empDetail.saveXML());
        };

        // 직원 정보 조회 함수 (조회 버튼 클릭 시 호출)
        this.emp_Search_onclick = function(obj, e) {
            var searchValue = this.edt_Search.value;
            var searchType = this.cmb_SearchType.value; // 검색 타입

            // 검색어가 비어있는지 확인
            if (searchValue === "") {
                alert("검색어를 입력해주세요.");
                return;
            }

            // 검색 타입과 검색어를 데이터셋에 설정
            this.ds_empSearch.setColumn(0, "SEARCH_TYPE", searchType);  // 검색 타입 설정
            this.ds_empSearch.setColumn(0, "SEARCH_WORD", searchValue); // 검색어 설정

            // 서버로 조회 요청을 전송하는 트랜잭션
            var svcID = "selectEmployee";
            var strSvcUrl = "svc::selectEmployee.do";  // 트랜잭션 호출 URL
            var inData = "ds_empSearch=ds_empSearch";  // 검색 데이터셋 전송
            var outData = "ds_empList=ds_empList";  // 조회된 결과를 데이터셋에 저장
            var argument = "";
            var callback = "emp_fnCallback";  // 콜백 함수
            var isAsync = true;

            // 트랜잭션 호출
            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };

        // 직원 정보 저장 함수 (저장 버튼 클릭 시 호출)
        this.emp_Save_onclick = function(obj, e) {
            // 각 필드에서 값 읽어오기, 필드가 존재하지 않을 경우 대비하여 안전하게 값 처리
            var empID = this.edt_Code ? this.edt_Code.value : null;
            var empName = this.edt_CodeNm ? this.edt_CodeNm.value : null;
            var empDept = this.edt_EmpDept ? this.edt_EmpDept.value : null;

            // 필드 값 확인 로그 추가
            trace("저장 버튼 클릭: 직원 코드 필드 값: " + (empID !== null ? empID : "값 없음"));
            trace("저장 버튼 클릭: 직원명 필드 값: " + (empName !== null ? empName : "값 없음"));
            trace("저장 버튼 클릭: 부서명 필드 값: " + (empDept !== null ? empDept : "값 없음"));

            // 필수 입력 값 확인
            if (!empID || empID.trim() === "") {
                alert("직원 코드가 입력되지 않았습니다.");
                return;
            }

            if (!empName || empName.trim() === "") {
                alert("직원명이 입력되지 않았습니다.");
                return;
            }

            if (!empDept || empDept.trim() === "") {
                alert("부서명이 입력되지 않았습니다.");
                return;
            }

            // ds_empDetail에 값 설정 (필드가 비어 있지 않다고 가정)
            this.ds_empDetail.setColumn(0, "empID", empID);
            this.ds_empDetail.setColumn(0, "empName", empName);
            this.ds_empDetail.setColumn(0, "empDept", empDept);

            // 트랜잭션 설정 및 호출
            var svcID = "saveEmployee";
            var strSvcUrl = "svc::saveEmployee.do";
            var inData = "ds_empDetail=ds_empDetail";  // 데이터셋을 통해 전송
            var outData = "";
            var argument = "";  // 추가 매개변수 필요 없음
            var callback = "emp_fnCallback";
            var isAsync = true;

            // 트랜잭션 호출
            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };



        // 부서 저장 함수 (부서 저장 버튼 클릭 시 호출)
        this.dept_Save_onclick = function(obj, e) {
            var empDept = this.edt_EmpDept ? this.edt_EmpDept.value : null;

            if (!empDept) {
                alert("부서를 입력해주세요.");
                return;
            }

            // 부서 저장에 성공한 후 메시지 출력
            alert("입력하신 부서로 배정 되셨습니다.");

            // 트랜잭션 호출 예시 (서버에 저장)
            var svcID = "saveDepartment";
            var strSvcUrl = "svc::saveDepartment.do";
            var inData = "ds_empDetail=ds_empDetail";  // 데이터셋 전송
            var outData = "";
            var argument = "empDept=" + nexacro.wrapQuote(empDept);
            var callback = "emp_fnCallback";
            var isAsync = true;

            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };


        // 부서 삭제 함수 (부서 삭제 버튼 클릭 시 호출)
        this.dept_Delete_onclick = function(obj, e) {
            var empDept = this.edt_EmpDept ? this.edt_EmpDept.value : null;

            if (!empDept) {
                alert("부서를 선택해주세요.");
                return;
            }

            // 부서 삭제에 성공한 후 메시지 출력
            alert("부서 해지 되셨습니다.");

            // 트랜잭션 호출 예시 (서버에서 삭제)
            var svcID = "deleteDepartment";
            var strSvcUrl = "svc::deleteDepartment.do";
            var inData = "";  // 삭제할 데이터를 전송할 필요 없음
            var outData = "";
            var argument = "empDept=" + nexacro.wrapQuote(empDept);  // 서버로 부서 정보 전송
            var callback = "emp_fnCallback";
            var isAsync = true;

            // 트랜잭션 호출
            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };



        // 트랜잭션이 완료된 후 실행되는 콜백 함수
        this.emp_fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {
                // 에러 처리
                alert("Error: " + errorMsg);
            } else {
                // 성공 처리
                alert("서버에서 요청이 성공적으로 처리되었습니다.");
                trace("서버 응답 처리 완료");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.emp_Search.addEventHandler("onclick",this.emp_Search_onclick,this);
            this.edt_CodeNm.addEventHandler("onchanged",this.edt_CodeNm_onchanged,this);
            this.edt_EmpDept.addEventHandler("onchanged",this.edt_EmpDept_onchanged,this);
            this.emp_Save.addEventHandler("onclick",this.emp_Save_onclick,this);
            this.emp_Delete.addEventHandler("onclick",this.emp_Delete_onclick,this);
            this.emp_Save00.addEventHandler("onclick",this.emp_Save_onclick,this);
            this.emp_Delete00.addEventHandler("onclick",this.emp_Delete_onclick,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
