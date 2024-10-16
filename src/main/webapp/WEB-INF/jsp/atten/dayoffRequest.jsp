<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>휴가 신청</title>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f4f6f9; /* 마이페이지와 동일한 배경색 */
            color: #333;
        }
        caption {
        	background-color: #34495e;
        	color: white;
        }
     
        h1 {
            text-align: center;
            color: white;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
            margin-top: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 7px 8px;
            text-align: center;
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

        input[type="text"],button {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 100px;
            background-color: #F0F0F0;
        }
        
        input[type="date"]{
        padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 170px;
        }

        select {
            width: 100px;
            padding: 10px;
            margin: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }

        button {
        	width: 72px;        	
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #ff7f50; /* 귤색 */
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e67e22;
        }
        textarea {
		    width: 95%; /* 너비를 늘려 입력 공간을 넉넉하게 */
		    padding: 10px;
		    border: 1px solid #ccc;
		    border-radius: 4px;
		    font-size: 14px;
		    margin-top: 10px;
		    margin-bottom: 15px;
		    resize: none; /* 크기 조절 불가능하게 설정 */
		    background-color: #f9f9f9; /* 배경색을 밝게 설정 */
		    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 안쪽 그림자 추가로 입체감 부여 */
		    transition: border-color 0.3s ease;
		}
		
		textarea:focus {
		    border-color: #ff7f50; /* 포커스 시 귤색 테두리 */
		    outline: none; /* 포커스 시 아웃라인 제거 */
		}
		        
    </style>
</head>

<body>
    <%@ include file="/WEB-INF/jsp/header.jsp" %>  

    <div class="container">
        <form action="/dayoff/sendRequest.do" method="post">
            <table>
                <caption><h1>휴가 신청</h1></caption>
                <tr>
                    <td>
                        사번
                        <input type="text" id="empCode" name="empCode" value="${emp.empCode}" readonly>
                    </td>
                    <td>
                        이름
                        <input type="text" id="empName" name="name" value="${emp.name}" readonly>
                    </td>
                    <td>
                        부서명
                        <input type="text" id="depName" name="depName" value="${emp.depName}" readonly>
                    </td>
                    <td>
                        직책 
                        <input type="text" id="assignName" name="assignName" value="${emp.assignName}" readonly>
                     </td>
                     <td>
                        총 연차
                    <input type="text" id="assignName" name="dayoffCnt" value="${emp.dayoffCnt}" readonly>
                    </td>
                    <td>
                        잔여 연차 
                    <input type="text" id="assignName" name="remainCnt" value="${emp.remainCnt}" readonly>
                 </td>  
 
                </tr>
                             
                <tr>
                    <td colspan="6">
                        시작일
                    <input type="date" id="startDate" name="startDate" required>  
                        종료일		<input type="date" id="endDate" name="endDate" required>
                        <label for="offCode">연차 사유 선택</label>
                        
                        <select id="offCode" name="offCode" required>
                            <option value="1">연차</option>
                            <option value="2">공가</option>
                            <option value="3">병가</option>
                            <option value="4">하계휴가</option>
                            <option value="5">반차</option>
                        </select>
                        <button type="submit">신청</button>
                    </td>
                </tr>
                
                <tr>
                    <td colspan="6">
                        <label for="reason" style="font-size: 18px; ">상세 사유</label>
                        <textarea id="reason" name="reason" rows="15" cols="50" placeholder="내용 입력" style="font-size: 16px;" required></textarea>
                    </td>
                </tr>
            </table>
        </form>
    </div>

    <%@ include file="/WEB-INF/jsp/footer.jsp" %>   
</body>


<script>
    var dayoffMsg = "${dayoffMsg}";
    if(dayoffMsg){
        alert(dayoffMsg);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        const startDateInput = document.getElementById("startDate");
        const endDateInput = document.getElementById("endDate");

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 시작일 선택 시 검증
        startDateInput.addEventListener("change", function() {
            if (new Date(startDateInput.value) < today) {
                alert("연차 시작일은 오늘보다 이전일 수 없습니다.");
                startDateInput.value = "";  // 잘못된 날짜 선택 시 필드를 비움
            }
        });

        // 폼 제출 시 날짜 검증
        form.addEventListener("submit", function(event) {
            const startDate = new Date(startDateInput.value);
            const endDate = new Date(endDateInput.value);

            if (startDate > endDate) {
                alert("날짜가 잘못됐습니다. 연차 시작일은 연차 종료일보다 이전이어야 합니다.");
                event.preventDefault();  // 폼 제출 중단
            }
        });
    });
</script>
</html>
