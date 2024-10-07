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
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assign_code\">100</Col><Col id=\"assign_name\">전체</Col></Row><Row><Col id=\"assign_code\">1</Col><Col id=\"assign_name\">사원</Col></Row><Row><Col id=\"assign_name\">대리</Col><Col id=\"assign_code\">2</Col></Row><Row><Col id=\"assign_name\">과장</Col><Col id=\"assign_code\">3</Col></Row><Row><Col id=\"assign_name\">차장</Col><Col id=\"assign_code\">4</Col></Row><Row><Col id=\"assign_name\">부장</Col><Col id=\"assign_code\">5</Col></Row><Row><Col id=\"assign_name\">이사</Col><Col id=\"assign_code\">6</Col></Row><Row><Col id=\"assign_name\">대표</Col><Col id=\"assign_code\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Assign", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"STRING\" size=\"256\" text=\"bind:chkVal\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\" text=\"bind:emp_code\"/><Column id=\"name\" type=\"STRING\" size=\"256\" text=\"bind:name\"/><Column id=\"assign_code\" type=\"INT\" size=\"256\" text=\"bind:assign_code\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\" text=\"bind:assign_name\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\" text=\"bind:dep_name\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\" text=\"bind:join_date\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\" text=\"bind:resign_date\"/><Column id=\"account\" type=\"STRING\" size=\"256\" text=\"bind:account\"/><Column id=\"month\" type=\"INT\" size=\"256\" text=\"bind:month\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\" text=\"bind:pay_over\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\" text=\"bind:pay_meal\"/><Column id=\"absence\" type=\"INT\" size=\"256\" text=\"bind:absence\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\" text=\"bind:pay_amount\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\" text=\"bind:income_tax\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\" text=\"bind:resident_tax\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\" text=\"bind:national_tax\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\" text=\"bind:emp_insurance\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\" text=\"bind:health_insurance\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\" text=\"bind:longcare_insurance\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\" text=\"bind:actual_pay\"/><Column id=\"give_date\" type=\"DATE\" size=\"256\" text=\"bind:give_date\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GiveDate", this);
            obj._setContents("<ColumnInfo><Column id=\"give_date\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpListCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"STRING\" size=\"256\" text=\"bind:chkVal\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\" text=\"bind:emp_code\"/><Column id=\"name\" type=\"STRING\" size=\"256\" text=\"bind:name\"/><Column id=\"assign_code\" type=\"INT\" size=\"256\" text=\"bind:assign_code\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\" text=\"bind:assign_name\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\" text=\"bind:dep_name\"/><Column id=\"join_date\" type=\"DATE\" size=\"256\" text=\"bind:join_date\"/><Column id=\"resign_date\" type=\"DATE\" size=\"256\" text=\"bind:resign_date\"/><Column id=\"account\" type=\"STRING\" size=\"256\" text=\"bind:account\"/><Column id=\"month\" type=\"INT\" size=\"256\" text=\"bind:month\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\" text=\"bind:pay_over\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\" text=\"bind:pay_meal\"/><Column id=\"absence\" type=\"INT\" size=\"256\" text=\"bind:absence\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\" text=\"bind:pay_amount\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\" text=\"bind:income_tax\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\" text=\"bind:resident_tax\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\" text=\"bind:national_tax\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\" text=\"bind:emp_insurance\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\" text=\"bind:health_insurance\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\" text=\"bind:longcare_insurance\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\" text=\"bind:actual_pay\"/><Column id=\"give_date\" type=\"DATE\" size=\"256\" text=\"bind:give_date\"/></ColumnInfo>");
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
            obj.set_font("12pt/normal gulim");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","215","91","43","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Emp","60","125","830","330",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_EmpList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"67\"/><Column size=\"92\"/><Column size=\"70\"/><Column size=\"97\"/><Column size=\"121\"/><Column size=\"119\"/><Column size=\"213\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"퇴사일\"/><Cell col=\"7\" text=\"계좌번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkVal\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:emp_code\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:name\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:assign_name\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:dep_name\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:join_date\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:resign_date\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:account\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","570","455","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지급일");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_GiveDate","625","475","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Insert","800","470","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록");
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
        };


        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();

        };

        this.grd_Emp_onheadclick = function(obj,e)
        {
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
                }
            }

        	console.log(this.ds_EmpListCopy.saveXML());

        	var strSvcId    = "insertPay";
        	var strSvcUrl   = "svc::insertPay.do";
        	var inData      = "ds_EmpListCopy=ds_EmpListCopy";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_InsertPay_onload,this);
            this.cmb_Assign.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.grd_Emp.addEventHandler("onheadclick",this.grd_Emp_onheadclick,this);
            this.btn_Insert.addEventHandler("onclick",this.btn_Insert_onclick,this);
        };
        this.loadIncludeScript("Form_InsertPay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
