<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>직원 검색</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1 {
            color: #333;
        }
        form {
            margin-bottom: 20px;
            background-color: #fff;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        label {
            margin-right: 10px;
            font-weight: bold;
        }
        input, select, button {
            padding: 10px;
            margin-top: 5px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        button {
            background-color: #007BFF;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        th, td {
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #007BFF;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .no-results {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>직원 검색</h1>
    <form action="/test/search.do" method="get">
        <label for="search_type">검색 유형:</label>
        <select id="search_type" name="search_type">
            <option value="name">직원 이름</option>
            <option value="dep_code">부서 코드</option>
        </select>

        <label for="search_value">검색 값 입력:</label>
        <input type="text" id="search_value" name="search_value" required>

        <button type="submit">검색</button>
    </form>

    <h2>검색 결과</h2>
    <c:if test="${empty employees}">
        <p class="no-results">검색 결과가 없습니다.</p>
    </c:if>
    <c:if test="${!empty employees}">
        <table>
            <thead>
                <tr>
                    <th>직원 코드</th>
                    <th>직원 이름</th>
                    <th>부서 코드</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="employee" items="${employees}">
                    <tr>
                        <td>${employee.empCode}</td>
                        <td>${employee.name}</td>
                        <td>${employee.depCode}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </c:if>

</body>
</html>
