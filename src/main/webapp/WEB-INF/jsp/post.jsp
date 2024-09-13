<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>게시글 조회 페이지</title>
    <style>
    	table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
    
		

</head>
<%@ include file="/WEB-INF/jsp/header.jsp" %>
<body>
    <h1>공지사항 목록</h1>

    <table>
        <thead>
            <tr>
                <th>게시글 코드</th>
                <th>제목</th>
                <th>내용</th>
                <th>작성자 이름</th>
                
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
    <c:forEach var="post" items="${postList}">
        <tr>
            <td><a href="postDetail.do?post_code=${post.post_code}">${post.post_code}</a></td>
            <td>${post.title}</td>
            <td>${post.content}</td>
            <td>${post.emp_name}</td>
            <td>${post.reg_date}</td>
        </tr>
    </c:forEach>
</tbody>

    </table>

</body>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>
</html>
