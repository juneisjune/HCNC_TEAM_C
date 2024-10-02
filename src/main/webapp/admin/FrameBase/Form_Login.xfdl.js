(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            this.set_color("#000000");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Auth", this);
            obj._setContents("<ColumnInfo><Column id=\"authKey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AuthCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"authCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Login","650","270","150","140",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인증번호 발송");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_AuthCheck","430","430","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AuthCheck","650","430","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("인증하기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_AuthCheck","310","430","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인증번호 입력 :");
            obj.set_font("bold 15px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Id","325","270","90","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디 입력 :");
            obj.set_font("bold 15px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Password","310","350","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비밀번호 입력 :");
            obj.set_font("bold 15px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Id","430","270","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Password","430","350","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Pass","84","256","136","124",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("넘어가기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_AuthCheck","value","ds_AuthCheck","authCheck");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_Id","value","ds_login","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_Password","value","ds_login","password");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        // 인증번호 발송(로그인) 버튼
        this.btn_Login_onclick = function(obj,e) {

            var userId = this.ds_login.getColumn(0, "user_id");
            var password = this.ds_login.getColumn(0, "password");

            // 아이디 유효성 검사
            if(userId == null || userId == '' || typeof userId === 'undefined') {
                alert("아이디를 입력하세요.");
                return;
            }

            // 비밀번호 유효성 검사
            if(password == null || password == '' || typeof password === 'undefined') {
                alert("비밀번호를 입력하세요.");
                return;
            }

            // 로그인 함수 호출
            this.fnLogin();
        };


        // 인증번호 발송 함수
        this.fn_Auth = function() {

            var email = nexacro.getApplication().ds_userInfo.getColumn(0, "email");
            this.ds_email.setColumn(0, "email", email);  // 데이터셋에 이메일 설정

            var strSvcId    = "NexaAuth";
            var strSvcUrl   = "svc::NexaAuth.do";
            var inData      = "ds_email=ds_email";  // 입력 데이터셋
            var outData     = "ds_Auth=ds_Auth";  // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

        	console.log(this.ds_email.getColumn(0, "email"));

            // 서버와의 트랜잭션 호출
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 서버 응답 처리 콜백 함수
        this.fnCallback = function(strSvcId, nErrorCode, strErrorMsg) {
            // 통신 성공 시 처리
            if (nErrorCode == 0) {
                console.log("Success: " + strSvcId);

        		alert("인증 번호가 발송되었습니다.");

                // 서버에서 넘어온 인증 키(authKey)를 확인
                var authKey = this.ds_Auth.getColumn(0, "authKey");
                console.log("Received AuthKey: " + authKey);

            } else {
                // 통신 실패 시 에러 처리
                console.log("Error: " + strErrorMsg);
                alert("Error occurred: " + strErrorMsg);
            }
        };

        // 로그인 성공 시 메인 화면으로 전환
        this.fn_LoginSuccess = function() {

        	//로그인 성공 시에 workFrame 첫 화면
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");

        	//Top, HFrameSet00, Login 3개 영역을 조정하여 로그인 화면이 보이지 않도록 설정
            nexacro.getApplication().mainframe.VFrameSet00.set_separatesize("65,*,0");

        	//로그인 폼의 edt 모두 초기화
        	this.ds_login.setColumn(0, "user_id", '');
        	this.ds_login.setColumn(0, "password", '');
        	this.ds_Auth.setColumn(0, "authKey", '');
        	this.ds_AuthCheck.setColumn(0, "authCheck", '');
        }

        //인증하기
        this.btn_AuthCheck_onclick = function(obj,e)
        {
        	if(this.ds_Auth.getColumn(0, "authKey") == '' || this.ds_Auth.getColumn(0, "authKey") == null || this.ds_Auth.getColumn(0, "authKey") == 'undefined') {
        		alert("인증번호를 먼저 발급받으세요.");
        		return;
        	}

        	if(this.ds_Auth.getColumn(0, "authKey") != this.ds_AuthCheck.getColumn(0, "authCheck")) {
        		alert("인증번호가 일치하지 않습니다.");
        		return;
        	}

        	if(this.ds_Auth.getColumn(0, "authKey") == this.ds_AuthCheck.getColumn(0, "authCheck")) {
        		alert("인증번호가 확인되었습니다.");
        		this.fn_LoginSuccess();
        	}
        };

        // 로그인 함수
        this.fnLogin = function() {

            //console.log(this.ds_login.saveXML());  // DataSet 내용 확인

            var strSvcId = "Nexalogin";
            var strSvcUrl = "svc::Nexalogin.do";
            var inData = "ds_login=ds_login";
            var outData = "ds_userInfo=ds_userInfo";  // 서버로부터 받아온 데이터를 받을 데이터셋
            var strArg = "";
            var callBackFnc = "fnLoginCallback";  // 콜백 함수
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	console.log(this.ds_login.saveXML());
        };

        // 로그인 함수 콜백
        this.fnLoginCallback = function(strSvcId, nErrorCode, strErrorMsg) {
           objApp=nexacro.getApplication();

            if (nErrorCode < 0) {
                alert("로그인 실패");
            }
            else {

              // 저장된 값 확인하는 콘솔 로그
        //       console.log("값 확인 : " + nexacro.getApplication().ds_userInfo.saveXML());
        //       var row = nexacro.getApplication().ds_userInfo.rowposition;
        //       console.log("현재 rowposition: " + row);
        //       //var row = 0;  // 첫 번째 행
        //       console.log(nexacro.getApplication().ds_userInfo.getColumn(0, "name"));
        //       console.log(nexacro.getApplication().ds_userInfo.getColumn(0, "emp_code"));

        	  // 인증번호 발송
        	  this.fn_Auth();



            }
        };

        //임시로 넘어가기 버튼
        this.btn_Pass_onclick = function(obj,e)
        {
        	this.fn_LoginSuccess()
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Login.addEventHandler("onclick",this.btn_Login_onclick,this);
            this.btn_AuthCheck.addEventHandler("onclick",this.btn_AuthCheck_onclick,this);
            this.btn_Pass.addEventHandler("onclick",this.btn_Pass_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
