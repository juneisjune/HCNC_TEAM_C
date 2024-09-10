(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PostPage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","10","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항관리");
            obj.set_textAlign("left");
            obj.set_font("bold 26px/normal \"Gulim\"");
            obj.set_background("blue");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_notice","10","50","680","400",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_notice");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"조회수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:number\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:author\"/><Cell col=\"4\" text=\"bind:date\"/><Cell col=\"5\" text=\"bind:view_count\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_selectedCount","10","470","150","30",null,null,null,null,null,null,this);
            obj.set_text("0건 선택됨");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","590","470","100","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","350","520","50","30",null,null,null,null,null,null,this);
            obj.set_text("이전");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next","450","520","50","30",null,null,null,null,null,null,this);
            obj.set_text("다음");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addNotice","590","10","100","30",null,null,null,null,null,null,this);
            obj.set_text("새 공지사항");
            obj.set_taborder("6");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_addNotice.addEventHandler("onclick",this.btn_addNotice_onclick,this);
        };
        this.loadIncludeScript("Form_PostPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
