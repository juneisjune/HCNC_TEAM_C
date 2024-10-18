(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Eval");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvaluation", this);
            obj.set_keystring("S:-evalDate");
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"evalDate\" type=\"DATE\" size=\"256\"/><Column id=\"totalScore\" type=\"INT\" size=\"256\"/><Column id=\"evalGrade\" type=\"STRING\" size=\"256\"/><Column id=\"guideCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">all</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">id</Col><Col id=\"CODE_NM\">사번</Col></Row><Row><Col id=\"CODE\">name</Col><Col id=\"CODE_NM\">이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Type\" type=\"STRING\" size=\"256\"/><Column id=\"Word\" type=\"STRING\" size=\"256\"/><Column id=\"StartDate\" type=\"STRING\" size=\"256\"/><Column id=\"EndDate\" type=\"STRING\" size=\"256\"/><Column id=\"admin_code\" type=\"STRING\" size=\"256\"/><Column id=\"admin_assign_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Type\"/><Col id=\"Word\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalAll", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"evalDate\" type=\"STRING\" size=\"256\"/><Column id=\"evalMonth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","30","20","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무 평가");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilterSearch","1050","155","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEvaluation","555","195","565","415",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsEvaluation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"98\"/><Column size=\"128\"/><Column size=\"123\"/><Column size=\"117\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\" expandsize=\"16\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"평가일자\"/><Cell col=\"3\" text=\"점수\"/><Cell col=\"4\" text=\"등급\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:evalDate\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:totalScore\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:evalGrade\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSearchType","555","157","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchText","645","157","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStartDate","775","157","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","915","157","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","895","157","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEvalAll","30","195","490","415",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsEvalAll");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"98\"/><Column size=\"97\"/><Column size=\"98\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"성별\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:gender\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:depName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegister","450","155","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("평가");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","110","90","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("직원 평가");
            obj.set_font("bold 18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","555","110","90","45",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("평가 결과");
            obj.set_font("bold 18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
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

            obj = new BindItem("item3","calStartDate","value","dsSearch","StartDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calEndDate","value","dsSearch","EndDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","grdEvalAll","binddataset","dsEvalAll","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","grdEvalAll","binddataset","dsEvaluation","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Eval.xfdl", function() {
        this.btnFilterSearch_onclick = function(obj,e) {
            this.fnSearch();
        };

        this.Form_Eval_onload = function(obj,e) {

            this.dsSearch.setColumn(0, "Type", "all");
            this.fnSearch();
        	this.fnEvalSearch();
        };


        this.fnSearch = function() {

        	this.grdEvalAll.setFocus();

        	var admin_code = nexacro.getApplication().ds_userInfo.getColumn(0, "emp_code");
        	var admin_assign_code = nexacro.getApplication().ds_userInfo.getColumn(0, "assign_code");


        	this.dsSearch.setColumn(0, "admin_code", admin_code);
        	this.dsSearch.setColumn(0, "admin_assign_code", admin_assign_code);

            var searchType = this.dsSearch.getColumn(0, "Type");
            var searchWord = this.dsSearch.getColumn(0, "Word");
            var startDate = this.dsSearch.getColumn(0, "StartDate");
            var endDate = this.dsSearch.getColumn(0, "EndDate");

        	// 시작 날짜와 끝 날짜 비교
        	// Nexacro에서 YYYYMMDD 형식의 날짜일 경우, 이를 YYYY-MM-DD로 변환하는 함수
            function formatDateString(dateStr) {
                if (dateStr && dateStr.length === 8) {
                    return dateStr.substring(0, 4) + '-' + dateStr.substring(4, 6) + '-' + dateStr.substring(6, 8);
                }
                return dateStr;  // 이미 적절한 형식인 경우 변환하지 않음
            }

            // 날짜 변환 후 비교
            startDate = formatDateString(startDate);
            endDate = formatDateString(endDate);

            if (startDate && endDate) {
                var start = new Date(startDate);
                var end = new Date(endDate);

                // 날짜가 유효한지 확인
                if (isNaN(start.getTime()) || isNaN(end.getTime())) {
                    alert("유효한 날짜 형식이 아닙니다.");
                    return; // 검색 중단
                }

                // 시작 날짜가 끝 날짜보다 큰지 확인
                if (start > end) {
                    alert("시작 날짜는 끝 날짜보다 앞서야 합니다.");
                    return; // 검색 중단
                }
            }

            var strSvcID = "selectEval";
            var strSvcUrl = "svc::evallist.do";
            var inData = "dsSearch=dsSearch";
            var outData = "dsEvaluation=dsEvaluation";
            var strArg = "";
            var callBackFnc = "fnSearchCallback";
            var isAsync = true;

            this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnEvalSearch = function() {
            var searchType = this.dsSearch.getColumn(0, "Type");
            var searchWord = this.dsSearch.getColumn(0, "Word");

            var strSvcID = "evalAll";
            var strSvcUrl = "svc::evalAll.do";
            var inData = "dsSearch=dsSearch";
            var outData = "dsEvalAll=dsEvalAll";
            var strArg = "";
            var callBackFnc = "fnEvalCallback";
            var isAsync = true;

        	this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 조회 트랜잭션의 콜백 함수 (조회 그리드)
        this.fnSearchCallback = function(strSvcID, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("조회 데이터 로드 실패: " + strErrorMsg);
            }
        };

        // 평가 트랜잭션의 콜백 함수 (평가 그리드)
        this.fnEvalCallback = function(strSvcID, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("평가 데이터 로드 실패: " + strErrorMsg);
            }
        };


        this.btnReset_onclick = function(obj,e) {
            this.dsSearch.setColumn(0, "Type", "all");
            this.dsSearch.setColumn(0, "Word", "");
            this.dsSearch.setColumn(0, "StartDate", "");
            this.dsSearch.setColumn(0, "EndDate", "");
        };

        this.calEndDate_onchanged = function(obj,e) {
        };

        this.grdEvaluation_oncelldblclick = function(obj,e)
        {
        	var objParam = {empCode:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "empCode")
                          , name:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "name")
                          , evalDate:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "evalDate")
        				  , totalScore:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "totalScore")
        				  , evalGrade:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "evalGrade")
        				  , guideCode:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "guideCode")
        				  , regName:this.dsEvaluation.getColumn(this.dsEvaluation.rowposition, "regName")};

        	this.showPopup(objParam);
        };

        this.showPopup = function(objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupEvalDetail", 0, 0, 780, 700, null, null, "FrameBase::Form_EvalDetail.xfdl");
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

        this.showEvalPopup = function(objParam)
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
        	this.grdEvalAll.setFocus();
        	if (this.dsEvalAll.getRowCount() === 0) {
                alert("평가할 데이터를 선택해 주세요.");
                return;
            }

        	var objParam = {empCode:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "empCode")
                          , name:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "name")
        				  , assignName:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "assignName")
        				  , depName:this.dsEvalAll.getColumn(this.dsEvalAll.rowposition, "depName")
        				  };
        	this.showEvalPopup(objParam);
        };

        // 직원 목록 그리드 더블 헤드 클릭 시 정렬
        this.grdEvalAll_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 0) {
                colId = "empCode";
            } else if (e.col == 1) {
                colId = "name";
            } else {
                return;
            }

            for (var i = 0; i < obj.getCellCount("head"); i++) {
                var sHeadText = obj.getCellText(-1, i);  // 헤더의 텍스트 가져오기
                var nLen = sHeadText.length - 1;  // 텍스트 길이 계산

                if (i == e.col) { // 클릭한 셀에 대해 처리
                    if (sHeadText.substr(nLen) == "▲") {  // 오름차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▼");
                        objDs.set_keystring("S:-" + colId);  // 내림차순 정렬
                    } else if (sHeadText.substr(nLen) == "▼") {  // 내림차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    } else {  // 정렬이 설정되지 않은 경우 기본 오름차순 적용
                        obj.setCellProperty("head", i, "text", sHeadText + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    }
                } else {
                    // 클릭되지 않은 다른 셀의 정렬 표시 제거
                    if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") {
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen));
                    }
                }
            }

            // 정렬 후 데이터셋 강제 적용
            objDs.applyChange();

        	// 정렬 후 첫 번째 행을 선택
            objDs.set_rowposition(0);
        };

        // 평가 목록 그리드 헤드 더블 클릭 시 정렬
        this.grdEvaluation_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 0) {
                colId = "empCode";
            } else if (e.col == 1) {
                colId = "name";
            } else if (e.col == 2) {
                colId = "evalDate";
            } else if (e.col == 3) {
                colId = "totalScore";
            } else {
                return;
            }

            for (var i = 0; i < obj.getCellCount("head"); i++) {
                var sHeadText = obj.getCellText(-1, i);  // 헤더의 텍스트 가져오기
                var nLen = sHeadText.length - 1;  // 텍스트 길이 계산

                if (i == e.col) { // 클릭한 셀에 대해 처리
                    if (sHeadText.substr(nLen) == "▲") {  // 오름차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▼");
                        objDs.set_keystring("S:-" + colId);  // 내림차순 정렬
                    } else if (sHeadText.substr(nLen) == "▼") {  // 내림차순인 경우
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen) + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    } else {  // 정렬이 설정되지 않은 경우 기본 오름차순 적용
                        obj.setCellProperty("head", i, "text", sHeadText + "▲");
                        objDs.set_keystring("S:+" + colId);  // 오름차순 정렬
                    }
                } else {
                    // 클릭되지 않은 다른 셀의 정렬 표시 제거
                    if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") {
                        obj.setCellProperty("head", i, "text", sHeadText.substr(0, nLen));
                    }
                }
            }

            // 정렬 후 데이터셋 강제 적용
            objDs.applyChange();

        	// 정렬 후 첫 번째 행을 선택
            objDs.set_rowposition(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Eval_onload,this);
            this.staTitle.addEventHandler("onclick",this.staTitle_onclick,this);
            this.btnFilterSearch.addEventHandler("onclick",this.btnFilterSearch_onclick,this);
            this.grdEvaluation.addEventHandler("oncelldblclick",this.grdEvaluation_oncelldblclick,this);
            this.grdEvaluation.addEventHandler("onheaddblclick",this.grdEvaluation_onheaddblclick,this);
            this.cmbSearchType.addEventHandler("onitemchanged",this.dsEvaluation_onload,this);
            this.edtSearchText.addEventHandler("onchanged",this.edtSearchText_onchanged,this);
            this.calStartDate.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.calEndDate.addEventHandler("onchanged",this.calEndDate_onchanged,this);
            this.grdEvalAll.addEventHandler("onheaddblclick",this.grdEvalAll_onheaddblclick,this);
            this.btnRegister.addEventHandler("onclick",this.btnRegister_onclick,this);
            this.dsEvaluation.addEventHandler("onload",this.dsEvaluation_onload,this);
        };
        this.loadIncludeScript("Form_Eval.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
