(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_fileuptransfer_01");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/><Column id=\"reg_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTACH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_URL\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","98","322","482","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("open","600","322","90","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("폴더 열기");
            obj.set_cssclass("btn_download");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","100","322","482","90",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"380\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"size\"/></Band><Band id=\"body\"><Cell text=\"bind:filename\"/><Cell col=\"1\" text=\"bind:filesize\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","346","440","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_regist");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_title","100","101","590","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","100","160","590","144",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","23","220","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("공지사항 등록");
            obj.set_cssclass("stc_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Attachments","30","322","60","30",null,null,null,null,null,null,this);
            obj.set_text("첨부파일");
            obj.set_taborder("7");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Content","30","160","60","30",null,null,null,null,null,null,this);
            obj.set_text("내용");
            obj.set_taborder("8");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Label_Title","30","101","60","30",null,null,null,null,null,null,this);
            obj.set_text("제목");
            obj.set_taborder("9");
            obj.set_cssclass("stc_stc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,530,this,function(p){});
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
        this.registerScript("Form_NewPost.xfdl", function() {


        this.sample_fileuptransfer_01_onload = function(obj,e)
        {
        	this.Grid00.setFocus();
        };

        //아래 첨부파일 관련 코드
        this.btn_open_onclick = function(obj,e)
        {
        	this.Grid00.setFocus();
        	this.FileDialog00.open('nexacro17', FileDialog.LOAD);  // 단일 파일 선택 모드
        };

        this.FileDialog00_onclose = function(obj, e) {
            if (e.virtualfiles && e.virtualfiles.length > 0) {
                trace("Selected files: " + e.virtualfiles.length);  // 파일 선택 개수 확인
                this.addFileList(e.virtualfiles);  // 파일 리스트 추가
            } else {
                trace("No files selected.");
            }
        };

        this.addFileList = function(filelist) {
            for (var i = 0, len = filelist.length, vFile; i < len; i++) {
                vFile = filelist[i];
                trace("Opening file: " + vFile.filename);  // 파일 이름 확인
                vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                vFile.addEventHandler("onerror", this.FileList_onerror , this);

                vFile.open(null, 1);  // 1 = 읽기 전용으로 파일 열기
            }
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.Dataset00.addRow();
        			this.Dataset00.setColumn(nRowIdx, 0, obj.filename);
        			this.Dataset00.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };
        this.Grid00_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.Grid00.set_opacity(0.5);
        	}
        };

        this.Grid00_ondragleave = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	this.Grid00.set_opacity(1);
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        this.Button01_onclick = function(obj, e) {
        	this.Grid00.setFocus();

            // ds_postInfo의 첫 번째 행을 생성 또는 선택
            if (this.ds_postInfo.getRowCount() == 0) {
                this.ds_postInfo.addRow();
            }

            var row = nexacro.getApplication().ds_userInfo.rowposition;
            this.ds_postInfo.setColumn(0, "upd_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));
            this.ds_postInfo.setColumn(0, "emp_code", nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code"));
        	this.ds_postInfo.setColumn(0, "reg_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));


        	trace("ds_fileInfo: " + this.ds_fileInfo.saveXML());


        	console.log("for문 위");
        	// Dataset00의 데이터를 ds_fileInfo로 복사하면서 컬럼명 매핑
        	for (var i = 0; i < this.Dataset00.getRowCount(); i++) {
        	console.log("for문 안");
        		var nRow = this.ds_fileInfo.addRow();
        		var originalFileName = this.Dataset00.getColumn(i, "filename");
        		var fileSize = this.Dataset00.getColumn(i, "filesize");

        		this.ds_fileInfo.setColumn(nRow, "ATTACH_NAME", originalFileName);
        		this.ds_fileInfo.setColumn(nRow, "ATTACH_URL", originalFileName); // 저장된 파일 이름
        		this.ds_fileInfo.setColumn(nRow, "fileSize", fileSize);

        	}
        	// ds_fileInfo의 내용을 로그로 출력하여 확인
        	trace("ds_fileInfo 데이터 확인:");
        	trace(this.ds_fileInfo.saveXML());


        	console.log("file info: "+this.ds_fileInfo.saveXML());



            // 데이터셋을 PostData로 설정
            this.FileUpTransfer00.setPostData("ds_postInfo", this.ds_postInfo.saveXML());

            // 파일 업로드 실행
            this.FileUpTransfer00.upload('http://localhost:8080/fileUpload/fileUpload.jsp');
        	//alert("공지사항 업로드에 성공하였습니다!");
        	//nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");

        };


        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj, e)
        {
            // ds_fileInfo에 Dataset00의 데이터를 복사
            this.ds_fileInfo.copyData(this.Dataset00);

            // 파일 정보와 공지사항 데이터를 Controller로 전송
            this.transaction(
                "insertPost", // transaction ID
                "svc::insertPost.do", // Controller URL
                "ds_postInfo=ds_postInfo ds_fileInfo=ds_fileInfo", // 입력 DataSet 매핑
                "", // 출력 DataSet
                "", // 입력/출력 변수
                "fn_callback" // 콜백 함수
            );
        };

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("공지사항 등록 중 오류 발생: " + strErrorMsg);
            } else {
                alert("공지사항이 성공적으로 등록되었습니다.");
        		//alert("공지사항 업로드에 성공하였습니다!");
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");
                // 필요한 경우 화면 초기화 등 추가 작업 수행
            }
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {	trace("Error while opening file: " + e.errormsg);  // 파일 처리 에러 메시지 출력
        	this.fn_addlog(e.errormsg);
        	this.fn_addlog(e.statuscode);
        };

        this.fn_addlog = function(strMessage)
        {
        	this.TextArea00.insertText(strMessage + '\n');
        }


        this.btn_close_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_fileuptransfer_01_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.open.addEventHandler("onclick",this.btn_open_onclick,this);
            this.Grid00.addEventHandler("ondragenter",this.Grid00_ondragenter,this);
            this.Grid00.addEventHandler("ondragleave",this.Grid00_ondragleave,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Edit_title.addEventHandler("onchanged",this.Edit_title_onchanged,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Form_NewPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
