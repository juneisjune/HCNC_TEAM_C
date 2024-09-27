<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"      uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="validator" uri="http://www.springmodules.org/tags/commons-validator" %>
<%@ taglib prefix="spring"    uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
    <meta charset="UTF-8">
    <title>휴가신청</title>
    <style>
       body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
    margin-top: 20px;
    color: #333;
}

form {
    width: 40%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
}

label {
    font-weight: bold;
    display: block;
    margin-top: 5px;
    margin-bottom: 2px;
    font-size: 16px;
}

input[type="text"],
input[type="date"],
select,
textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 15px;
}

textarea {
    resize: none;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #f5a946;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

form input[readonly] {
    background-color: #f2f2f2;
    cursor: not-allowed;
}

    </style>
</head>
<body>
 	<%@ include file="/WEB-INF/jsp/header.jsp" %>  
    <h2>연차 신청서</h2>
	
    <form action="/dayoff/sendRequest.do" method="post">
        <label for="name">이름</label><br>
        <input type="text" id="name" name="name" value="${emp.name}" readonly><br><br>

        <label for="empCode">사번</label><br>
        <input type="text" id="empCode" name="empCode" value="${emp.empCode}" readonly><br><br>
        
        <label for="depName">부서명</label><br>
        <input type="text" id="depName" value="${emp.depName}" readonly><br><br>

        <label for="startDate">연차 시작일</label><br>
        <input type="date" id="startDate" name="startDate" required><br><br>

        <label for="endDate">연차 종료일</label><br>
        <input type="date" id="endDate" name="endDate" required><br><br>

        <label for="offCode">연차 사유</label><br>
        <select id="offCode" name="offCode" required>
            <option value="1">연차</option>
            <option value="2">공가</option>
            <option value="3">병가</option>
            <option value="4">하계휴가</option>
            <option value="5">반차</option>
        </select><br><br>

        <label for="reason">상세 사유</label><br>
        <textarea id="reason" name="reason" rows="4" cols="50" placeholder="상세 사유를 입력하세요..." required></textarea><br><br>

        <button type="submit">신청</button>
    </form>

<%@ include file="/WEB-INF/jsp/footer.jsp" %>   
</body>
<script>
 	var dayoffMsg = "${dayoffMsg}";
 	if(dayoffMsg){
 			alert(dayoffMsg);
 	}
 	
 	document.addEventListener("DOMContentLoaded", function() {
 	    // 폼 요소 가져오기
 	    const form = document.querySelector("form");
 	    const startDateInput = document.getElementById("startDate");
 	    const endDateInput = document.getElementById("endDate");
 	    
       const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 시작일 선택 시 검증
        startDateInput.addEventListener("change", function() {
            
            // 시작일이 오늘보다 이전일 경우 경고 메시지 표시 및 입력값 초기화
            if (new Date(startDateInput.value) < today) {
                alert("연차 시작일은 오늘보다 이전일 수 없습니다.");
                startDateInput.value = "";  // 잘못된 날짜 선택 시 필드를 비움
            }
        });

 	    // 폼 제출 시 날짜 검증
 	    form.addEventListener("submit", function(event) {
 	        const startDate = new Date(startDateInput.value);
 	        const endDate = new Date(endDateInput.value);
 	        
 	    

			
 	        // startDate가 endDate보다 클 경우 경고 메시지 표시 및 제출 중단
 	        if (startDate > endDate) {
 	            alert("날짜가 잘못됐습니다. 연차 시작일은 연차 종료일보다 이전이어야 합니다.");
 	            event.preventDefault();  // 폼 제출 중단
 	        }
 	    });
 	});
</script>
</html>