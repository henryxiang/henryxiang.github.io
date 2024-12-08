public class LongestValidParentheses {

	public static int longestValidParentheses(String str) {
		char[] s = str.toCharArray();
		// dp[i] : the longest valid parentheses for substring ending at i 
		int[] dp = new int[s.length];
		int ans = 0, p;
		for (int i = 1; i < s.length; i++) {
			if (s[i] == ')') {
				p = i - dp[i - 1] - 1;  // position of the matching left parenthese
				if (p >= 0 && s[p] == '(') {  // found matching left parenthese
					dp[i] = dp[i - 1] + 2 + (p - 1 >= 0 ? dp[p - 1] : 0);
				}
			}
			ans = Math.max(ans, dp[i]);
		}
		return ans;
	}

}
