(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(205,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Left", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NAME\">공지 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_PATH\">FrameBase::Form_Welcome.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NAME\">직원 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_NAME\">직원 정보 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_Work.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000102</Col><Col id=\"MENU_NAME\">직원 부서 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NAME\">근태 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010001</Col><Col id=\"MENU_NAME\">출 / 퇴근 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::Form_Attendance.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010002</Col><Col id=\"MENU_NAME\">휴가 신청 관리</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_NAME\">급여 관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0300</Col><Col id=\"MENU_NAME\">평가 관리</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">030001</Col><Col id=\"MENU_NAME\">평가 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">030002</Col><Col id=\"MENU_NAME\">평가 조회</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">030003</Col><Col id=\"MENU_NAME\">평가 기준</Col><Col id=\"MENU_PATH\">FrameBase::.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_LeftMenu","0","0","200","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("ds_Left");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",205,670,this,function(p){});
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

            var value = this.ds_Left.getColumn(rowIndex, "MENU_PATH");

        	trace(value);

        	nexacro.getApplication().mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grid_LeftMenu.addEventHandler("oncellclick",this.grid_LeftMenu_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
