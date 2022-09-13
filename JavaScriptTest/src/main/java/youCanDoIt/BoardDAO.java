package youCanDoIt;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {

	public List<Board> getBoardList() {
		List<Board> list = new ArrayList<>();
		
		try {
			conn();
			String sql = "select bno, title, content, writer, to_char(creation_date, 'yyyy-mm-dd') as \"creation_date\" from tbl_board";
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

	public boolean deleteBoard(String bno) {
		
		int result = 0;
		
		try {
			conn();
			String sql = "delete tbl_board where bno = " + bno;
			pstmt = conn.prepareStatement(sql);
//			pstmt.setString(1, bno);

			result = pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		return result > 0 ? true : false;
	}

	// insert 성공하면 바로 꺼내서 가져오기.
	public Board insertBoard(Board board) {
		int result = 0;
		Board resultBoard = new Board();
		
		try {
			conn();
			String sql = "insert into tbl_board values(seq_board.nextval,?,?,?,sysdate)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, board.getTitle());
			pstmt.setString(2, board.getContent());
			pstmt.setString(3, board.getWriter());

			result = pstmt.executeUpdate();
			
			// insert 성공 => 해당하는 row 바로 가져오기(방금 넣어서 bno가 가장 높음)
			if (result > 0) {
				String getSql = "select bno, title, content, writer, to_char(creation_date, 'yyyy-mm-dd') as \"creation_date\" "
								+ "from tbl_board "
								+ "where bno = (select max(bno) from tbl_board)";
				pstmt = conn.prepareStatement(getSql);
				
				rs = pstmt.executeQuery();
				
				if (rs != null) {
					while (rs.next()) {
						resultBoard.setBno(rs.getInt("bno"));
						resultBoard.setTitle(rs.getString("title"));
						resultBoard.setContent(rs.getString("content"));
						resultBoard.setWriter(rs.getString("writer"));
						resultBoard.setCreationDate(rs.getString("creation_date"));
						System.out.println("insert후 가져오기성공 bno=" + resultBoard.getBno());
						return resultBoard;
					}
				} else {
					System.out.println("insert는 성공 가져오는 건 실패");
				}
			} else {
				System.out.println("insert도, insert된거 가져오기도 실패");
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		return resultBoard;
	}
}
