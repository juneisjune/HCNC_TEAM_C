(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_InsertPay");
            this.set_titletext("급여 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AssignType", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assign_code\">1</Col><Col id=\"assign_name\">사원</Col></Row><Row><Col id=\"assign_name\">대리</Col><Col id=\"assign_code\">2</Col></Row><Row><Col id=\"assign_name\">과장</Col><Col id=\"assign_code\">3</Col></Row><Row><Col id=\"assign_name\">차장</Col><Col id=\"assign_code\">4</Col></Row><Row><Col id=\"assign_name\">부장</Col><Col id=\"assign_code\">5</Col></Row><Row><Col id=\"assign_name\">이사</Col><Col id=\"assign_code\">6</Col></Row><Row><Col id=\"assign_name\">대표</Col><Col id=\"assign_code\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Assign", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Emp", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title","60","12","278","78",null,null,null,null,null,null,this);
            obj.set_font("24px/normal \"Gulim\"");
            obj.set_taborder("0");
            obj.set_text("급여 등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Assign","60","71","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("직책");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Assign","95","91","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_AssignType");
            obj.set_codecolumn("assign_code");
            obj.set_datacolumn("assign_name");
            obj.getSetter("onclick").set("Common_onclick");
            obj.set_font("12pt/normal gulim");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Monthly","60","110","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기본급");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("me_Monthly","105","132","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("#,##0");
            obj.set_postfixtext("원");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","215","91","43","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("stc_tax","263","110","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("세금");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("me_Tax","298","132","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_postfixtext("%");
            obj.set_format("0.0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Emp","60","175","800","270",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_Emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"88\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"125\"/><Column size=\"247\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:emp_code\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:name\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:assign_name\"/><Cell col=\"4\" text=\"bind:dep_name\"/><Cell col=\"5\" textAlign=\"center\" displaytype=\"date\" text=\"bind:join_date\"/><Cell col=\"6\" text=\"bind:account\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","540","445","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("지급일");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_GiveDate","595","465","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert","770","460","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_Assign","value","ds_Dep","assign_code");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_InsertPay.xfdl", function() {

        this.Form_InsertPay_onload = function(obj,e)
        {



        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_InsertPay_onload,this);
            this.cmb_Assign.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.stc_Monthly.addEventHandler("onclick",this.Static02_onclick,this);
            this.me_Monthly.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("Form_InsertPay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
