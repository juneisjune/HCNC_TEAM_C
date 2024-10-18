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
            obj = new Static("Title","30","20","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 정보 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_employee","30","150","1150","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_empList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"76\"/><Column size=\"69\"/><Column size=\"123\"/><Column size=\"73\"/><Column size=\"92\"/><Column size=\"67\"/><Column size=\"117\"/><Column size=\"136\"/><Column size=\"221\"/><Column size=\"174\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"성별\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:id\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:gender\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:phone\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:birth\" displaytype=\"date\" calendardateformat=\"yyyy년 MM월 dd일\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:address\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:email\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Register","940","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_regist");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Edit","1025","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","1107","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_delete");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","30","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_text("전체");
            obj.set_value("ALL");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","140","110","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("binddataset").set("ds_search");
            obj.set_text("bind:SEARCH_WORD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","855","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_SearchType","value","ds_search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_SearchWord","value","ds_search","SEARCH_WORD");
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
        	this.grd_employee.setFocus();
            this.fnSearch();  // 검색 함수 호출
        };

        // 폼 로드 이벤트
        this.Form_employee_onload = function(obj, e) {
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
            this.transaction(strSvcId, strSvcUrl, inData, outData, "", callBackFnc, isAsync);
        };

        // 등록 버튼 클릭 이벤트
        this.btn_Register_onclick = function(obj, e) {
        	this.grd_employee.setFocus();
            this.showRegisterPopup();  // 등록 팝업 호출 함수 호출
        };

        // 등록 팝업 호출 함수
        this.showRegisterPopup = function() {

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
        	this.grd_employee.setFocus();

        	var objParam = {id:this.ds_empList.getColumn(this.ds_empList.rowposition, "id")
                          , name:this.ds_empList.getColumn(this.ds_empList.rowposition, "name")
                          , birth:this.ds_empList.getColumn(this.ds_empList.rowposition, "birth")
                      , gender:this.ds_empList.getColumn(this.ds_empList.rowposition, "gender")
                      , phone:this.ds_empList.getColumn(this.ds_empList.rowposition, "phone")
                      , address:this.ds_empList.getColumn(this.ds_empList.rowposition, "address")
                      , email:this.ds_empList.getColumn(this.ds_empList.rowposition, "email")
                      , account:this.ds_empList.getColumn(this.ds_empList.rowposition, "account")
                      , emp_code:this.ds_empList.getColumn(this.ds_empList.rowposition, "empCode")};

           this.showEditPopup(objParam);
        };




        this.btn_Delete_onclick = function(obj,e)
        {
        	this.grd_employee.setFocus();

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

        };

        // head 더블 클릭 시 정렬
        this.grd_employee_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 0) {
                colId = "empCode";
            } else if (e.col == 4) {
                colId = "name";
            } else if (e.col == 7) {
                colId = "birth";
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
            this.addEventHandler("onload",this.Form_employee_onload,this);
            this.grd_employee.addEventHandler("oncellposchanged",this.grd_employee_oncellposchanged,this);
            this.grd_employee.addEventHandler("onheaddblclick",this.grd_employee_onheaddblclick,this);
            this.btn_Register.addEventHandler("onclick",this.btn_Register_onclick,this);
            this.btn_Edit.addEventHandler("onclick",this.btn_Edit_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.cmb_SearchType.addEventHandler("onitemchanged",this.cmb_SearchType_onitemchanged,this);
            this.edt_SearchWord.addEventHandler("onchanged",this.edt_SearchWord_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
        };
        this.loadIncludeScript("Form_Employee.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
