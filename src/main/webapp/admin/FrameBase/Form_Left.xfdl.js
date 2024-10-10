(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_scrolltype("vertical");
            this.set_scrollbartype("none");
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(180,665);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Left", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NAME\">공지 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NAME\">공지 목록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_Post.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0002</Col><Col id=\"MENU_NAME\">공지 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_NewPost.xfdl</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NAME\">직원 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0101</Col><Col id=\"MENU_NAME\">직원 정보 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_Employee.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0102</Col><Col id=\"MENU_NAME\">직원 인사 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_HRD.xfdl</Col></Row><Row><Col id=\"MENU_ID\">03</Col><Col id=\"MENU_NAME\">근태 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0301</Col><Col id=\"MENU_NAME\">출 / 퇴근 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_Attendance.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">0302</Col><Col id=\"MENU_NAME\">휴가 신청 관리</Col><Col id=\"MENU_PATH\">FrameBase::Form_dayoff_Confirm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">04</Col><Col id=\"MENU_NAME\">급여 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0401</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">급여 등록</Col><Col id=\"MENU_PATH\">FrameBase::Form_InsertPay.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0402</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NAME\">급여 수정</Col><Col id=\"MENU_PATH\">FrameBase::Form_UpdatePay.xfdl</Col></Row><Row><Col id=\"MENU_ID\">05</Col><Col id=\"MENU_NAME\">평가 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">0501</Col><Col id=\"MENU_NAME\">평가 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_EvalEmployee.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">0502</Col><Col id=\"MENU_NAME\">평가 조회</Col><Col id=\"MENU_PATH\">FrameBase::Form_Eval.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">0503</Col><Col id=\"MENU_NAME\">평가 기준</Col><Col id=\"MENU_PATH\">FrameBase::Form_EvalEdit.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_LeftMenu","0","0","180","665",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("ds_Left");
            obj.set_scrolltype("both");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_treeuseimage("false");
            obj.set_treeusebutton("use");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",180,665,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        /*
        var objWorkFrame = nexacro.WorkFrame;
        nexacro.getApplication().objWorkFrame.set_formurl("FrameBase::Form_Post.xfdl");

        nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl("FrameBase::Form_Post.xfdl");
        */

        this.grid_LeftMenu_oncellclick = function(obj,e)
        {
        	// 클릭한 행(row)의 인덱스
        	var rowIndex = e.row;

        	if(this.ds_Left.getColumn(rowIndex, "MENU_LEVEL") != 1) {

            var value = this.ds_Left.getColumn(rowIndex, "MENU_PATH");

        	trace(value);

        	//WorkFrame 이동
        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(value);
        	}
        };

        // 로그인이 성공하여 폼의 크기가 변경될 때
        this.Form_Left_onsize = function(obj,e)
        {
        	this.reload();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Form_Left_onsize,this);
            this.grid_LeftMenu.addEventHandler("oncellclick",this.grid_LeftMenu_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
