<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>로그인 화면</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
</head>

<body>
    <div><!-- class="a-container" -->
        <h1 style= "font-size: 40px;">로그인</h1>
        <form id="form_login" action="/emp/login.do" method="post">
          <div style="margin-bottom: 20px;"> <!-- 일반적으로 입력 그룹에 사용할 수 있는 적절한 간격 -->
    		<label for="id" style="display: block; margin-bottom: 8px; margin-top: 8px; font-size: 24px;">아이디</label>
  			<input 
      			type="text" 
      			id="id" 
      			name="id" 
      			placeholder="ID를 입력하세요"
      			required
      			style="width: 100%; padding: 20px; box-sizing: border-box;"/> <!-- 필드에 적절한 스타일 적용 -->
  
	</div>

            <div > <!-- class="input-group" -->
                <label for="password" style="font-size: 24px;">비밀번호</label>
                <input 
                	type="password" 	
                	id="password" 
                	name="password" 
                	placeholder=" 비밀번호를 입력하세요"
                	required
                	style="width: 100%; padding: 20px; box-sizing: border-box;"
                />
            </div>
            <div style="text-align: right; font-size: 12px;">
    			<a style=" color: #ababab; " href="javascript:alert('아직 미완성');">비밀번호를 잊으셨나요? </a>
			</div>
            <div style="display:flex; justify-content:center;">
    			<input  type = "submit" 
       				class="aButton wp48"
      				style="color: #ffffff; 
      						background-color: black; 
      						text-align:center; 
      						padding: 10px 20px; 
      						display: inline-block;
      						margin-top: 24px;">
       				로그인
   				</input>>
			</div>
			<div style="font-size: 14px; 
            		text-align: center; 
            		color: #ababab; 
            		margin-top: 24px;">
   				 회원이 아니신가요?
    			<a href="javascript:fn_userJoin();">회원가입</a>
			</div>

            </form>
    </div>
</body>

<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer="defer">
 
 
 //로그인
 fn_loingSubmit = function(){
	 let formData = $("#form_login");
	 let arrData = formData.serializeArray();
	 let jsonData = {};
	 for(let i=0; i < arrData.length; i++){
		 jsonData[arrData[i].name] = arrData[i].value;
	 }
	 
	 const url = "/emp/login.do";
	
	 $.ajax({
	     type: 'POST',
	     url: url,
	     data: JSON.stringify(jsonData),
	     dataType: "json",
	     contentType: "application/json; charset=utf-8", 
	     success: function (data) {
	    	if(data.result == null){
	    		alert("아이디이 또는 패스워드를 확인 바랍니다.");
	    		return;
	    	}else{
	    		//추후에 이메일인증 창으로 연결예정
	    		 alert("로그인에 성공했씁니다 들어옴");
	    		location.href = "/emp/payslip.do";
	    	}
	     },
	     error: function (request, status, error) {
	    	 alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	     }
	 });
 }
 
 //회원가입
 fn_userJoin = function(){
	 
 }
 
 </script>

</html>
