<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>급여 조회</title>
	<style>
		table {
            width: 1000px;
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
        .payName {
            font-weight: bold;
        }
	</style>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript">
	$(function() {
	    $("#searchBtn").click(function() {
			var startYear = $("#startYear").val();
			var startMonth = $("#startMonth").val();
			var endYear = $("#endYear").val();
			var endMonth = $("#endMonth").val();
				
	    	console.log(startYear);
	    	console.log(startMonth);
	    	console.log(endYear);
	    	console.log(endMonth);
			
			$.ajax({
			    type : "POST",
			    data : "startYear="+startYear+"&startMonth="+startMonth+"&endYear="+endYear+"&endMonth="+endMonth,
			    url : "/pay/searchPay.do",
			    /*
			    success : function(result){
			    	console.log("result: " + result);
			    
			    	
			        if(result == "ok") {
			            alert("조회가 완료되었습니다.");
			        } else if (result = "") {
			        	alert("조회 결과가 없습니다.");
			        }
			    },
			    */
			    success: function(result) {
			    	console.log(status);
	                if (result.status === "ok") {
	                    // payList 데이터를 처리하거나 화면에 표시
	                    console.log(result.payList);
	                    alert("조회가 완료되었습니다.");
	                } else if (result.status === "noData") {
	                    alert("조회 결과가 없습니다.");
	                } else {
	                    alert("에러 발생: " + result.message);
	                }
	            },
	            error : function(xhr, status, error) {
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
<%@ include file="/WEB-INF/jsp/header.jsp" %>   	
<body>
	<div class="container">
		<form id="searchForm" >
	        <table >
	            <caption><h1>급여 내역 조회</h1></caption>
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
	                    <button id="searchBtn" type="button" >급여내역 조회</button>
	                </td>
	             </tr>   
	       </table>
	    </form>
	   

        <table class="result">
            <tr>
                <th colspan="7">월별 급여내역</th>
                <th colspan="7">4대보험 및 갑근세 내역</th>
            </tr>
            <tr class="payName">
                <td>급여월</td>
                <td>급여일</td>
                <td>기본급</td>
                <td>식대</td>
                <td>연장근로수당</td>
                <td>지급합계</td>
                <td>실지급액</td>
                <td>소득세</td>
                <td>주민세</td>
                <td>국민연금</td>
                <td>고용보험</td>
                <td>건강보험</td>
                <td>장기요양보험</td>
                <td>공제액합계</td>
            </tr>
	            
	        <c:if test="${payList}">
	            <c:forEach var="item" items="${payList}"> 
		            <tr>
		                <td>${item.payYear}.${item.payMonth}</td>
		                <td>${item.giveDate}</td>
		                <td></td>
		                <td>${item.payMeal}</td>
		                <td>${item.payOver}</td>
		                <td>${item.payAmount}</td>
		                <td>${item.incomeTax}</td>
		                <td>${item.residentTax}</td>
		                <td>${item.nationalTax}</td>
		                <td>${item.empInsurance}</td>
		                <td>${item.healthInsurance}</td>
		                <td>${item.longcareInsurance}</td>
		                <td>${item.incomeTax + item.residentTax + item.nationalTax + item.empInsurance + item.healthInsurance + item.longcareInsurance}</td>
		                <td>${item.actualPay}</td>
		            </tr>
		        </c:forEach>    
		    </c:if>
  
	     </table>

    </div>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>   	
</body>
</html>