(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_EditEmp");
            this.set_titletext("직원 정보 수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">남성</Col><Col id=\"text\">남성</Col></Row><Row><Col id=\"value\">여성</Col><Col id=\"text\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","180","25","420","50",null,null,null,null,null,null,this);
            obj.set_text("직원 정보 수정");
            obj.set_background("whitesmoke");
            obj.set_cssclass("stc_popup");
            this.addChild(obj.name, obj);

            obj = new Static("lblPassword","380","198","90","30",null,null,null,null,null,null,this);
            obj.set_text("새로운 비밀번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPassword","490","200","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_password("true");
            obj.set_text("bind:password");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","40","100","80","30",null,null,null,null,null,null,this);
            obj.set_text("이름");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","100","100","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:name");
            this.addChild(obj.name, obj);

            obj = new Static("lblBirth","390","100","80","30",null,null,null,null,null,null,this);
            obj.set_text("생년월일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirth","490","100","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_datecolumn("birth");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("lblGender","40","153","80","25",null,null,null,null,null,null,this);
            obj.set_text("성별");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGender","100","150","250","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_value("bind:gender");
            this.addChild(obj.name, obj);

            obj = new Static("lblPhone","40","203","80","25",null,null,null,null,null,null,this);
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","100","200","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:phone");
            this.addChild(obj.name, obj);

            obj = new Static("lblAddress","390","153","80","25",null,null,null,null,null,null,this);
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress","490","150","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:address");
            this.addChild(obj.name, obj);

            obj = new Static("lblEmail","390","253","80","25",null,null,null,null,null,null,this);
            obj.set_text("이메일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","490","250","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:email");
            this.addChild(obj.name, obj);

            obj = new Static("lblAccount","40","253","80","25",null,null,null,null,null,null,this);
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAccount","100","250","250","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:account");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","310","360","80","30",null,null,null,null,null,null,this);
            obj.set_text("수정");
            obj.set_background("green");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","410","360","80","30",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_background("gray");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","edtPassword","value","ds_employee","password");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtName","value","ds_employee","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calBirth","value","ds_employee","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmbGender","value","ds_employee","gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtPhone","value","ds_employee","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtAddress","value","ds_employee","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtEmail","value","ds_employee","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtAccount","value","ds_employee","account");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_EditEmp.xfdl", function() {
        this.Popup_EditEmp_onload = function(obj, e)
        {
        	console.log("수정 팝업 열기");

        	this.ds_employee.clearData()
        	this.ds_employee.addRow();

            this.ds_employee.setColumn(0, "id", this.parent.id);
            this.ds_employee.setColumn(0, "password", this.parent.password);
            this.ds_employee.setColumn(0, "name", this.parent.name);
            this.ds_employee.setColumn(0, "birth", this.parent.birth);
            this.ds_employee.setColumn(0, "gender", this.parent.gender);
            this.ds_employee.setColumn(0, "phone", this.parent.phone);
            this.ds_employee.setColumn(0, "email", this.parent.email);
            this.ds_employee.setColumn(0, "address", this.parent.address);
            this.ds_employee.setColumn(0, "account", this.parent.account);
        	this.ds_employee.setColumn(0, "emp_code", this.parent.emp_code);

        	console.log(this.ds_employee.saveXML());

        };


        // 수정 버튼 클릭 시 호출되는 함수 (수정된 데이터 저장)
        this.btnUpdate_onclick = function(obj, e) {



        	if (!this.validateEmployeeData()) {
                return;
            }
        	var loginAdminName = nexacro.getApplication().ds_userInfo.getColumn(0, "name");
        	this.ds_employee.setColumn(0,"admin_name",loginAdminName);

            var strSvcId = "updateEmployeeData";  // 서비스 ID
            var strSvcUrl = "svc::updateEmployeeData.do";  // 서버의 URL과 매핑
            var inData = "ds_employee=ds_employee";  // 전송할 데이터셋
            var outData = "";  // 서버에서 받아올 데이터가 없을 경우 빈 문자열
            var strArg = "";  // 추가 인자가 필요 없을 경우 빈 문자열
            var callBackFnc = "fnCallback";  // 콜백 함수 호출
            var isAsync = true;  // 비동기 처리

            console.log(this.ds_employee.saveXML());

            // transaction 호출
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

            alert("수정 완료");
            this.close("수정 완료");

        	this.opener.fnSearch();
        };

        	// 유효성 검사 함수
        this.validateEmployeeData = function() {
            var name = this.ds_employee.getColumn(0, "name");
            var birth = this.ds_employee.getColumn(0, "birth");
            var gender = this.ds_employee.getColumn(0, "gender");
            var phone = this.ds_employee.getColumn(0, "phone");
            var address = this.ds_employee.getColumn(0, "address");
            var account = this.ds_employee.getColumn(0, "account");
            var email = this.ds_employee.getColumn(0, "email");
            var password = this.ds_employee.getColumn(0, "password");



            // 이름 검사
            if (!name || name.trim() === "") {
                alert("이름을 입력해 주세요.");
                return false;
            }

            // 생년월일 검사 (YYYYMMDD 형식)
        	var birth = this.ds_employee.getColumn(0, "birth");
        	if (birth) {
            birth = birth.toString().trim();

            }

            // 성별 검사
            if (!gender || gender.trim() === "") {
                alert("성별을 입력해 주세요.");
                return false;
            }

             // 전화번호 검사 (010-XXXX-XXXX 형식)
            var phonePattern = /^010-[0-9]{4}-[0-9]{4}$/;
            if (!phone || !phonePattern.test(phone)) {
                alert("유효한 전화번호를 입력해 주세요. 형식: 010-XXXX-XXXX");
                return false;
            }

            // 주소 검사
            if (!address || address.trim() === "") {
                alert("주소를 입력해 주세요.");
                return false;
            }

            // 이메일 검사 (간단한 이메일 형식 검사)
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                alert("유효한 이메일을 입력해 주세요.");
                return false;
            }

             var accountPattern = /^[가-힣]+[0-9]+$/;
            if (!account || !accountPattern.test(account)) {
                alert("유효한 계좌번호를 입력해 주세요. 예: 국민은행12345678");
                return false;
            }

        	 // 비밀번호 검사 (비밀번호가 입력된 경우에만 검사)
            if (password && password.trim() !== "") {
                // 비밀번호 형식 검사 예시 (최소 8자, 하나 이상의 숫자, 하나 이상의 영문자 포함)
                var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (!passwordPattern.test(password)) {
                    alert("비밀번호는 최소 8자 이상이며, 숫자와 영문자를 포함해야 합니다.");
                    return false;
                }
            }

            // 모든 유효성 검사를 통과하면 true 반환
            return true;
        };


        this.btnClose_onclick = function(obj,e)
        {
        	this.close("닫기");
        	this.ds_employee.clearData()
        	console.log("수정 화면 닫음");
        	this.opener.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_EditEmp_onload,this);
            this.lblBirth.addEventHandler("onclick",this.lblBirth_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Popup_EditEmp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
