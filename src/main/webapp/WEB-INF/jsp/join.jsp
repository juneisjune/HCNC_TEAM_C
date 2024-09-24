<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>회원 가입</title>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
</head>
<body>
	<div class="b-container">
        <h1>회원가입</h1>
        <form id="form_join" action="/user/regUser.do" method="POST">
            <div class="input-group2">
                <label for="id" class="dsplay-inline required"><span>*</span>아이디</label>
                <input type="text" id="id" name="id" class="dsplay-inline" onchange="fn_reset()" required="required">
                <a href="javascript:fn_idCheck();">중복확인</a>
                <span id="idChekMsg" style="margin-left : 147px"></span>
            </div>
           	<div class="input-group2">
                <label for="password" class="input-group2 dsplay-inline required"><span>*</span>비밀번호</label>
                <input type="password" id="password" name="password" class="input-group2 dsplay-inline" required="required">
            </div>
            <div class="input-group2">
                <label for="passwordConfirm" class="input-group2 dsplay-inline required"><span>*</span>비밀번호 확인</label>
                <input type="password" id="passwordConfirm" onchange="fn_passConfirm()" name="passwordConfirm" class="input-group2 dsplay-inline" required="required">
                
                <span id="pwChekMsg" style="margin-left : 147px"></span>
            </div>
            <div class="input-group2">
                <label for="name" class="input-group2 dsplay-inline required"><span>*</span>이름</label>
                <input type="text" id="name" name="name" class="input-group2 dsplay-inline" required="required">
            </div>
            <div class="input-group2">
                <label for="phone" class="input-group2 dsplay-inline required"><span>*</span>전화번호</label>
                <input type="text" id="phone" name="phone" class="input-group2 dsplay-inline" required="required">
            </div>
            <div class="input-group2">
                <label for="email" class="input-group2 dsplay-inline required"><span>*</span>이메일</label>
                <input type="text" id="email" name="email" class="input-group2 dsplay-inline" required="required">
            </div>
            
            <div class="input-group2">
                <label for="address" class="input-group2 dsplay-inline required"><span>*</span>주소</label>
                <input type="text" id="address" name="address" class="input-group2 dsplay-inline" style="width:30%" required="required">
            </div> 
            <div class="input-group2">
                <label for="detailAddress" class="input-group2 dsplay-inline required"><span>*</span>상세주소</label>
                <input type="text" id="detailAddress" name="detailAddress" class="input-group2 dsplay-inline" required="required">
            </div>
                <div class="input-group2">
                <input type="hidden" id="admin" name="admin" class="input-group2 dsplay-inline" value="BSM" readonly>
            </div>
            <div class="btn-group">
            	<button type="submit" id="btn_reg" class="dsplay-inline button wp48"
            	>회원가입</button>
            </div> 
        </form>
    </div>
</body>

<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript">
 
var chekYn = "N";

 //중복체크
fn_idCheck = function(){
	const param = {
		"id" :	$("#id").val()
	};
	const url = "/user/dupIdCheck.do"
	const idChekMsg = document.getElementById('idChekMsg');
	if($("#id").val() == null || $("#id").val() =="" ){
		idChekMsg.textContent = "아이디를 입력해주세요";
		idChekMsg.style.color = "red"; 
		chekYn = "N";
		return;
	}
	console.log(JSON.stringify(param));
	 $.ajax({ 
	     type: "POST",
	     url: url,
	     data: JSON.stringify(param),
	     dataType: "json",
	     contentType: "application/json; charset=utf-8", 
	     success: function (data) {
			if(data.result == "Y"){
				idChekMsg.textContent = "사용 가능한 아이디 입니다.";
				idChekMsg.style.color = "green";
				chekYn = "N";
			} else {
				idChekMsg.textContent = "이미 사용중인 아이디 입니다.";
				idChekMsg.style.color = "red"; 
				chekYn = "N";
			}
			return;
	     },
	     error: function (request, status, error) {
	    	 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	     },
	 });
}
fn_passConfirm = function(){
	var pwd1 = $("password").val();
	var pwd2 = $("passwordConfirm").val();
	
	if(pwd1 != pwd2){
		pwChekMsg.textContent = "비밀번호 재확인이 필요합니다";
		chekYn = "N";
	} else if (pwd1 ==null || pwd2 ==null){
		pwChekMsg.textContent = "비밀번호를 입력해주세요";
		chekYn = "N";
	} else {
		pwChekMsg.textContent = "비밀번호가 일치 합니다";
		chekYn = "Y";
	}
};

if(chekYn =="Y"){
	document.getElementById('#btn_reg').disabled = false;
	document.getElementById('#btn_reg').style.color = blue;
	
}

fn_regButton = function(){
	
}

fn_reset = function (){
	chekYn = "N";
}
var successMessage = "${successMessage}";
if(successMessage !== "") {
    alert(successMessage);
}
 
</script>

</html>  