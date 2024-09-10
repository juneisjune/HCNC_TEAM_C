(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("btn_Search");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Post", this);
            obj._setContents("<ColumnInfo><Column id=\"number\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"author\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"view_count\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항조회");
            obj.set_textAlign("left");
            obj.set_font("bold 26px/normal \"Gulim\"");
            obj.set_background("blue");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_notice","10","50","680","400",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_Post");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"게시글 번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"작성일자\"/><Cell col=\"4\" text=\"사번\"/></Band><Band id=\"body\"><Cell text=\"bind:post_code\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:content\"/><Cell col=\"3\" text=\"bind:reg_date\" displaytype=\"date\" mask=\"####-##-##\"/><Cell col=\"4\" text=\"bind:emp_code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addNotice","590","10","100","30",null,null,null,null,null,null,this);
            obj.set_text("공지사항관리");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","532","12","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Post.xfdl", function() {

        this.btn_addNotice_onclick = function(obj,e)
        {

        };

        this.fnSearch = function (){
        // 	var strSvcId	="selectPost";
        // 	var strSvcUrl	="svc::selectPost.do"
        // 	var inData     	= "ds_Search=ds_Search";       // 요청할 데이터셋
        // 	var outData     = "ds_Page=ds_Page";			// 응답받을 데이터셋(내가 만들었던 데이터 셋)
        // 	var strArg 		="";
        // 	var callBackFnc ="fnCallback";
        // 	var isAsync		= true;

        	  var strSvcId    = "selectPost";                     // 콜백 서비스명
            var strSvcUrl   = "svc::selectPost.do";             // 호출 URL
            var inData      = "";                              // 입력 데이터셋
            var outData     = "ds_Post=ds_Post";               // 결과 데이터를 담을 데이터셋
            var strArg      = "";                              // 추가 파라미터
            var fnCallback  = "fnCallback";                    // 콜백 함수
            var isAsync     = true;                            // 비동기 여부


        	console.log("async까지 들어옴");

        	this.transaction(strSvcId, strSvcUrl, inData,outData,strArg,fnCallback,isAsync);
        	console.log("transaction 다음부분");

        }


        this.fnCallback = function(strSvcId, nErrorCode, strErrorMsg) {
        	console.log("fnCallback까지 들어옴");
            if (nErrorCode < 0) {
                alert("조회 중 오류가 발생했습니다: " + strErrorMsg);
            } else {
                alert("조회가 완료되었습니다.");
        		console.log(this.ds_Post.saveXML());	//데이터셋 내용을 확인
            }
        }

         this.Button00_onclick = function(obj,e)
        {
        	console.log("버튼 클릭됨 들어옴");
        	this.fnSearch();
         };
        /*
        var outData = "ds_Post=ds_Post";
        this.fnSearch = function(){
        	// 바인딩 된 값 콘솔로그로 찍어서 조회
        	console.log("cmb_Search = " + this.ds_Search.getColumn(0,"SEARCH_TYPE"));
        	console.log("edt_Search = " + this.ds_Search.getColumn(0,"SEARCH_WORD"));

        	this.fnInitMst();

        	// 컨트롤러 호출
        	var strSvcId    = "selectCodeMst";                     // 콜백 서비스명
        	var strSvcUrl   = "svc::selectCodeMst.do";             // 호출 URL
        	var inData      = "ds_Search=ds_Search";               // Request Dataset 파라미터 (AAA=BBB) AAA = 컨트롤러에서 받을 파라미터명, BBB = 보낼 데이터셋명
        	var outData     = "ds_CodeMstList=ds_CodeMstList";     // Response Dataset 파라미터 (AAA=BBB) AAA = 데이터를 저장할 데이터셋명, BBB = 응답받은 데이터
        	var strArg      = ""                                   // Request 문자 파라미터
        	var callBackFnc = "fnCallback";                        // 콜백 후 실행 할 함수
        	var isAsync     = true;                                // 동기/비동기

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_addNotice.addEventHandler("onclick",this.btn_addNotice_onclick,this);
            this.btn_Search.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Post.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
