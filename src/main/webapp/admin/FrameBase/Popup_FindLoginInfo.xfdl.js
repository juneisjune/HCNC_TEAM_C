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
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_FindId","20","20","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디 찾기");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_FindPassword","20","240","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 찾기");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_NameForId","21","80","49","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EmailForId","246","80","64","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_IdForPassword","20","300","49","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ID : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_EmailForPassword","245","300","64","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이메일 : ");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Popup_FindLoginInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
