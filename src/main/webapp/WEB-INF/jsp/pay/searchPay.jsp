<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>급여 조회</title>
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
			
			$.ajax({
			    type : "POST",
			    data : "startYear="+startYear+"&startMonth="+startMonth+"&endYear="+endYear+"&endMonth="+endMonth,
			    url : "/pay/searchPay.do",
			    dataType: "json",
			 
			    success: function(result) {
			    	console.log(result);
	                if (result.msg === "ok") {	       
	                	
	                	if (Array.isArray(result.searchList) && result.searchList.length === 0) {
	                		var payListBody = $("#payListBody");
		                	 payListBody.empty();
		                	 
		                     var searchListBody = $("#searchListBody");
		                	 searchListBody.empty(); 
		                	 
	                        alert("조회 결과가 없습니다.");
	                    } else {
	                	
	                	 var searchList = result.searchList;
	                	 var monthly = result.monthly;
	                	 var payListBody = $("#payListBody");
	                	 payListBody.empty();
	                	 
	                     var searchListBody = $("#searchListBody");
	                	 searchListBody.empty(); 

	                     $.each(searchList, function(index, pay) {
	           
	                         var totalTax = pay.incomeTax + pay.residentTax + pay.nationalTax + pay.empInsurance + pay.healthInsurance + pay.longcareInsurance;
	                   
	                         var row = "<tr>"
	                             + "<td>" + "<a href='/pay/viewPayslip/" + pay.payYear + "/" + pay.payMonth + ".do'>" + pay.payYear + "." + pay.payMonth + "</a>" + "</td>"
	                             + "<td>" + pay.giveDate + "</td>"
	                             + "<td>" + Number(monthly).toLocaleString() + "원" + "</td>" 
	                             + "<td>" + pay.payMeal.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.payOver.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.payAmount.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.actualPay.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.incomeTax.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.residentTax.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.nationalTax.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.empInsurance.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.healthInsurance.toLocaleString() + "원" + "</td>"
	                             + "<td>" + pay.longcareInsurance.toLocaleString() + "원" + "</td>"
	                             + "<td>" + totalTax.toLocaleString() + "원" + "</td>"
	                             + "</tr>";

	                         payListBody.append(row);  
	                     });
	                     
	                    alert("조회가 완료되었습니다.");
	                    
	                    }
	                   
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
<body>
<%@ include file="/WEB-INF/jsp/header.jsp" %>   
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
                <td>지급일</td>
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
            <tbody id="payListBody">
	            <c:forEach var="pay" items="${payList}" > 
		            <tr>
		                <td><a href="/pay/viewPayslip/${pay.payYear}/${pay.payMonth}.do">${pay.payYear}.${pay.payMonth}</a></td>
		                <td>${pay.giveDate}</td>
		                <td><fmt:formatNumber value="${monthly}" type="currency" groupingUsed="true"/></td>
		                <td><fmt:formatNumber value="${pay.payMeal}" type="currency" groupingUsed="true"/></td>
		                <td><fmt:formatNumber value="${pay.payOver}" type="currency" groupingUsed="true"/></td>
		                <td><fmt:formatNumber value="${pay.payAmount}" type="currency" groupingUsed="true"/></td>
		                <td><fmt:formatNumber value="${pay.actualPay}" type="currency" groupingUsed="true"/></td>
		                <td><fmt:formatNumber value="${pay.incomeTax}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.residentTax}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.nationalTax}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.empInsurance}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.healthInsurance}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.longcareInsurance}" type="currency" groupingUsed="true"/></td>			                			                
		                <td><fmt:formatNumber value="${pay.incomeTax + pay.residentTax + pay.nationalTax + pay.empInsurance + pay.healthInsurance + pay.longcareInsurance}" type="currency" groupingUsed="true"/></td>			                			               
		            </tr>
	            </c:forEach>
			</tbody>
			
			<c:if test="${empty payList}">
				<tr>
					<td colspan="14">
						급여 내역이 없습니다.
					</td>
				</tr>
			</c:if>
	            
            <tbody id="searchListBody"> 
	          
	        </tbody>

  
	     </table>
	

    </div> <!-- container -->
<%@ include file="/WEB-INF/jsp/footer.jsp" %>   	
</body>
</html>