<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <title>직원 근태 목록</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-top: 20px;
        }
        .container {
            width: 80%;
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
        select, input[type="text"], input[type="date"], button {
            padding: 8px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
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
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 12px 15px;
            text-align: center;
        }
        th {
            background-color: #34495e;
            color: white;
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
        <h1>직원 근태 목록</h1>

        <form action="/atten/searchAtten.do" method="post">
            <select name="SEARCH_TYPE">
                <option value="ALL">전체</option>
                <option value="NAME">이름</option>
                <option value="WORK_TYPE">근무 형태</option>
            </select>
            <input type="text" name="SEARCH_WORD" placeholder="검색어 입력" />
            <input type="date" name="START_DATE" />
            ~
            <input type="date" name="END_DATE" />
            <button type="submit">검색</button>
        </form>

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
                        <td>${atten.workOver} 시간</td>
                    </tr>
                </c:forEach>

                <c:if test="${empty attenList}">
                    <tr>
                        <td colspan="7" class="no-results">검색된 근태 기록이 없습니다.</td>
                    </tr>
                </c:if>
            </tbody>
        </table>
    </div>

<%@ include file="/WEB-INF/jsp/footer.jsp" %>       
</body>
</html>
