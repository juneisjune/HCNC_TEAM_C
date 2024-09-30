<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <title>직원 근태 목록</title>
    <style>
    	table {
            width: 800px;
            border-collapse: collapse;
            margin-bottom : 30px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        h1, form, input {
            text-align: center;
        }
        select, input[type="text"], input[type="date"], button {
            margin: 5px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
<%@ include file="/WEB-INF/jsp/header.jsp" %>   
    <h1>직원 근태 목록</h1> <br>
    
    <form action="/atten/searchAtten.do" method="post">
   		<select name="WORK_TYPE">
            <option value="ALL">전체</option>
            <option value="ON">출근</option>
            <option value="OFF">결근</option>
            <option value="HOLI">휴가</option>
        </select>
        <input type="date" name="START_DATE"/>
        ~
        <input type="date" name="END_DATE"/>
        <button type="submit">검색</button>
    </form>
    <br>

    <table>
        <thead>
            <tr>
                <th>사번</th>
                <th>이름</th>
                <th>근무 일자</th>
                <th>근무 형태</th>
                <th>출근 시간</th>
                <th>퇴근 시간</th>
                <th>초과 근무 시간</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${attenList}" var="atten">
                <tr>
                    <td>${atten.empCode}</td>
                    <td>${atten.name}</td>
                    <td>${atten.workDate}</td>
                    <td>${atten.attenType}</td>
                    <td>${atten.workStart}</td>
                    <td>${atten.workEnd}</td>
                    <td>${atten.workOver}시간</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>       
</body>
</html>
