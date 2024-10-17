<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>급여명세서</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9;
            color: #333;
        }

        .container {
            width: 70%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        table {
            width: 80%;
            border-collapse: collapse;
            margin-bottom: 30px;
            margin-left: auto;
            margin-right: auto;
        }

        th, td {
            padding: 12px 15px;
            text-align: center;
            border: 1px solid #ddd;
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

        h1 {
            text-align: center;
            color: #2c3e50;
            margin: 30px 0;
        }

        h4, h3 {
            text-align: center;
            margin-bottom: 20px;
        }

        /* 버튼 스타일 통일 */
        button {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #ff7f50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e67e22;
        }

    </style>
</head>
<body>
    <%@ include file="/WEB-INF/jsp/header.jsp" %>

    <div class="container">
        <c:if test="${not empty myPay}">
            <table>
                <caption><h1>${myPay.payYear}년 ${myPay.payMonth}월 급여 명세서</h1></caption>
                <tr>
                    <td colspan="4" style="text-align: right;">지급일자 : ${myPay.giveDate}</td>
                </tr>
                <tr>
                    <th>성명</th>
                    <td>${emp.name}</td>
                    <th>입사일</th>
                    <td>${emp.joinDate}</td>
                </tr>
                <tr>
                    <th>부서</th>
                    <td>${emp.depName}</td>
                    <th>직책</th>
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
                    <td style="text-align: right;"><fmt:formatNumber value="${myPay.month - myPay.absence}" type="number" groupingUsed="true"/>원</td>
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
                    <td></td>
                    <td>건강보험</td>
                    <td style="text-align: right;"><fmt:formatNumber value="${myPay.healthInsurance}" type="number" groupingUsed="true"/>원</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>장기요양보험</td>
                    <td style="text-align: right;"><fmt:formatNumber value="${myPay.longcareInsurance}" type="number" groupingUsed="true"/>원</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><strong>총 공제액</strong></td>
                    <td style="text-align: right;"><strong><fmt:formatNumber value="${minus}" type="number" groupingUsed="true"/>원</strong></td>
                </tr>
                <tr>
                    <th colspan="2">실지급액</th>
                    <td colspan="2"><strong><fmt:formatNumber value="${myPay.totalPay}" type="currency" groupingUsed="true"/>원</strong></td>
                </tr>
            </table>

            <table>
                <tr>
                    <th>근로일수</th>
                    <th>총 근로시간</th>
                    <th>연장근로시간</th>
                    <th>기타</th>
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
        </c:if>

        <c:if test="${empty myPay}">
            <h4>급여 내역이 없습니다.</h4>
        </c:if>
    </div>

    <%@ include file="/WEB-INF/jsp/footer.jsp" %>
</body>
</html>
