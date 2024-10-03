<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>게시글 조회 페이지</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
            margin: 0;
            padding: 0;
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

        h1 {
            color: #2c3e50;
            text-align: center;
            font-size: 35px;
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            padding: 12px 15px;
            text-align: center;
            border: 1px solid #ddd;
        }

        th {
            background-color: #34495e;
            color: white;
        }

        td {
            background-color: #ffffff;
        }

        tr:nth-child(even) td {
            background-color: #f9f9f9;
        }

        .btn1 {
            padding: 5px 10px;
            background-color: #ff7f50; /* 귤색 */
            color: white;
            border: none;
            border-radius: 4px;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn1:hover {
            background-color: #e67e22;
        }

        .btn-area {
            text-align: right;
            margin-top: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .container {
                width: 100%;
                padding: 10px;
            }

            h1 {
                font-size: 28px;
            }
        }
    </style>
</head>

<body>
    <%@ include file="/WEB-INF/jsp/header.jsp" %>
    
    <div class="container">
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
                        <td>${post.post_code}</td> <!-- 게시글 번호-->
                        <td>${post.title}</td> <!-- 제목 출력 -->
                        <td>${post.content}</td> <!-- 내용 -->
                        <td>${post.emp_name}</td> <!-- 작성자-->
                        <td>${post.reg_date}</td> <!-- 작성일-->
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
    </div>

    <%@ include file="/WEB-INF/jsp/footer.jsp" %>
</body>
</html>
