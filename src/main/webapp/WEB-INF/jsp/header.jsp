<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>header</title>
    <style>
		* {
            margin: 0 auto;
            box-sizing: border-box;
            font-family: 'Noto Sans KR', sans-serif;
        }
        
        /* Container for the entire header */
        .header {
            width: 100%;
            margin-bottom : 30px;
        }
        
        /* Home section style */
        .home {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Banner style */
        .home .banner {
            flex: 1;
            max-width: 1200px;
            margin-left: 150px;
            padding : 0;   
        }
        

        .home .banner img {
            object-fit: cover;
            display : block;
        }

        /* Button section style */
        .home .btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right:  35px;
        }

        .home .btn input {
            display: block;
            color: #333;
            text-align: center;
            padding: 10px 16px;
            margin: 10px 0;
            text-decoration: none;
            font-weight: bold;
            border: 1px solid black;
            border-radius: 4px;
            transition: background-color 0.3s ease;
            height: 50px; /* Adjust height to match image height */
            line-height: 30px; /* Center text vertically */
        }
        /* Disabled 상태인 버튼의 스타일 설정 */
		.home .btn input:disabled {
		    background-color: #e0e0e0; /* 비활성화 시 배경색 */
		    color: #999999; /* 비활성화 시 글자색 */
		    border: 1px solid #ccc; /* 비활성화 시 테두리 색 */
		    cursor: not-allowed; /* 마우스 커서를 '금지'로 변경 */
		}
         .home .btn div {
            margin: 5px 0;
            font-size: 16px;
        }

        .home .btn a:hover {
            background-color: #e7e3e3;
        }
        
        .home .btn div {
            margin: 5px 0;
            font-size: 16px;
        }
        .logout_btn {
        	width :130px;
        }

        /* Navigation bar style */
        .navbar {
            background-color: #ffffff; 
            border-bottom: 1px solid #ddd;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            height: 50px; 
            margin-bottom: 30px;
       
        }

        .navbar .nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            
        }

        .navbar .nav-item {
            position: relative;
            justify-content: space-between;
        }

        .navbar .nav-link {
            display: block;
            color: #333;
            text-align: center;
            padding: 14px 20px; 
             text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .navbar .nav-link:hover {
            background-color: #f8f8f8;
        }

        /* Sub-menu styles */
        .navbar .sub-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            min-width: 160px;
            z-index: 1000;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .navbar .sub-menu li {
            border-bottom: 1px solid #ddd;
            font-size: 14px;
        }

        .navbar .sub-menu li:last-child {
            border-bottom: none;
        }

        .navbar .sub-menu li a {
            display: block;
            padding: 12px 20px;
            color: #333;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }

        .navbar .sub-menu li a:hover {
            background-color: #f8f8f8;
        }

        /* Show sub-menu on hover */
        .navbar .nav-item:hover .sub-menu {
            display: block;
        }
    </style>

</head>

<body>
    <div class="header">
        <!-- 배너 영역 -->
        <div class="home">
            <div class="banner">
                <a href="" ><img src="../images/banner/banner.png" alt="배너 이미지"></a>
            </div>
        <div class="btn">
                <!-- 출근 버튼과 출근 시간 표시 -->
                <div style="display: flex; align-items: center;">
                    <input type="button" id="btn_start_work" onclick="startWork()" value="출근" 
                           <c:if test="${not empty workStart}">disabled</c:if> >
                    <div id="start_time" style="margin-left: 10px;">
                        <c:if test="${empty workStart}">&nbsp;</c:if>
                        <c:if test="${not empty workStart}">${workStart}</c:if>
                    </div>
                </div>

                <!-- 퇴근 버튼과 퇴근 시간 표시 -->
                <div style="display: flex; align-items: center;">
                    <input type="button" id="btn_end_work" onclick="endWork()" value="퇴근" 
                           <c:if test="${empty workStart || not empty workEnd}">disabled</c:if> >
                    <div id="end_time" style="margin-left: 10px;">
                        <c:if test="${empty workEnd}">&nbsp;</c:if>
                        <c:if test="${not empty workEnd}">${workEnd}</c:if>
                    </div>
        	    </div>
				    <input class="logout_btn" type="button" onclick="logout()" value="로그아웃">
				</div>
			</div>
         </div> <!-- home -->
         
        
     
        <!-- 상단 메뉴 -->
        <div class="navbar">
            <ul class="nav-list">
                <li class="nav-item">
                    <a class="nav-link">공지사항</a>
                    <ul class="sub-menu">
                        <li><a href="공지사항페이지 이동 URL">공지사항 보기</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link">주소록</a>
                    <ul class="sub-menu">
                        <li><a href="/employee/myPage.do">내 정보 보기</a></li>
                        <li><a href="/employee/employee.do">주소록</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link">근태 관리</a>
                    <ul class="sub-menu">
                        <li><a href="/atten/attenlist.do">근태 조회</a></li>
                        <li><a href="/dayoff/doRequest.do">휴가 신청</a></li>
                        <li><a href="/dayoff/requestList.do">휴가 신청 결과</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">급여 조회</a>
                    <ul class="sub-menu">
                        <li><a href="/pay/viewPayslip.do">급여명세서</a></li>
                        <li><a href="/pay/searchPay.do">기간별 급여 조회</a></li>
                    </ul>
                </li>
            </ul>  <!-- nav-list -->
        </div> <!-- navbar -->
        
    </div> <!-- header  -->
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
