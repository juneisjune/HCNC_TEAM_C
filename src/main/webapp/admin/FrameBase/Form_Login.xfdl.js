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
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(710,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj.getSetter("type").set("normal");
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"user_id\"/><Col id=\"password\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lbl_user_id","150","115","100","30",null,null,null,null,null,null,this);
            obj.set_text("아이디");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","250","115","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("binddataset").set("ds_login");
            obj.getSetter("bindcolumn").set("user_id");
            this.addChild(obj.name, obj);

            obj = new Static("lbl_password","150","160","100","30",null,null,null,null,null,null,this);
            obj.set_text("비밀번호");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_password","250","160","200","30",null,null,null,null,null,null,this);
            obj.set_password("true");
            obj.set_taborder("3");
            obj.getSetter("binddataset").set("ds_login");
            obj.getSetter("bindcolumn").set("password");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","280","200","100","40",null,null,null,null,null,null,this);
            obj.set_text("로그인");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",710,310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_user_id","value","ds_login","user_id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_password","value","ds_login","password");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        this.fnLoginCallback=function(strSvcId, nErrorCode, strErrorMsg)
        {
            if (nErrorCode < 0)
            {
                alert("로그인 실패: " + strErrorMsg);
            }
            else {
                alert("로그인 성공!");
        		nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");
                this.go("Form_Post.xfdl");  // 성공 시 다음 페이지로 이동
            }
        };

        this.fnLogin_onclick = function(obj,e)
        {


            // ds_login에서 user_id와 password 값을 가져옴
            var user_id = this.ds_login.getColumn(0,"user_id"); // "emp_code" 대신 "user_id"를 사용
            var password = this.ds_login.getColumn(0,"password"); // Dataset에서 password 값을 가져옴

            // Dataset에 Row가 제대로 있는지 확인
            console.log("Dataset row count: " + this.ds_login.getRowCount()); // Row 개수를 확인

            // 데이터가 제대로 입력되었는지 로그로 출력
            console.log("id: " + user_id);
            console.log("password: " + password);

            // 아이디와 비밀번호가 비어있으면 경고 메시지 출력
            if(user_id == "" ||user_id =='undefined'|| user_id== null||password == "")
            {
                alert("아이디를 입력해 주세요");
                return;
            }

            // 로그인 함수 호출
            this.fnLogin();
        };


        this.fnLogin = function() {
            console.log("함수 안에 들어옴");
        	console.log(this.ds_login.saveXML());  // DataSet 내용 확인

            var strSvcId = "loginService";
            var strSvcUrl = "svc::login.do";
            var inData = "ds_login=ds_login";  // 입력 데이터를 전달
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnLoginCallback";  // 콜백 함수
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);  // 트랜잭션 호출
            console.log("transaction 지나감");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_user_id.addEventHandler("onchanged",this.edt_user_id_onchanged,this);
            this.btn_login.addEventHandler("onclick",this.fnLogin_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
