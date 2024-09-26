(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1535,55);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBack02","0","0","1535","55",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_top_bg02");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staHello","1375","0","160","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("변수민님");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Logout","1450","10","70","32.5",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_HcncLogo","0","0","180","55",null,null,null,null,null,null,this);
            obj.set_image("url(\'imagerc::hcnc_logo.png\')");
            obj.set_imagealign("center");
            obj.set_stretch("fixaspectratio");
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_background("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1535,55,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        // 로그아웃 버튼
        this.btn_Logout_onclick = function(obj,e)
        {
        	//Top, HFrameSet00, Login 3개 영역을 조정하여 로그인 화면이 보이도록 설정
            nexacro.getApplication().mainframe.VFrameSet00.set_separatesize("0,0,*");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Logout.addEventHandler("onclick",this.btn_Logout_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
