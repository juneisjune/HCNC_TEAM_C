(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_background("#000033");
            if (Form == this.constructor)
            {
                this._setFormPosition(1535,65);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staHello","1375","0","80","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#ffffff");
            obj.set_text("변수민님");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Logout","1440","15","80","32.5",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text(" 로그아웃");
            obj.set_icon("url(\'imagerc::img_top_logout2.png\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_HcncLogo","0","0","180","65",null,null,null,null,null,null,this);
            obj.set_image("url(\'imagerc::img_hcnc_logo.png\')");
            obj.set_imagealign("center");
            obj.set_stretch("fixaspectratio");
            obj.set_background("#000033");
            obj.set_taborder("2");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Title","575","0","400","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인사관리시스템");
            obj.set_font("bold 48px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_letterSpacing("10px");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1535,65,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        // 로그아웃 버튼 클릭 시
        this.btn_Logout_onclick = function(obj,e)
        {
        	//사용자 전역변수 초기화
        	nexacro.getApplication().ds_userInfo.setColumn(0, "name", '');
        	nexacro.getApplication().ds_userInfo.setColumn(0, "email", '');
        	nexacro.getApplication().ds_userInfo.setColumn(0, "emp_code", '');
        	nexacro.getApplication().ds_userInfo.setColumn(0, "dep_code", '');
        	nexacro.getApplication().ds_userInfo.setColumn(0, "assign_code", '');

        	//확인
        	//console.log(nexacro.getApplication().ds_userInfo.saveXML());

        	//Top, HFrameSet00, Login 3개 영역을 조정하여 로그인 화면이 보이도록 설정
            nexacro.getApplication().mainframe.VFrameSet00.set_separatesize("0,0,*");
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.staHello.addEventHandler("onclick",this.staHello_onclick,this);
            this.btn_Logout.addEventHandler("onclick",this.btn_Logout_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
