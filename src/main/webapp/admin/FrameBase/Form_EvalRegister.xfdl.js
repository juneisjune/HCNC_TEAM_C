(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EvalRegister");
            this.set_titletext("EvalRegister");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"scorecolumn\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col><Col id=\"scorecolumn\">5</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col><Col id=\"scorecolumn\">4</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col><Col id=\"scorecolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col><Col id=\"scorecolumn\">2</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col><Col id=\"scorecolumn\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuestions", this);
            obj._setContents("<ColumnInfo><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"guideCode\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"admin_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"question\">question01</Col><Col id=\"guideCode\">1</Col></Row><Row><Col id=\"guideCode\">2</Col><Col id=\"question\">question02</Col></Row><Row><Col id=\"guideCode\">3</Col><Col id=\"question\">question03</Col></Row><Row><Col id=\"guideCode\">4</Col><Col id=\"question\">question04</Col></Row><Row><Col id=\"guideCode\">5</Col><Col id=\"question\">question05</Col></Row><Row><Col id=\"guideCode\">6</Col><Col id=\"question\">question06</Col></Row><Row><Col id=\"guideCode\">7</Col><Col id=\"question\">question07</Col></Row><Row><Col id=\"guideCode\">8</Col><Col id=\"question\">question08</Col></Row><Row><Col id=\"guideCode\">9</Col><Col id=\"question\">question09</Col></Row><Row><Col id=\"guideCode\">10</Col><Col id=\"question\">question10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvalAll", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"depName\" type=\"STRING\" size=\"256\"/><Column id=\"assignName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"guideCode\" type=\"STRING\" size=\"256\"/><Column id=\"empCode\" type=\"STRING\" size=\"256\"/><Column id=\"evalDate\" type=\"DATE\" size=\"256\"/><Column id=\"score\" type=\"INT\" size=\"256\"/><Column id=\"totalScore\" type=\"INT\" size=\"256\"/><Column id=\"evalGrade\" type=\"STRING\" size=\"256\"/><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"admin_name\" type=\"STRING\" size=\"256\"/><Column id=\"admin_code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("Answer01","10","170","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question01","10","120","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer02","10","320","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question02","10","270","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Question03","10","420","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer03","10","470","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer04","10","620","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question04","10","570","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer05","10","770","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question05","10","720","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit","610","1640","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("제출");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","690","1640","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Question06","10","870","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer06","10","920","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question07","10","1020","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer07","10","1070","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question08","10","1170","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer08","10","1220","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question09","10","1320","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer09","10","1370","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer10","10","1520","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            this.addChild(obj.name, obj);

            obj = new Static("Question10","10","1470","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEvalName","50","10","600","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsEvalAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/><Column size=\"149\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직책\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:depName\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:assignName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Answer01","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Answer02","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Answer03","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Answer04","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Answer05","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Answer06","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Answer07","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Answer08","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Answer09","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Answer10","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","grdEvalName","binddataset","dsEvalAll","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Question01","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Question02","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Question03","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Question04","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Question05","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Question06","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Question07","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Question08","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Question09","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Question10","text","dsQuestions","question");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EvalRegister.xfdl", function() {
        this.isAllQuestionsAnswered = function() {
            return this.Answer01.value !== undefined &&
                   this.Answer02.value !== undefined &&
                   this.Answer03.value !== undefined &&
                   this.Answer04.value !== undefined &&
                   this.Answer05.value !== undefined &&
                   this.Answer06.value !== undefined &&
                   this.Answer07.value !== undefined &&
                   this.Answer08.value !== undefined &&
                   this.Answer09.value !== undefined &&
                   this.Answer10.value !== undefined;
        };

        this.btnSubmit_onclick = function(obj, e) {

        	var admin_name = nexacro.getApplication().ds_userInfo.getColumn(0, "name");
        	var admin_code = nexacro.getApplication().ds_userInfo.getColumn(0, "emp_code");

            if (this.staErrorMessage) {
                this.staErrorMessage.set_text("");
            } else {
                console.error("staErrorMessage 객체가 정의되지 않았습니다.");
            }

            if (!this.isAllQuestionsAnswered()) {
                alert("모든 질문에 답변해 주세요.");
                return;
            }

            var today = new Date();
            var totalScore = this.calculateTotalScore();
            var evalGrade = "";

            if (totalScore <= 25) {
                evalGrade = "C";
            } else if (totalScore <= 40) {
                evalGrade = "B";
            } else {
                evalGrade = "A";
            }

            for (var i = 0; i < 10; i++) {
                this.dsSave.clearData();
                this.dsSave.addRow();

                var answerId = (i + 1 < 10) ? "Answer0" + (i + 1) : "Answer" + (i + 1);
                var selectedIndex = this[answerId].value;
                var score = this.dsSurvey.getColumn(selectedIndex - 1, "scorecolumn");


                this.dsSave.setColumn(0, "empCode", this.dsEvalAll.getColumn(0, "empCode"));
                this.dsSave.setColumn(0, "guideCode", this.dsQuestions.getColumn(i, "guideCode"));
                this.dsSave.setColumn(0, "score", score);
        		this.dsSave.setColumn(0, "question", this.dsQuestions.getColumn(i, "question"));
                this.dsSave.setColumn(0, "evalDate", today.toISOString().split('T')[0]);
        		this.dsSave.setColumn(0, "admin_name", admin_name);
        		this.dsSave.setColumn(0, "admin_code", admin_code);

                var strSvcID = "insertEval_" + (i + 1);
                var strSvcUrl = "svc::insertEval.do";
                var inData = "dsSave=dsSave";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnSaveEvaluationCallback";
                var isAsync = true;


                this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
            }



            this.dsSave.clearData();
            this.dsSave.addRow();
            this.dsSave.setColumn(0, "empCode", this.dsEvalAll.getColumn(0, "empCode"));
            this.dsSave.setColumn(0, "evalDate", today.toISOString().split('T')[0]);
            this.dsSave.setColumn(0, "totalScore", totalScore);
            this.dsSave.setColumn(0, "evalGrade", evalGrade);
        	this.dsSave.setColumn(0, "admin_name", admin_name);
        	this.dsSave.setColumn(0, "admin_code", admin_code);


            var strSvcIDTotal = "insertEvalTotal";
            var strSvcUrlTotal = "svc::insertEvalTotal.do";
            var inDataTotal = "dsSave=dsSave";
            var outDataTotal = "";
            var strArgTotal = "";
            var callBackFncTotal = "fnSaveEvaluationCallback";
            var isAsyncTotal = true;
            this.transaction(strSvcIDTotal, strSvcUrlTotal, inDataTotal, outDataTotal, strArgTotal, callBackFncTotal, isAsyncTotal);
        };

        this.btnCancel_onclick = function(obj, e) {
            if (confirm("정말로 취소하시겠습니까?")) {
                this.close();
            }
        };

        this.fnSaveEvaluationCallback = function(strSvcID, nErrorCode, strErrorMsg) {
            if (nErrorCode < 0) {
                alert("평가 저장에 실패했습니다.");
                return;
            }

            alert("평가가 성공적으로 저장되었습니다.");
            this.close();
        };

        this.fnQuestionCallback = function(strSvcID, nErrorCode, strErrorMsg) {
            console.log("Transaction Callback 실행됨");
            console.log("Error Code: " + nErrorCode);
            console.log("Error Msg: " + strErrorMsg);

            if (nErrorCode < 0) {
                alert("질문 데이터를 불러오는데 실패했습니다.");
                return;
            }

            var questions = [this.Question01, this.Question02, this.Question03, this.Question04, this.Question05, this.Question06, this.Question07, this.Question08, this.Question09, this.Question10];
            for (var i = 0; i < questions.length; i++) {
                var questionText = this.dsQuestions.getColumn(i, "question");
                questions[i].set_text((i + 1) + ". " + questionText);
                questions[i].set_textAlign("left");
                questions[i].set_padding("10px 10px");
            }

        };

        this.Form_EvalRegister_onload = function(obj, e) {
            var strSvcID = "editRegister";
            var strSvcUrl = "svc::editRegister.do";
            var inData = "";
            var outData = "dsQuestions=dsQuestions";
            var strArg = "";
            var callBackFnc = "fnQuestionCallback";
            var isAsync = true;

            this.transaction(strSvcID, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

            this.dsEvalAll.clearData();
            this.dsEvalAll.addRow();
            this.dsEvalAll.setColumn(0, "empCode", this.parent.empCode);
            this.dsEvalAll.setColumn(0, "name", this.parent.name);
            this.dsEvalAll.setColumn(0, "depName", this.parent.depName);
            this.dsEvalAll.setColumn(0, "assignName", this.parent.assignName);
        };

        this.calculateTotalScore = function() {
            var score = 0;
            var answers = [this.Answer01, this.Answer02, this.Answer03, this.Answer04, this.Answer05, this.Answer06, this.Answer07, this.Answer08, this.Answer09, this.Answer10];

            for (var i = 0; i < answers.length; i++) {
                if (answers[i].value !== undefined) {
                    score += parseInt(this.dsSurvey.getColumn(answers[i].value - 1, "scorecolumn"));
                }
            }

            if (this.staTotalScore) {
                this.staTotalScore.set_text("총점: " + score);
            }
            return score;
        };

        this.Radio00_onitemchanged = function(obj, e) {
            this.calculateTotalScore();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_EvalRegister_onload,this);
            this.Answer01.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question01.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer02.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer03.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer04.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer05.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btnSubmit.addEventHandler("onclick",this.btnSubmit_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.Answer06.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer07.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer08.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer09.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer10.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("Form_EvalRegister.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
