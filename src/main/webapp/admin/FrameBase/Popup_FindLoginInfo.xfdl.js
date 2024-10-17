(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_FindLoginInfo");
            this.set_titletext("아이디 및 비밀번호 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FindLoginInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"emailForId\" type=\"STRING\" size=\"256\"/><Column id=\"emailForPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Result", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ResultId\" type=\"STRING\" size=\"256\"/><Column id=\"ResultPassword\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"maskedId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NewPassword", this);
            obj._setContents("<ColumnInfo><Column id=\"NewPassword\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Auth", this);
            obj._setContents("<ColumnInfo><Column id=\"authKey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AuthCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"authCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"maskedEmail\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","24","56","506","224",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("아이디 찾기");
            obj.set_formscrollbartype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Edit("edt_NameForId","170","35","170","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_NameForId","99","35","50","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_cssclass("stc_stc");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_EmailForId","89","90","70","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_cssclass("stc_stc");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_EmailForId","170","93","170","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_IdSearch","375","63","70","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("찾기");
            obj.set_cssclass("btn_search");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ResultId","-1","153","506","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("stc_stc");
            obj.set_background(" #A1C4E8");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("비밀번호 찾기");
            this.Tab00.addChild(obj.name, obj);

            obj = new Edit("edt_IdForPassword","170","30","170","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_IdForPassword","99","30","40","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("stc_stc");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_EmailForPassword","99","80","40","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_cssclass("stc_stc");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_EmailForPassword","170","80","170","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PasswordSearch","375","55","70","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("찾기");
            obj.set_cssclass("btn_search");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_NewPassword","25","130","190","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("새로운 비밀번호 입력 ");
            obj.set_visible("false");
            obj.set_cssclass("stc_stc");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_NewPassword","205","130","170","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_NewPassword","410","130","50","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_visible("false");
            obj.set_cssclass("btn_normal");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_authCheck","79","130","60","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("인증번호");
            obj.set_cssclass("stc_stc");
            obj.set_visible("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_authCheck","170","130","170","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_AuthCheck","375","130","70","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("인증");
            obj.set_cssclass("btn_edit");
            obj.set_visible("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","Tab00.Tabpage1.form.edt_NameForId","value","ds_FindLoginInfo","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Tab00.Tabpage1.form.edt_EmailForId","value","ds_FindLoginInfo","emailForId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage1.form.sta_ResultId","text","ds_Result","ResultId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage2.form.edt_IdForPassword","value","ds_FindLoginInfo","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage2.form.edt_EmailForPassword","value","ds_FindLoginInfo","emailForPassword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage2.form.edt_NewPassword","value","ds_NewPassword","NewPassword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage2.form.edt_authCheck","value","ds_AuthCheck","authCheck");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_FindLoginInfo.xfdl", function() {

        // Id 찾기 버튼
        this.btn_IdSearch_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage1.form.edt_NameForId.setFocus();

        	// 유효성 검사
        	if(this.ds_FindLoginInfo.getColumn(0, "name") == '') {
        		alert("이름을 입력하세요.");
        			this.Tab00.Tabpage1.form.edt_NameForId.setFocus();
        		return;
        	}
        	if(this.ds_FindLoginInfo.getColumn(0, "emailForId") == '') {
        		alert("이메일을 입력하세요.");
        			this.Tab00.Tabpage1.form.edt_EmailForId.setFocus();
        		return;
        	}


        	var strSvcId    = "FindId";
            var strSvcUrl   = "svc::FindId.do";
            var inData      = "ds_FindLoginInfo=ds_FindLoginInfo";  // 입력 데이터셋
            var outData     = "ds_Result=ds_Result"; // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // Password 찾기 버튼
        this.btn_PasswordSearch_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage2.form.edt_IdForPassword.setFocus();
        	// 유효성 검사
        	if(this.ds_FindLoginInfo.getColumn(0, "id") == '') {
        		alert("아이디를 입력하세요.");
        			this.Tab00.Tabpage2.form.edt_IdForPassword.setFocus();
        		return;
        	}
        	if(this.ds_FindLoginInfo.getColumn(0, "emailForPassword") == '') {
        		alert("이메일을 입력하세요.");
        			this.Tab00.Tabpage2.form.edt_EmailForPassword.setFocus();
        		return;
        	}

        	var strSvcId    = "FindPassword";
            var strSvcUrl   = "svc::FindPassword.do";
            var inData      = "ds_FindLoginInfo=ds_FindLoginInfo";  // 입력 데이터셋
            var outData     = "";  // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 닫기 버튼
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close("Close FindLoginInfo");
        };

        // 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	// 아이디 찾기 콜백
        	if(svcID == "FindId"){
        		if (errorCode < 0) {
        			alert(errorMsg);
        			return;
        		}

        		var id = this.ds_Result.getColumn(0, "id");

        		// Id 마스킹
        		var maskedId = this.maskedId(id);

        		var name = this.ds_FindLoginInfo.getColumn(0, "name");
        		var ResultId = name + "님의 아이디는 " + maskedId + "입니다.";

        		this.ds_Result.setColumn(0, "maskedId", maskedId);
        		this.ds_Result.setColumn(0, "ResultId", ResultId);

        	}

        	// 비밀번호 찾기 콜백
        	if(svcID == "FindPassword"){
        		if (errorCode < 0) {
        			alert(errorMsg);
        			return;
        		}

        		this.fn_Auth();

        	}

        	//인증번호 발송 콜백
        	if(svcID == "NexaAuth") {
        		if (errorCode < 0) {
        			alert(errorMsg);
        			return;
        		}

        		alert("인증번호가 발송되었습니다.");

        		// 인증번호 입력 칸과 버튼 보이기
        		this.Tab00.Tabpage2.form.sta_authCheck.set_visible(true);
        		this.Tab00.Tabpage2.form.edt_authCheck.set_visible(true);
        		this.Tab00.Tabpage2.form.btn_AuthCheck.set_visible(true);

        		// 서버에서 넘어온 인증 키(authKey)를 확인
                var authKey = this.ds_Auth.getColumn(0, "authKey");
                console.log("Received AuthKey: " + authKey);

        	}

        	// 비밀번호 업데이트 콜백
        	if(svcID == "UpdatePassword"){
        		if (errorCode < 0) {
        			alert(errorMsg);
        			return;
        		}

        		alert("비밀번호 등록이 완료되었습니다.");

        		this.close("FindLoginInfo Close");
        	}

        }

        // id 마스킹
        this.maskedId = function(id) {

                var markedId = "";

                // 아이디 길이가 1 이상이면 마스킹 처리 시작
                if (id.length > 1) {
                    // 두번째 글자까지 그대로
                    markedId += id.substring(0, 2);

                    // 중간 부분 마스킹
                    for (var i = 2; i < id.length - 1; i++) {
                        markedId += '*';
                    }

                    // 마지막 글자 추가
                    markedId += id.substring(id.length - 1);
                } else {
                    // 길이가 1인 경우는 그냥 그대로 사용
                    markedId = id;
                }

                // 전체 마스킹된 Id 반환
                return markedId;
        };

        // 새 비밀번호 업데이트 확인 버튼
        this.btn_NewPassword_onclick= function(obj,e)
        {
        	this.Tab00.Tabpage2.form.edt_NewPassword.setFocus();
        	var password = this.ds_NewPassword.getColumn(0, "NewPassword");

        	// 비밀번호 유효성 검사
            if (password && password.trim() !== "") {
                var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (!passwordPattern.test(password)) {
                    alert("비밀번호는 최소 8자 이상이며, 숫자와 영문자를 포함해야 합니다.");
        				this.Tab00.Tabpage2.form.edt_NewPassword.setFocus();
                    return false;
               }
            }

        	this.ds_NewPassword.setColumn(0, "id", this.ds_FindLoginInfo.getColumn(0, "id"));

        	var strSvcId    = "UpdatePassword";
            var strSvcUrl   = "svc::UpdatePassword.do";
            var inData      = "ds_NewPassword=ds_NewPassword";  // 입력 데이터셋
            var outData     = "";  // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // 인증번호 발송 함수
        this.fn_Auth = function() {

            var email = this.ds_FindLoginInfo.getColumn(0, "emailForPassword");
            this.ds_email.setColumn(0, "email", email);  // 데이터셋에 이메일 설정

            var strSvcId    = "NexaAuth";
            var strSvcUrl   = "svc::NexaAuth.do";
            var inData      = "ds_email=ds_email";  // 입력 데이터셋
            var outData     = "ds_Auth=ds_Auth";  // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

        	console.log(this.ds_email.getColumn(0, "email"));

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 인증번호 확인
        this.Tab00_Tabpage2_btn_AuthCheck_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage2.form.edt_authCheck.setFocus();

        	if(this.ds_Auth.getColumn(0, "authKey") == '' || this.ds_Auth.getColumn(0, "authKey") == null || this.ds_Auth.getColumn(0, "authKey") == 'undefined') {
        		alert("인증번호를 먼저 발급받으세요.");
        			this.Tab00.Tabpage2.form.edt_authCheck.setFocus();
        		return;
        	}

        	if(this.ds_Auth.getColumn(0, "authKey") != this.ds_AuthCheck.getColumn(0, "authCheck")) {
        		alert("인증번호가 일치하지 않습니다.");
        			this.Tab00.Tabpage2.form.edt_authCheck.setFocus();
        		return;
        	}

        	if(this.ds_Auth.getColumn(0, "authKey") == this.ds_AuthCheck.getColumn(0, "authCheck")) {
        		alert("인증번호가 확인되었습니다.");

        		// 인증번호 입력 칸과 버튼 숨기기
        		this.Tab00.Tabpage2.form.sta_authCheck.set_visible(false);
        		this.Tab00.Tabpage2.form.edt_authCheck.set_visible(false);
        		this.Tab00.Tabpage2.form.btn_AuthCheck.set_visible(false);

        		// 숨겨진 새 비밀번호 입력 칸 보이기
         		this.Tab00.Tabpage2.form.sta_NewPassword.set_visible(true);
        		this.Tab00.Tabpage2.form.edt_NewPassword.set_visible(true);
        		this.Tab00.Tabpage2.form.btn_NewPassword.set_visible(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.sta_NameForId.addEventHandler("onclick",this.Tab00_Tabpage1_sta_NameForId_onclick,this);
            this.Tab00.Tabpage1.form.edt_EmailForId.addEventHandler("onchanged",this.Tab00_Tabpage1_edt_EmailForId_onchanged,this);
            this.Tab00.Tabpage1.form.btn_IdSearch.addEventHandler("onclick",this.btn_IdSearch_onclick,this);
            this.Tab00.Tabpage2.form.btn_PasswordSearch.addEventHandler("onclick",this.btn_PasswordSearch_onclick,this);
            this.Tab00.Tabpage2.form.btn_NewPassword.addEventHandler("onclick",this.btn_NewPassword_onclick,this);
            this.Tab00.Tabpage2.form.btn_AuthCheck.addEventHandler("onclick",this.Tab00_Tabpage2_btn_AuthCheck_onclick,this);
        };
        this.loadIncludeScript("Popup_FindLoginInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
