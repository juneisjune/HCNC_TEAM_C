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
                this._setFormPosition(600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FindLoginInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"emailForId\" type=\"STRING\" size=\"256\"/><Column id=\"emailForPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Result", this);
            obj._setContents("<ColumnInfo><Column id=\"ResultId\" type=\"STRING\" size=\"256\"/><Column id=\"ResultPassword\" type=\"STRING\" size=\"256\"/><Column id=\"authKey\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AuthCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"AuthCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NewPassword", this);
            obj._setContents("<ColumnInfo><Column id=\"NewPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_FindId","20","20","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디 찾기");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_FindPassword","20","200","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 찾기");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_NameForId","20","80","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EmailForId","260","80","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_IdForPassword","30","260","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ID : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EmailForPassword","255","260","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이메일 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NameForId","70","80","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailForId","330","80","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_IdForPassword","70","260","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailForPassword","330","260","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_IdSearch","520","80","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PasswordSearch","520","260","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ResultId","20","140","550","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("bold 14pt \"Arial Black\"");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Static("sta_AuthCheck","240","330","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인증번호 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_AuthCheck","330","330","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AuthCheck","520","330","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("인증");
            this.addChild(obj.name, obj);

            obj = new Static("sta_NewPassword","30","420","190","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("새로운 비밀번호 입력 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","220","420","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NewPassword","410","420","50","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","260","530","80","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_NameForId","value","ds_FindLoginInfo","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_IdForPassword","value","ds_FindLoginInfo","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_EmailForId","value","ds_FindLoginInfo","emailForId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_EmailForPassword","value","ds_FindLoginInfo","emailForPassword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","sta_ResultId","text","ds_Result","ResultId");
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
        	// 유효성 검사
        	if(this.ds_FindLoginInfo.getColumn(0, "name") == '') {
        		alert("이름을 입력하세요");
        		return;
        	}
        	if(this.ds_FindLoginInfo.getColumn(0, "emailForId") == '') {
        		alert("이메일을 입력하세요");
        		return;
        	}

        	var strSvcId    = "FindId";
            var strSvcUrl   = "svc::FindId.do";
            var inData      = "ds_FindLoginInfo=ds_FindLoginInfo";  // 입력 데이터셋
            var outData     = "";  // 출력 데이터셋 (서버에서 응답받을 데이터)
            var strArg      = "";  // 추가적인 파라미터 (필요시 사용)
            var callBackFnc = "fnCallback";  // 콜백 함수 이름
            var isAsync     = true;  // 비동기 설정

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        // Password 찾기 버튼
        this.btn_PasswordSearch_onclick = function(obj,e)
        {
        	// 유효성 검사
        	if(this.ds_FindLoginInfo.getColumn(0, "id") == '') {
        		alert("이름을 입력하세요");
        		return;
        	}
        	if(this.ds_FindLoginInfo.getColumn(0, "emailForPassword") == '') {
        		alert("이메일을 입력하세요");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_IdSearch.addEventHandler("onclick",this.btn_IdSearch_onclick,this);
            this.btn_PasswordSearch.addEventHandler("onclick",this.btn_PasswordSearch_onclick,this);
        };
        this.loadIncludeScript("Popup_FindLoginInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
