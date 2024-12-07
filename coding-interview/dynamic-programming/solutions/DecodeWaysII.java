import java.util.Arrays;

public class DecodeWaysII {

	// 1. brute-force solution without modulus (incorrect answer)
	public static int numDecodings1(String str) {
		return f1(str.toCharArray(), 0);
	}

	// compute decode ways for substring s[i..]
	public static int f1(char[] s, int i) {
		if (i == s.length) {
			return 1;
		}
		if (s[i] == '0') {
			return 0;
		}
		// s[i] != '0'
		// decode s[i] only
		int ans = f1(s, i + 1) * (s[i] == '*' ? 9 : 1);
		// decode s[i] and s[i+1] combined
		if (i + 1 < s.length) { // s[i+1] exists
			if (s[i] != '*' && s[i+1] != '*') { // case 1: digit + digit
				if ((s[i] - '0') * 10 + s[i + 1] - '0' <= 26) {
					ans += f1(s, i + 2);
				}
			} else if (s[i] != '*' && s[i+1] == '*') { // case 2: digit + '*'
				if (s[i] == '1') {
					ans += f1(s, i + 2) * 9;
				}
				if (s[i] == '2') {
					ans += f1(s, i + 2) * 6;
				}
			} else if (s[i] == '*' && s[i+1] != '*') { // case 3: '*' + digit
				if (s[i + 1] <= '6') {
					ans += f1(s, i + 2) * 2;
				} else {
					ans += f1(s, i + 2);
				}
			} else { // case 4: '*' + '*'
				ans += f1(s, i + 2) * 15;
			}
		}
		return ans;
	}

	// 2. recursive solution with memoization, modulus answer
	public static long mod = 1000000007;

	public static int numDecodings2(String str) {
		char[] s = str.toCharArray();
		long[] dp = new long[s.length];
		Arrays.fill(dp, -1);
		return (int) f2(s, 0, dp);
	}

	public static long f2(char[] s, int i, long[] dp) {
		if (i == s.length) {
			return 1;
		}
		if (s[i] == '0') {
			return 0;
		}
		if (dp[i] != -1) {
			return dp[i];
		}
		long ans = f2(s, i + 1, dp) * (s[i] == '*' ? 9 : 1); // decode s[i] only
		if (i + 1 < s.length) { // decode s[i] and s[i+1] together
			if (s[i] != '*' && s[i+1] != '*') {
				if ((s[i] - '0') * 10 + s[i + 1] - '0' <= 26) {
					ans += f2(s, i + 2, dp);
				}
			} else if (s[i] != '*' && s[i+1] == '*') {
				if (s[i] == '1') {
					ans += f2(s, i + 2, dp) * 9;
				}
				if (s[i] == '2') {
					ans += f2(s, i + 2, dp) * 6;
				}
			} else if (s[i] == '*' && s[i + 1] != '*') {
				if (s[i + 1] <= '6') {
					ans += f2(s, i + 2, dp) * 2;
				} else {
					ans += f2(s, i + 2, dp);
				}
			} else {
				ans += f2(s, i + 2, dp) * 15;
			}
		}
		ans %= mod;
		dp[i] = ans;
		return ans;
	}

	// 3. iterative solution
	public static int numDecodings3(String str) {
		char[] s = str.toCharArray();
		int n = s.length;
		long[] dp = new long[n + 1];
		dp[n] = 1;
		for (int i = n - 1; i >= 0; i--) {
			if (s[i] == '0') continue;
			dp[i] = (s[i] == '*' ? 9 : 1) * dp[i + 1];
			if (i + 1 < n) {
				if (s[i] != '*' && s[i + 1] != '*') {
					if ((s[i] - '0') * 10 + s[i + 1] - '0' <= 26) {
						dp[i] += dp[i + 2];
					}
				} else if (s[i] != '*' && s[i + 1] == '*') {
					if (s[i] == '1') {
						dp[i] += dp[i + 2] * 9;
					}
					if (s[i] == '2') {
						dp[i] += dp[i + 2] * 6;
					}
				} else if (s[i] == '*' && s[i + 1] != '*') {
					if (s[i + 1] <= '6') {
						dp[i] += dp[i + 2] * 2;
					} else {
						dp[i] += dp[i + 2];
					}
				} else {
					dp[i] += dp[i + 2] * 15;
				}
			}
			dp[i] %= mod;
		}
		return (int) dp[0];
	}

	// 4. iterative solution with state compression
	public static int numDecodings4(String str) {
		char[] s = str.toCharArray();
		int n = s.length;
		long cur = 0, next = 1, nextNext = 0;
		for (int i = n - 1; i >= 0; i--) {
			if (s[i] == '0') continue;
			cur = (s[i] == '*' ? 9 : 1) * next;
			if (i + 1 < n) {
				if (s[i] != '*' && s[i+1] != '*') {
					if ((s[i] - '0') * 10 + s[i + 1] - '0' <= 26) {
						cur += nextNext;
					}
				} else if (s[i] != '*' && s[i+1] == '*') {
					if (s[i] == '1') {
						cur += nextNext * 9;
					}
					if (s[i] == '2') {
						cur += nextNext * 6;
					}
				} else if (s[i] == '*' && s[i+1] != '*') {
					if (s[i + 1] <= '6') {
						cur += nextNext * 2;
					} else {
						cur += nextNext;
					}
				} else {
					cur += nextNext * 15;
				}
			}
			cur %= mod;
			nextNext = next;
			next = cur;
			cur = 0;
		}
		return (int) next;
	}

}
