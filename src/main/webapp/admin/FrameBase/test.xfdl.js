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

            obj = new Static("stc_SearchWordLabel","525","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("검색어");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","560","85","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("emp_Search","715","85","50","30",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","15","120","755","195",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_empList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"57\"/><Column size=\"61\"/><Column size=\"48\"/><Column size=\"56\"/><Column size=\"48\"/><Column size=\"59\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"36\"/><Column size=\"57\"/><Column size=\"54\"/><Column size=\"56\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번코드\"/><Cell col=\"1\" text=\"직책코드\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"아이디\"/><Cell col=\"4\" text=\"비밀번호\"/><Cell col=\"5\" text=\"이름\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"주소\"/><Cell col=\"10\" text=\"이메일\"/><Cell col=\"11\" text=\"입사일\"/><Cell col=\"12\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell text=\"bind:emp_code\"/><Cell col=\"1\" text=\"bind:assign_code\"/><Cell col=\"2\" text=\"bind:dep_code\"/><Cell col=\"3\" text=\"bind:id\"/><Cell col=\"4\" text=\"bind:password\"/><Cell col=\"5\" text=\"bind:name\"/><Cell col=\"6\" text=\"bind:birth\"/><Cell col=\"7\" text=\"bind:gender\"/><Cell col=\"8\" text=\"bind:phone\"/><Cell col=\"9\" text=\"bind:address\"/><Cell col=\"10\" text=\"bind:email\"/><Cell col=\"11\" text=\"bind:join_date\"/><Cell col=\"12\" text=\"bind:account\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","15","325","140","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save00","165","325","50","30",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete00","225","325","50","30",null,null,null,null,null,null,this);
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
            //this.emp_fnInit();
        };
        this.fnSaveDtlSelected = function()
        {

        }

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
            var outData = "ds_empList=ds_empList";     // 조회된 결과를 데이터셋에 저장
            var argument = "";
            var callback = "emp_fnCallback";           // 콜백 함수
            var isAsync = true;

            // 트랜잭션 호출
            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };

        // 삭제 버튼 클릭 이벤트
        this.emp_Delete_onclick = function(obj, e) {
            if (!this.confirm("데이터를 삭제하시겠습니까?", ""))
                return;

            this.fnDeleteDtlSelected();
        };

        // 저장 버튼 클릭 이벤트
        this.emp_Save_onclick = function(obj, e) {
            if (!this.confirm("데이터를 저장하시겠습니까?", ""))
                return;

            this.fnSaveDtlSelected();
        };

        // Detail 선택 저장 함수 정의
        this.fnSaveDtlSelected = function() {
            // 저장할 데이터가 있는지 확인
            if (this.ds_empDetail.getRowCount() < 1) {
                alert("저장할 데이터가 없습니다.");
                return;
            }

            // 서버로 저장 요청을 전송하는 트랜잭션
            var svcID = "saveEmployeeDetail";
            var strSvcUrl = "svc::saveEmployeeDetail.do";
            var inData = "ds_empDetail=ds_empDetail:U";  // 변경된 데이터셋을 전송
            var outData = "";
            var argument = "";
            var callback = "emp_fnCallback";  // 콜백 함수
            var isAsync = true;

            // 트랜잭션 호출
            this.transaction(svcID, strSvcUrl, inData, outData, argument, callback);
        };

        // Detail 선택 삭제 함수 정의
        this.fnDeleteDtlSelected = function() {
            // 삭제할 데이터가 있는지 확인
            if (this.ds_empDetail.getRowCount() < 1) {
                alert("삭제할 데이터가 없습니다.");
                return;
            }

            // 현재 선택된 행 삭제
            this.ds_empDetail.deleteRow(this.ds_empDetail.rowposition);

            // 서버로 삭제 요청을 전송하는 트랜잭션
            var svcID = "deleteEmployeeDetail";
            var strSvcUrl = "svc::deleteEmployeeDetail.do";
            var inData = "ds_empDetail=ds_empDetail:U";  // 삭제된 데이터셋을 전송
            var outData = "";
            var argument = "";
            var callback = "emp_fnCallback";  // 콜백 함수
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
                switch (svcID) {
                    case "selectEmployee":
                        alert("직원 정보가 성공적으로 조회되었습니다.");
                        break;
                    case "saveEmployeeDetail":
                        alert("직원 정보가 성공적으로 저장되었습니다.");
                        break;
                    case "deleteEmployeeDetail":
                        alert("직원 정보가 성공적으로 삭제되었습니다.");
                        break;
                }
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
