package hcnc.cteam.post;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
@RequestMapping(value="/post")
public class JspPostController {
	
	@Resource(name = "postService")
    private PostService postService;
	
	
	
	@RequestMapping(value="/viewPost.do")
	public String getPostList(Model model) {
		// 게시글 목록 조회
        List<Map<String, Object>> postList = postService.selectPost(null);
        
        // 모델에 게시글 목록 추가
        model.addAttribute("postList", postList);
        
        // post.jsp로 이동
        return "post";
	}
	
	@RequestMapping("/postDetail.do")
    public String getPostDetail(@RequestParam("post_code") int postCode, Model model) {
		//조회수 1증가
		postService.increaseViewCount(postCode);
        // 게시글 상세 정보 조회
        Map<String, Object> postDetail = postService.selectPostDetail(postCode);
        
     // 첨부파일 목록 조회(아래 추가
        List<Map<String, Object>> attachments = postService.selectAttachments(postCode);

        // 모델에 상세 정보 및 첨부파일 목록 추가
        model.addAttribute("postDetail", postDetail);
        //아래 추가
        model.addAttribute("attachments", attachments);
        
        // postDetail.jsp로 이동
        return "postDetail";
    }
	//==========================================//
	// 파일 다운로드 메서드 추가
	
	@RequestMapping("/downloadAttachment.do")
	public void downloadFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
	    // attach_code를 받아서 사용
	    String attachCode = request.getParameter("attach_code");

	    // attachCode가 null인지 확인
	    if (attachCode == null || attachCode.isEmpty()) {
	        response.setContentType("text/html");
	        PrintWriter writer = response.getWriter();
	        writer.println("<h3>파일을 찾을 수 없습니다: attach_code가 없습니다.</h3>");
	        writer.close();
	        return;
	    }

	    // 파일 정보 가져오기
	    Map<String, Object> attachment = postService.selectAttachment(Integer.parseInt(attachCode));
	    if (attachment == null) {
	        response.setContentType("text/html");
	        PrintWriter writer = response.getWriter();
	        writer.println("<h3>파일을 찾을 수 없습니다: " + attachCode + "</h3>");
	        writer.close();
	        return;
	    }

	    String filePath = (String) attachment.get("attach_url");
	    String fileName = (String) attachment.get("attach_name");

	    // 파일 다운로드 처리 (이전과 동일)
	    File file = new File(filePath);
	    if (file.exists()) {
	        String mimeType = request.getServletContext().getMimeType(file.getName());
	        if (mimeType == null) {
	            mimeType = "application/octet-stream";
	        }

	        response.reset();
	        response.setContentType(mimeType);

	        String encodedFileName;
	        try {
	            encodedFileName = URLEncoder.encode(fileName, "UTF-8").replaceAll("\\+", "%20");
	        } catch (UnsupportedEncodingException e) {
	            encodedFileName = fileName;
	        }

	        response.setHeader("Content-Disposition", "attachment; filename=\"" + encodedFileName + "\"");
	        response.setContentLength((int) file.length());

	        try (BufferedInputStream inputStream = new BufferedInputStream(new FileInputStream(file));
	             BufferedOutputStream outputStream = new BufferedOutputStream(response.getOutputStream())) {

	            byte[] buffer = new byte[4096];
	            int bytesRead;
	            while ((bytesRead = inputStream.read(buffer)) != -1) {
	                outputStream.write(buffer, 0, bytesRead);
	            }
	            outputStream.flush();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    } else {
	        response.setContentType("text/html");
	        PrintWriter writer = response.getWriter();
	        writer.println("<h3>파일을 찾을 수 없습니다: " + fileName + "</h3>");
	        writer.close();
	    }
	}



	

}
