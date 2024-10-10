(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_EvalDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvaluation", this);
            obj._setContents("<ColumnInfo><Column id=\"empCode\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"evalDate\" type=\"DATE\" size=\"256\"/><Column id=\"totalScore\" type=\"INT\" size=\"256\"/><Column id=\"evalGrade\" type=\"STRING\" size=\"256\"/><Column id=\"regName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/><Column id=\"scorecolumn\" type=\"INT\" size=\"256\"/><Column id=\"question\" type=\"STRING\" size=\"256\"/><Column id=\"guideCode\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"scorecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"scorecolumn\">4</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"scorecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"scorecolumn\">2</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"scorecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdEvalInfo","10","80","750","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsEvaluation");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"124\"/><Column size=\"124\"/><Column size=\"128\"/><Column size=\"124\"/><Column size=\"124\"/><Column size=\"124\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"직원 ID\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"평가일자\"/><Cell col=\"3\" text=\"점수\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"평가자\"/></Band><Band id=\"body\"><Cell text=\"bind:empCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:evalDate\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:totalScore\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:evalGrade\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:regName\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","20","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("평가 정보");
            obj.set_font("bold 24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","145","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("질문 목록");
            obj.set_font("bold 24px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","680","1730","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Question01","10","190","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer01","10","240","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer01_innerdataset = new nexacro.NormalDataset("Answer01_innerdataset", obj);
            Answer01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer01_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question02","10","345","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer02","10","395","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer02_innerdataset = new nexacro.NormalDataset("Answer02_innerdataset", obj);
            Answer02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer02_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question03","10","500","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer03","10","550","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer03_innerdataset = new nexacro.NormalDataset("Answer03_innerdataset", obj);
            Answer03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer03_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question04","10","655","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer04","10","705","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer04_innerdataset = new nexacro.NormalDataset("Answer04_innerdataset", obj);
            Answer04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer04_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question05","10","810","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer05","10","860","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer05_innerdataset = new nexacro.NormalDataset("Answer05_innerdataset", obj);
            Answer05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer05_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question06","10","965","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer06","10","1015","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer06_innerdataset = new nexacro.NormalDataset("Answer06_innerdataset", obj);
            Answer06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer06_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question07","10","1120","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer07","10","1170","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer07_innerdataset = new nexacro.NormalDataset("Answer07_innerdataset", obj);
            Answer07_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer07_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer08","10","1325","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer08_innerdataset = new nexacro.NormalDataset("Answer08_innerdataset", obj);
            Answer08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer08_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question08","10","1275","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer09","10","1480","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer09_innerdataset = new nexacro.NormalDataset("Answer09_innerdataset", obj);
            Answer09_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer09_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question09","10","1430","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("Answer10","10","1635","250","90",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var Answer10_innerdataset = new nexacro.NormalDataset("Answer10_innerdataset", obj);
            Answer10_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row></Rows>");
            obj.set_innerdataset(Answer10_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Question10","10","1585","750","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",780,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grdEvalInfo","binddataset","dsEvaluation","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Answer01","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Answer02","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Answer03","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Answer04","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Answer05","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Answer06","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Answer07","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Answer08","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Answer09","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Answer10","innerdataset","dsSurvey","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Question01","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Question02","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Question03","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Question04","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Question05","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Question06","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Question07","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Question08","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Question09","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Question10","text","dsSurvey","question");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EvalDetail.xfdl", function() {
        this.Form_EvalDetail_onload = function(obj, e) {
            // 평가 정보 초기화
            this.dsEvaluation.clearData();
            this.dsEvaluation.addRow();
            this.dsEvaluation.setColumn(0, "empCode", this.parent.empCode);
            this.dsEvaluation.setColumn(0, "name", this.parent.name);
            this.dsEvaluation.setColumn(0, "evalDate", this.parent.evalDate);
            this.dsEvaluation.setColumn(0, "totalScore", this.parent.totalScore);
            this.dsEvaluation.setColumn(0, "evalGrade", this.parent.evalGrade);
            this.dsEvaluation.setColumn(0, "guideCode", this.parent.guideCode);
            this.dsEvaluation.setColumn(0, "regName", this.parent.regName);

            console.log(this.dsEvaluation.saveXML()); // 평가 데이터 로그

            // 평가 점수를 불러오기 위한 트랜잭션
            var strSvcIDEval = "getQuestions";
            var strSvcUrlEval = "svc::getQuestions.do";
            var inDataEval = "dsEvaluation=dsEvaluation";
            var outDataEval = "dsSurvey=dsSurvey";
            var strArgEval = "empCode=" + nexacro.wrapQuote(this.dsEvaluation.getColumn(0, "empCode")) +
                         " guideCode=" + nexacro.wrapQuote(this.dsEvaluation.getColumn(0, "guideCode")) +
                         " evalDate=" + nexacro.wrapQuote(this.dsEvaluation.getColumn(0, "evalDate"));
            var callBackFncEval = "fnEvalScoreCallback"; // 평가 점수를 불러온 후 라디오 버튼에 표시
            var isAsyncEval = true;

            this.transaction(strSvcIDEval, strSvcUrlEval, inDataEval, outDataEval, strArgEval, callBackFncEval, isAsyncEval);
        };

        // 평가 점수를 받아오는 콜백 함수
        this.fnEvalScoreCallback = function(strSvcID, nErrorCode, strErrorMsg) {

        	if (nErrorCode < 0) {
                alert("질문 데이터를 불러오는데 실패했습니다.");
                return;
            }

            var questions = [this.Question01, this.Question02, this.Question03, this.Question04, this.Question05,
                             this.Question06, this.Question07, this.Question08, this.Question09, this.Question10];

            for (var i = 0; i < questions.length; i++) {
                var questionText = this.dsSurvey.getColumn(i, "question");
                questions[i].set_text((i + 1) + ". " + questionText);
                questions[i].set_textAlign("left");
                questions[i].set_padding("10px 10px");
            }

            if (nErrorCode < 0) {
                alert("평가 점수를 불러오는데 실패했습니다.");
                return;
            };

            var answers = [this.Answer01, this.Answer02, this.Answer03, this.Answer04, this.Answer05,
                           this.Answer06, this.Answer07, this.Answer08, this.Answer09, this.Answer10];

            for (var i = 0; i < answers.length; i++) {
                var selectedValue = this.dsSurvey.getColumn(i, "score");
                if (selectedValue !== undefined && selectedValue !== null) {
                    // 점수를 반대로 변환 (1 -> 5, 5 -> 1)
                    var invertedScore = 6 - selectedValue;
                    answers[i].set_value(invertedScore);
                } else {
                    console.error("Score 값이 존재하지 않습니다. Index: " + i);
                }
            }
        };


        // 닫기 버튼
        this.btnClose_onclick = function(obj, e) {
            this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_EvalDetail_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Question01.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer01.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question02.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer02.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question03.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer03.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question04.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer04.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question05.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer05.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question06.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer06.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question07.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer07.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Answer08.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question08.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer09.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question09.addEventHandler("onclick",this.Question01_onclick,this);
            this.Answer10.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Question10.addEventHandler("onclick",this.Question01_onclick,this);
            this.dsEvaluation.addEventHandler("onload",this.dsEvaluation_onload,this);
        };
        this.loadIncludeScript("Form_EvalDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
