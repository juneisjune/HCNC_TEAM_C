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
    	
    	input[type="text"],  button {
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
			$("#numBtn").click(function() {
				var email = $("#email").val();		
				
				$.ajax({
					type : "POST",
					data : { email: email },
					url : "/auth.do",
					dataType : "json",
					
					
					success : function(result){
						console.log(result);
						
						if(result.msg === "ok") {
							alert("인증 이메일이 전송되었습니다.");
							
							var hiddenAuthKey = $("#hiddenAuthKey");
							hiddenAuthKey.val(result.authKey);
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
			
			
			$("#authBtn").click(function() {
				var authNum = $("#authNum").val();	
				console.log("autoNum : " + authNum);
				
				 if(authNum == "") {
			            alert("인증번호를 입력해주세요.");
			            $("#authNum").focus();
			            return false;
			     }
				
				var authKey = $("#hiddenAuthKey").val();
				console.log("authKey : " + authKey);
				
				if(authNum === authKey) {
					alert("로그인을 환영합니다.");
					location.href="/pay/searchPay.do";
				} else {
					alert("인증번호가 일치하지않습니다.");
				}		
				
			});
			
			
			
		});
		
</script>
</head>
<body>
 	<%@ include file="/WEB-INF/jsp/header.jsp" %> 
    <form id="auth_form" method="post">
    <input type="text" id="hiddenAuthKey" >
    <input type="hidden" value="${email}" id="email" >
        <table>
            <caption><h1>로그인 2단계 인증</h1></caption>
            <tr>
                 <th>이메일</th>
                 <td><input type="text" value="${markedEmail}" disabled ></td>
                 <td><button type="button" id="numBtn">인증번호 전송</button></td>
            </tr>
            <tr>
                 <th><label for="authNum">인증번호</label></th>
                 <td><input type="text" id="authNum" name="authNum"></td>
                 <td><button type="button" id="authBtn">인증하기</button></td>
            </tr>
            <tr> 
                <th colspan="2">
                    <br> 
                    
                </th>
            </tr>
        </table>    
     </form>    
<%@ include file="/WEB-INF/jsp/footer.jsp" %>           
</body>
</html>