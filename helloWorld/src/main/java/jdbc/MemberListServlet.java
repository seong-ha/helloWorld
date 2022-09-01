package jdbc;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MemberListServlet
 */
@WebServlet("/MemberList")
public class MemberListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MemberListServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// json 데이터 생성{key: value}
		
		response.setCharacterEncoding("utf-8"); // 한글 처리를 위해
		response.setContentType("text/json; charset=utf-8");
		
		MemberManage dao = MemberManage.getInstance();
		List<Member> list = dao.getMembers(); // [{"memberId":"user1" , "memberPw": "1234" ...}, ...]
		
		String json = "[";
		
		for (int i = 0; i < list.size(); i++) {
			json += "{\"memberId\" : \"" + list.get(i).getMemberId()
				  + "\", \"memberPw\" : \"" + list.get(i).getMemberPw()
				  + "\", \"memberName\" : \"" + list.get(i).getMemberName()
				  + "\", \"role\" : \"" + list.get(i).getRole() + "\"}";
			
			if (i != list.size() - 1) {
				json += ", ";
			}
					
		}
		
		json += "]";
		
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("del_id");
		System.out.println(id);
		MemberManage dao = MemberManage.getInstance();
		boolean idExist = dao.delMember(id);
		
		if (idExist) {
			response.getWriter().print("success");
		} else {
			response.getWriter().print("fail");
		}
	}

}
