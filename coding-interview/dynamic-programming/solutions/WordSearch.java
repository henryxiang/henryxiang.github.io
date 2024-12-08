public class WordSearch {

	// Note: This problem does not have iterative solution 
	// because the subproblem not only depend on i and j
	// but also depend on the visited state of the board.
	// For the same i and j, there are probably different
	// solutions for different board state.

	public static boolean exist(char[][] board, String word) {
		char[] w = word.toCharArray();
		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[0].length; j++) {
				if (f(board, i, j, w, 0)) {
					return true;
				}
			}
		}
		return false;
	}

	// starting from b[i][j], is there a match with w[k..]
	// recursive solution with backtracking
	public static boolean f(char[][] b, int i, int j, char[] w, int k) {
		if (k == w.length) {
			return true;
		}
		// check the boundaries and character match
		if (i < 0 || i == b.length || j < 0 || j == b[0].length || b[i][j] != w[k]) {
			return false;
		}
		// within the boundary of b and b[i][j] == w[k]
		char tmp = b[i][j]; // needed for backtracking
		b[i][j] = 0; // mark b[i][j] as visited
		boolean ans = f(b, i - 1, j, w, k + 1)  // search up
			    || f(b, i + 1, j, w, k + 1)     // search down 
				|| f(b, i, j - 1, w, k + 1)     // search left
				|| f(b, i, j + 1, w, k + 1);    // search right
		b[i][j] = tmp; // backtracking - restore the value of b[i][j]
		return ans;
	}

}
