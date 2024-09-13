(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_EditAtten");
            this.set_titletext("출/퇴근 정보 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AttenList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"DATE\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"STRING\" size=\"256\"/><Column id=\"workEnd\" type=\"STRING\" size=\"256\"/><Column id=\"workOver\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close","930","20","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_EditAtten.xfdl", function() {

        this.Popup_EditAtten_onload = function(obj,e)
        {
        	this.ds_AttenList.clearData();
        	this.ds_AttenList.addRow();
        	this.ds_AttenList.setColumn(0, "COL_EMPCODE", this.parent.COL_EMPCODE);
        	this.ds_AttenList.setColumn(0, "COL_NAME", this.parent.COL_NAME);
        	this.ds_AttenList.setColumn(0, "COL_ASSIGNMENT", this.parent.COL_ASSIGNMENT);
        	this.ds_AttenList.setColumn(0, "COL_DEPARTMENT", this.parent.COL_DEPARTMENT);
        	this.ds_AttenList.setColumn(0, "COL_WORKDATE", this.parent.COL_WORKDATE);
        	this.ds_AttenList.setColumn(0, "COL_ATTENDANCE", this.parent.COL_ATTENDANCE);
        	this.ds_AttenList.setColumn(0, "COL_WORKSTART", this.parent.COL_WORKSTART);
        	this.ds_AttenList.setColumn(0, "COL_WORKEND", this.parent.COL_WORKEND);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_EditAtten_onload,this);
        };
        this.loadIncludeScript("Popup_EditAtten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
