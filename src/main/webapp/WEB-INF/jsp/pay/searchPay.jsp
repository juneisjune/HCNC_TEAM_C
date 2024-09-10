<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>급여 조회</title>
<style>
		 *{
            margin: 0 auto;
            box-sizing: border-box;
        } 
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
        input[type="text"], select, input[type="submit"] {
            margin: 5px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        input[type="submit"] {
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
</head>
<body>
 <%@ include file="/WEB-INF/jsp/header.jsp" %>   
	<form id="searchForm">
        <table >
            <caption><h1>급여 내역 조회</h1></caption>
            <tr>
                <td>
                    <label for="empCode">사번</label>
                    <input type="text" id="empCode" name="empCode" value="12345" disabled>
                </td>
                <td>
                    <label for="empName">이름</label>
                    <input type="text" id="empName" name="empName" value="오명진" disabled>
                </td>
                <td>
                    <label for="depName">부서명</label>
                    <input type="text" id="depName" name="depName" value="SI사업부" disabled>
                </td>
                <td>
                    <label for="assignName">직책 </label>
                    <input type="text" id="assignName" name="assignName" value="사원" disabled>
                </td>    
            </tr>
            <tr >
                <td colspan="4" >
                    <label for="payMonth">기간 선택</label>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select>
                    년 &nbsp;
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    월 &nbsp; ~ <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select>
                    년 &nbsp;
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select> 
                    월 &nbsp;
                    <input type="submit" value="급여내역 조회">
                </td>
             </tr>   
       </table>
    </form>

    <form class="reusltForm">
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
            <tr>
                <td>2024.09</td>
                <td>2024.10</td>
                <td>2300000</td>
                <td>100000</td>
                <td>46000</td>
                <td>2500000</td>
                <td>2200000</td>
                <td>360000</td>
                <td>36000</td>
                <td>100000</td>
                <td>1000</td>
                <td>100000</td>
                <td>10000</td>
                <td>330000</td>
            </tr>
        </table>
    </form>
<%@ include file="/WEB-INF/jsp/footer.jsp" %>   	
</body>
</html>