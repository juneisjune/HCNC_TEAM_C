(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_EditAtten");
            this.set_titletext("출/퇴근 정보 수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AttenList", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"workDate\" type=\"STRING\" size=\"256\"/><Column id=\"attenType\" type=\"STRING\" size=\"256\"/><Column id=\"workStart\" type=\"STRING\" size=\"256\"/><Column id=\"workEnd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WorkType", this);
            obj._setContents("<ColumnInfo><Column id=\"Name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Name\">출근</Col></Row><Row><Col id=\"Name\">결근</Col></Row><Row><Col id=\"Name\">휴가</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close","930","20","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Edit","20","20","890","130",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_AttenList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"83\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"103\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직책\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"근무일자\"/><Cell col=\"5\" text=\"근무형태\"/><Cell col=\"6\" text=\"출근시간\"/><Cell col=\"7\" text=\"퇴근시간\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:assignName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:workDate\" displaytype=\"date\" calendardateformat=\"yyyy년 MM월 dd일\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:attenType\" displaytype=\"text\" textAlign=\"center\" edittype=\"combo\" combodataset=\"ds_WorkType\" combocodecol=\"Name\" combodatacol=\"Name\" comboautoselect=\"false\" autosizecol=\"default\" autosizerow=\"default\"/><Cell col=\"6\" text=\"bind:workStart\" textAlign=\"center\" edittype=\"mask\" maskeditformat=\"##:##\" maskedittype=\"string\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:workEnd\" textAlign=\"center\" edittype=\"mask\" maskedittype=\"string\" displaytype=\"mask\" calendareditformat=\"HH:mm\" maskeditformat=\"##:##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Edit","930","100","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수정 완료");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_EditAtten.xfdl", function() {

        this.Popup_EditAtten_onload = function(obj,e)
        {
        	this.ds_AttenList.clearData();
        	this.ds_AttenList.addRow();
        	this.ds_AttenList.setColumn(0, "empCode", this.parent.empCode);
        	this.ds_AttenList.setColumn(0, "name", this.parent.name);
        	this.ds_AttenList.setColumn(0, "assignName", this.parent.assignName);
        	this.ds_AttenList.setColumn(0, "depName", this.parent.depName);
        	this.ds_AttenList.setColumn(0, "workDate", this.parent.workDate);
        	this.ds_AttenList.setColumn(0, "attenType", this.parent.attenType);
        	this.ds_AttenList.setColumn(0, "workStart", this.parent.workStart);
        	this.ds_AttenList.setColumn(0, "workEnd", this.parent.workEnd);

        };

        // 팝업 닫기 버튼
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close('Close EditPopup');
        };

        // 수정 완료 버튼
        this.btn_Edit_onclick = function(obj,e)
        {
            if (this.ds_AttenList.getColumn(0, "attenType")=="출근") {

        		var workStart = this.ds_AttenList.getColumn(0, "workStart");
        		var workEnd = this.ds_AttenList.getColumn(0, "workEnd");

                if(!workStart || !workEnd) {
        		alert("출근시간 또는 퇴근시간을 입력하세요.");
                return;
        		}

        		var startHour = parseInt(workStart.slice(0, 2), 10);
        		var startMinute = parseInt(workStart.slice(2, 4), 10);
        		var endHour = parseInt(workEnd.slice(0, 2), 10);
        		var endMinute = parseInt(workEnd.slice(2, 4), 10);

        		if (startHour > 23 || startMinute > 59) {
                alert("출근시간을 올바르게 입력해주세요.");
                return;
        		}

        		if (endHour > 23 || endMinute > 59) {
        			alert("퇴근시간을 올바르게 입력해주세요.");
        			return;
        		}

        		if (startHour > endHour || (startHour == endHour && startMinute > endMinute)) {
        			alert("시간을 올바르게 입력해주세요.");
        			return;
        		}
            }

        	console.log(this.ds_AttenList.saveXML());

        	var strSvcId    = "editAttenList";
        	var strSvcUrl   = "svc::editAttenList.do";
        	var inData      = "ds_AttenList=ds_AttenList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync     = true;

        	this.transaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        	alert("수정이 완료되었습니다.");
        	this.close('Close EditPopup');

        	this.opener.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Popup_EditAtten_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Edit.addEventHandler("onclick",this.btn_Edit_onclick,this);
        };
        this.loadIncludeScript("Popup_EditAtten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
