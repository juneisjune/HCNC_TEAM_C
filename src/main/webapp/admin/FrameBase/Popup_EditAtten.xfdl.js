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
                this._setFormPosition(1050,200);
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

            obj = new Grid("Grid_Edit","20","20","890","130",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_AttenList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"83\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"103\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"근무일자\"/><Cell col=\"5\" text=\"근무형태\"/><Cell col=\"6\" text=\"출근시간\"/><Cell col=\"7\" text=\"퇴근시간\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:workDate\" displaytype=\"normal\" calendardateformat=\"yyyy년 MM월 dd일\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:workType\" displaytype=\"text\" textAlign=\"center\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:workStart\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:workEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,200,this,function(p){});
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
        	this.ds_AttenList.setColumn(0, "empCode", this.parent.empCode);
        	this.ds_AttenList.setColumn(0, "name", this.parent.name);
        	this.ds_AttenList.setColumn(0, "assignName", this.parent.assignName);
        	this.ds_AttenList.setColumn(0, "depName", this.parent.depName);
        	this.ds_AttenList.setColumn(0, "workDate", this.parent.workDate);
        	this.ds_AttenList.setColumn(0, "attenType", this.parent.attenType);
        	this.ds_AttenList.setColumn(0, "workStart", this.parent.workStart);
        	this.ds_AttenList.setColumn(0, "workEnd", this.parent.workEnd);

        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.close('Close EditAtten Popup');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_EditAtten_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("Popup_EditAtten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
