<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>신청 내역 조회</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9; /* 마이페이지와 동일한 배경색 */
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 7px 8px;
            text-align: center;
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

        input[type="text"], button {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 100px;
            background-color: #F0F0F0;
        }
        select {
        	width: 100px;
        	padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        

        button {
            padding: 10px 20px;
            font-size: 16px;
            width: 72px;
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

        .result tr, .result td {
            border: 1px solid #ddd;
        }

        .requestList {
            font-weight: bold;
        }
    </style>
</head>
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
    $("#searchBtn").click();
});

//년도,월을 현재기준 3개년 보는 스크립트
document.addEventListener("DOMContentLoaded", function() {
       // 현재 연도 가져오기
       var today = new Date();
       var currentYear = today.getFullYear();

       // 시작 연도는 2년 전부터 현재 연도까지
       var startYear = currentYear - 2;

       // startYear와 endYear select 요소 가져오기
       var startYearSelect = document.getElementById("startYear");
       var endYearSelect = document.getElementById("endYear");
       
       var startMonthSelect = document.getElementById("startMonth");
       var endMonthSelect = document.getElementById("endMonth");

       //연도 옵션 추가
       for (var year = startYear; year <= currentYear; year++) {
           var option = document.createElement("option");
           option.value = year;
           option.text = year;
           startYearSelect.appendChild(option);
           
           var endOption = document.createElement("option");
           endOption.value = year;
           endOption.text = year;
           endYearSelect.appendChild(endOption);
       }
       
       // 월 옵션 추가
       for (var month = 1; month <=12; month++){
       	var option = document.createElement("option");
       	option.value = month;
       	option.text = month;
       	startMonthSelect.appendChild(option);
       	
       	var endOption = document.createElement("option");
       	endOption.value = month;
       	endOption.text = month;
       	endMonthSelect.appendChild(endOption);
       	
       }
	
      
           
   });
</script>
<body>
    <%@ include file="/WEB-INF/jsp/header.jsp" %>  

    <div class="container">
        <form id="searchForm" method="post">
            <table>
                <caption><h1>휴가 신청 내역</h1></caption>
                <tr>
                    <td>
                        사번
                        <input type="text" id="empCode" name="empCode" value="${emp.empCode}" readonly>
                    </td>
                    <td>
                        이름
                        <input type="text" id="empName" name="name" value="${emp.name}" readonly>
                    </td>
                    <td>
                        부서명
                        <input type="text" id="depName" name="depName" value="${emp.depName}" readonly>
                    </td>
                    <td>
                        직책 
                        <input type="text" id="assignName" name="assignName" value="${emp.assignName}" readonly>
                    </td>  
                    <td>
                        총 연차
                    <input type="text" id="assignName" name="dayoffCnt" value="${emp.dayoffCnt}" readonly>
                    </td>
                    <td>
                        잔여 연차 
                    <input type="text" id="assignName" name="remainCnt" value="${emp.remainCnt}" readonly>
                 </td>    
                </tr>               
                <tr>
                    <td colspan="6">
                        기간 선택
                        <select id="startYear"></select>년 &nbsp;
                        <select id="startMonth"></select>월 &nbsp; ~ 
                        <select id="endYear"></select>년 &nbsp;
                        <select id="endMonth"></select>월 &nbsp;
                        <button id="searchBtn" type="button">조회</button>
                    </td>
                </tr>
            </table>
        </form>

        <table class="result">
            <thead>
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
                    <td>결과</td>
                </tr>
            </thead>
            <tbody id="requestListBody">
                <c:if test="${not empty requestList}">
                    <c:forEach var="request" items="${requestList}">
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
