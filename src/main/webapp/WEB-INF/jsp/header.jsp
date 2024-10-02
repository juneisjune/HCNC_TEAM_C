<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>인사정보</title>
    <style>
    	
        .header {
            background-color: #2c3e50;
            padding: 20px;
            text-align: center;
            position: relative; 
        }
        
        .navbar {
            display: flex;
            justify-content: center;
            background-color: #34495e;
            padding: 10px;
        }
        
        .navbar a {
            color: white;
            text-decoration: none;
            padding: 14px 20px;
            font-weight: bold;
            border-radius: 5px; 
            
        }
        
        .navbar a:hover {
            background-color: #2980b9;
        }

        .btn {
            display: flex;
            justify-content: flex-end; 
            padding: 20px; 
            position: absolute; 
            top: 80px; 
            right: 20px; 
            width: calc(100% - 40px); 
        }
        .btn input:disabled {
		    background-color: #d3d3d3; 
		    color: #a9a9a9; 
		    cursor: not-allowed; 
		    opacity: 0.6; 
		}
        

        .btn input {
            margin-left: 20px; /* Increased space between buttons */
            padding: 10px 20px; /* Increased button size */
            font-size: 16px; /* Increase font size for better visibility */
            cursor: pointer; /* Change cursor on hover */
            background-color: #2980b9; /* Example color for buttons */
            border: none; /* Remove border */
            border-radius: 5px; /* Rounded corners */
            color: white;
        }

        .logout_btn {
        	color: white;
            position: absolute; /* Position logout button absolutely */
            top: 20px; /* Adjust top position */
            right: 20px; /* Adjust right position */
            background-color: #e74c3c; /* Example color for logout button */
            border: none;
            border-radius: 5px; /* Rounded corners */
            
            padding: 10px;
            cursor: pointer;
        }

        .time-display {
        	color: white;
            width: 100px; /* Increased space for time display */
            font-size: 16px; /* Increase font size for better visibility */
        }
    </style>
</head>
<body>
    <div class="header">
        <a href=""><img src="${pageContext.request.contextPath}/images/banner/bannerNew.png" alt="배너 이미지"></a>
        <div class="btn">
            <!-- 출근 버튼과 출근 시간 표시 -->
            <div style="display: flex; align-items: center;">
                <input type="button" id="btn_start_work" onclick="startWork()" value="출근" 
                       <c:if test="${not empty sessionScope.workStart}">disabled</c:if> >
                <div class="time-display" id="start_time">
                    <c:if test="${empty sessionScope.workStart}">&nbsp;</c:if>
                    <c:if test="${not empty sessionScope.workStart}">${sessionScope.workStart}</c:if>
                </div>
            </div>

            <!-- 퇴근 버튼과 퇴근 시간 표시 -->
            <div style="display: flex; align-items: center;">
                <input type="button" id="btn_end_work" onclick="endWork()" value="퇴근" 
                       <c:if test="${empty sessionScope.workStart || not empty sessionScope.workEnd}">disabled</c:if> >
                <div class="time-display" id="end_time">
                    <c:if test="${empty sessionScope.workEnd}">&nbsp;</c:if>
                    <c:if test="${not empty sessionScope.workEnd}">${sessionScope.workEnd}</c:if>
                </div>
            </div>
        </div>
        <input class="logout_btn" type="button" onclick="logout()" value="로그아웃">
    </div>
    
    <div class="navbar">
        <a href="/notice">공지사항</a>
        <a href="/employee/myPage.do">내 정보 보기</a>
        <a href="/employee/employee.do">주소록</a>
        <a href="/atten/attenlist.do">근태 조회</a>
        <a href="/dayoff/doRequest.do">휴가 신청</a>
        <a href="/dayoff/requestList.do">휴가 신청 결과</a>
        <a href="/pay/viewPayslip.do">급여명세서</a>
        <a href="/pay/searchPay.do">기간별 급여 조회</a>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javaScript" language="javascript">



//현재시간 가져오기
function getCurrentTime() {
	
	var today = new Date();
	
	var hours = ('0' + today.getHours()).slice(-2); 
	var minutes = ('0' + today.getMinutes()).slice(-2);
	var seconds = ('0' + today.getSeconds()).slice(-2); 
	var timeString = hours + ':' + minutes  + ':' + seconds;

	console.log(timeString);
	return timeString;
}

// 출근 버튼 클릭 시 실행
function startWork() {
    const currentTime = getCurrentTime();
    if(confirm("출근 시간 등록하시겠습니까?")){ 
    document.getElementById("start_time").innerText = currentTime; // 출근 시간 표시
	    // 출근 시간을 DB에 저장하는 AJAX 호출
	    $.ajax({
	        type: "POST",
	        url: "/atten/startWork.do", // 서버의 출근 시간 저장 API
	        data: { start_time: currentTime },
	        success: function(response) {
	            alert("출근 시간이 저장되었습니다.");
	            document.getElementById("btn_start_work").disabled = true; // 출근 버튼 비활성화
	            document.getElementById("btn_end_work").disabled = false; // 퇴근 버튼 활성화
	        },
	        error: function(error) {
	        	alert("출근 시간 등록에 실패했습니다.");
	        }
	    });
    }
}

// 퇴근 버튼 클릭 시 실행
function endWork() {
    const currentTime = getCurrentTime();
   	if(confirm("퇴근 시간 등록하시겠습니까?")){
	    document.getElementById("end_time").innerText = currentTime; // 퇴근 시간 표시
	    // 퇴근 시간을 DB에 저장하는 AJAX 호출
	    $.ajax({
	        type: "POST",
	        url: "/atten/endWork.do", // 서버의 퇴근 시간 저장 API
	        data: { end_time: currentTime },
	        success: function(response) {
	            alert("퇴근 시간이 저장되었습니다.");
	            document.getElementById("btn_end_work").disabled = true; // 퇴근 버튼 비활성화
	        },
	        error: function(error) {
	            alert("퇴근 시간 등록에 실패했습니다.");
	        }
	    });
   	}
}

// 매일 00시에 출근/퇴근 시간 초기화 및 버튼 상태 초기화
function resetAttendance() {
	//DB에서 가져온다면 공백으로 만들필요가 없음
    document.getElementById("start_time").innerHTML = "&nbsp;"; // 공백으로 초기화
    document.getElementById("end_time").innerHTML = "&nbsp;"; // 공백으로 초기화
    
    document.getElementById("btn_start_work").disabled = false; // 출근 버튼 활성화
    document.getElementById("btn_end_work").disabled = true; // 퇴근 버튼 비활성화
}

// 매일 00시에 자동 초기화하는 타이머 설정
setInterval(function() {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        resetAttendance();
    }
}, 1000);

function logout(){
	location.href ="/logout.do"
}
</script>
</html>
