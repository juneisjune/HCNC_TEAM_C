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

            
            // UI Components Initialize
            obj = new Button("btn_Login","400","200","400","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
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

        this.btn_Login_onclick = function(obj,e)
        {
        	//Top, HFrameSet00, Login 3개 영역에 대하여
            //로그인 화면이 보이지 않도록 설정
            nexacro.getApplication().mainframe.VFrameSet00.set_separatesize("53,*,0");
        };
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
