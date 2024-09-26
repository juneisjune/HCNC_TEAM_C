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
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"originalFileName\" type=\"STRING\" size=\"256\"/><Column id=\"savedFileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","28","80","482","140",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("open","512","80","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","80","482","160",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"380\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"size\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:size\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","512","140","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","642","80","482","120",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("title","24","28","69","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_title","52","31","460","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_coment","20","251","460","79",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit_title","value","ds_postInfo","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit_coment","value","ds_postInfo","content");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_newPost1.xfdl", function() {

        //아래 첨부파일 관련 코드
        this.btn_open_onclick = function(obj,e)
        {
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
            // ds_postInfo의 첫 번째 행을 생성 또는 선택
            if (this.ds_postInfo.getRowCount() == 0) {
                this.ds_postInfo.addRow();
            }

            var row = nexacro.getApplication().ds_userInfo.rowposition;
            this.ds_postInfo.setColumn(0, "upd_name", nexacro.getApplication().ds_userInfo.getColumn(row, "name"));
            this.ds_postInfo.setColumn(0, "emp_code", nexacro.getApplication().ds_userInfo.getColumn(row, "emp_code"));



            // 데이터셋을 PostData로 설정
            this.FileUpTransfer00.setPostData("ds_postInfo", this.ds_postInfo.saveXML());

            // 파일 업로드 실행
            this.FileUpTransfer00.upload('http://localhost:8080/fileUpload/fileUpload.jsp');
        };


        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	this.fn_addlog(e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj, e)
        {
            var objReceiveData = e.datasets; // e 객체에서 데이터를 가져옴
            if (objReceiveData) {
                var ds_fileInfo = objReceiveData["ds_fileInfo"]; // 서버에서 반환한 ds_fileInfo
                this.ds_fileInfo.copyData(ds_fileInfo); // 클라이언트의 ds_fileInfo에 데이터 복사


                // 파일 정보와 공지사항 데이터를 Controller로 전송
                this.transaction(
        			"insertPost", // transaction ID
        			"svc::insertPost.do", // Controller URL
        			"ds_postInfo=ds_postInfo ds_fileInfo=ds_fileInfo", // 입력 DataSet 매핑 수정
        			"", // 출력 DataSet
        			"", // 입력/출력 변수
        			"fn_callback" // 콜백 함수
        		);
            } else {
                alert("파일 업로드 후 서버로부터 파일 정보를 받지 못했습니다.");
            }
        };

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("공지사항 등록 중 오류 발생: " + strErrorMsg);
            } else {
                alert("공지사항이 성공적으로 등록되었습니다.");
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.open.addEventHandler("onclick",this.btn_open_onclick,this);
            this.Grid00.addEventHandler("ondragenter",this.Grid00_ondragenter,this);
            this.Grid00.addEventHandler("ondragleave",this.Grid00_ondragleave,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("Form_newPost1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
