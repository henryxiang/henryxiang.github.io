public class UniqueSubstringInWraparoundString {

	public static int findSubstringInWraproundString(String str) {
		int n = str.length();
		int[] s = new int[n]; 
		// converting input str to int[] s
		// a -> 0, b -> 1, c -> 2, ... y -> 24, z -> 25
		for (int i = 0; i < n; i++) {
			s[i] = str.charAt(i) - 'a';
		}
		// dp[i] : the longest substring ending with character i in both str and base
		// e.g., if dp[i] = 4 (abcd, bcde, xyza, and etc), then there are 4 unique common substrings 
		int[] dp = new int[26];
		dp[s[0]] = 1;
		int len = 1, // length of the longest common substring
			cur, 	 // current character in s
			pre;	 // previous character in s
		for (int i = 1; i < n; i++) {
			cur = s[i];
			pre = s[i - 1];
			if ((pre == 25 && cur == 0) || pre + 1 == cur) {
				len++;
			} else {
				len = 1;
			}
			dp[cur] = Math.max(dp[cur], len);
		}
		int ans = 0;
		for (int i = 0; i < 26; i++) {
			ans += dp[i];
		}
		return ans;
	}

}
