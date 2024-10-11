<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title>직원 목록 조회</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            font-size: 35px;
        }
        .container {
            width: 90%;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 30px;
        }
        form {
        	text-align: center;
            margin-bottom: 20px;
        }
        select, input[type="text"] {
            padding: 8px;
            margin-right: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
            width: 200px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #ff7f50; /* 귤색 */
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #e67e22;
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
            padding: 12px 15px;
            text-align: left;
        }
        th {
            background-color: #34495e;
            color: white;
        }
        td {
            background-color: #ffffff;
        }
        tr:nth-child(even) td {
            background-color: #f4f6f9;
        }
        .no-results {
            text-align: center;
            color: #e74c3c;
            font-size: 1.1em;
        }
    </style>
</head>
<body>
    <%@ include file="/WEB-INF/jsp/header.jsp" %>

    <div class="container">
        <h1>직원 목록 조회</h1>

        <form action="/employee/searchEmployee.do" method="post">
            <select name="searchType">
            	<option value="All">전체</option>
             	<option value="name">이름</option>
                <option value="depName">부서</option>
                <option value="assignName">직책</option>
               
            </select>
            <input type="text" name="searchWord" placeholder="검색어를 입력하세요" />
            <button type="submit">조회</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>사번</th>
                    <th>이름</th>
                    <th>부서</th>
                    <th>직책</th>
                    <th>성별</th>
                    <th>입사일</th>
                    <th>생년월일</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="employee" items="${employeeData}">
                    <tr>
                        <td>${employee.empCode}</td>
                        <td>${employee.name}</td>
                        <td>${employee.depName}</td>
                        <td>${employee.assignName}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.joinDate}</td>
                        <td>${employee.birth}</td>
                        <td>${employee.phone}</td>
                        <td>${employee.address}</td>
                        <td>${employee.email}</td>
                    </tr>
                </c:forEach>

                <c:if test="${empty employeeData}">
                    <tr>
                        <td colspan="10" class="no-results">검색된 직원이 없습니다.</td>
                    </tr>
                </c:if>
            </tbody>
        </table>
    </div>

    <%@ include file="/WEB-INF/jsp/footer.jsp" %>
</body>
</html>
