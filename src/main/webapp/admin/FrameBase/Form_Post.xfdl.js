(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("btn_Post");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Post", this);
            obj._setContents("<ColumnInfo><Column id=\"number\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"author\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"view_count\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteCode", this);
            obj._setContents("<ColumnInfo><Column id=\"post_code\" type=\"STRING\" size=\"256\"/><Column id=\"checked\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","400","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공지사항조회관리");
            obj.set_textAlign("left");
            obj.set_font("bold 26px/normal \"Gulim\"");
            obj.set_background("blue");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_notice","8","50","1092","410",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_Post");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"85\"/><Column size=\"144\"/><Column size=\"258\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"94\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"\"/><Cell col=\"1\" text=\"게시글 번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"조회수\"/><Cell col=\"7\" text=\"수정 하기\"/><Cell col=\"8\" text=\"삭제\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:checked\"/><Cell col=\"1\" text=\"bind:post_code\"/><Cell col=\"2\" text=\"bind:title\"/><Cell col=\"3\" text=\"bind:content\"/><Cell col=\"4\" text=\"bind:reg_date\" displaytype=\"date\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:emp_name\"/><Cell col=\"6\" text=\"bind:view_count\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" text=\"수정 하기\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" text=\"삭제\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","760","16","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("st_selectedCount","10","470","150","30",null,null,null,null,null,null,this);
            obj.set_text("0건 선택됨");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","590","470","100","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","350","520","50","30",null,null,null,null,null,null,this);
            obj.set_text("이전");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next","450","520","50","30",null,null,null,null,null,null,this);
            obj.set_text("다음");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newPost","830","16","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("새 공지사항 등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","612","580","92","52",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button00");
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
        this.Form_Post_onload = function(obj,e)
        {
        	console.log("onload페이지 들엉몸");
        	this.fnSearch();
        }

        this.btn_addNotice_onclick = function(obj,e)
        {
        	this.go("PostPage");
        };

        this.fnSearch = function (){


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

        this.btn_newPost_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_NewPost.xfdl");
        };
        //위에는 조회관련
        this.grd_notice_oncellclick = function(obj,e)
        {
        	 var clickedCol = e.col;  // 클릭한 컬럼 인덱스
            var postCode = obj.getCellText(e.row, 1);  // 클릭한 행의 게시글 번호

            // 삭제 버튼이 있는 셀 클릭 시
            if (clickedCol == 8) {  // 삭제 버튼이 있는 컬럼 (8번 컬럼)
                if (confirm("정말로 삭제하시겠습니까?")) {
                    console.log("삭제 클릭됨. 게시글 번호: " + postCode);
        			 var nRow = this.ds_deleteCode.addRow();
        			this.ds_deleteCode.setColumn(nRow, "post_code", postCode);
                    this.fnDeletePost(postCode);  // 삭제 처리 함수 호출
                }
            }
        	    // 수정하기 버튼이 있는 셀 클릭 시
            if (clickedCol == 7) {
                if (confirm("정말 수정하시겠습니까?")) {
                    var title = this.ds_Post.getColumn(this.ds_Post.rowposition, "title");
                    var content = this.ds_Post.getColumn(this.ds_Post.rowposition, "content");

                    console.log("수정할 데이터 - 제목: " + title + ", 내용: " + content);

                    var objParam = {
                        post_code: postCode,  // 게시글 번호도 함께 전달
                        title: title,
                        content: content
                    };

                    // 팝업 호출
                    this.showPopup(objParam);
                }
            }
        };
        this.fnDeletePost = function(postCode) {
            // 데이터셋 초기화
            this.ds_deleteCode.clearData();

            // 데이터셋에 게시글 번호 추가
            var nRow = this.ds_deleteCode.addRow();
            this.ds_deleteCode.setColumn(nRow, "post_code", postCode);
        	console.log("ds_deleteCode: "+this.ds_deleteCode.saveXML());

            // 트랜잭션 설정
            var strSvcId    = "deletePost";
            var strSvcUrl   = "svc::deletePost.do";
            var inData      = "ds_deleteCode=ds_deleteCode";  // 서버로 전송할 데이터셋
            var outData     = "";
            var strArg      = "";
            var fnCallback1  = "fnCallback1";
            var isAsync     = true;

            // 삭제 트랜잭션 실행
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, fnCallback1, isAsync);
        };

        this.fnCallback1 = function(strSvcId, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("삭제 중 오류가 발생했습니다: " + strErrorMsg);
            } else {
                alert("게시글이 성공적으로 삭제되었습니다.");
                // 삭제 후 그리드를 다시 조회하여 갱신
                this.fnSearch();
            }
        };


        this.newEdit_onclick = function(obj,e)
        {
        	console.log("ds_post(inFormpost):" + this.ds_Post.saveXML());
        		var objParam = {title:this.ds_Post.getColumn(this.ds_Post.rowposition, "title")
        						, content:this.ds_Post.getColumn(this.ds_Post.rowposition, "content")
        				  };


        	this.showPopup(objParam);
        };
        this.showPopup = function (objParam)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, "FrameBase::Popup_editPost.xfdl");
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
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Post_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_notice.addEventHandler("oncellclick",this.grd_notice_oncellclick,this);
            this.grd_notice.addEventHandler("onheadclick",this.grd_notice_onheadclick,this);
            this.btn_Search.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_newPost.addEventHandler("onclick",this.btn_newPost_onclick,this);
            this.Button00.addEventHandler("onclick",this.newEdit_onclick,this);
        };
        this.loadIncludeScript("Form_Post.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
