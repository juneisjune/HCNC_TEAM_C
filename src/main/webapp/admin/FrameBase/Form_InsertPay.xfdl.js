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
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assign_code\">100</Col><Col id=\"assign_name\">전체</Col></Row><Row><Col id=\"assign_code\">1</Col><Col id=\"assign_name\">사원</Col></Row><Row><Col id=\"assign_code\">2</Col><Col id=\"assign_name\">대리</Col></Row><Row><Col id=\"assign_code\">3</Col><Col id=\"assign_name\">과장</Col></Row><Row><Col id=\"assign_code\">4</Col><Col id=\"assign_name\">차장</Col></Row><Row><Col id=\"assign_code\">5</Col><Col id=\"assign_name\">부장</Col></Row><Row><Col id=\"assign_code\">6</Col><Col id=\"assign_name\">이사</Col></Row><Row><Col id=\"assign_code\">7</Col><Col id=\"assign_name\">대표</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Assign", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"INT\" size=\"256\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\"/><Column id=\"absence\" type=\"INT\" size=\"256\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\"/><Column id=\"etc\" type=\"INT\" size=\"256\"/><Column id=\"give_date\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GiveDate", this);
            obj._setContents("<ColumnInfo><Column id=\"give_date\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpListCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"month\" type=\"INT\" size=\"256\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\"/><Column id=\"absence\" type=\"INT\" size=\"256\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\"/><Column id=\"etc\" type=\"INT\" size=\"256\"/><Column id=\"give_date\" type=\"DATE\" size=\"256\"/><Column id=\"adm_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","31","20","154","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여 등록");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Assign","30","110","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("직책");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Assign","69","110","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_AssignType");
            obj.set_codecolumn("assign_code");
            obj.set_datacolumn("assign_name");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","210","110","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Emp","30","155","890","415",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_EmpList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"88\"/><Column size=\"109\"/><Column size=\"82\"/><Column size=\"110\"/><Column size=\"121\"/><Column size=\"119\"/><Column size=\"210\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/><Cell col=\"7\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkVal\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:emp_code\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:name\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:assign_name\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:dep_name\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:join_date\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:resign_date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:account\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","580","590","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지급일");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_GiveDate","675","590","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert","850","590","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_cssclass("btn_regist");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_Assign","value","ds_Assign","assign_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_GiveDate","value","ds_GiveDate","give_date");
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
        	this.ds_Assign.setColumn(0, "assign_code", "100");

        	this.fnSearch();
        };


        this.btn_Search_onclick = function(obj,e)
        {
        	this.grd_Emp.setFocus();
        	this.fnSearch();

        };

        this.grd_Emp_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        	//grid의 head에서 0번째 셀의 값을 가져옴
        	var chkVal = obj.getCellProperty("head", 0, "text");

        	if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        		chkVal	= "0";
        		obj.setCellProperty("head", 0, "text", chkVal);
        		for (var i=0; i<this.ds_EmpList.rowcount; i++) {
        			this.ds_EmpList.setColumn(i,"chkVal","0");
        		}
        	} else {
        		chkVal	= "1";
        		obj.setCellProperty("head", 0, "text", chkVal);
        		for (var i=0; i<this.ds_EmpList.rowcount; i++) {
        			this.ds_EmpList.setColumn(i,"chkVal","1");
        		}
        	}
        	}
        };

        this.fnSearch = function() {
        	if(this.ds_Assign.getColumn(0, "assign_code") == ''
        	|| this.ds_Assign.getColumn(0, "assign_code") == 'undefined'
        	|| this.ds_Assign.getColumn(0, "assign_code") == null) {
        		alert("직책을 선택하세요.");
        		return;
        	}

        	var strSvcId    = "selectAssign";
        	var strSvcUrl   = "svc::selectAssign.do";
        	var inData      = "ds_Assign=ds_Assign";
        	var outData     = "ds_EmpList=ds_EmpList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {

        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectAssign":
        			this.alert("조회가 완료되었습니다.");
        			break;

        		case "insertPay":
        			this.alert("등록이 완료되었습니다.");
        			break;

        		default :
        			break;
        	}
        };

        this.btn_Insert_onclick = function(obj,e)
        {
        	this.grd_Emp.setFocus();

        	var adm_name = nexacro.getApplication().ds_userInfo.getColumn(0, "name");

        	if(this.ds_GiveDate.getColumn(0, "give_date") == ''
        	|| this.ds_GiveDate.getColumn(0, "give_date") == 'undefined'
        	|| this.ds_GiveDate.getColumn(0, "give_date") == null){
        		alert("날짜를 입력하세요.");
        		return;
        	}

        	if (this.ds_EmpList.getRowCount() < 1) {
                this.alert("직원 데이터를 먼저 조회하세요.");
                return;
            }

        	//ds_EmpListCopy 데이터셋 모든 row 삭제
        	this.ds_EmpListCopy.clearData();

        	//체크된 데이터를 새로운 Dataset에 추가
            for (var i = 0; i < this.ds_EmpList.getRowCount(); i++) {
                var isChecked = this.ds_EmpList.getColumn(i, "chkVal");
                if (isChecked == 1) {
                    var newRow = this.ds_EmpListCopy.addRow();
                    this.ds_EmpListCopy.copyRow(newRow, this.ds_EmpList, i);
        			this.ds_EmpListCopy.setColumn(newRow, "give_date", this.ds_GiveDate.getColumn(0, "give_date"));
        			this.ds_EmpListCopy.setColumn(newRow, "adm_name", adm_name);
                }
            }

        	var strSvcId    = "insertPay";
        	var strSvcUrl   = "svc::insertPay.do";
        	var inData      = "ds_EmpListCopy=ds_EmpListCopy";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 그리드 헤드 더블 클릭 시 정렬
        this.grd_Emp_onheaddblclick = function(obj,e)
        {
        	var objDs = this.objects[obj.binddataset];
            var colId = "";

        	// 컬럼 확인
            if (e.col == 1) {
                colId = "emp_code";
            } else if (e.col == 2) {
                colId = "name";
            } else if (e.col == 5) {
                colId = "join_date";
            } else if (e.col == 6) {
                colId = "resign_date";
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
            this.addEventHandler("onload",this.Form_InsertPay_onload,this);
            this.Static00.addEventHandler("onclick",this.title_onclick,this);
            this.cmb_Assign.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.grd_Emp.addEventHandler("onheadclick",this.grd_Emp_onheadclick,this);
            this.grd_Emp.addEventHandler("onheaddblclick",this.grd_Emp_onheaddblclick,this);
            this.cal_GiveDate.addEventHandler("onchanged",this.cal_GiveDate_onchanged,this);
            this.btn_Insert.addEventHandler("onclick",this.btn_Insert_onclick,this);
        };
        this.loadIncludeScript("Form_InsertPay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
