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
        .btn1 {
            padding: 5px 10px;
            background-color: gray;
            color: white;
            border: none;
            border-radius: 4px;
            text-decoration: none;
            cursor: pointer;
        }
        .btn1:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>
<%@ include file="/WEB-INF/jsp/header.jsp" %>
    <h1>공지사항 목록</h1>

    <table>
        <thead>
            <tr>
                <th>게시글 코드</th>
                <th>제목</th>
                <th>내용</th>
                <th>작성자 이름</th>
                <th>등록일</th>
                <th>조회수</th>
                <th>상세 조회</th> <!-- 버튼을 위한 열 추가 -->
            </tr>
        </thead>
        <tbody>
            <c:forEach var="post" items="${postList}">
                <tr>
                    <td>${post.post_code}</td>	<!-- 게시글 번호-->
                    <td>${post.title}</td>		<!-- 제목 출력 -->
                    <td>${post.content}</td>	<!-- 내용 -->
                    <td>${post.emp_name}</td>	<!-- 작성자-->
                    <td>${post.reg_date}</td>	<!-- 작성일-->
                    <td>${post.view_count}</td> <!-- 조회수 출력 -->
                    <td>
                        <!-- 상세 조회 버튼 -->
                        <form action="postDetail.do" method="get">
                            <input type="hidden" name="post_code" value="${post.post_code}">
                            <button type="submit" class="btn1">상세 조회</button>
                        </form>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

</body>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>
</html>
