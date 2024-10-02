(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_EditEmp2");
            this.set_titletext("직원 정보 수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Title","20","10","290","40",null,null,null,null,null,null,this);
            obj.set_text("직원 정보 수정");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt/normal \'Arial\'");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("lblID","30","80","80","30",null,null,null,null,null,null,this);
            obj.set_text("ID");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID","120","80","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblPassword","30","130","120","30",null,null,null,null,null,null,this);
            obj.set_text("새로운 비밀번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPassword","120","130","150","30",null,null,null,null,null,null,this);
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","30","180","80","30",null,null,null,null,null,null,this);
            obj.set_text("이름");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","120","180","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblBirth","30","230","100","30",null,null,null,null,null,null,this);
            obj.set_text("생년월일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirth","120","230","150","30",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("lblGender","30","280","80","30",null,null,null,null,null,null,this);
            obj.set_text("성별");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGender","120","280","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblPhone","30","330","100","30",null,null,null,null,null,null,this);
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","120","325","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblAddress","30","380","100","30",null,null,null,null,null,null,this);
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress","120","375","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblEmail","30","430","100","30",null,null,null,null,null,null,this);
            obj.set_text("이메일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","120","425","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("lblAccount","30","480","100","30",null,null,null,null,null,null,this);
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAccount","120","475","150","30",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnEdit","40","530","100","30",null,null,null,null,null,null,this);
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","200","530","100","30",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_EditEmp2.xfdl", function() {

        this.btnEdit_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnEdit.addEventHandler("onclick",this.btnEdit_onclick,this);
        };
        this.loadIncludeScript("Popup_EditEmp2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
