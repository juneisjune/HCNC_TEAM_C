<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인 2단계 인증</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
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
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
            text-align: left; /* 왼쪽 정렬 */
        }

        input[type="text"], button {
            width: 90%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            background-color: #f9f9f9;
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus {
            border-color: #2980b9;
            outline: none; 
        }

        button {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            background-color: #2c3e50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:disabled {
		    background-color: #2980b9; 
		    color: #a9a9a9; 
		    cursor: not-allowed; 
		    opacity: 0.6; 
		}

        button:hover {
            background-color: #2980b9;
        }

        /* 라벨과 입력 박스 정렬을 위한 그룹화 */
        .form-group {
            margin-bottom: 20px;
        }

        .button-group {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
        }

        .button-group button {
            width: 96%;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#numBtn").click(function () {
                var email = $("#email").val();
                document.getElementById("numBtn").disabled = true; //버튼 비활성화
                document.getElementById("numBtn").innerText = "인증번호 전송중 ";
                $.ajax({
                    type: "POST",
                    data: { email: email },
                    url: "/auth.do",
                    dataType: "json",
                    success: function (result) {
                        console.log(result);
                        if (result.msg === "ok") {
                            alert("인증 이메일이 전송되었습니다.");
                            document.getElementById("numBtn").innerText = "인증번호 확인중 ";
                            var hiddenAuthKey = $("#hiddenAuthKey");
                            hiddenAuthKey.val(result.authKey);
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

            $("#authBtn").click(function () {
                var authNum = $("#authNum").val();
                console.log("authNum : " + authNum);

                if (authNum === "") {
                    alert("인증번호를 입력해주세요.");
                    $("#authNum").focus();
                    return false;
                }

                var authKey = $("#hiddenAuthKey").val();
                console.log("authKey : " + authKey);

                if (authNum === authKey) {
                    alert("로그인을 환영합니다.");
                    location.href = "/pay/searchPay.do";
                } else {
                    alert("인증번호가 일치하지 않습니다.");
                }
            });
        });
    </script>
</head>
<body>
	<%@ include file="/WEB-INF/jsp/headerToLogin.jsp" %>
    <div class="container">
        <h1>로그인 2단계 인증</h1>
        <form id="auth_form" method="post">
            <input type="hidden" id="hiddenAuthKey">
            <input type="hidden" value="${email}" id="email">
            
            <div class="form-group">
                <label for="email">이메일</label>
                <input type="text" value="${markedEmail}" disabled>
            </div>

            <div class="button-group">
                <button type="button" id="numBtn">인증번호 전송</button>
            </div>

            <div class="form-group">
                <label for="authNum">인증번호</label>
                <input type="text" id="authNum" name="authNum">
            </div>

            <div class="button-group">
                <button type="button" id="authBtn">인증하기</button>
            </div>
        </form>
    </div>
        <%@ include file="/WEB-INF/jsp/footer.jsp" %>
</body>
</html>
