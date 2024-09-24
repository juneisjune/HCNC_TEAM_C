<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
            margin-bottom : 80px;
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
            max-width: 700px;
            margin-right: 20px;
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
        }

        .home .btn a {
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

        /* Navigation bar style */
        .navbar {
            background-color: #ffffff; 
            border-bottom: 1px solid #ddd;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            height: 50px; 
       
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
            <!--버튼 영역 -->
            <div class="btn">
                <a href="#" >출근</a>
                <div>09:00:00</div>

                <a href="#" >퇴근</a>
                <div>18:00:00</div>
                
                <a href="#" >로그아웃</a>
  
            </div> <!-- btn -->
         </div> <!-- home -->
        
     
        <!-- 상단 메뉴 -->
        <div class="navbar">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="#" class="nav-link">공지사항</a>
                    <ul class="sub-menu">
                        <li><a href="#">공지사항 보기</a></li>
                        
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">주소록</a>
                    <ul class="sub-menu">
                        <li><a href="#">내 정보 보기</a></li>
                        <li><a href="#">조직도</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">근태 관리</a>
                    <ul class="sub-menu">
                        <li><a href="#">근태 조회</a></li>
                        <li><a href="#">휴가 신청</a></li>
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
</html>
