package youCanDoIt;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 조회의 기능 구현.
		response.setCharacterEncoding("utf-8"); // 한글 처리를 위해
		response.setContentType("text/json; charset=utf-8");
		System.out.println("들어왔어");
		BoardDAO dao = new BoardDAO();
		List<Board> list = dao.getBoardList();

		JsonArray arr = new JsonArray();
		for (Board board : list) {
			JsonObject obj = new JsonObject();
			obj.addProperty("bno", board.getBno());
			obj.addProperty("title", board.getTitle());
			obj.addProperty("content", board.getContent());
			obj.addProperty("writer", board.getWriter());
			obj.addProperty("creation_date", board.getCreationDate());
			arr.add(obj);
		}

		Gson gson = new GsonBuilder().create(); // instance 생성.

		String json = gson.toJson(arr); // toJson메소드(cal)
		response.getWriter().print(json); // 출력스트림으로 출력.

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		// 추가, 삭제의 기능을 구현.
		// job insert/delete

		String job = request.getParameter("job");

		if (job.equals("insert")) {
			Board board = new Board();
			board.setBno(Integer.parseInt(request.getParameter("bno")));
			board.setTitle(request.getParameter("title"));
			board.setContent(request.getParameter("content"));
			board.setWriter(request.getParameter("writer"));
			board.setWriter(request.getParameter("creation_date"));
			
			BoardDAO dao = new BoardDAO();

			if (dao.insertBoard(board)) {

				JsonObject obj = new JsonObject();
				obj.addProperty("returnCode", "success");
				obj.addProperty("bno", board.getBno());
				obj.addProperty("title", board.getTitle());
				obj.addProperty("content", board.getContent());
				obj.addProperty("writer", board.getWriter());
				obj.addProperty("creation_date", board.getCreationDate());

				Gson gson = new GsonBuilder().create(); // instance 생성.

				String json = gson.toJson(obj); // toJson메소드(cal)
				response.getWriter().print(json);
			} else {
				response.getWriter().print("fail");
			}
		} else if (job.equals("delete")) {

		}

	}

}
