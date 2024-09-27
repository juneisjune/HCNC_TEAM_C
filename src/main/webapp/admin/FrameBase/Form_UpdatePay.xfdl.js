(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_UpdatePay");
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
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"START_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"END_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"END_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Year", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"INT\" size=\"256\"/><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col><Col id=\"year\">2021</Col></Row><Row><Col id=\"NO\">2</Col><Col id=\"year\">2022</Col></Row><Row><Col id=\"NO\">3</Col><Col id=\"year\">2023</Col></Row><Row><Col id=\"NO\">4</Col><Col id=\"year\">2024</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Month", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col></Row><Row><Col id=\"month\">2</Col></Row><Row><Col id=\"month\">3</Col></Row><Row><Col id=\"month\">4</Col></Row><Row><Col id=\"month\">5</Col></Row><Row><Col id=\"month\">6</Col></Row><Row><Col id=\"month\">7</Col></Row><Row><Col id=\"month\">8</Col></Row><Row><Col id=\"month\">9</Col></Row><Row><Col id=\"month\">10</Col></Row><Row><Col id=\"month\">11</Col></Row><Row><Col id=\"month\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pay", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"payYear\" type=\"STRING\" size=\"256\"/><Column id=\"payMonth\" type=\"STRING\" size=\"256\"/><Column id=\"payAmount\" type=\"STRING\" size=\"256\"/><Column id=\"etc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("emp_nsme","250","598","60","38",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","534","169","33","28",null,null,null,null,null,null,this);
            obj.set_text("~");
            obj.set_taborder("7");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year","300","164","90","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month","427","164","73","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("com_year00","567","165","83","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_Year");
            obj.set_datacolumn("year");
            obj.set_codecolumn("year");
            obj.set_text("");
            obj.set_value("year");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ModPay","498","601","104","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","394","170","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("년도");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","500","171","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","657","173","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("년도");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","775","174","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("월");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("emp_","450","602","67","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("수정액");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","47","50","167","65",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("급여 관리");
            obj.set_font("36px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("com_Month00","697","166","73","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_Month");
            obj.set_datacolumn("month");
            obj.set_codecolumn("month");
            obj.set_text("");
            obj.set_value("month");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SearType","28","148","112","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("Name");
            obj.set_codecolumn("Value");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","775","595","90","52",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","30","210","885","381",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_Pay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"급여년도\"/><Cell col=\"5\" text=\"급여월\"/><Cell col=\"6\" text=\"지급액\"/><Cell col=\"7\" text=\"수정액\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:depName\"/><Cell col=\"3\" text=\"bind:assignName\"/><Cell col=\"4\" text=\"bind:payYear\"/><Cell col=\"5\" text=\"bind:payMonth\"/><Cell col=\"6\" text=\"bind:payAmount\"/><Cell col=\"7\" text=\"bind:etc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Search","value","ds_Search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_SearType","value","ds_Search","SEARCH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","com_year","value","ds_Search","START_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","com_Month","value","ds_Search","START_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","com_year00","value","ds_Search","END_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","com_Month00","value","ds_Search","END_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_ModPay","value","ds_Pay","etc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_Code","value","ds_Search","SEARCH_EMP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_CodeNm","value","ds_Search","SEARCH_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_UpdatePay.xfdl", function() {
        // 조회 버튼 클릭 시 호출되는 함수
        this.btn_Search_onclick = function(obj, e) {
            this.fnSearch();
        };

        // 화면이 로드될 때 호출되는 함수
        this.Form_UpdatePay_onload = function(obj, e) {
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





        ////////////////////////////////////////////////////////////////////////


        this.btn_Update_onclick = function(obj, e)
        {
            // 사번, 이름, 수정액을 입력했는지 확인
            var empCode = this.edt_Code.value;
            var name = this.edt_CodeNm.value;
            var modPay = this.edt_ModPay.value;

            if (!empCode || !name || !modPay) {
                this.alert("사번, 이름, 수정액을 모두 입력해주세요.");
                return;
            }

            // 선택한 행을 찾음 (사번과 이름 기준으로 그리드에서 찾음)
            var selectedRow = this.ds_Pay.findRowExpr("empCode == '" + empCode + "' && name == '" + name + "'");

            if (selectedRow == -1) {
                this.alert("해당 사번의 데이터를 찾을 수 없습니다.");
                return;
            }

            // 지급총액(pay_amount)와 수정액(etc) 가져오기
            var payAmount = this.ds_Pay.getColumn(selectedRow, "payAmount");  // 지급액
            var currentEtc = this.ds_Pay.getColumn(selectedRow, "etc");      // 기존 수정액

            // 수정액 반영 (기존 지급총액에 입력한 수정액을 더하거나 빼기)
            var newPayAmount = payAmount + parseInt(modPay);

            // 새로운 지급총액 반영
            this.ds_Pay.setColumn(selectedRow, "payAmount", newPayAmount);  // 지급액 업데이트
            this.ds_Pay.setColumn(selectedRow, "etc", modPay);              // 수정액 업데이트

            // 서버에 수정된 값 반영
            var strSvcId    = "updatePayEtc";
            var strSvcUrl   = "svc::updatePayEtc.do";
            var inData      = "ds_Pay=ds_Pay";
            var outData     = "ds_Pay=ds_Pay";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 트랜잭션 완료 후 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode == -1) {
                this.alert("오류 발생: " + errorMsg);
                return;
            }

            switch(svcID) {
                case "updatePayEtc":
                    this.alert("수정이 성공적으로 완료되었습니다.");
                    break;
                default:
                    break;
            }
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.emp_code.addEventHandler("onclick",this.emp_onclick,this);
            this.edt_Code.addEventHandler("onchanged",this.edt_Code_onchanged,this);
            this.edt_CodeNm.addEventHandler("onchanged",this.edt_CodeNm_onchanged,this);
            this.btn_Update.addEventHandler("onclick",this.btn_Update_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.com_year.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.com_Month.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.com_year00.addEventHandler("onitemchanged",this.com_year_onitemchanged,this);
            this.edt_ModPay.addEventHandler("onchanged",this.edt_ModPay_onchanged,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.com_Month00.addEventHandler("onitemchanged",this.com_Month_onitemchanged,this);
            this.cmb_SearType.addEventHandler("onitemchanged",this.cmb_SearType_onitemchanged,this);
            this.grd_CodeMst.addEventHandler("oncelldblclick",this.grd_Pay_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_UpdatePay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
