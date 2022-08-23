package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AddBankMemberServlet")
public class AddBankMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AddBankMemberServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		
		String id = request.getParameter("id");
		String nm = request.getParameter("name");
		String pw = request.getParameter("pw");
		String rl = request.getParameter("role");
		
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberName(nm);
		member.setMemberPw(pw);
		member.setRole(rl);
		
		MemberManage.getInstance().registCustomer(member);
		
//		response.sendRedirect("index.html");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
