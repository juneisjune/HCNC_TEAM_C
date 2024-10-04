(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_edit_page");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/><Column id=\"post_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"attach_name\" type=\"STRING\" size=\"256\"/><Column id=\"attach_url\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_post", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"post_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","79","270","482","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("open","579","250","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("폴더 열기");
            this.addChild(obj.name, obj);

            obj = new Grid("attach_grid","81","250","480","90",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"380\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:attach_name\"/><Cell col=\"1\" text=\"삭제\" textAlign=\"right\" edittype=\"button\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","330","370","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정하기");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1038","60","482","120",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_title","80","70","620","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","490","370","110","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","80","120","619","112",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Title","-50","69","100","30",null,null,null,null,null,null,this);
            obj.set_text("제목:");
            obj.set_font("bold 14px \'Gulim\'");
            obj.set_textAlign("right");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Attachments","-39","255","100","30",null,null,null,null,null,null,this);
            obj.set_text("첨부파일:");
            obj.set_font("bold 14px \'Gulim\'");
            obj.set_textAlign("right");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Content","-50","119","100","30",null,null,null,null,null,null,this);
            obj.set_text("내용:");
            obj.set_font("bold 14px \'Gulim\'");
            obj.set_textAlign("right");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title","60","10","400","40",null,null,null,null,null,null,this);
            obj.set_text("공지사항 수정하기");
            obj.set_font("bold 24px \'Gulim\'");
            obj.set_textAlign("left");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",750,470,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit_title","value","ds_postInfo","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","TextArea01","value","ds_postInfo","content");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_editPost.xfdl", function() {
        // 팝업 로드 시 게시글 정보와 첨부파일 정보를 불러옴
        this.Popup_edit_page_onload = function(obj,e)
        {
        	this.ds_post.clearData();
        	this.ds_post.addRow();
        	this.ds_post.setColumn(0, "post_code", this.parent.post_code);
        	this.ds_postInfo.setColumn(0, "post_code", this.parent.post_code);
        	this.ds_post.setColumn(0, "title", this.parent.title);
        	this.ds_post.setColumn(0, "content", this.parent.content);
        	console.log("postInfo data:" + this.ds_postInfo.saveXML());
        	console.log("post dataafaf:" + this.ds_post.saveXML());
        	console.log("dbset" + this.Dataset00.saveXML());


        	// Edit 및 TextArea에 게시글 정보 설정
        	this.Edit_title.set_value(this.ds_post.getColumn(0, "title"));
        	this.TextArea01.set_value(this.ds_post.getColumn(0, "content"));

        	// 첨부파일 정보 조회
        	var postCode = this.ds_post.getColumn(0, "post_code");
        	var strSvcId = "selectAttachments";
        	var strSvcUrl = "svc::selectAttachments.do";
        	var inData = "ds_post=ds_post";
        	var outData = "Dataset00=Dataset00";  // 첨부파일 정보 저장할 데이터셋
        	var strArg = "";
        	var callBackFnc = "fn_callbackAttachments";
        	var isAsync = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 첨부파일 정보 조회 콜백
        this.fn_callbackAttachments = function(svcID, errorCode, errorMsg)
        {
            if (errorCode < 0)
        	{
                alert("첨부파일 조회 중 오류 발생: " + errorMsg);
            } else
        	{
                alert("첨부파일 정보가 성공적으로 조회되었습니다.");

            }
        };
        // 첨부파일 추가 함수


        this.FileDialog00_onclose = function(obj,e){
            if (e.virtualfiles && e.virtualfiles.length > 0) {
                trace("Selected files: " + e.virtualfiles.length);
                this.addFileList(e.virtualfiles);
            } else {
                trace("No files selected.");
            }
        };

        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++) {
                vFile = filelist[i];
                trace("Opening file: " + vFile.filename);
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror, this);
                vFile.open(null, 1);  // 1 = 읽기 전용으로 파일 열기
            }
        };

        // 파일 처리 성공 시
        this.FileList_onsuccess = function(obj,e){
        	switch (e.reason) {
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.Dataset00.addRow();
        			this.Dataset00.setColumn(nRowIdx, "attach_name", obj.filename);
        			this.Dataset00.setColumn(nRowIdx, "filesize", this.cutFileSize(e.filesize));
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        };

        // 파일 처리 중 오류 발생 시
        this.FileList_onerror = function(obj,e){
        	trace("Error: " + e.errormsg + " - Status Code: " + e.statuscode);
        };

        // 파일 크기 포맷팅 함수
        this.cutFileSize = function(filesize){
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(2) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        // 게시글 수정 및 파일 저장 로직
        this.Button01_onclick = function(obj,e){
            if (this.ds_postInfo.getRowCount() == 0) {
                this.ds_postInfo.addRow();
            }

            var row = nexacro.getApplication().ds_userInfo.rowposition;
            var empCode = nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code");

            if (!empCode) {
                console.log("emp_code is null or undefined");  // emp_code가 비었는지 확인
            }

            this.ds_postInfo.setColumn(0, "upd_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));
            this.ds_postInfo.setColumn(0, "emp_code", nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code"))
            this.ds_postInfo.setColumn(0, "reg_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));
            //this.ds_postInfo.setColumn(0, "post_code", this.parent.post_code);  // 주석 해제

            console.log("ds_postInfo data: " + this.ds_postInfo.saveXML());

        	this.ds_fileInfo.setColumn(0, "emp_code", nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code"));


            // Dataset00의 데이터를 ds_fileInfo로 복사하면서 컬럼명 매핑
        	for (var i = 0; i < this.Dataset00.getRowCount(); i++) {
        	console.log("for문 안");
        		var uploadPath = "D:\\upload\\";  // 경로를 명시적으로 설정
        		var nRow = this.ds_fileInfo.addRow();
        		var originalFileName = this.Dataset00.getColumn(i, "attach_name");
        		var fileSize = this.Dataset00.getColumn(i, "filesize");
        		var fullFilePath = uploadPath + originalFileName;  // 경로와 파일 이름을 합침

        		console.log("데이터셋 인포: "+this.Dataset00.saveXML());

        		this.ds_fileInfo.setColumn(nRow, "attach_name", originalFileName);
        		this.ds_fileInfo.setColumn(nRow, "attach_url", fullFilePath); // 저장된 파일 이름
        		//this.ds_fileInfo.setColumn(nRow, "fileSize", fileSize);
        		this.ds_fileInfo.setColumn(i, "emp_code", nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code"));
        		this.ds_fileInfo.setColumn(i, "reg_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));
        		console.log("파일 인포: "+this.ds_fileInfo.saveXML());

        	}

        	trace("ds_postInfo: " + this.ds_postInfo.saveXML());
            trace("ds_fileInfo: " + this.ds_fileInfo.saveXML());

            var strSvcId = "updatePost";
            var strSvcUrl = "svc::updatePost.do";
            var inData = "ds_postInfo=ds_postInfo ds_fileInfo=ds_fileInfo";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fn_callbackUpdatePost";
            var isAsync = true;

            this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

            // 파일 업로드
            this.FileUpTransfer00.upload('http://localhost:8080/fileUpload/fileUpload.jsp');
        };

        // 트랜잭션 콜백 처리
        this.fn_callbackUpdatePost = function(svcID, errorCode, errorMsg){
            if (errorCode < 0) {
                alert("수정 중 오류 발생: " + errorMsg);
            } else {
                alert("수정 사항이 성공적으로 반영되었습니다.");
                this.close();
            }
        };
        this.btn_open_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.LOAD);  // 단일 파일 선택 모드
        };

        this.attach_grid_oncellclick = function(obj,e)
        {
        	var clickedCol = e.col;  // 클릭한 컬럼 인덱스
        	if(clickedCol == 1){
        		if(confirm("정말 삭제하시겠습니까?")){
        			this.Dataset00.deleteRow(e.row);
        		}
        	}
        };

        this.btn_close_ondblclick = function(obj,e)
        {
        	this.close('Close Popup');
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_edit_page_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.open.addEventHandler("onclick",this.btn_open_onclick,this);
            this.attach_grid.addEventHandler("ondragenter",this.Grid00_ondragenter,this);
            this.attach_grid.addEventHandler("ondragleave",this.Grid00_ondragleave,this);
            this.attach_grid.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.attach_grid.addEventHandler("oncellclick",this.attach_grid_oncellclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.Edit_title.addEventHandler("onchanged",this.Edit_title_onchanged,this);
            this.btn_close.addEventHandler("ondblclick",this.btn_close_ondblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Popup_editPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
