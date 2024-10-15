(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_HRD_history");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">EMP_CODE</Col><Col id=\"Name\">사번</Col></Row><Row><Col id=\"Value\">NAME</Col><Col id=\"Name\">이름</Col></Row><Row><Col id=\"Value\">ASSIGN_NAME</Col><Col id=\"Name\">직급</Col></Row><Row><Col id=\"Value\">DEP_NAME</Col><Col id=\"Name\">부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_HrdHistorylist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_in\" type=\"DATE\" size=\"256\"/><Column id=\"dep_out\" type=\"DATE\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_date\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","36","23","174","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인사기록");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","160","110","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_HrdHistorySearch","692","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_HrdList","36","150","728","400",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_HrdHistorylist");
            obj.set_autoenter("none");
            obj.set_autoupdatetype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"106\"/><Column size=\"115\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"직급발령일\"/><Cell col=\"4\" text=\"부서\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"5\" text=\"부서발령일\"/><Cell col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:emp_code\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assign_name\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:assign_date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"4\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\" edittype=\"none\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendarpopuptype=\"none\" text=\"bind:dep_name\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:dep_in\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendarshowmonthspin=\"true\" calendarshowyearspin=\"true\" calendardisplaynulltype=\"none\" calendarautoselect=\"true\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:dep_out\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendarshowmonthspin=\"true\" calendarshowyearspin=\"true\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","36","110","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_innerdataset("ds_SearchType");
            obj.set_text("사번");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_SearchWord","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearchType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_HRD_history.xfdl", function() {

        // 조회 함수
        this.fnSearchList = function(){

        	// 컨트롤러 호출
        	var strSvcId    = "hrdHistoryList";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::hrdHistoryList.do";             // 호출 URL
        	var inData      = "ds_Search=ds_Search";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_HrdHistorylist=ds_HrdHistorylist";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fn_Callback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	console.log(this.ds_HrdHistyrolist.saveXML());
        };


        this.Form_HRD_history_onload = function(obj,e)
        {
        	this.ds_Search.setColumn(0,"SEARCH_TYPE","EMP_CODE");
        	this.fnSearchList();
        };



        this.btn_HrdHistorySearch_onclick = function(obj,e)
        {
        	this.fnSearchList();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_HRD_history_onload,this);
            this.btn_HrdHistorySearch.addEventHandler("onclick",this.btn_HrdHistorySearch_onclick,this);
        };
        this.loadIncludeScript("Form_HRD_history.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
