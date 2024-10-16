<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인</title>
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
            transition: background-color 0.3s ease;
            transition: font-size 0.3s ease;
        }
        
        .navbar a:hover {
            background-color: #2980b9;
            font-size: 40px;
            transition: font-size 0.3s ease;
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

    </style>
</head>
<body>
    <div class="header">
        <a href=""><img src="../images/banner/bannerNew.png" alt="배너 이미지"></a>
        
    </div>
    
    <div class="navbar">
        <a>이끌거나 따르거나 떠나거나!</a>
    </div>
</body>


</html>
