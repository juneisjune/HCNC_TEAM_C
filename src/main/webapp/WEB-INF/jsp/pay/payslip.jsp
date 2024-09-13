<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>급여명세서</title>
    <style>
        table {
            width: 800px;
            border-collapse: collapse;
            margin-bottom : 30px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        h1 {
            text-align: center;
            margin: 30px 0;
        }
        h4{
            text-align: center;
            margin-bottom: 20px;
        }
        h3{
            text-align: center;
        }

    </style>
</head>
<body>
 	<%@ include file="/WEB-INF/jsp/header.jsp" %>  
 	<div class="container">
	    <table>
	        <caption><h1>${myPay.payYear}년 ${myPay.payMonth}월 급여 명세서</h1></caption>
	        <tr>
	            <td colspan="4" style="text-align: right;">지급일자 : ${myPay.giveDate}</td>
	        </tr>
	        <tr>
	            <th class="section-header">성명</th>
	            <td>${emp.name}</td>
	            <th class="section-header">생년월일</th>
	            <td>${emp.birth}</td>
	        </tr>
	        <tr>
	            <th class="section-header">부서</th>
	            <td>${emp.depName}</td>
	            <th class="section-header">직책</th>
	            <td>${emp.assignName}</td>
	        </tr>
	        <tr>
	            <th>지급항목</th>
	            <th>지급액</th>
	            <th>공제항목</th>
	            <th>공제액</th>
	        </tr>
	        <tr>
	            <td>기본급</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${monthly}" type="number" groupingUsed="true"/>원</td>
	            <td>소득세</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.incomeTax}" type="number" groupingUsed="true"/>원</td>
	        </tr>
	        <tr>
	            <td>식대</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.payMeal}" type="number" groupingUsed="true"/>원</td>
	            <td>주민세</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.residentTax}" type="number" groupingUsed="true"/>원</td>
	        </tr>
	        <tr>
	            <td>연장근로수당</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.payOver}" type="number" groupingUsed="true"/>원</td>
	            <td>국민연금</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.nationalTax}" type="number" groupingUsed="true"/>원</td>
	        </tr>
	        <tr>
	            <td><strong>총 지급액</strong></td>
	            <td style="text-align: right;"><strong><fmt:formatNumber value="${myPay.payAmount}" type="number" groupingUsed="true"/>원</strong></td>
	            <td>고용보험</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.empInsurance}" type="number" groupingUsed="true"/>원</td>
	        </tr>      
	        <tr>
	            <td></td>
	            <td style="text-align: right;"></td>
	            <td>건강보험</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.healthInsurance}" type="number" groupingUsed="true"/>원</td>
	        </tr>
	        <tr>
	            <td></td>
	            <td style="text-align: right;"></td>
	            <td>장기요양보험</td>
	            <td style="text-align: right;"><fmt:formatNumber value="${myPay.longcareInsurance}" type="number" groupingUsed="true"/>원</td>
	        </tr>
	        <tr>
	            <td></td>
	            <td style="text-align: right;"></td>
	            <td><strong>총 공제액</strong></td>
	            <td style="text-align: right;"><strong><fmt:formatNumber value="${minus}" type="number" groupingUsed="true"/>원</strong></td>
	        </tr>
	        <tr>
	            <th colspan="2">실수령액</th>
	            <td colspan="2"><strong><fmt:formatNumber value="${myPay.actualPay}" type="currency" groupingUsed="true"/>원</strong></td>
	        </tr>
	    </table>
	
	    <table>
	        <tr>
	            <th style="width: 25%;">근로일수</th>
	            <th style="width: 25%;">총 근로시간</th>
	            <th style="width: 25%;">연장근로시간</th>
	            <th style="width: 25%;">기타</th>
	        </tr>
	        <tr>
	            <td>${totalDay}일</td>
	            <td>${totalTime}시간</td>
	            <td>${overTime}시간</td>
	            <td><fmt:formatNumber value="${myPay.etc}" type="currency" groupingUsed="true"/>원</td>
	        </tr>
	    </table>
	
	    <h4>귀하의 노고에 감사드립니다.</h4>
	    <h3>(주)에이치씨엔씨</h3>
    </div>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>   
</body>
</html>