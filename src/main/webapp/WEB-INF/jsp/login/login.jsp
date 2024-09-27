<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인</title>
    <style>
    	caption {
    		margin-bottom : 20px;
    	}
    	
    	input[type="text"], input[type="password"],  button {
            margin: 5px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;         
        }
        td {
        	text-align : center;
        }
        
         button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript">
		$(function() {
			$("#loginBtn").click(function() {
				var id = $("#id").val();
				var password = $("#password").val();
				if(id == "") {
					alert("아이디를 입력해주세요.");
					$("#id").focus();
					return false;
				} else if (password == "") {
					alert("비밀번호를 입력해주세요.");
					$("#password").focus();
					return false;
				}
				
				
				$.ajax({
					type : "POST",
					data : "id="+id+"&password="+password,
					url : "/login.do",
					dataType : "text",
					
					
					success : function(result){
						if(result == "ok") {
							location.href = "/viewAuth.do";
							
						} else {
							alert("아이디 또는 비밀번호를 확인하세요.");
						}
					},
					error : function(xhr, status, error) {
						console.log("xhr:", xhr);
		                console.log("status:", status);
		                console.log("error:", error);
		                alert("에러발생");
					}
				})
				
				
			});
			
			
			
		});
</script>
</head>
<body>
 	<%@ include file="/WEB-INF/jsp/header.jsp" %> 
    <form id="login_form" method="post">
        <table>
            <caption><h1>로그인</h1></caption>
            <tr>
                 <th><label for="id">아이디</label></th>
                 <td><input type="text" id="id" name="id" ></td>
            </tr>
            <tr>
                 <th><label for="password">비밀번호</label></th>
                 <td><input type="password" id="password" name="password"></td>
            </tr>
            <tr> 
                <th colspan="2">
                    <br> 
                    <button type="button" id="loginBtn">로그인</button>
                </th>
            </tr>
        </table>    
     </form>    
<%@ include file="/WEB-INF/jsp/footer.jsp" %>           
</body>
<script>
function showAlerts() {        
    var successMsg = '<c:out value="${successMsg}" />';
    
    if (successMsg) {
        alert(successMsg);
    }
    
}

window.onload = showAlerts;
</script>
</html>