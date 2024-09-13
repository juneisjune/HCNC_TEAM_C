(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_VerifyLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","10","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이메일 인증 페이지");
            obj.set_textAlign("left");
            obj.set_font("bold 26px/normal \"Gulim\"");
            obj.set_background("blue");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sendEmail","132","74","260","106",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이메일 인증 보내기");
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
        this.registerScript("Form_VerifyLogin.xfdl", function() {
        this.btn_sendEmail_onclick = function(obj,e)
        {		console.log(nexacro.getApplication().ds_userInfo.saveXML());
        	var email = application.gds_userInfo.getColumn(0, "email");
        	console.log("전역 데이터셋에서 가져온 이메일: " + email);
        	var email=this.ds_userInfo.getColum(0,"email");

        	if(!email){
        		alert("이메일 정보가 없습니다.");
        		return;
        	}

        	this.fnSendVerificationEmail(email);
        };

        // 이메일 인증 보내기 함수
        this.fnSendVerificationEmail = function(email) {
            var strSvcId = "sendEmailVerification";
            var strSvcUrl = "svc::sendEmailVerification.do";
            var inData = "ds_userInfo=ds_userInfo";  // 이메일을 담고 있는 Dataset 전달
            var outData = "";
            var strArg = "email=" + email;  // 서버로 전달할 이메일 정보
            var callBackFnc = "fnEmailCallback";  // 콜백 함수
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 트랜잭션 콜백 함수
        this.fnEmailCallback = function(strSvcId, nErrorCode, strErrorMsg) {

            if (nErrorCode < 0) {
                alert("이메일 발송 실패: " + strErrorMsg);
            } else {
                alert("이메일 발송 성공! 인증 메일을 확인하세요.");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_sendEmail.addEventHandler("onclick",this.btn_sendEmail_onclick,this);
        };
        this.loadIncludeScript("Form_VerifyLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
