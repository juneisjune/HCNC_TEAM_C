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
                this._setFormPosition(1535,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBack02","0","0","1535","50",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_top_bg02");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_top_logo");
            obj.set_taborder("1");
            obj.set_text("인사관리시스템_C_TEAM");
            this.addChild(obj.name, obj);

            obj = new Static("staHello","1375","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("변수민님");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1535,50,this,function(p){});
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
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
