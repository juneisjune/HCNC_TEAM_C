(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_emp");
            this.set_titletext("Employee Department Assignment");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptList", this);
            obj._setContents("<ColumnInfo><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_empList","10","10","600","300",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_empList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"성별\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:empID\"/><Cell col=\"1\" text=\"bind:empAssign\"/><Cell col=\"2\" text=\"bind:empName\"/><Cell col=\"3\" text=\"bind:empGender\"/><Cell col=\"4\" text=\"bind:empDept\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_deptLabel","620","10","100","30",null,null,null,null,null,null,this);
            obj.set_text("부서선택");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_deptList","675","10","150","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_deptList");
            obj.set_codecolumn("deptID");
            obj.set_datacolumn("deptName");
            this.addChild(obj.name, obj);

            obj = new Button("btn_assignDept","620","50","100","30",null,null,null,null,null,null,this);
            obj.set_text("부서 배정");
            this.addChild(obj.name, obj);
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
        this.registerScript("Form_emp.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_emp_onload,this);
            this.cmb_deptList.addEventHandler("onitemchanged",this.cmb_deptList_onitemchanged,this);
            this.btn_assignDept.addEventHandler("onclick",this.btn_assignDept_onclick,this);
        };
        this.loadIncludeScript("Form_emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
