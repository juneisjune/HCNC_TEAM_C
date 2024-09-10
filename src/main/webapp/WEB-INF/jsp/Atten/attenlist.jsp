<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>직원 근태 목록</title>
</head>
<body>
    <h1>직원 근태 목록</h1>
    <form action="/atten/searchAtten.do" method="post">
    <select name="SEARCH_TYPE">
            <option value="ALL">전체</option>
            <option value="NAME">이름</option>
            <option value="WORK_TYPE">근무 형태</option>
        </select>
        <input type="text" name="SEARCH_WORD" placeholder="Search"/>
        <input type="date" name="START_DATE"/>
        ~
        <input type="date" name="END_DATE"/>
        <button type="submit">검색</button>
    </form>

    <table border="1">
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
                    <td>${atten.workOver}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</body>
</html>
