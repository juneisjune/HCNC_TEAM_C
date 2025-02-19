(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EvalEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsQuestions", this);
            obj._setContents("<ColumnInfo><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"guideCode\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEdit", this);
            obj._setContents("<ColumnInfo><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"guideCode\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"guideCode\" type=\"INT\" size=\"256\"/><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSubmit","710","510","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_cssclass("btn_edit");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEdit","30","110","750","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsQuestions");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"683\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"질문 번호\"/><Cell col=\"1\" text=\"질문 목록\"/></Band><Band id=\"body\"><Cell text=\"bind:guideCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:question\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("EditQuestion","95","510","590","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("EditCode","30","510","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("평가 기준 수정");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grdEdit","binddataset","dsQuestions","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","EditQuestion","value","dsEdit","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","EditCode","value","dsEdit","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EvalEdit.xfdl", function() {
        this.Form_EvalEdit_onload = function(obj, e) {
            var strSvcID = "editRegister";
            var strSvcUrl = "svc::editRegister.do";
            var inData = "";
            var outData = "dsQuestions=dsQuestions";
            var strArg = "";
            var callBackFnc = "fnQuestionCallback";
            var isAsync = true;

            this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        	var selectedRow = -1;  // 전역 변수로 선택된 행을 저장

        // 그리드에서 셀을 더블 클릭했을 때 호출되는 함수
        this.grdEdit_oncelldblclick = function(obj, e) {
        	selectedRow = e.row;

            if (selectedRow >= 0) {
                var question = this.dsQuestions.getColumn(selectedRow, "question");  // 데이터셋에서 값을 가져옴
                var guideCode = this.dsQuestions.getColumn(selectedRow, "guideCode");

                this.EditQuestion.set_value(question);
                this.EditCode.set_value(guideCode);
            } else {
                alert("선택된 데이터가 없습니다.");
            }
        };

        // 수정 버튼 클릭 시 호출되는 함수
        this.btnSubmit_onclick = function(obj, e) {
        	this.EditQuestion.setFocus();
        	var admin_name = nexacro.getApplication().ds_userInfo.getColumn(0, "name");
            // Edit 박스에서 수정된 값 가져오기
            var editedValue = this.EditQuestion.value;

            // 선택된 행이 있는지 확인
            if (selectedRow >= 0) {
                // 그리드의 guideCode를 가져오기
                var guideCode = this.grdEdit.getCellValue(selectedRow, 0);  // 0번째 컬럼에서 guideCode 가져오기

                if (!guideCode) {
                    alert("guideCode 값을 가져올 수 없습니다.");
                    return;
                }
        		var admin_name = nexacro.getApplication().ds_userInfo.getColumn(0, "name");

                // 수정할 데이터를 dsEditSave 데이터셋에 추가
                this.dsEditSave.clearData();  // 데이터셋을 초기화하고 새 데이터 추가
                this.dsEditSave.addRow();
                this.dsEditSave.setColumn(0, "question", editedValue);
                this.dsEditSave.setColumn(0, "guideCode", guideCode);  // guideCode 값을 추가
        		this.dsEditSave.setColumn(0, "admin_name", admin_name);

                // 수정된 데이터 전송
                var strSvcID = "updateRegister";
                var strSvcUrl = "svc::updateRegister.do";
                var inData = "dsEditSave=dsEditSave";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnUpdateCallback";
                var isAsync = true;

                this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
            } else {
                // 선택된 행이 없을 경우 사용자에게 알림
                alert("수정할 행을 선택해 주세요.");
            }
        };

        	this.fnQuestionCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {
                alert("데이터 로드 실패: " + errorMsg);  // 에러가 발생한 경우
            }
        };

        this.fnUpdateCallback = function(svcID, errorCode, errorMsg) {
            if (errorCode < 0) {
                alert("수정 실패 : " + errorMsg);  // 서버가 반환한 구체적인 오류 메시지를 확인
            } else {
                alert("수정이 성공적으로 완료되었습니다.");

        		// 수정 후 데이터를 다시 로드
                var strSvcID = "editRegister";
                var strSvcUrl = "svc::editRegister.do";
                var inData = "";
                var outData = "dsQuestions=dsQuestions";
                var strArg = "";
                var callBackFnc = "fnQuestionCallback";
                var isAsync = true;

                this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
            }

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_EvalEdit_onload,this);
            this.btnSubmit.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.grdEdit.addEventHandler("oncelldblclick",this.grdEdit_oncelldblclick,this);
            this.EditQuestion.addEventHandler("onchanged",this.EditQuestion_onchanged,this);
            this.EditCode.addEventHandler("onchanged",this.EditCode_onchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Form_EvalEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
