<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
	table {
		width : 1300px;
	}
</style>
</head>
<body>
	<table>
		<tr>
			<td>
				<jsp:include  page="header.jsp"  />
			</td>
		</tr>
		<tr>
			<td>
				<jsp:include page="pay/payslip.jsp" />
			</td>
		</tr>
		<tr>
			<td>
				<jsp:include page="footer.jsp" />
 			</td>
		</tr>
		
	</table>
</body>
</html>