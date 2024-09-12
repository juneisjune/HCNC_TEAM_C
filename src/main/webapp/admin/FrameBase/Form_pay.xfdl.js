(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_pay");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assignment\">all</Col><Col id=\"department\">전체</Col><Col id=\"employee\">all</Col></Row><Row><Col id=\"assignment\">assignment</Col><Col id=\"department\">직책</Col><Col id=\"employee\">assignment</Col></Row><Row><Col id=\"assignment\">department</Col><Col id=\"department\">부서</Col><Col id=\"employee\">department</Col></Row><Row><Col id=\"assignment\">employee</Col><Col id=\"department\">이름</Col><Col id=\"employee\">employee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"PT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_payInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"INT\" size=\"256\"/><Column id=\"pay_month\" type=\"INT\" size=\"256\"/><Column id=\"pay_date\" type=\"DATE\" size=\"256\"/><Column id=\"pay_over\" type=\"INT\" size=\"256\"/><Column id=\"pay_meal\" type=\"INT\" size=\"256\"/><Column id=\"pay_amount\" type=\"INT\" size=\"256\"/><Column id=\"income_tax\" type=\"INT\" size=\"256\"/><Column id=\"resident_tax\" type=\"INT\" size=\"256\"/><Column id=\"national_tax\" type=\"INT\" size=\"256\"/><Column id=\"emp_insurance\" type=\"INT\" size=\"256\"/><Column id=\"health_insurance\" type=\"INT\" size=\"256\"/><Column id=\"longcare_insurance\" type=\"INT\" size=\"256\"/><Column id=\"actual_pay\" type=\"INT\" size=\"256\"/><Column id=\"reg_date\" type=\"DATE\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/><Column id=\"upd_date\" type=\"DATE\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"emp_name\" type=\"STRING\" size=\"256\"/><Column id=\"dep_code\" type=\"STRING\" size=\"256\"/><Column id=\"assign_code\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"join_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assignment", this);
            obj._setContents("<ColumnInfo><Column id=\"assign_code\" type=\"INT\" size=\"256\"/><Column id=\"assign_name\" type=\"STRING\" size=\"256\"/><Column id=\"monthly\" type=\"INT\" size=\"256\"/><Column id=\"hourly\" type=\"INT\" size=\"256\"/><Column id=\"total_cnt\" type=\"INT\" size=\"256\"/><Column id=\"tax\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"DATE\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/><Column id=\"upd_date\" type=\"DATE\" size=\"256\"/><Column id=\"Columupd_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMst", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"assignment\">assignment</Col><Col id=\"department\">department</Col><Col id=\"employee\">employee</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CodeMstList", this);
            obj._setContents("<ColumnInfo><Column id=\"assignment\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_Search","211","30","104","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","325","33","76","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","420","33","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("emp_code","50","419","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Static("nsme","179","421","70","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Code","78","425","92","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CodeNm","209","425","106","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","340","425","73","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","420","425","74","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Search","50","32","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_SearchType");
            obj.set_datacolumn("department");
            obj.set_codecolumn("assignment");
            obj.set_text("전체");
            obj.set_value("all");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CodeMst","50","114","460","301",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_CodeMstList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"직책\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:assignment\"/><Cell col=\"1\" text=\"bind:department\"/><Cell col=\"2\" text=\"bind:employee\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_pay.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
            // 콤보박스 기본값 설정
            this.ds_Search.setColumn(0,"SEARCH_TYPE","ALL");

            // 컴포넌트 속성 초기화
            this.fnInit();
        };

        this.fnInit = function(){
            // 그리드 초기화 (마스터)
           this.grd_CodeMst.set_binddataset("ds_CodeMstList");

            // 버튼 및 입력 필드 초기화
            this.edt_Code.set_readonly(true);
            this.edt_CodeNm.set_readonly(true);
            this.btn_Save.set_enable(false);
            this.btn_Delete.set_enable(false);

            // 필드 값 초기화
        for (var i = 0; i < this.ds_CodeMst.getRowCount(); i++) {
            this.ds_CodeMst.setColumn(i, "assignment", "");
            this.ds_CodeMst.setColumn(i, "department", "");
            this.ds_CodeMst.setColumn(i, "employee", "");
        }

        };



        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode < 0) {
                this.alert(errorMsg);
                return;
            }

            switch(svcID) {
                case "selectAssignment":
                    // 조회 완료 후 처리
                    break;
                case "saveAssignment":
                    // 저장 완료 후 처리
                    alert("저장되었습니다.");
                    this.fnSearch();  // 재조회
                    break;
                case "deleteAssignment":
                    // 삭제 완료 후 처리
                    alert("삭제되었습니다.");
                    this.fnSearch();  // 재조회
                    break;
                default:
                    break;
            }
        };




        /****************************************************************/
        /*                   컴포넌트 이벤트                          */
        /****************************************************************/

        /******************************/
        /* 마스터 코드 버튼 이벤트   */
        /******************************/
        // 조회버튼을 클릭 할 시 실행되는 이벤트
        this.btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        // 등록 버튼을 클릭 할 시 실행되는 이벤트
        this.btn_Add_onclick = function(obj,e)
        {
            // 입력값 초기화
            if (this.ds_CodeMst.getRowCount() > 0) {
            this.ds_CodeMst.setColumn(0, "assignment", "");
            this.ds_CodeMst.setColumn(0, "department", "");
            this.ds_CodeMst.setColumn(0, "employee", "");
        }




        };



        this.btn_Save_onclick = function(obj,e)
        {
            // 1. 수정할 데이터셋을 확인
            var dsObj = this.ds_payInfo;  // 수정할 데이터셋 이름 (여기서는 ds_payInfo로 가정)

            // 2. 데이터셋에 수정된 데이터가 있는지 확인
            if (dsObj.getUpdatedRowCount() > 0) {
                // 3. 서버로 수정된 데이터 전송
                this.transaction(
                    "updatePayInfo", // Transaction ID
                    "/updatePayInfoUrl", // 실제 서버 URL로 변경
                    "in_ds=ds_payInfo:U", // 수정된 데이터를 전송
                    "", // 서버에서 받아올 데이터 없음
                    "", // 추가로 전송할 인자 없음
                    "fn_callback" // 콜백 함수

        			/////알맞게 다시 수정해야해 이건 임시 URL입니다.
                );
            } else {
                alert("수정된 데이터가 없습니다.");
            }
        };

        // 서버 응답 콜백 함수
        this.fn_callback = function(svcID, errorCode, errorMsg)
        {
            if (errorCode == 0) {
                alert("수정이 성공적으로 완료되었습니다.");
                // 필요시 데이터셋 초기화 또는 화면 갱신
                this.ds_payInfo.applyChange(); // 변경 사항 적용
            } else {
                alert("수정 중 오류가 발생했습니다: " + errorMsg);
            }
        };





        this.edt_Search_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_Search.addEventHandler("onchanged",this.edt_Search_onchanged,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.emp_code.addEventHandler("onclick",this.emp_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.cmb_Search.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.ds_CodeMstList.addEventHandler("onrowposchanged",this.ds_CodeMstList_onrowposchanged,this);
        };
        this.loadIncludeScript("Form_pay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
