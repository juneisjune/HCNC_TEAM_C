<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }

        h1 {
            text-align:center;
        }

        .container {
            width: 400px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
            margin-top: 100px;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: bold;
        }

        input[type="text"], input[type="password"] {
            width: 370px;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            background-color: #f9f9f9;
            transition: border-color 0.3s ease;
        }
        input[type="text"]:focus, input[type="password"]:focus {
		    border-color: #2980b9;
		    outline: none; 
		}

        button {
            width: 99%;
            padding: 12px;
            font-size: 16px;
            background-color: #2c3e50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #2980b9;
        }

        /* 오류 메시지 스타일 */
        .error-message {
            color: red;
            font-size: 14px;
            margin-bottom: 10px;
            display: none;
        }

        table {
            width: 100%;
            margin-top: 20px;
        }

        td {
            text-align: left;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#loginBtn").click(function () {
                var id = $("#id").val();
                var password = $("#password").val();
                if (id === "") {
                    $(".error-message").text("아이디를 입력해주세요.").show();
                    $("#id").focus();
                    return false;
                } else if (password === "") {
                    $(".error-message").text("비밀번호를 입력해주세요.").show();
                    $("#password").focus();
                    return false;
                }

                $.ajax({
                    type: "POST",
                    data: "id=" + id + "&password=" + password,
                    url: "/login.do",
                    dataType: "text",
                    success: function (result) {
                        if (result === "ok") {
                            location.href = "/viewAuth.do";
                        } else {
                            $(".error-message").text("아이디 또는 비밀번호를 확인하세요.").show();
                        }
                    },
                    error: function (xhr, status, error) {
                        console.log("xhr:", xhr);
                        console.log("status:", status);
                        console.log("error:", error);
                        alert("에러 발생");
                    }
                });
            });
        });
        function showAlerts() {        
            var successMsg = '<c:out value="${successMsg}" />';
            
            if (successMsg) {
                alert(successMsg);
            }
            
        }

        window.onload = showAlerts;
    </script>

</head>
<body>
	<%@ include file="/WEB-INF/jsp/headerToLogin.jsp" %>
    <div class="container">
        <h1>로그인</h1>
        <p class="error-message"></p>
        <form id="login_form" method="post">
            <label for="id">아이디</label>
            <input type="text" id="id" name="id" placeholder="아이디를 입력하세요">

            <label for="password">비밀번호</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요">

            <button type="button" id="loginBtn">로그인</button>
        </form>
    </div>

    <%@ include file="/WEB-INF/jsp/footer.jsp" %>  
</body>
</html>
