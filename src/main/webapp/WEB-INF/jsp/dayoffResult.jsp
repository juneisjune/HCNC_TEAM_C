<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<meta charset="UTF-8">
	<title>신청 내역 조회</title>
	<style>
		table {
            width: 1100px;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: center;  
        }

        th {
            background-color: #eee;
            border: 1px solid #ccc;
        }
        caption {
            margin-bottom: 30px;
        }
        input {
            text-align: center;
        }
        input[type="text"], select, button {
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

        .result tr, .result td {
            border: 1px solid #ccc;
        }
      
        .result td {
            font-size: 12px;
            text-align: center;
        }
        .requestList {
            font-weight: bold;
        }
	</style>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript">
	$(function() {
	    // 현재 날짜를 기준으로 endYear, endMonth 설정
	    var today = new Date();
	    var currentYear = today.getFullYear();
	    var currentMonth = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함

	    // endYear와 endMonth 초기값 설정
	    $("#endYear").val(currentYear);
	    $("#endMonth").val(currentMonth);

	    // 조회 버튼 클릭 이벤트
	    $("#searchBtn").click(function() {
	        var startYear = parseInt($("#startYear").val());
	        var startMonth = parseInt($("#startMonth").val());
	        var endYear = parseInt($("#endYear").val());
	        var endMonth = parseInt($("#endMonth").val());

	        // 날짜 검증: start가 end보다 크면 경고 메시지 표시
	        if (startYear > endYear || (startYear === endYear && startMonth > endMonth)) {
	            alert("날짜가 잘못됐습니다. 시작 날짜는 종료 날짜보다 이전이어야 합니다.");
	            return; // 잘못된 입력이므로 조회를 중단함
	        }

	        // Ajax 요청 
	        $.ajax({
	            type: "POST",
	            data: "startYear=" + startYear + "&startMonth=" + startMonth + "&endYear=" + endYear + "&endMonth=" + endMonth,
	            url: "/dayoff/requestListSearch.do",
	            dataType: "json",
	            success: function(result) {
	                console.log(result);
	                if (result.msg === "ok") {
	                    var requestList = result.requestList;
	                    var requestListBody = $("#requestListBody");
	                    requestListBody.empty(); // 기존 데이터를 초기화

	                    $.each(requestList, function(index, item) {
	                        var row = "<tr>"
	                            + "<td>" + item.name + "</td>"
	                            + "<td>" + item.empCode + "</td>"
	                            + "<td>" + item.depName + "</td>"
	                            + "<td>" + item.startDate + "</td>"
	                            + "<td>" + item.endDate + "</td>"
	                            + "<td>" + item.offType + "</td>"
	                            + "<td>" + item.reason + "</td>"
	                            + "<td>" + item.mngConfirm + "</td>"
	                            + "<td>" + item.mdConfirm + "</td>"
	                            + "<td>" + item.ceoConfirm + "</td>"
	                            + "<td>" + item.offResult + "</td>"
	                            + "</tr>";

	                        requestListBody.append(row);  // 테이블에 행 추가
	                    });

	                    alert("조회가 완료되었습니다.");
	                } else {
	                    alert("에러 발생: " + result.msg);
	                }
	            },
	            error: function(xhr, status, error) {
	                console.log("xhr:", xhr);
	                console.log("status:", status);
	                console.log("error:", error);
	                alert("에러 발생");
	            }
	        });
	    });
	});
	</script>
</head>
  	
<body>
 	<%@ include file="/WEB-INF/jsp/header.jsp" %>  

	<div class="container">
		<form id="searchForm" method="post">
	        <table >
	            <caption><h1>휴가 신청 내역</h1></caption>
	            <tr>
	                <td>
	                    사번
	                    <input type="text" id="empCode" name="empCode" value="${emp.empCode}" disabled>
	                </td>
	                <td>
	                    이름
	                    <input type="text" id="empName" name="empName" value="${emp.name}" disabled>
	                </td>
	                <td>
	                    부서명
	                    <input type="text" id="depName" name="depName" value="${emp.depName}" disabled>
	                </td>
	                <td>
	                    직책 
	                    <input type="text" id="assignName" name="assignName" value="${emp.assignName}" disabled>
	                </td>    
	            </tr>
	            <tr>
	                <td colspan="4" >
	                    기간 선택
	                    <select id="startYear">
	                        <option value="2022">2022</option>
	                        <option value="2023">2023</option>
	                        <option value="2024">2024</option>
	                    </select>
	                    년 &nbsp;
	                    <select id="startMonth">
	                        <option value="1">1</option>
	                        <option value="2">2</option>
	                        <option value="3">3</option>
	                        <option value="4">4</option>
	                        <option value="5">5</option>
	                        <option value="6">6</option>
	                        <option value="7">7</option>
	                        <option value="8">8</option>
	                        <option value="9">9</option>
	                        <option value="10">10</option>
	                        <option value="11">11</option>
	                        <option value="12">12</option>
	                    </select>
	                    월 &nbsp; ~ <select id="endYear">
	                        <option value="2022">2022</option>
	                        <option value="2023">2023</option>
	                        <option value="2024">2024</option>            
	                    </select>
	                    년 &nbsp;
	                    <select id="endMonth">
	                        <option value="1">1</option>
	                        <option value="2">2</option>
	                        <option value="3">3</option>
	                        <option value="4">4</option>
	                        <option value="5">5</option>
	                        <option value="6">6</option>
	                        <option value="7">7</option>
	                        <option value="8">8</option>
	                        <option value="9">9</option>
	                        <option value="10">10</option>
	                        <option value="11">11</option>
	                        <option value="12">12</option>
	                    </select> 
	                    월 &nbsp;
	                    <button id="searchBtn" type="button" >신청내역 조회</button>
	                </td>
	             </tr>   
	       </table>
	    </form>
	   

        <table class="result">
            <tr>
                <th colspan="11">월별 신청내역</th>
            </tr>
            <tr class="requestList">
                <td>이름</td>
                <td>사번</td>
                <td>부서명</td>
                <td>연차시작일</td>
                <td>연차종료일</td>
                <td>연차사유</td>
                <td>상세사유</td>
                <td>부서장결재</td>
                <td>이사결재</td>
                <td>대표결재</td>
                <td>결  과</td>
            </tr>
            <tbody id="requestListBody">
	            <c:if test="${not empty requestList}">
		            <c:forEach var="request" items="${requestList}" > 
			            <tr>
			                <td>${request.name}</td> 
			                <td>${request.empCode}</td>
                            <td>${request.depName}</td>
                            <td><fmt:formatDate value="${request.startDate}" pattern="yyyy-MM-dd"/></td>
                            <td><fmt:formatDate value="${request.endDate}" pattern="yyyy-MM-dd"/></td>
                            <td>${request.offType}</td>
                            <td>${request.reason}</td>
                            <td>${request.mngConfirm}</td>
                            <td>${request.mdConfirm}</td>
                            <td>${request.ceoConfirm}</td>
                            <td>${request.offResult}</td>
                            
			            </tr>
		            </c:forEach>
		          </c:if>
			</tbody>


  
	     </table>
	

    </div> <!-- container -->
<%@ include file="/WEB-INF/jsp/footer.jsp" %>   	
</body>
</html>