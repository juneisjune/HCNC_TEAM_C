(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_DetailPost");
            this.set_titletext("공지사항 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Post", this);
            obj._setContents("<ColumnInfo><Column id=\"post_code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"view_count\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Attachments", this);
            obj._setContents("<ColumnInfo><Column id=\"attach_code\" type=\"STRING\" size=\"256\"/><Column id=\"attach_name\" type=\"STRING\" size=\"256\"/><Column id=\"attach_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","386","20","244","50",null,null,null,null,null,null,this);
            obj.set_text("공지사항 상세보기");
            obj.set_cssclass("stc_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Title","30","88","100","30",null,null,null,null,null,null,this);
            obj.set_text("제목");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Title","120","90","820","30",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_font("14px \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Author","30","130","100","30",null,null,null,null,null,null,this);
            obj.set_text("작성자");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Author","120","130","200","30",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_font("14px \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Date","340","130","100","30",null,null,null,null,null,null,this);
            obj.set_text("작성일");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_ViewCount","660","130","100","30",null,null,null,null,null,null,this);
            obj.set_text("조회수");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_ViewCount","750","130","190","30",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_font("14px \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Content","30","170","100","30",null,null,null,null,null,null,this);
            obj.set_text("내용");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_Content","120","170","820","360",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_font("14px \'Gulim\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Attachments","30","550","100","30",null,null,null,null,null,null,this);
            obj.set_text("첨부파일");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Attachments","120","550","700","100",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_Attachments");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"612\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:attach_name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Download","840","550","100","100",null,null,null,null,null,null,this);
            obj.set_text("다운로드");
            obj.set_cssclass("btn_download");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","430","128","213","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("@@@@년 @@월 @@일");
            obj.set_type("string");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,690,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit_Title","value","ds_Post","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit_Author","value","ds_Post","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","TextArea_Content","value","ds_Post","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit_ViewCount","value","ds_Post","view_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","MaskEdit00","value","ds_Post","reg_date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_DetailPost.xfdl", function() {
        this.Popup_DetailPost_onload = function(obj,e)
        {
            // 부모 폼에서 전달된 post_code 사용
            var postCode = this.parent.post_code;
            console.log("post코드: " + postCode);

            // 데이터셋 초기화 및 post_code 설정
            this.ds_Post.clearData();
            this.ds_Post.addRow();
            this.ds_Post.setColumn(0, "post_code", postCode);


            this.fnSearch();
        };

        this.fnSearch = function () {
            var strSvcId    = "postDetail";
            var strSvcUrl   = "svc::postDetail.do";
            var inData      = "ds_Post=ds_Post";
            var outData     = "ds_Post=ds_Post ds_Attachments=ds_Attachments"; // 첨부파일 데이터셋 추가
            var strArg      = "";
            var fnCallback  = "fnCallback";
            var isAsync     = true;

            console.log("async까지 들어옴");

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, fnCallback, isAsync);
            console.log("transaction 다음부분");
        }

        this.fnCallback = function(strSvcId, nErrorCode, strErrorMsg) {
            console.log("fnCallback까지 들어옴");
            if (nErrorCode < 0) {
                alert("조회 중 오류가 발생했습니다: " + strErrorMsg);
            } else {
                // 조회된 데이터 확인
                console.log(this.ds_Post.saveXML());
                console.log(this.ds_Attachments.saveXML());

                // 필요한 로직 추가 (예: 화면에 데이터 바인딩)
            }
        }



        this.Button_Close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button_Download_onclick = function(obj,e)
        {
        	// 현재 선택된 행의 인덱스 가져오기
            var nRow = this.ds_Attachments.rowposition;
            if (nRow < 0) {
                alert("다운로드할 파일을 선택하세요.");
                return;
            }

            // 파일 이름 및 코드 가져오기
            var attachCode = this.ds_Attachments.getColumn(nRow, "attach_code");
            var attachName = this.ds_Attachments.getColumn(nRow, "attach_name");

            // 파일 존재 여부 확인
            if (!attachName) {
                alert("파일이 존재하지 않습니다.");
                return;
            }

            // 다운로드 URL 설정
        	var sUrl = "http://localhost:8080/fileUpload/fileDownload.jsp?fileName="
        			+ encodeURIComponent(this.ds_Attachments.getColumn(this.ds_Attachments.rowposition, "attach_name"));



            // FileDownload 컴포넌트 생성 또는 기존 컴포넌트 사용
            var objFileDownload;

            if (this.FileDownload00 == null) {
                // 동적으로 FileDownload 컴포넌트 생성
                objFileDownload = new FileDownload("FileDownload00", "absolute", 0, 0, 0, 0, null, null);
                this.addChild("FileDownload00", objFileDownload);
                objFileDownload.show();

                // 이벤트 핸들러 추가
                objFileDownload.addEventHandler("onsuccess", this.FileDownload00_onsuccess, this);
                objFileDownload.addEventHandler("onerror", this.FileDownload00_onerror, this);
            } else {
                objFileDownload = this.FileDownload00;
            }

            // 다운로드 설정 및 시작
            objFileDownload.set_downloadurl(sUrl);
            objFileDownload.set_downloadfilename(attachName);
            objFileDownload.download();
        };


        // 다운로드 성공 이벤트
        this.FileDownTransfer00_onsuccess = function(obj, e)
        {
            alert("파일 다운로드가 완료되었습니다.");
        };

        // 다운로드 실패 이벤트
        this.FileDownTransfer00_onerror = function(obj, e)
        {
            alert("파일 다운로드 중 오류가 발생했습니다. 오류 코드: " + e.errormsg);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_DetailPost_onload,this);
            this.Edit_Author.addEventHandler("onchanged",this.Edit_Author_onchanged,this);
            this.Static_Label_Attachments.addEventHandler("onclick",this.Static_Label_Attachments_onclick,this);
            this.Button_Download.addEventHandler("onclick",this.Button_Download_onclick,this);
        };
        this.loadIncludeScript("Popup_DetailPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
