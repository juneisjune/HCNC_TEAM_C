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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Login","400","200","400","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인증번호 발송");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_emaildlqfur","407","446","203","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dlswmd","654","436","152","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("인증하기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        // 로그인 버튼
        this.btn_Login_onclick = function(obj,e)
        {
        	/*

        		fn_LoginSuccess(); <- 로그인 시에 콜백으로 실행

        	*/
        	this.fn_LoginSuccess();
        };


        this.fn_LoginSuccess = function() {

        	//로그인 성공 시에 workFrame 첫 화면
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");

        	//Top, HFrameSet00, Login 3개 영역을 조정하여 로그인 화면이 보이지 않도록 설정
            nexacro.getApplication().mainframe.VFrameSet00.set_separatesize("55,*,0");

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Login.addEventHandler("onclick",this.btn_Login_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
