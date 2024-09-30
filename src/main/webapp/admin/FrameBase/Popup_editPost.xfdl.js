(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_editPost");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_post", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

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
        this.registerScript("Popup_editPost.xfdl", function() {
        this.Popup_edit_onload = function(obj,e)
        {
        	//this.fnSearchCombo();

        	this.ds_post.clearData();
        	this.ds_post.addRow();
        	this.ds_post.setColumn(0, "title", this.parent.title);
        	this.ds_post.setColumn(0, "content", this.parent.content);
        	console.log("post data:"+ this.ds_post.saveXML());

        };
        this.Popup_editPost_onload = function(obj,e)
        {
        	this.ds_post.clearData();
        	this.ds_post.addRow();
        	this.ds_post.setColumn(0, "title", this.parent.title);
        	this.ds_post.setColumn(0, "content", this.parent.content);
        	console.log("post data:"+ this.ds_post.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_editPost_onload,this);
        };
        this.loadIncludeScript("Popup_editPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
