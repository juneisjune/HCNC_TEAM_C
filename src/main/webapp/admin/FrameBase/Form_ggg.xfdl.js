(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ggg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"Value\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Value\">ALL</Col><Col id=\"Name\">전체</Col></Row><Row><Col id=\"Value\">ASSIGNMENT</Col><Col id=\"Name\">직책</Col></Row><Row><Col id=\"Value\">DEPARTMENT</Col><Col id=\"Name\">부서</Col></Row><Row><Col id=\"Value\">NAME</Col><Col id=\"Name\">이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year00", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month00", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pay", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"payYear\" type=\"STRING\" size=\"256\"/><Column id=\"payMonth\" type=\"STRING\" size=\"256\"/><Column id=\"payAmount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_Search","158","159","104","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","830","159","77","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("emp_code","105","596","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사번");
            obj.set_font("bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("nsme","250","598","60","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","144","598","92","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","284","600","106","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Update","620","594","90","51",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","775","595","90","52",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","30","210","885","381",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_Pay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"급여년도\"/><Cell col=\"5\" text=\"급여월\"/><Cell col=\"6\" text=\"지급액\"/><Cell col=\"7\" text=\"수정액\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:depName\"/><Cell col=\"3\" text=\"bind:assignName\"/><Cell col=\"4\" text=\"bind:payYear\"/><Cell col=\"5\" text=\"bind:payMonth\"/><Cell col=\"6\" text=\"bind:payAmount\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","534","169","33","28",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("9");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year","300","164","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month","430","161","73","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year00","567","165","83","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ModPay","498","601","104","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","394","170","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("년도");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","500","171","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","650","172","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("년도");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","775","174","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","450","602","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("수정액");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","47","50","167","65",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("급여 관리");
            obj.set_font("36px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month00","690","166","73","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearType","28","148","112","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("Name");
            obj.set_codecolumn("Value");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cmb_SearType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_ggg.xfdl", function() {
        // 조회 버튼 클릭 시 호출되는 함수
        this.btn_Search_onclick = function(obj, e) {
            this.fnSearch();
        };

        // 화면이 로드될 때 호출되는 함수
        this.Form_ggg_onload = function(obj, e) {
            // 검색 조건 콤보박스값 초기화
            this.ds_Search.setColumn(0, "SEARCH_TYPE", "ALL");

            // 첫 조회 실행
            this.fnSearch();
        };

        // 조회 함수
        this.fnSearch = function() {
            // 검색 조건 확인 (필요하다면 조건 추가)
            console.log("SEARCH_TYPE = " + this.ds_Search.getColumn(0, "SEARCH_TYPE"));
            console.log("SEARCH_WORD = " + this.ds_Search.getColumn(0, "SEARCH_WORD"));

            var strSvcId    = "searchPay";
            var strSvcUrl   = "svc::selectPayList.do";
            var inData      = "ds_Search=ds_Search";
            var outData     = "ds_Pay=ds_Pay";  // 서버에서 받은 데이터를 ds_Pay에 저장
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectPayList":
        			break;
        		default :
        		// 위 서비스 ID에 해당하지 않을 경우
        			break;
        	}
        };





        ////년도

        this.com_year_onitemchanged = function(obj,e)
        {  // 현재 연도부터 과거 몇 년까지 콤보박스에 추가할지 설정
            var currentYear = new Date().getFullYear();  // 현재 연도 가져오기
            var startYear = currentYear - 2;  // 100년 전부터 설정

            // Combo에 바인딩할 Dataset 초기화
            this.ds_Year.clearData();  // 데이터셋 비우기

            // 연도 데이터 추가
            for (var i = currentYear; i >= startYear; i--) {
                var nRow = this.ds_Year.addRow();  // 새 행 추가
                this.ds_Year.setColumn(nRow, "year", i.toString());  // "year" 컬럼에 연도 값 넣기
            }

            // Combo에 Dataset 연결
            this.cmb_Year.set_innerdataset(this.ds_Year);  // 연도 데이터셋 연결
            this.cmb_Year.set_codecolumn("year");  // 콤보박스에서 사용할 값 설정 (value)
            this.cmb_Year.set_datacolumn("year");  // 화면에 보이는 값 설정 (text)
        };





        this.com_Month_onitemchanged = function(obj,e)
        {

            this.ds_Month.clearData();  // 데이터 초기화

            for (var i = 1; i <= 12; i++) {
                var nRow = this.ds_Month.addRow();  // 새 행 추가
                var monthString = i < 10 ? "0" + i.toString() : i.toString();  // 월을 두 자리 문자열로 만듦
                this.ds_Month.setColumn(nRow, "month", monthString);  // 월 값 입력
            }

            this.cmb_Month.set_innerdataset(this.ds_Month);  // Dataset 연결
            this.cmb_Month.set_codecolumn("month");  // 코드 컬럼 설정
            this.cmb_Month.set_datacolumn("month");  // 데이터 컬럼 설정
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.emp_code.addEventHandler("onclick",this.emp_onclick,this);
            this.edt_CodeNm.addEventHandler("onchanged",this.edt_CodeNm_onchanged,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.grd_CodeMst.addEventHandler("oncelldblclick",this.grd_Pay_oncelldblclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.com_year.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_year00.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.com_Month00.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.cmb_SearType.addEventHandler("onitemchanged",this.cmb_SearType_onitemchanged,this);
        };
        this.loadIncludeScript("Form_ggg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
