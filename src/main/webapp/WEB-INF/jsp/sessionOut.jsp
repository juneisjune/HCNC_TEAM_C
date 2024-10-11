<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


</body>

<script>
document.addEventListener("DOMContentLoaded", function(){
	
	alert("세션이 만료 되었습니다. 재로그인 바랍니다.");
	location.href="/login.do";
})

</script>
</html>