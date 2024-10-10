(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_RegisterEmp");
            this.set_titletext("직원 정보 등록");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"joinDate\" type=\"STRING\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">남성</Col><Col id=\"text\">남성</Col></Row><Row><Col id=\"value\">여성</Col><Col id=\"text\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Title","140","20","560","40",null,null,null,null,null,null,this);
            obj.set_text("직원 정보 등록");
            obj.set_textAlign("center");
            obj.set_background("whitesmoke");
            obj.set_cssclass("stc_popup");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","40","90","80","25",null,null,null,null,null,null,this);
            obj.set_text("이름");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","100","90","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Name");
            this.addChild(obj.name, obj);

            obj = new Static("lblBirth","460","90","80","25",null,null,null,null,null,null,this);
            obj.set_text("생년월일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirth","520","90","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_datecolumn("Birth");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("lblGender","40","265","80","25",null,null,null,null,null,null,this);
            obj.set_text("성별");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGender","100","265","250","25",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("");
            obj.set_value("bind:Gender");
            this.addChild(obj.name, obj);

            obj = new Static("lblPhone","460","265","80","25",null,null,null,null,null,null,this);
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","520","265","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Phone");
            this.addChild(obj.name, obj);

            obj = new Static("lblAddress","40","175","80","25",null,null,null,null,null,null,this);
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress","100","175","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Address");
            this.addChild(obj.name, obj);

            obj = new Static("lblEmail","460","218","80","25",null,null,null,null,null,null,this);
            obj.set_text("이메일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","520","218","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Email");
            this.addChild(obj.name, obj);

            obj = new Static("lblJoinDate","460","175","80","25",null,null,null,null,null,null,this);
            obj.set_text("입사일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate","520","175","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_datecolumn("joinDate");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("lblAccount","40","218","80","25",null,null,null,null,null,null,this);
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAccount","100","218","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Account");
            this.addChild(obj.name, obj);

            obj = new Static("lblID","40","130","95","25",null,null,null,null,null,null,this);
            obj.set_text("아이디");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID","100","130","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:ID");
            this.addChild(obj.name, obj);

            obj = new Static("lblPassword","460","130","80","25",null,null,null,null,null,null,this);
            obj.set_text("비밀번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPassword","520","130","250","25",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:Password");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegister","320","330","80","30",null,null,null,null,null,null,this);
            obj.set_text("등록");
            obj.set_background("green");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","430","330","80","30",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_background("gray");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","370","130","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("중복 확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,390,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtID","value","ds_employee","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtPassword","value","ds_employee","password");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtName","value","ds_employee","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calBirth","value","ds_employee","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmbGender","value","ds_employee","gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtPhone","value","ds_employee","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtAddress","value","ds_employee","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calJoinDate","value","ds_employee","joinDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtEmail","value","ds_employee","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtAccount","value","ds_employee","account");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_RegisterEmp.xfdl", function() {

        // 등록 버튼 클릭 시 데이터 저장 로직 추가
        this.btnRegister_onclick = function(obj, e) {

            if (!this.validateEmployeeData()) {
                return;
            }
        	var loginAdminName = nexacro.getApplication().ds_userInfo.getColumn(0, "name");
        	this.ds_employee.setColumn(0,"admin_name",loginAdminName);

            var strSvcId = "insertEmployee";
            var strSvcUrl = "svc::insertEmployeeData.do";  // 서버의 URL과 매핑
            var inData = "ds_employee=ds_employee";  // 전송할 데이터셋
            var outData = "";  // 서버에서 받아올 데이터가 없을 경우 빈 문자열
            var strArg = "";  // 추가 인자가 필요 없을 경우 빈 문자열
            var callBackFnc = "fnCallback";  // 콜백 함수 호출
            var isAsync = true;  // 비동기 처리

            console.log(this.ds_employee.saveXML());  // 데이터 전송 전 확인용 로그

            // transaction 호출
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 유효성 검사 함수
        this.validateEmployeeData = function() {
            var name = this.ds_employee.getColumn(0, "name");
            var birth = this.ds_employee.getColumn(0, "birth");
            var gender = this.ds_employee.getColumn(0, "gender");
            var phone = this.ds_employee.getColumn(0, "phone");
            var address = this.ds_employee.getColumn(0, "address");
            var joinDate = this.ds_employee.getColumn(0, "joinDate");
            var account = this.ds_employee.getColumn(0, "account");
            var email = this.ds_employee.getColumn(0, "email");
            var id = this.ds_employee.getColumn(0, "id");
            var password = this.ds_employee.getColumn(0, "password");

            // 이름 검사
            if (!name || name.trim() === "") {
                alert("이름을 입력해 주세요.");
                return false;
            }

            // 생년월일 검사 (YYYYMMDD 형식)
            var birthPattern = /^[0-9]{8}$/;
            if (!birth || !birthPattern.test(birth)) {
                alert("올바른 생년월일을 입력해 주세요. ");
                return false;
            }

            // 성별 검사
            if (!gender || gender.trim() === "") {
                alert("성별을 입력해 주세요.");
                return false;
            }

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

            // 입사일 검사 (YYYYMMDD 형식)
            var joinDatePattern = /^[0-9]{8}$/;
            if (!joinDate || !joinDatePattern.test(joinDate)) {
                console.log(this.ds_employee.saveXML());
                alert("올바른 입사일을 입력해 주세요.");
                return false;
            }

            // 계좌번호 검사 (숫자만)
            var accountPattern = /^[가-힣]+[0-9]+$/;
            if (!account || !accountPattern.test(account)) {
                alert("유효한 계좌번호를 입력해 주세요. 예: 국민은행12345678");
                return false;
            }

            // 이메일 검사 (간단한 이메일 형식 검사)
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                alert("유효한 이메일을 입력해 주세요.");
                return false;
            }

            // 아이디 검사
            if (!id || id.trim() === "") {
                alert("아이디를 입력해 주세요.");
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

        // 콜백 함수 (transaction 완료 후 호출)
        this.fnCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 성공 시
                alert("등록 완료");
                this.close("등록 완료");
                this.opener.fnSearch();  // 부모 창에서 검색 함수 호출
            } else {
                alert("등록 실패: " + errorMsg);  // 오류 시 메시지 출력
            }
        };

        // 닫기 버튼 클릭 시 팝업 닫기
        this.btnClose_onclick = function(obj, e) {
            this.close('팝업 닫기');
        };

        // 중복 체크 버튼 클릭 시 호출되는 함수
        this.Button00_onclick = function(obj, e) {
            var id = this.ds_employee.getColumn(0, "id");

            if (!id || id.trim() === "") {
                alert("아이디를 입력해 주세요.");
                return;
            }

            var strSvcId = "checkDuplicateId";
            var strSvcUrl = "svc::checkDuplicateId.do";  // 서버의 URL과 매핑
            var inData = "ds_employee=ds_employee";  // 전송할 데이터셋
            var outData = "";  // 서버에서 받아올 데이터가 없을 경우 빈 문자열
            var strArg = "";  // 추가 인자가 필요 없을 경우 빈 문자열
            var callBackFnc = "fnCheckDuplicateIdCallback";  // 콜백 함수 호출
            var isAsync = true;  // 비동기 처리

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 아이디 중복 체크 콜백 함수
        this.fnCheckDuplicateIdCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode == 0) {  // 성공 시
                var isDuplicate = this.ds_employee.getColumn(0, "isDuplicate");

                if (isDuplicate == "true") {
                    alert("중복된 아이디입니다. 다른 아이디를 입력해 주세요.");
                } else {
        			this.edtID.enable=false;
                    alert("아이디 입력 성공!");


                }
            } else {
                alert("아이디 중복 체크 실패: " + errorMsg);
            }



        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pop_RegisterEmp_onload,this);
            this.cmbGender.addEventHandler("onitemchanged",this.cmbGender_onitemchanged,this);
            this.edtPhone.addEventHandler("onchanged",this.edtPhone_onchanged,this);
            this.edtID.addEventHandler("onchanged",this.edtID_onchanged,this);
            this.btnRegister.addEventHandler("onclick",this.btnRegister_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Popup_RegisterEmp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
