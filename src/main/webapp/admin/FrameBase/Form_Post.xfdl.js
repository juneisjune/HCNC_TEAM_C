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
            obj._setContents("<ColumnInfo><Column id=\"number\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"author\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATE\" size=\"256\"/><Column id=\"view_count\" type=\"INT\" size=\"256\"/><Column id=\"checked\" type=\"STRING\" size=\"1\" default=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Delete", this);
            obj._setContents("<ColumnInfo><Column id=\"post_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteCode", this);
            obj._setContents("<ColumnInfo><Column id=\"post_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_notice","30","120","1096","400",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_Post");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"85\"/><Column size=\"244\"/><Column size=\"297\"/><Column size=\"129\"/><Column size=\"85\"/><Column size=\"64\"/><Column size=\"94\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" edittype=\"none\" text=\"0\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"게시글 번호\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"조회수\"/><Cell col=\"7\" text=\"수정 하기\"/><Cell col=\"8\" text=\"삭제\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:checked\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:post_code\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:title\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:content\"/><Cell col=\"4\" text=\"bind:reg_date\" displaytype=\"date\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:emp_name\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:view_count\" textAlign=\"center\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" text=\"수정 하기\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" text=\"삭제\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","922","82","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_search");
            this.addChild(obj.name, obj);

            obj = new Static("st_selectedCount","40","535","150","30",null,null,null,null,null,null,this);
            obj.set_text("0건 선택됨");
            obj.set_taborder("2");
            obj.set_color("#6f0520");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","1036","545","90","30",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_taborder("3");
            obj.set_cssclass("btn_delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newPost","996","82","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("새 공지사항 등록");
            obj.set_cssclass("btn_regist");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","933","545","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상세 보기");
            obj.set_cssclass("btn_normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","23","222","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("공지사항 관리");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","252","198","76","152",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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
        	console.log("onload페이지 들어옴");
        	this.fnSearch();

        	// ds_Post의 onvaluechanged 이벤트 핸들러 등록
            this.ds_Post.addEventHandler("onvaluechanged", this.ds_Post_onvaluechanged, this);
        };


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
                //alert("조회가 완료되었습니다.");
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

        this.newEdit_onclick = function(obj,e)
        {
        	console.log("ds_post(inFormpost):" + this.ds_Post.saveXML());
        		var objParam1 =
        			{post_code:this.ds_Post.getColumn(this.ds_Post.rowposition, "post_code")};


        	this.showPopup_Detail(objParam1);
        };
        this.showPopup_Detail = function (objParam1)
        {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupWork", 0, 0, 800, 700, null, null, "FrameBase::Popup_DetailPost.xfdl");
        	popup.set_dragmovetype("all");
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam1, this, "fn_popupCallback", true);
        	popup.style.set_overlaycolor("#6666664C");
        	popup.form.style.set_border("1 solid #4c5a6f");
        }

        this.grd_notice_oncelldblclick = function(obj,e)
        {
        	console.log("ds_post(inFormpost):" + this.ds_Post.saveXML());
        		var objParam1 =
        			{post_code:this.ds_Post.getColumn(this.ds_Post.rowposition, "post_code")};


        	this.showPopup_Detail(objParam1);
        };
        //다중 선택시
        this.btn_delete_onclick = function(obj,e)
        {
        	var arrDeleteCodes = [];

            // 데이터셋을 순회하면서 체크된 행의 게시글 코드를 배열에 추가
            for (var i = 0; i < this.ds_Post.rowcount; i++) {
                var checked = this.ds_Post.getColumn(i, "checked");
                if (checked == "1") {
                    var postCode = this.ds_Post.getColumn(i, "post_code"); // 컬럼 이름 확인
                    arrDeleteCodes.push(postCode);
                }
            }

            if (arrDeleteCodes.length == 0) {
                alert("삭제할 게시글을 선택하세요.");
                return;
            }

            if (confirm("선택한 " + arrDeleteCodes.length + "개의 게시글을 삭제하시겠습니까?")) {
                // 삭제 처리 함수 호출
                this.fnDeletePosts(arrDeleteCodes);
            }
        };
        this.fnDeletePosts = function(arrDeleteCodes)
        {
            // 데이터셋 초기화
            this.ds_Delete.clearData();

            // 선택된 게시글 코드들을 데이터셋에 추가
            for (var i = 0; i < arrDeleteCodes.length; i++) {
                var postCode = arrDeleteCodes[i];

                if (postCode == null || postCode == undefined || postCode == "") {
                    trace("유효하지 않은 postCode: " + postCode);
                    continue;
                }

                var nRow = this.ds_Delete.addRow();
                this.ds_Delete.setColumn(nRow, "post_code", postCode);
            }

            // ds_Delete 데이터셋 출력
            trace("ds_Delete 데이터셋 내용:");
            trace(this.ds_Delete.saveXML());

            // 트랜잭션 설정
            var strSvcId    = "deletePosts";
            var strSvcUrl   = "svc::deletePosts.do";
            var inData      = "ds_Delete=ds_Delete";
            var outData     = "";
            var strArg      = "";
            var fnCallback  = "fnCallbackDelete";
            var isAsync     = true;

            // 삭제 트랜잭션 실행
            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, fnCallback, isAsync);
        };
        this.fnCallbackDelete = function(strSvcId, nErrorCode, strErrorMsg)
        {
            if (nErrorCode < 0) {
                alert("삭제 중 오류가 발생했습니다: " + strErrorMsg);
            } else {
                alert("선택한 게시글이 성공적으로 삭제되었습니다.");
                // 삭제 후 그리드를 다시 조회하여 갱신
                this.fnSearch();
            }
        };
        // 데이터셋의 onvaluechanged 이벤트 핸들러 추가



        this.ds_Post_onvaluechanged = function(obj,e)
        {
        	// 변경된 컬럼이 'checked' 컬럼인지 확인
            if (e.columnid == "checked") {
                // 선택된 게시글 수 계산
                var selectedCount = 0;
                for (var i = 0; i < this.ds_Post.rowcount; i++) {
                    var checked = this.ds_Post.getColumn(i, "checked");
                    if (checked == "1") {
                        selectedCount++;
                    }
                }

                // 선택된 게시글 수를 st_selectedCount에 표시
                this.st_selectedCount.set_text(selectedCount + "건 선택됨");
            }
        };

        this.grd_notice_onheadclick = function(obj,e)
        {
        	// 체크박스가 있는 첫 번째 컬럼의 헤더를 클릭했을 때
            if (e.cell == 0) {
                // 헤더의 체크 상태를 가져옴
                var isChecked = obj.getCellProperty("head", e.cell, "text") == "1" ? true : false;

                // 선택된 게시글 수 계산
                var selectedCount = isChecked ? this.ds_Post.rowcount : 0;

                // 선택된 게시글 수를 st_selectedCount에 표시
                this.st_selectedCount.set_text(selectedCount + "건 선택됨");
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Post_onload,this);
            this.grd_notice.addEventHandler("oncellclick",this.grd_notice_oncellclick,this);
            this.grd_notice.addEventHandler("onheadclick",this.grd_notice_onheadclick,this);
            this.grd_notice.addEventHandler("oncelldblclick",this.grd_notice_oncelldblclick,this);
            this.btn_Search.addEventHandler("onclick",this.Button00_onclick,this);
            this.st_selectedCount.addEventHandler("onclick",this.st_selectedCount_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_newPost.addEventHandler("onclick",this.btn_newPost_onclick,this);
            this.Button00.addEventHandler("onclick",this.newEdit_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.ds_Post.addEventHandler("onvaluechanged",this.ds_Post_onvaluechanged,this);
        };
        this.loadIncludeScript("Form_Post.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
