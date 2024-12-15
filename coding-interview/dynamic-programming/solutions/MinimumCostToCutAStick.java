import java.util.Arrays;

// https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
public class MinimumCostToCutAStick {

	// 记忆化搜索
	public static int minCost1(int n, int[] cuts) {
		int m = cuts.length;
		Arrays.sort(cuts);
		int[] arr = new int[m + 2];
		arr[0] = 0;
		for (int i = 1; i <= m; ++i) {
			arr[i] = cuts[i - 1];
		}
		arr[m + 1] = n;
		int[][] dp = new int[m + 2][m + 2];
		for (int i = 1; i <= m; i++) {
			for (int j = 1; j <= m; j++) {
				dp[i][j] = -1;
			}
		}
		return f(arr, 1, m, dp);
	}
	
	// 切点[l....r]，决定一个顺序
	// 让切点都切完，总代价最小
	public static int f(int[] arr, int l, int r, int[][] dp) {
		if (l > r) {
			return 0;
		}
		if (l == r) {
			return arr[r + 1] - arr[l - 1];
		}
		if (dp[l][r] != -1) {
			return dp[l][r];
		}
		int ans = Integer.MAX_VALUE;
		for (int k = l; k <= r; k++) {
			ans = Math.min(ans, f(arr, l, k - 1, dp) + f(arr, k + 1, r, dp));
		}
		ans += arr[r + 1] - arr[l - 1];
		dp[l][r] = ans;
		return ans;
	}

	// 严格位置依赖的动态规划
	public static int minCost2(int n, int[] cuts) {
		int m = cuts.length;
		Arrays.sort(cuts);
		int[] arr = new int[m + 2];
		arr[0] = 0;
		for (int i = 1; i <= m; ++i) {
			arr[i] = cuts[i - 1];
		}
		arr[m + 1] = n;
		int[][] dp = new int[m + 2][m + 2];
		for (int i = 1; i <= m; i++) {
			dp[i][i] = arr[i + 1] - arr[i - 1];
		}
		for (int l = m - 1, next; l >= 1; l--) {
			for (int r = l + 1; r <= m; r++) {
				next = Integer.MAX_VALUE;
				for (int k = l; k <= r; k++) {
					next = Math.min(next, dp[l][k - 1] + dp[k + 1][r]);
				}
				dp[l][r] = arr[r + 1] - arr[l - 1] + next;
			}
		}
		return dp[1][m];
	}

}
