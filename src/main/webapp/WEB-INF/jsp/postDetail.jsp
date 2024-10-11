<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>공지사항 상세 페이지</title>
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

        .detail-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border: 1px solid #ddd;
        }

        .detail-table th, .detail-table td {
            padding: 12px 15px;
            border: 1px solid #ddd;
            text-align: left;
        }

        .detail-table th {
            background-color: #34495e;
            color: white;
        }

        .detail-table td {
            background-color: #ffffff;
        }

        .content-area {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
        }

        .btn-area {
            text-align: right;
            margin-top: 20px;
        }

        .btn-area a {
            padding: 10px 20px;
            background-color: #ff7f50; /* 귤색 */
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .btn-area a:hover {
            background-color: #e67e22;
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
<%@ include file="/WEB-INF/jsp/header.jsp" %>
<body>
    <div class="container">
        <h1>공지사항</h1>

        <table class="detail-table">
            <tr>
                <th>제목</th>
                <td>${postDetail.title}</td>
                <th>조회수</th>
                <td>${postDetail.view_count}</td>
            </tr>
            <tr>
                <th>작성일자</th>
                <td>${postDetail.reg_date}</td>
                <th>작성자</th>
                <td>${postDetail.name}</td>
            </tr>
            <tr>
                <th>첨부파일</th>
                <td colspan="3">
                    <c:choose>
                        <c:when test="${not empty attachments}">
                            <ul>
                                <c:forEach var="file" items="${attachments}">
                                    <li>
                                        <a href="/post/downloadAttachment.do?attach_code=${file.attach_code}">
                                            ${file.attach_name} 
                                        </a>
                                    </li>
                                </c:forEach>
                            </ul>
                        </c:when>
                        <c:otherwise>
                            없음
                        </c:otherwise>
                    </c:choose>
                </td>
            </tr>
        </table>

        <div class="content-area">
            <c:out value="${postDetail.content}" escapeXml="false" />
        </div>

        <div class="btn-area">
            <a href="/post/viewPost.do">돌아가기</a>
        </div>
    </div>
</body>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>
</html>
