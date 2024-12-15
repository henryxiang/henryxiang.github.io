// https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
public class MinimumScoreTriangulationOfPolygon {

	// 记忆化搜索
	public static int minScoreTriangulation1(int[] arr) {
		int n = arr.length;
		int[][] dp = new int[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				dp[i][j] = -1;
			}
		}
		return f(arr, 0, n - 1, dp);
	}

	public static int f(int[] arr, int l, int r, int[][] dp) {
		if (dp[l][r] != -1) {
			return dp[l][r];
		}
		int ans = Integer.MAX_VALUE;
		if (l == r || l == r - 1) {
			ans = 0;
		} else {
			// l....r >=3
			// 0..1..2..3..4...5
			for (int m = l + 1; m < r; m++) {
				// l m r
				ans = Math.min(ans, f(arr, l, m, dp) + f(arr, m, r, dp) + arr[l] * arr[m] * arr[r]);
			}
		}
		dp[l][r] = ans;
		return ans;
	}

	// 严格位置依赖的动态规划
	public static int minScoreTriangulation2(int[] arr) {
		int n = arr.length;
		int[][] dp = new int[n][n];
		for (int l = n - 3; l >= 0; l--) {
			for (int r = l + 2; r < n; r++) {
				dp[l][r] = Integer.MAX_VALUE;
				for (int m = l + 1; m < r; m++) {
					dp[l][r] = Math.min(dp[l][r], dp[l][m] + dp[m][r] + arr[l] * arr[m] * arr[r]);
				}
			}
		}
		return dp[0][n - 1];
	}

}
