(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_employee");
            this.set_titletext("직원 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"joinDate\" type=\"STRING\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"empCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">전체</Col><Col id=\"Value\">ALL</Col></Row><Row><Col id=\"Name\">이름</Col><Col id=\"Value\">NAME</Col></Row><Row><Col id=\"Name\">부서</Col><Col id=\"Value\">DEP</Col></Row><Row><Col id=\"Name\">직책</Col><Col id=\"Value\">ASSIGN</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Title","25","25","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 정보 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","25","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","135","110","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("binddataset").set("ds_search");
            obj.set_text("bind:SEARCH_WORD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","325","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_employee","25","160","795","330",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_empList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"84\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"41\"/><Column size=\"91\"/><Column size=\"145\"/><Column size=\"84\"/><Column size=\"156\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\"/><Cell col=\"1\" text=\"bind:depName\"/><Cell col=\"2\" text=\"bind:assignName\"/><Cell col=\"3\" text=\"bind:name\"/><Cell col=\"4\" text=\"bind:gender\"/><Cell col=\"5\" text=\"bind:phone\"/><Cell col=\"6\" text=\"bind:birth\" displaytype=\"date\" calendardateformat=\"yyyy년 MM월 dd일\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:address\"/><Cell col=\"8\" text=\"bind:email\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Register","25","500","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Edit","115","500","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","205","500","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_SearchWord","edt_SearchWord","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_SearchType","cmb_SearchType","value","ds_search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Employee.xfdl", function() {
        // 검색 버튼 클릭 이벤트
        this.btn_Search_onclick = function(obj, e) {
            console.log("검색 버튼 클릭됨");
            this.fnSearch();  // 검색 함수 호출
        };

        // 폼 로드 이벤트
        this.Form_employee_onload = function(obj, e) {
            console.log("폼 로드됨. 초기 검색 유형 설정: ALL");
            this.ds_search.setColumn(0, "SEARCH_TYPE", "ALL");  // 검색 유형을 ALL로 설정

            this.fnSearch();  // 폼 로드 시 자동 검색
        };

        // 검색 함수
        this.fnSearch = function() {
            var strSvcId    = "selectEmployeeList";  // 서비스 ID
            var strSvcUrl   = "svc::selectEmployeeList.do";  // 서비스 URL
            var inData      = "ds_search=ds_search";  // 입력 데이터셋
            var outData     = "ds_empList=ds_empList";  // 출력 데이터셋
            var callBackFnc = "fnCallback";  // 콜백 함수
            var isAsync     = true;  // 비동기 처리

            // 트랜잭션 호출
            console.log("트랜잭션 시작. 서비스 ID: " + strSvcId + ", URL: " + strSvcUrl);
            this.transaction(strSvcId, strSvcUrl, inData, outData, "", callBackFnc, isAsync);
        };

        // 등록 버튼 클릭 이벤트
        this.btn_Register_onclick = function(obj, e) {
            console.log("등록 팝업 호출");
            this.showRegisterPopup();  // 등록 팝업 호출 함수 호출
        };

        // 등록 팝업 호출 함수
        this.showRegisterPopup = function() {
            console.log("등록 팝업 열기");

            var popup = new nexacro.ChildFrame;
            popup.init("popupRegisterEmp", 100, 100, 800, 700, null, null, "FrameBase::Popup_RegisterEmp.xfdl");
            popup.set_dragmovetype("all");
            popup.set_layered(true);
            popup.set_autosize(true);
            popup.set_showtitlebar(true);
            popup.set_showstatusbar(false);
            popup.set_resizable(true);
            popup.set_openalign("center middle");
            popup.showModal(this.getOwnerFrame(), null, this, "fn_popupCallback", true);
        };



        // 수정팝업 호출 함수
        this.showEditPopup = function(objParam) {
            // 고유한 팝업 ID를 생성
            var popupId = "popupEditEmp_" + new Date().getTime();  // 시간을 기반으로 고유한 ID 생성

            // 1. 새로운 팝업 생성
            var popup = new nexacro.ChildFrame;
            popup.init(popupId, 100, 100, 800, 700, null, null, "FrameBase::Popup_EditEmp.xfdl");
            popup.set_dragmovetype("all");
            popup.set_layered(true);
            popup.set_autosize(true);
            popup.set_showtitlebar(true);
            popup.set_showstatusbar(false);
            popup.set_resizable(true);
            popup.set_openalign("center middle");

            // 2. 팝업을 호출 (고유한 ID 사용)
            popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        };





        this.btn_Edit_onclick = function(obj,e)
        {
        	var objParam = {id:this.ds_empList.getColumn(this.ds_empList.rowposition, "id")
                          , name:this.ds_empList.getColumn(this.ds_empList.rowposition, "name")
                          , birth:this.ds_empList.getColumn(this.ds_empList.rowposition, "birth")
                      , gender:this.ds_empList.getColumn(this.ds_empList.rowposition, "gender")
                      , phone:this.ds_empList.getColumn(this.ds_empList.rowposition, "phone")
                      , address:this.ds_empList.getColumn(this.ds_empList.rowposition, "address")
                      , email:this.ds_empList.getColumn(this.ds_empList.rowposition, "email")
                      , account:this.ds_empList.getColumn(this.ds_empList.rowposition, "account")
                      , emp_code:this.ds_empList.getColumn(this.ds_empList.rowposition, "empCode")};

        			  console.log(this.ds_empList.saveXML());
           this.showEditPopup(objParam);
        };




        this.btn_Delete_onclick = function(obj,e)
        {
            if (!this.confirm("정말로 삭제하시겠습니까?", "")) {
                return;  // 취소 시 동작 중단
            }

          var nRow = this.ds_empList.rowposition;
            if (nRow < 0) {
                this.alert("삭제할 데이터를 선택하세요.");
                return;
            }

            // 삭제 처리 함수 호출
            this.fnDeleteEmployee();
        }

        this.fnDeleteEmployee = function()
        {

            // 트랜잭션을 통해 삭제 요청
            var strSvcId    = "deleteEmployee";  // 서비스 ID
            var strSvcUrl   = "svc::deleteEmployee.do";  // 서비스 URL
            var inData      = "ds_employee=ds_employee";  // 입력 데이터셋
            var outData     = "";  // 출력 데이터셋 없음
            var callBackFnc = "fnCallbackDelete";  // 콜백 함수
            var isAsync     = true;  // 비동기 처리

            this.transaction(strSvcId, strSvcUrl, inData, outData, "", callBackFnc, isAsync);
        };
        this.fnCallbackDelete = function(svcID, errorCode, errorMsg)
        {
            if (errorCode == 0) {
                this.alert("삭제가 완료되었습니다.");
                this.fnSearch();  // 삭제 후 재조회
            } else {
                this.alert("삭제 중 오류가 발생하였습니다: " + errorMsg);
            }
        };

        this.grd_employee_oncellposchanged = function(obj,e)
        {

        	this.ds_employee.setColumn(0, "empCode", this.ds_empList.getColumn(this.ds_empList.rowposition, "empCode"));

        	console.log(this.ds_employee.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_employee_onload,this);
            this.edt_SearchWord.addEventHandler("onchanged",this.edt_SearchWord_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.grd_employee.addEventHandler("oncellposchanged",this.grd_employee_oncellposchanged,this);
            this.btn_Register.addEventHandler("onclick",this.btn_Register_onclick,this);
            this.btn_Edit.addEventHandler("onclick",this.btn_Edit_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
        };
        this.loadIncludeScript("Form_Employee.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
