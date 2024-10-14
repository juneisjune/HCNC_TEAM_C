package hcnc.cteam.cmmn;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class CommonInterceptor extends HandlerInterceptorAdapter{
	
	// preHandl -> Controller -> postHandle -> afterCompletion -> view
	
		@Override
		public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
			
			System.out.println("preHandle Wow");
			HttpSession session = request.getSession();
			session.setMaxInactiveInterval(1800);
			System.out.println("session 유저코드:: " + session.getAttribute("userCode"));
			if(session.getAttribute("userCode") == null) {
				response.sendRedirect("/intercep/sessinOut.do");
				return false;
			}
			return super.preHandle(request, response, handler);
		}

		@Override
		public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
			System.out.println("PostHandle Wow");
			super.postHandle(request, response, handler, modelAndView);
		}

		@Override
		public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
				throws Exception {
			super.afterCompletion(request, response, handler, ex);
		}
}
