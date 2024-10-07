

<%@ page contentType="application/octet-stream;charset=utf-8" errorPage="/errorpage.jsp"%>
<%@ page import="java.io.*, java.net.URLConnection, java.net.URLEncoder" %>
<%
    // 파일 이름과 경로 설정
    String fileName = request.getParameter("fileName");
    String filePath = "D:\\upload\\" + fileName;
    
    File file = new File(filePath);
    
    if (file.exists()) {
        // 파일의 MIME 타입 추측
        String mimeType = URLConnection.guessContentTypeFromName(file.getName());
        
        // MIME 타입을 찾지 못할 경우 기본값 설정
        if (mimeType == null) {
            mimeType = "application/octet-stream";
        }
        
        // 응답 헤더 초기화 및 설정
        response.reset();  // 응답을 리셋하여 기존 헤더 제거
        response.setContentType(mimeType);
        
        // 파일 이름 인코딩
        String encodedFileName = URLEncoder.encode(fileName, "UTF-8").replace("+", "%20");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + encodedFileName + "\"; filename*=UTF-8''" + encodedFileName);
        
        response.setContentLength((int) file.length());

        // 파일 스트림을 통해 파일 데이터를 읽고 출력
        try (BufferedInputStream inputStream = new BufferedInputStream(new FileInputStream(file));
             BufferedOutputStream outputStream = new BufferedOutputStream(response.getOutputStream())) {
            
            byte[] buffer = new byte[4096];
            int bytesRead;

            // 파일을 읽어 응답으로 전송
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            // 출력 스트림을 flush
            outputStream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    } else {
        // 파일이 없을 때 처리
        response.setContentType("text/html");
        PrintWriter writer = response.getWriter();
        writer.println("<h3>파일을 찾을 수 없습니다: " + fileName + "</h3>");
        writer.close();
    }
%>
