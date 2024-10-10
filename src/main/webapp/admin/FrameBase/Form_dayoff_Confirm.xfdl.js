(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_dayoff_Confirm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_doRequestList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"start_date\" type=\"DATE\" size=\"256\"/><Column id=\"end_date\" type=\"DATE\" size=\"256\"/><Column id=\"off_type\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"mng_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"md_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"ceo_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"dep_name\" type=\"STRING\" size=\"256\"/><Column id=\"off_code\" type=\"INT\" size=\"256\"/><Column id=\"off_result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_offList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"start_date\" type=\"DATE\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_doRequestListCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"start_date\" type=\"DATE\" size=\"256\"/><Column id=\"end_date\" type=\"DATE\" size=\"256\"/><Column id=\"off_type\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"mng_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"md_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"ceo_confirm\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"mng_code\" type=\"STRING\" size=\"256\"/><Column id=\"off_code\" type=\"INT\" size=\"256\"/><Column id=\"off_result\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","56","13","842","67",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("휴 가 승 인");
            obj.set_font("bold 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Confirm","180","105","216","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_offListSearch","708","102","100","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_offList","28","160","942","460",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_doRequestList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"63\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/><Column size=\"193\"/><Column size=\"80\"/><Column size=\"79\"/><Column size=\"66\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"시작일\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"4\" text=\"종료일\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"사유\"/><Cell col=\"7\" text=\"부서장결재\"/><Cell col=\"8\" text=\"이사결재\"/><Cell col=\"9\" text=\"대표결재\"/><Cell col=\"10\" text=\"결과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:dep_name\"/><Cell col=\"3\" text=\"bind:start_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"none\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendarpopuptype=\"none\"/><Cell col=\"4\" text=\"bind:end_date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:off_type\"/><Cell col=\"6\" text=\"bind:reason\"/><Cell col=\"7\" text=\"bind:mng_confirm\"/><Cell col=\"8\" text=\"bind:md_confirm\"/><Cell col=\"9\" text=\"bind:ceo_confirm\"/><Cell col=\"10\" text=\"bind:off_result\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","762","634","98","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("승인");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_cssclass("btn_check");
            this.addChild(obj.name, obj);

            obj = new Button("btn_return","870","634","98","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("반려");
            obj.set_font("16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_cssclass("btn_delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","96","101","84","47",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이 름");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","390","101","84","47",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("시작일");
            obj.set_font("18px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Confirm","470","105","216","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_Confirm","value","ds_offList","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_Confirm","value","ds_offList","start_date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_dayoff_Confirm.xfdl", function() {

        // 조회 함수
        this.fnSearchList = function(){
        	// application 변수에서 emp_code와 assign_code를 가져옴
            var loginEmpCode = nexacro.getApplication().gv_emp_code;
            var loginAssignCode = nexacro.getApplication().gv_assign_code;

            this.ds_offList.setColumn(0, "emp_code", "7");
            this.ds_offList.setColumn(0, "assign_code", "7");
        	console.log(this.ds_offList);
        	// 컨트롤러 호출
        	var strSvcId    = "dayoffList";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::dayOffList.do";             // 호출 URL
        	var inData      = "ds_offList=ds_offList";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_doRequestList=ds_doRequestList";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fn_Callback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        this.btn_offListSearch_onclick = function(obj,e)
        {		this.grd_offList.setFocus();
        	// 바인딩 된 값 콘솔로그로 찍어서 조회
        	console.log("edt_confirm = " + this.ds_offList.getColumn(0,"name"));
        	console.log("cal_confirm = " + this.ds_offList.getColumn(0,"start_date"));
        	this.fnSearchList();
        };

        //승인 함수
        this.btn_confirm_onclick = function(obj,e)
        {	this.grd_offList.setFocus();
        	console.log("승인 함수 실행");
        	// application 변수에서 emp_code와 assign_code를 가져옴

            var loginAssignCode = nexacro.getApplication().gv_assign_code;


            // 체크된 데이터를 새로운 Dataset에 추가
        	this.ds_doRequestListCopy.clearData();
            for (var i = 0; i < this.ds_doRequestList.getRowCount(); i++) {
                var isChecked = this.ds_doRequestList.getColumn(i, "chk");  // 'chk' 컬럼이 체크박스 상태를 나타냄
                if (isChecked == 1) {  // 체크된 경우
                    var newRow = this.ds_doRequestListCopy.addRow();  // 새로운 행 추가
                    this.ds_doRequestListCopy.copyRow(newRow, this.ds_doRequestList, i);  // 기존 데이터에서 해당 행 복사

        			//로그인한 assign_code 가져올예정
        			this.ds_doRequestListCopy.setColumn(0, "assign_code", "7");
                }
            }
        	var off_result = this.ds_doRequestListCopy.getColumn(0,"off_result");
        	console.log(off_result);

        	// off_result 값이 '반 려', '승 인', '승인중'일 경우 함수 실행 중지 및 경고 메시지
            if (off_result === "반 려" || off_result === "승 인" ) {
                alert("결재가 완료된 건은 재결재 할 수 없습니다.");
                return;  // 함수 실행 중지
            }


        	console.log("전송할 데이터셋 확인:", this.ds_doRequestListCopy.saveXML());

            // Transaction을 통해 서버로 전송
            var strSvcId = "confirmDayoff";
            var strSvcUrl = "svc::confirmDayoff.do";
            var inData = "checkedDataset=ds_doRequestListCopy";  // 체크된 데이터셋을 넘김
            var outData = "";  // 필요 시 사용할 출력 데이터셋
            var strArg = "";  // 추가로 필요한 인자
            var callBackFnc = "fn_Callback";  // 콜백 함수
        	var isAsync     = true;

            // Transaction 호출
        	if(confirm("승인하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };
        //반려함수
        this.btn_return_onclick = function(obj,e)
        {	this.grd_offList.setFocus();
        	console.log("반려 함수 실행");

        	var loginAssignCode = nexacro.getApplication().gv_assign_code;

            this.ds_offList.setColumn(0, "assign_code", "7");

            // 체크된 데이터를 새로운 Dataset에 추가
        	this.ds_doRequestListCopy.clearData();
            for (var i = 0; i < this.ds_doRequestList.getRowCount(); i++) {
                var isChecked = this.ds_doRequestList.getColumn(i, "chk");  // 'chk' 컬럼이 체크박스 상태를 나타냄
                if (isChecked == 1) {  // 체크된 경우
                    var newRow = this.ds_doRequestListCopy.addRow();  // 새로운 행 추가
                    this.ds_doRequestListCopy.copyRow(newRow, this.ds_doRequestList, i);  // 기존 데이터에서 해당 행 복사

        			//로그인한 assign_code 가져올예정
        			this.ds_doRequestListCopy.setColumn(0, "assign_code", "7");
                }
            }

        	console.log("전송할 데이터셋 확인:", this.ds_doRequestListCopy.saveXML());

        	var off_result = this.ds_doRequestListCopy.getColumn(0,"off_result");
        	console.log(off_result);

        	// off_result 값이 '반 려', '승 인', '승인중'일 경우 함수 실행 중지 및 경고 메시지
            if (off_result === "반 려" || off_result === "승 인" ) {
                alert("결재가 완료된 건은 재결재 할 수 없습니다.");
                return;  // 함수 실행 중지
            }

            // Transaction을 통해 서버로 전송
            var strSvcId = "returnDayoff";
            var strSvcUrl = "svc::returnDayoff.do";
            var inData = "checkedDataset=ds_doRequestListCopy";  // 체크된 데이터셋을 넘김
            var outData = "";  // 필요 시 사용할 출력 데이터셋
            var strArg = "";  // 추가로 필요한 인자
            var callBackFnc = "fn_Callback";  // 콜백 함수
        	var isAsync     = true;

            // Transaction 호출
        	if(confirm("반려하시겠습니까?")){
        		this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };



        // Transaction 콜백 함수
        //처리콜백 함수
        this.fn_Callback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode == -1)
        	{
        		this.alert(errorMsg);
        		return;
        	}
        	switch(svcID){
        		//조회 콜백
        		case "dayoffList":
        			break;
        		//승인 콜백
        		case "confirmDayoff":
        			alert("승인처리 됐습니다.")
        			this.fnSearchList();
        			break;
        		//반려 콜백
        		case "returnDayoff":
        			alert("반려처리 됐습니다.")
        			this.fnSearchList()
        			break;
        		default :
        			break;
        	}
        };
        // -------------------------------------------------- //

        this.grd_offList_onheadclick = function(obj,e)
        {
        	// 아래 속성에서 0은 그리드에서 0번쨰 column을 의미하며 text 값을 가져오라는 의미입니다.
        	var chkVal = obj.getCellProperty("head", 0, "text");

        	// 0이면 체크 안된 상태이고 1이면 체크된 상태임을 의미합니다.
        	if (chkVal == "1") { // 이미 체크된 상태라면 체크 해지로 변환
        		chkVal	= "0";
        		obj.setCellProperty("head", 0, "text", chkVal); //프론트에 적용 HEAD 부분
        		for (var i=0; i<this.ds_doRequestList.rowcount; i++) { //프론트에 적용 ROW 부분
        			this.ds_doRequestList.setColumn(i,"chk","0");
        		}
        	} else {
        		chkVal	= "1"; //체크 안 된 상태라면 체크 표시
        		obj.setCellProperty("head", 0, "text", chkVal); //프론트에 HEAD 적용
        		for (var i=0; i<this.ds_doRequestList.rowcount; i++) { //프론트에 적용 ROW 부분
        			this.ds_doRequestList.setColumn(i,"chk","1");
        		}

        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_offListSearch.addEventHandler("onclick",this.btn_offListSearch_onclick,this);
            this.grd_offList.addEventHandler("onheadclick",this.grd_offList_onheadclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_return.addEventHandler("onclick",this.btn_return_onclick,this);
        };
        this.loadIncludeScript("Form_dayoff_Confirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
