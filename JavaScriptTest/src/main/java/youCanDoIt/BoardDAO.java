package youCanDoIt;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {

	public List<Board> getBoardList() {
		List<Board> list = new ArrayList<>();
		
		String sql = "select bno, title, content, writer, to_char(creation_date, 'yyyy-mm-dd') as \"creation_date\" from tbl_board";
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				Board board = new Board();
				board.setBno(rs.getInt("bno"));
				board.setTitle(rs.getString("title"));
				board.setContent(rs.getString("content"));
				board.setWriter(rs.getString("writer"));
				board.setCreationDate(rs.getString("creation_date"));
				list.add(board);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

	public boolean deleteBoard(int bno) {

		
		return false;
	}

	public boolean insertBoard(Board board) {
		int result = 0;
		try {
			conn();
			String sql = "insert into tbl_board values(?,?,?,?,to_date(?, 'yyyy-mm-dd')";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, board.getBno());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getWriter());
			pstmt.setString(5, board.getCreationDate());

			result = pstmt.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return (result > 0) ? true : false;
	}
}
