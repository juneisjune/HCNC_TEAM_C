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
                this._setFormPosition(720,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj.getSetter("type").set("normal");
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"user_id\"/><Col id=\"password\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lbl_user_id","203","182","100","30",null,null,null,null,null,null,this);
            obj.set_text("아이디");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","303","182","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("binddataset").set("ds_login");
            obj.getSetter("bindcolumn").set("user_id");
            this.addChild(obj.name, obj);

            obj = new Static("lbl_password","203","227","100","30",null,null,null,null,null,null,this);
            obj.set_text("비밀번호");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_password","303","227","200","30",null,null,null,null,null,null,this);
            obj.set_password("true");
            obj.set_taborder("3");
            obj.getSetter("binddataset").set("ds_login");
            obj.getSetter("bindcolumn").set("password");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","333","267","100","40",null,null,null,null,null,null,this);
            obj.set_text("로그인");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,350,this,function(p){});
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
        this.fnLoginCallback = function(strSvcId, nErrorCode, strErrorMsg) {
        	objApp=nexacro.getApplication();
            if (nErrorCode < 0) {
                alert("로그인 실패: " + strErrorMsg);
            }
            else {
                // 서버에서 반환한 ds_userInfo에서 각 정보 가져옴
        		//console.log(this.ds_userInfo.saveXML());
        //         var userId = this.ds_login.getColumn(0, "id");
        //         var password = this.ds_login.getColumn(0, "password");
        //         var adminName = this.ds_login.getColumn(0, "name");
        //         var email = this.ds_login.getColumn(0, "email");

        // 		console.log(this.ds_login.saveXML());
        // 		console.log("userId: " + userId);
        // 		console.log("password: " + password);
        // 		console.log("name: " + name);
        // 		console.log("email: " + email);

        		// 전역 데이터셋에 저장
                var row = objApp.ds_userInfo.addRow();
        		var row2 = objApp.ds_userInfo.rowposition;
        		console.log("#####");
        		console.log(objApp.ds_userInfo.rowcount); // 2
        		console.log(objApp.ds_userInfo.rowposition); // 1
        		console.log("#####");

        //         nexacro.getApplication().ds_userInfo.setColumn(row, "id", user_id);
        //         nexacro.getApplication().ds_userInfo.setColumn(row, "password", password);
        //         nexacro.getApplication().ds_userInfo.setColumn(row, "name", name);
        //         nexacro.getApplication().ds_userInfo.setColumn(row, "email", email);

        		// 저장된 값 확인하는 콘솔 로그
        		console.log("저장된 ID: " + objApp.ds_userInfo.getColumn(row, "id"));
        		console.log("저장된 Password: " + objApp.ds_userInfo.getColumn(row, "password"));
        		console.log("저장된 Name: " + objApp.ds_userInfo.getColumn(row, "name"));
        		console.log("저장된 Email: " + objApp.ds_userInfo.getColumn(row, "email"));
        		console.log(nexacro.getApplication().ds_userInfo.saveXML());
        		console.log(nexacro.getApplication().ds_userInfo.getColumn(row,"name"));

                alert("로그인 성공! 사용자 정보가 저장되었습니다.");

                // 로그인 성공 후 페이지 이동
                nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");
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
            var inData = "ds_login=ds_login";
            var outData = "nexacro.getApplication().ds_userInfo=ds_login";  // 서버로부터 받아온 데이터를 받을 데이터셋
            var strArg = "";
            var callBackFnc = "fnLoginCallback";  // 콜백 함수
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
