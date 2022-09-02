package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AddMemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 요청정보 param.

		response.setCharacterEncoding("utf-8"); // 한글 처리를 위해
		response.setContentType("text/json; charset=utf-8");

		String mid = request.getParameter("mid");
		String mpw = request.getParameter("mpw");
		String mname = request.getParameter("mname");

		Member member = new Member();

		member.setMemberId(mid);
		member.setMemberPw(mpw);
		member.setMemberName(mname);

		MemberManage dao = MemberManage.getInstance();

		int addCnt = dao.registCustomer(member);

		// 처리 결과를 ajax호출한 페이지로 반환.
		if (addCnt == 1) {
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
