package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateMemberServlet")
public class UpdateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UpdateMemberServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8"); // 한글 처리를 위해
		response.setContentType("text/json; charset=utf-8");

		// 'mid=' + id + '&mname=' + name + '&mpw=' + pw;
		String mid = request.getParameter("mid");
		String mname = request.getParameter("mname");
		String mpw = request.getParameter("mpw");

		Member member = new Member();

		member.setMemberId(mid);
		member.setMemberName(mname);
		member.setMemberPw(mpw);

		MemberManage dao = MemberManage.getInstance();
		if (dao.updateMember(member)) {
			// {"returnCode": "success", "memberId": "user1", "memberPw": "1234", "memberName": "사용자"}
			String json = "{\"returnCode\": \"success\", "
						 + "\"memberId\": \"" + mid + "\", "
						 + "\"memberPw\": \"" + mpw + "\", "
						 + "\"memberName\": \"" + mname + "\"}";
			response.getWriter().print(json);
		} else {
			String json ="{\"returnCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}

}
