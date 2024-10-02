(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("직원정보");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("emp_department", this);
            obj._setContents("<ColumnInfo><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"deptCode\">Employee name</Col><Col id=\"deptName\">직원명</Col></Row><Row><Col id=\"deptCode\">Employee number</Col><Col id=\"deptName\">사원번호</Col></Row><Row><Col id=\"deptCode\">Department</Col><Col id=\"deptName\">관련부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("emp_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"emp_CodeNM\" type=\"STRING\" size=\"256\"/><Column id=\"empDept\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("emp_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_dept\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("emp_Search","8","11","205","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("emp_department");
            obj.set_codecolumn("deptCode");
            obj.set_datacolumn("deptName");
            obj.set_text("");
            obj.set_value("CODE_NM");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Search","220","7","230","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Employee","8","80","745","162",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_CodeMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NM\"/><Cell col=\"2\" text=\"bind:empDept\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save","225","279","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Edit("emp_employeename","80","266","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("emp_employeecode","80","292","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","246","50","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("직원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","286","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사원번호");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete","275","279","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("emp_search2","453","7","155","57",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("emp_correction","610","7","145","57",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","348","262","52","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","340","290","52","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("부서코드");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","400","264","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","400","298","158","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Save00","568","278","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("emp_Delete00","618","278","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Search","value","ds_Search","txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","emp_employeename","value","emp_department","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","emp_employeecode","value","emp_department","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EmployeeManagement.xfdl", function() {
        //검색
        this.emp_search2_onclick = function(obj, e) {
            var searchValue = this.edt_Search.value;
            if (searchValue === "") {
                alert("검색어를 입력해주세요.");
                return;
            }
            if (!this.ds_CodeMst) {
                alert("데이터셋이 정의되지 않았습니다.");
                return;
            }
            var findRow = this.ds_CodeMst.findRow("CODE_NM", searchValue);

            if (findRow < 0) {
                alert("일치하는 직원 정보가 없습니다.");
            } else {
                this.ds_CodeMst.set_rowposition(findRow);
                alert("일치하는 직원 정보가 선택되었습니다.");
            }
        };


        //수정
        this.emp_correction_onclick = function(obj,e) {
            var selectedRow = this.ds_CodeMst.rowposition;
            if (selectedRow < 0) {
                alert("수정할 직원을 선택해주세요.");
                return;
            }
            var empCode = this.ds_CodeMst.getColumn(selectedRow, "CODE");
            var empName = this.ds_CodeMst.getColumn(selectedRow, "CODE_NM");
            var empDept = this.ds_CodeMst.getColumn(selectedRow, "empDept");

            this.edt_Code.set_value(empCode);
            this.edt_CodeNM.set_value(empName);
            this.cbo_department.set_value(empDept);
            this.edt_Code.set_readonly(false);
            this.edt_CodeNM.set_readonly(false);
            this.cbo_department.set_enable(true);


        };
        //저장
        this.btn_Save_onclick = function(obj,e) {
            var empCode = this.edt_Code.value;
            var empName = this.edt_CodeNM.value;
            var empDept = this.cbo_department.value;


            if (!empCode || !empName || !empDept) {
                alert("모든 필드를 입력해주세요.");
                return;
            }
            var newRow = this.ds_CodeMst.addRow();
            this.ds_CodeMst.setColumn(newRow, "CODE", empCode);
            this.ds_CodeMst.setColumn(newRow, "CODE_NM", empName);
            this.ds_CodeMst.setColumn(newRow, "empDept", empDept);


            var svcID = "insertEmployee";
            var svcURL = "http://yourserver/api/insertEmployee";
            var inData = "ds_CodeMst=ds_CodeMst";
            var outData = "";
            var argument = "";
            var callback = "callbackFn";

            this.transaction(svcID, svcURL, inData, outData, argument, callback);
        };

        this.callbackFn = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {

                alert("서버 통신 중 오류가 발생했습니다: " + errorMsg);
            } else {

                alert("직원 정보가 성공적으로 등록되었습니다.");

                this.ds_CodeMst.clearData();
            }
        };


        //삭제
        this.Btn_Delete_onclick = function(obj, e) {
            var selectedRow = this.ds_CodeMst.rowposition;
            if (selectedRow < 0) {
                alert("삭제할 직원의 부서를 선택해주세요.");
                return;
            }
            var empID = this.ds_CodeMst.getColumn(selectedRow, "CODE");

            if (confirm("정말로 이 직원 부서정보를 삭제하시겠습니까?")) {

                this.ds_CodeMst.deleteRow(selectedRow);

                var svcID = "deleteEmployee";
                var svcURL = "http://yourserver/api/deleteEmployee";
                var inData = "";
                var outData = "";
                var argument = "empID=" + empID;
                var callback = "deleteCallback";
                this.transaction(svcID, svcURL, inData, outData, argument, callback);
            }
        };

        this.deleteCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {

                alert("삭제 중 오류가 발생했습니다: " + errorMsg);
            } else {

                alert("직원 정보가 성공적으로 삭제되었습니다.");
            }
        };

        this.emp_Search_onitemchanged = function(obj, e)
        {
            var selectedValue = e.postvalue;
            var selectedText = e.posttext;

            alert("선택된 값: " + selectedValue + "\n선택된 텍스트: " + selectedText);


            if (selectedValue === "CODE") {
                alert("코드 검색을 선택하셨습니다.");

            } else if (selectedValue === "CODE_NM") {
                alert("코드명 검색을 선택하셨습니다.");

            } else if (selectedValue === "ALL") {
                alert("전체 검색을 선택하셨습니다.");

            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.직원정보_onload,this);
            this.emp_Search.addEventHandler("onitemchanged",this.emp_Search_onitemchanged,this);
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.emp_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.emp_employeename.addEventHandler("onchanged",this.edt_Code_onchanged,this);
            this.emp_employeecode.addEventHandler("onchanged",this.edt_CodeNM_onchanged,this);
            this.emp_Delete.addEventHandler("onclick",this.Btn_Delete_onclick,this);
            this.emp_search2.addEventHandler("onclick",this.emp_search2_onclick,this);
            this.emp_correction.addEventHandler("onclick",this.emp_correction_onclick,this);
            this.emp_Save00.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.emp_Delete00.addEventHandler("onclick",this.Btn_Delete_onclick,this);
        };
        this.loadIncludeScript("EmployeeManagement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
