package jdbc;

import java.util.ArrayList;
import java.util.List;

public class MemberManage extends DAO {
	
	//싱글톤
	private static MemberManage mm = new MemberManage();
	
	private MemberManage() {
		
	}
	
	public static MemberManage getInstance() {
		return mm;
	}
	
	//로그인 메소드
	public Member loginInfo(String id) {
		Member member = null;
		try {
			conn();
			//id -> PK
			// 1 row
			// id / pw / ..../ 
			String sql = "select * from bankmember where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				member = new Member();
				//MemberManage -> 로그인 메소드
				//setAccountId -> setMemberId
				member.setMemberId(rs.getString("member_id"));
				member.setMemberPw(rs.getString("member_pw"));
				member.setMemberName(rs.getString("member_name"));
				member.setRole(rs.getString("role"));
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return member;
	}
	
	//고객 등록 메소드
	public int registCustomer(Member member) {
		int result = 0;
		try {
			conn();
			String sql = "insert into bankMember (member_id, member_pw, "
					+ "member_name, role) values (?,?,?,?)";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberId());
			pstmt.setString(2, member.getMemberPw());
			pstmt.setString(3, member.getMemberName());
			pstmt.setString(4, member.getRole());
			
			result = pstmt.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return result;
	}
	
	// 전체 고객 반환 메서드
	public List<Member> getMembers() {
		List<Member> list = new ArrayList<>();
		
		try {
			conn();
			String sql = "select * from bankmember";
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				Member member = new Member();
				member.setMemberId(rs.getString("member_id"));
				member.setMemberPw(rs.getString("member_pw"));
				member.setMemberName(rs.getString("member_name"));
				member.setRole(rs.getString("role"));
				list.add(member);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
		return list;
	}

	// 아이디를 기준으로 삭제처리 후, 정상처리되면 true or false반환.
	public boolean delMember(String id) {
		
		try {
			conn();
			String sql = "delete bankmember where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			
			int result = pstmt.executeUpdate();
			if (result > 0) {
				return true; // 정상 처리
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
		return false; // 비정상 처리
	}

	public boolean updateMember(Member member) {

		int result = 0;
		try {
			conn();
			String sql = "update bankMember set member_pw = ?, member_name = ?, role = ? where member_id = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, member.getMemberPw());
			pstmt.setString(2, member.getMemberName());
			pstmt.setString(3, member.getRole());
			pstmt.setString(4, member.getMemberId());
			
			result = pstmt.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return (result > 0) ? true : false;
	}
	
}
