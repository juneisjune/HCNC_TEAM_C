(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_HRD");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SerachType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">all</Col><Col id=\"Name\">전체</Col></Row><Row><Col id=\"Value\">emp_code</Col><Col id=\"Name\">사번</Col></Row><Row><Col id=\"Value\">name</Col><Col id=\"Name\">이름</Col></Row><Row><Col id=\"Value\">dep_name</Col><Col id=\"Name\">부서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Serach", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hrdlist", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"mng_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"mng_code\" type=\"INT\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Department", this);
            obj._setContents("<ColumnInfo><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dep_code\">1</Col><Col id=\"dep_name\">경영지원부</Col></Row><Row><Col id=\"dep_code\">2</Col><Col id=\"dep_name\">SI사업부</Col></Row><Row><Col id=\"dep_code\">3</Col><Col id=\"dep_name\">솔루션개발부</Col></Row><Row><Col id=\"dep_code\">4</Col><Col id=\"dep_name\">기술개발부</Col></Row><Row><Col id=\"dep_code\">5</Col><Col id=\"dep_name\">자동화사업부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Assignment", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assign_code\">1</Col><Col id=\"assign_name\">사원</Col></Row><Row><Col id=\"assign_code\">2</Col><Col id=\"assign_name\">대리</Col></Row><Row><Col id=\"assign_code\">3</Col><Col id=\"assign_name\">과장</Col></Row><Row><Col id=\"assign_code\">4</Col><Col id=\"assign_name\">차장</Col></Row><Row><Col id=\"assign_code\">5</Col><Col id=\"assign_name\">부장</Col></Row><Row><Col id=\"assign_code\">6</Col><Col id=\"assign_name\">이사</Col></Row><Row><Col id=\"assign_code\">7</Col><Col id=\"assign_name\">대표</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_UpdateHrdlist", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"mng_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"mng_code\" type=\"INT\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","13","722","67",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인 사 관 리");
            obj.set_font("bold 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SearchWord","164","104","504","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_HrdListSearch","678","103","100","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_HrdList","28","160","750","460",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_Hrdlist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"92\"/><Column size=\"130\"/><Column size=\"91\"/><Column size=\"130\"/><Column size=\"115\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"3\" text=\"직책\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"부서장\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/></Band><Band id=\"body\"><Cell text=\"bind:emp_code\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"text\" edittype=\"combo\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendarpopuptype=\"none\" text=\"bind:dep_name\" combodataset=\"ds_Department\" combocodecol=\"dep_name\" combodatacol=\"dep_name\"/><Cell col=\"3\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"text\" text=\"bind:assign_name\" edittype=\"combo\" combodataset=\"ds_Assignment\" combocodecol=\"assign_name\" combodatacol=\"assign_name\"/><Cell col=\"4\" text=\"bind:mng_name\"/><Cell col=\"5\" text=\"bind:join_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:resign_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","30","104","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("Value");
            obj.set_datacolumn("Name");
            obj.set_innerdataset("ds_SerachType");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Savehrd","660","629","117","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_SearchWord","value","ds_Serach","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearchType","value","ds_Serach","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_HRD.xfdl", function() {
        // 조회 함수
        this.fnSearchList = function(){
        	// application 변수에서 emp_code와 assign_code를 가져옴

        	var loginAdminName = nexacro.getApplication().gv_name;
        	this.ds_Hrdlist.setColumn(0,"admin_name","관리나경진")

        	// 컨트롤러 호출
        	var strSvcId    = "hrdList";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::hrdList.do";             // 호출 URL
        	var inData      = "ds_Search=ds_Search";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_Hrdlist=ds_Hrdlist";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fn_Callback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기
        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	console.log(this.ds_Hrdlist);
        }

        this.btn_HrdListSearch_onclick = function(obj,e)
        {
        	this.fnSearchList();
        };

        this.Form_HRD_onload = function(obj,e)
        {
        	this.ds_Serach.setColumn(0,"SEARCH_TYPE","all");
        	this.fnSearchList();
        };

        //저장 버튼
        this.btn_Savehrd_onclick = function(obj,e)
        {
        	// application 변수에서 emp_code와 assign_code를 가져옴

        	var loginAdminName = nexacro.getApplication().gv_name;
        	this.ds_Hrdlist.setColumn(0,"admin_name","관리나경진")

        	console.log(this.changedData.saveXML());


        	// 컨트롤러 호출
        	var strSvcId    = "hrdListUpdate";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::hrdListUpdate.do";             // 호출 URL
        	var inData      = "ds_Hrdlist=ds_Hrdlist";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fn_Callback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기
        	if(confirm("변경사항 저장하시겠습니까 ?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };



        this.grd_HrdList_oncellclick = function(obj,e)
        {

        };

        this.ds_Hrdlist_oncolumnchanged = function(obj,e)
        {

        };

        this.cmb_SearchType_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_HRD_onload,this);
            this.btn_HrdListSearch.addEventHandler("onclick",this.btn_HrdListSearch_onclick,this);
            this.grd_HrdList.addEventHandler("oncellclick",this.grd_HrdList_oncellclick,this);
            this.cmb_SearchType.addEventHandler("onitemchanged",this.cmb_SearchType_onitemchanged,this);
            this.btn_Savehrd.addEventHandler("onclick",this.btn_Savehrd_onclick,this);
            this.ds_Hrdlist.addEventHandler("oncolumnchanged",this.ds_Hrdlist_oncolumnchanged,this);
            this.ds_UpdateHrdlist.addEventHandler("onvaluechanged",this.ds_Hrdlist_onvaluechanged,this);
        };
        this.loadIncludeScript("Form_HRD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
