(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_dayoff");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("off_code", this);
            obj._setContents("<ColumnInfo><Column id=\"off_code\" type=\"INT\" size=\"256\"/><Column id=\"off_type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"off_code\">1</Col><Col id=\"off_type\">연차</Col></Row><Row><Col id=\"off_code\">2</Col><Col id=\"off_type\">공가</Col></Row><Row><Col id=\"off_code\">3</Col><Col id=\"off_type\">병가</Col></Row><Row><Col id=\"off_code\">4</Col><Col id=\"off_type\">하계휴가</Col></Row><Row><Col id=\"off_code\">5</Col><Col id=\"off_type\">반차</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","15","18","98","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_border("0px none");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","78","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("연차기간");
            obj.set_border("0px none");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","138","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("연차사유");
            obj.set_border("0px none");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","15","198","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_border("0px none");
            obj.set_font("20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","118","23","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","120","203","490","137",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","119","78","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시작일");
            obj.set_border("0px none");
            obj.set_font("15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","359","78","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("종료일");
            obj.set_border("0px none");
            obj.set_font("15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_off","118","145","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("off_code");
            obj.set_codecolumn("off_code");
            obj.set_datacolumn("off_type");
            obj.set_text("연차사유");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","465","349","67","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","543","349","67","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","176","86","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","410","86","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
        this.registerScript("Form_dayoff.xfdl", function() {

        this.btn_Save_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
        };
        this.loadIncludeScript("Form_dayoff.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
