<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>직원 목록 조회</title>
</head>
<body>
   <%@include file="/WEB-INF/jsp/header.jsp" %>
    <h2>직원 목록 조회</h2>

    <form action="/employee/searchEmployee.do" method="post">
        <select name="searchType">
         
            <option value="depName">부서</option>
            <option value="assignName">직책</option>
            <option value="name">이름</option>
        </select>
        <input type="text" name="searchWord" placeholder="검색어를 입력하세요"/>
        <button type="submit">조회</button>
    </form>

 
    <table border="1">
        <thead>
            <tr>
                <th>사번</th>
                <th>부서</th>
                <th>직책</th>
                <th>이름</th>
                <th>입사일</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>전화번호</th>
                <th>주소</th>
                <th>이메일</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="employee" items="${employeeData}">
                <tr>
                    <td>${employee.empCode}</td>                
                    <td>${employee.depName}</td>
                    <td>${employee.assignName}</td>
                    <td>${employee.name}</td>
                    <td>${employee.joinDate}</td>
                    <td>${employee.birth}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.address}</td>
                    <td>${employee.email}</td>
                </tr>
            </c:forEach>


            <c:if test="${empty employeeData}">
                <tr>
                    <td colspan="8">검색된 직원이 없습니다.</td>
                </tr>
            </c:if>
        </tbody>
    </table>
   <%@ include file="/WEB-INF/jsp/footer.jsp" %>
</body>
</html>
