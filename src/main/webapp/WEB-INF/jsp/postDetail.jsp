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
            margin: 0 auto;
            max-width: 1200px;
            padding: 20px;
        }

        h1 {
            font-size: 24px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
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
            background-color: #f9f9f9;
            font-weight: bold;
        }

        .content-area {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
        }

        .meta-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .meta-info div {
            margin-right: 10px;
        }

        .meta-info th, .meta-info td {
            border: none;
        }

        .meta-info th {
            width: 80px;
            text-align: right;
        }

        .btn-area {
            text-align: right;
            margin-top: 20px;
        }

        .btn-area a {
            padding: 10px 20px;
            background-color: gray;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }

        .btn-area a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<%@ include file="/WEB-INF/jsp/header.jsp" %>
<body>
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
        ${postDetail.content}
    </div>

    <div class="btn-area">
        <a href="/post/viewPost.do">목록으로 돌아가기</a>
    </div>
</body>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>
</html>
