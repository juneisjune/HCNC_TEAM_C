(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EvalEmployee");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvalAll", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"evalDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">all</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">id</Col><Col id=\"CODE_NM\">ID</Col></Row><Row><Col id=\"CODE\">assign</Col><Col id=\"CODE_NM\">직책</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Type\" type=\"STRING\" size=\"256\"/><Column id=\"Word\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"admin_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Type\"/><Col id=\"Word\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox_Search","30","90","460","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_visible("true");
            obj.set_opacity("1");
            obj.set_tooltiptype("default");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","20","230","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직원 평가");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilterSearch","315","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEvaluation","30","165","992","425",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsEvalAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"198\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"198\"/><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:gender\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:depName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearchType","60","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchText","155","110","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset","400","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_normal");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegister","915","110","107","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("평가하기");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grdEvaluation","binddataset","dsEvaluation","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmbSearchType","value","dsSearch","Type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtSearchText","value","dsSearch","Word");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EvalEmployee.xfdl", function() {
        this.btnFilterSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.Form_Eval_onload = function(obj,e) {

        	this.dsSearch.setColumn(0, "Type", "all");
            this.fnSearch();
        };
        	var admin_code = nexacro.getApplication().ds_userInfo.getColumn(0, "emp_code");

        	this.dsSearch.setColumn(0, "admin_code", admin_code);

        this.fnSearch = function() {
            var searchType = this.dsSearch.getColumn(0, "Type");
            var searchWord = this.dsSearch.getColumn(0, "Word");


            console.log("cmbSearchType = " + searchType);
            console.log("edtSearchText = " + searchWord);

            var strSvcID = "evalAll";
            var strSvcUrl = "svc::evalAll.do";
            var inData = "dsSearch=dsSearch";
            var outData = "dsEvalAll=dsEvalAll";
            var strArg = "";
            var callBackFnc = "fnCallback";
            var isAsync = true;

        	this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.btnReset_onclick = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "Type", "all");
            this.dsSearch.setColumn(0, "Word", "");

        };

        this.showPopup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popRegister", 0, 0, 800, 700, null, null, "FrameBase::Form_EvalRegister.xfdl");
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        };

        this.btnRegister_onclick = function(obj,e)
        {
        	if (this.dsEvalAll.getRowCount() === 0) {
                alert("평가할 데이터를 선택해 주세요.");
                return;
            }

        	var objParam = {empCode:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "empCode")
                          , name:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "name")
        				  , assignName:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "assignName")
        				  , depName:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "depName")
        				  };
        	this.showPopup(objParam);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Eval_onload,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.btnFilterSearch.addEventHandler("onclick",this.btnFilterSearch_onclick,this);
            this.cmbSearchType.addEventHandler("onitemchanged",this.dsEvaluation_onload,this);
            this.edtSearchText.addEventHandler("onchanged",this.edtSearchText_onchanged,this);
            this.btnReset.addEventHandler("onclick",this.btnReset_onclick,this);
            this.btnRegister.addEventHandler("onclick",this.btnRegister_onclick,this);
            this.dsEvalAll.addEventHandler("onload",this.dsEvaluation_onload,this);
        };
        this.loadIncludeScript("Form_EvalEmployee.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
