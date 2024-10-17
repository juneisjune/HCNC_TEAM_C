<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>인사 관리 시스템 - 내 정보 보기</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }
        h1, h2 {
            color: #2c3e50;
            text-align: center;
            font-size: 35px;
        }
        .container {
            width: 60%;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            
        }
        table, th, td {
            border: 1px solid #ddd;
            
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #34495e;
            color: white;
            text-align: center;
        }
        .info-box {
            text-align: center;
            padding: 10px;
            font-size: 1.2em;
        }
        .btn-container {
            text-align: center;
            margin: 20px 0;
        }
        .btn {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .btn-primary {
            background-color: #3498db;
            color: white;
        }
        .btn-secondary {
            background-color: #95a5a6;
            color: white;
        }
        .alert {
            color: red;
            font-size: 0.9em;
        }
        /* input 스타일 */
		form input {
		    border: none; /* 테두리 없애기 */
		    font-size: 1.1em; /* 글자 크기 라벨보다는 작게 */
		    font-weight: bold; /* 글씨 굵게 표시 */
		    background-color: #f4f6f9; /* 배경색을 body 색상과 통일 */
		    padding: 8px 10px; /* 입력 박스 안쪽 여백 */
		    width: 98%; /* 너비 100% 설정 (원하는 경우 조정 가능) */
		    border-radius: 4px; /* 약간의 모서리 둥글게 */
		}
		
		form label {
		    font-size: 1.3em; /* 라벨의 글자 크기 */
		    font-weight: normal; /* 라벨은 기본 폰트 굵기 */
		    margin-bottom: 5px; /* 라벨과 input 사이 간격 */
		}
		    </style>
</head>
<body>
<%@ include file="/WEB-INF/jsp/header.jsp" %>
    <div class="container">
        <h1>내 정보</h1>
        
        <form:form method="post" modelAttribute="employee">
            <table>
                <tr>
                    <th colspan="2">정보</th>
                </tr>
                <tr>
                    <th>사번</th>
                    <td><form:input path="empCode" readonly="true" /></td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td><form:input path="name" readonly="true" /></td>
                </tr>
                
                <tr>
                    <th>부서</th>
                    <td><form:input path="depName" readonly="true" /></td>
                </tr>
                <tr>
                    <th>직책</th>
                    <td><form:input path="assignName" readonly="true" /></td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td><form:input path="gender" readonly="true" /></td>
                </tr>
                
                <tr>
                    <th>이메일</th>
                    <td><form:input path="email" readonly="true" /></td>
                </tr>
                <tr>
                    <th>입사일</th>
                    <td><form:input path="joinDate" readonly="true" /></td>
                </tr>
                <tr>
                    <th>생년월일</th>
                    <td><form:input path="birth" readonly="true" /></td>
                </tr>
                
                <tr>
                    <th>전화번호</th>
                    <td><form:input path="phone" readonly="true" /></td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td><form:input path="address" readonly="true" /></td>
                </tr>
                
                
                
            </table>
        </form:form>
        
        <div class="btn-container">
            <p class="alert">정보가 잘못된 경우 관리자에게 문의하세요.</p>
        </div>
    </div>
</body>
</html>
