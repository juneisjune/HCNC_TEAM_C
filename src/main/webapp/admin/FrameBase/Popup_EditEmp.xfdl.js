(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_EditEmp");
            this.set_titletext("직원 정보 수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"account\" type=\"STRING\" size=\"256\"/><Column id=\"upd_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">남성</Col><Col id=\"text\">남성</Col></Row><Row><Col id=\"value\">여성</Col><Col id=\"text\">여성</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Title","20","10","420","40",null,null,null,null,null,null,this);
            obj.set_text("직원 정보 수정");
            obj.set_textAlign("center");
            obj.set_font("bold 18pt/normal \'Arial\'");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("lblID","30","80","80","30",null,null,null,null,null,null,this);
            obj.set_text("ID");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID","70","80","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:id");
            this.addChild(obj.name, obj);

            obj = new Static("lblPassword","230","80","90","30",null,null,null,null,null,null,this);
            obj.set_text("새로운 비밀번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPassword","330","80","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_password("true");
            obj.set_text("bind:password");
            this.addChild(obj.name, obj);

            obj = new Static("lblName","30","130","80","30",null,null,null,null,null,null,this);
            obj.set_text("이름");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","70","130","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:name");
            this.addChild(obj.name, obj);

            obj = new Static("lblBirth","270","130","80","30",null,null,null,null,null,null,this);
            obj.set_text("생년월일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirth","330","130","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_datecolumn("birth");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("lblGender","30","195","80","25",null,null,null,null,null,null,this);
            obj.set_text("성별");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGender","70","190","110","30",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_value("bind:gender");
            this.addChild(obj.name, obj);

            obj = new Static("lblPhone","270","195","80","25",null,null,null,null,null,null,this);
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","330","190","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:phone");
            this.addChild(obj.name, obj);

            obj = new Static("lblAddress","30","253","80","25",null,null,null,null,null,null,this);
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress","70","250","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:address");
            this.addChild(obj.name, obj);

            obj = new Static("lblEmail","280","253","80","25",null,null,null,null,null,null,this);
            obj.set_text("이메일");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","330","250","110","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:email");
            this.addChild(obj.name, obj);

            obj = new Static("lblAccount","20","305","80","25",null,null,null,null,null,null,this);
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAccount","70","305","105","30",null,null,null,null,null,null,this);
            obj.getSetter("binddataset").set("ds_employee");
            obj.set_text("bind:account");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","180","400","80","30",null,null,null,null,null,null,this);
            obj.set_text("수정");
            obj.set_background("green");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","280","400","80","30",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_background("gray");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","edtID","value","ds_employee","id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtPassword","value","ds_employee","password");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtName","value","ds_employee","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calBirth","value","ds_employee","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmbGender","value","ds_employee","gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtPhone","value","ds_employee","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtAddress","value","ds_employee","address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtEmail","value","ds_employee","email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtAccount","value","ds_employee","account");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_EditEmp.xfdl", function() {
        // 팝업이 로드될 때 실행되는 함수
        this.Popup_EditEmp_onload = function(obj, e)
        {
        	console.log("수정 팝업 오픈");

        	this.ds_employee.clearData()
        	this.ds_employee.addRow();

            this.ds_employee.setColumn(0, "id", this.parent.id);
            this.ds_employee.setColumn(0, "password", this.parent.password);
            this.ds_employee.setColumn(0, "name", this.parent.name);
            this.ds_employee.setColumn(0, "birth", this.parent.birth);
            this.ds_employee.setColumn(0, "gender", this.parent.gender);
            this.ds_employee.setColumn(0, "phone", this.parent.phone);
            this.ds_employee.setColumn(0, "email", this.parent.email);
            this.ds_employee.setColumn(0, "address", this.parent.address);
            this.ds_employee.setColumn(0, "account", this.parent.account);

        	console.log(this.ds_employee.saveXML());

        };


        // 수정 버튼 클릭 시 호출되는 함수 (수정된 데이터 저장)
        this.btnUpdate_onclick = function(obj, e) {
            var strSvcId = "updateEmployeeData";  // 서비스 ID
            var strSvcUrl = "svc::updateEmployeeData.do";  // 서버의 URL과 매핑
            var inData = "ds_employee=ds_employee";  // 전송할 데이터셋
            var outData = "";  // 서버에서 받아올 데이터가 없을 경우 빈 문자열
            var strArg = "";  // 추가 인자가 필요 없을 경우 빈 문자열
            var callBackFnc = "fnCallback";  // 콜백 함수 호출
            var isAsync = true;  // 비동기 처리

            console.log(this.ds_employee.saveXML());

            // transaction 호출
            this.transaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, isAsync);

            alert("수정 완료");
            this.close("수정 완료");
            this.ds_employee.clearData()
            // 부모창의 검색 함수 호출
            this.opener.fnSearch();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("닫기");
        	this.ds_employee.clearData()
        	console.log("수정 화면 닫음");
        	this.opener.fnSearch();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.Popup_EditEmp_onclick,this);
            this.addEventHandler("onload",this.Popup_EditEmp_onload,this);
            this.lblID.addEventHandler("onclick",this.lblID_onclick,this);
            this.lblBirth.addEventHandler("onclick",this.lblBirth_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Popup_EditEmp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
