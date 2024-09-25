<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <title>마이페이지</title>
</head>
<body>


    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tr>
            <td align="center">
          
                <table width="50%" border="0" cellspacing="0" cellpadding="10">
                    <tr>
                        <td align="center"><strong>마이페이지</strong></td>
                    </tr>
                    <tr>
                        <td align="center">아래에서 당신의 정보를 확인하세요.</td>
                    </tr>
                </table>

                <br>

                <form:form method="post" modelAttribute="employee">
                    <table width="50%" border="1" cellspacing="0" cellpadding="10" align="center">
                        <tr>
                            <th colspan="2" align="center">내 정보</th>
                        </tr>
                        <tr>
                            <th align="right">이름</th>
                            <td><form:input path="name" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">부서명</th>
                            <td><form:input path="depName" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">직책명</th>
                            <td><form:input path="assignName" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">이메일</th>
                            <td><form:input path="email" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">전화번호</th>
                            <td><form:input path="phone" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">주소</th>
                            <td><form:input path="address" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">입사일</th>
                            <td><form:input path="joinDate" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">생년월일</th>
                            <td><form:input path="birth" readonly="true" /></td>
                        </tr>
                        <tr>
                            <th align="right">성별</th>
                            <td><form:input path="gender" readonly="true" /></td>
                        </tr>
                    </table>
                </form:form>

                <br><br>

              
                <table width="50%" border="0" cellspacing="0" cellpadding="10" align="center">
                    <tr>
                        <td align="center">정보가 잘못된 경우 관리자에게 문의하세요.</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>
</html>
