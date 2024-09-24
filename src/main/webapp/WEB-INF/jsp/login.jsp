<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>로그인</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
</head>

<body>
	
    <div class="a-container">
        <h1>로그인</h1>
        <form id="form_login" action="/user/userLogin.do" method="post">
            <div class="input-group">
                <label for="id">아이디</label>
                <input type="text" id="id" name="id" required="required">
            </div>
            <div class="input-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password" required="required">
            </div>
            <div class="btn-group" style="display:flex">
            	<button type="submit" class="aButton wp48">로그인</button>
            	<button type="button" onclick="registerbtn()" class="aButton wp48">회원가입</button>
            </div> 
        </form>
    </div>
</body>

<script type="text/javaScript" language="javascript">


registerbtn = function (){
	location.href="/user/register.do"
}


 
</script>

</html>
