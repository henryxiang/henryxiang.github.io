// https://leetcode.cn/problems/predict-the-winner/
public class PredictTheWinner {

	// 暴力尝试
	public static boolean predictTheWinner1(int[] nums) {
		int sum = 0;
		for (int num : nums) {
			sum += num;
		}
		int n = nums.length;
		int first = f1(nums, 0, n - 1);
		int second = sum - first;
		return first >= second;
	}

	// nums[l...r]范围上的数字进行游戏，轮到玩家1
	// 返回玩家1最终能获得多少分数，玩家1和玩家2都绝顶聪明
	public static int f1(int[] nums, int l, int r) {
		if (l == r) {
			return nums[l];
		}
		if (l == r - 1) {
			return Math.max(nums[l], nums[r]);
		}
		// l....r 不只两个数
		// 可能性1 ：玩家1拿走nums[l] l+1...r
		int p1 = nums[l] + Math.min(f1(nums, l + 2, r), f1(nums, l + 1, r - 1));
		// 可能性2 ：玩家1拿走nums[r] l...r-1
		int p2 = nums[r] + Math.min(f1(nums, l + 1, r - 1), f1(nums, l, r - 2));
		return Math.max(p1, p2);
	}

	// 记忆化搜索
	public static boolean predictTheWinner2(int[] nums) {
		int sum = 0;
		for (int num : nums) {
			sum += num;
		}
		int n = nums.length;
		int[][] dp = new int[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = i; j < n; j++) {
				dp[i][j] = -1;
			}
		}
		int first = f2(nums, 0, n - 1, dp);
		int second = sum - first;
		return first >= second;
	}

	public static int f2(int[] nums, int l, int r, int[][] dp) {
		if (dp[l][r] != -1) {
			return dp[l][r];
		}
		int ans;
		if (l == r) {
			ans = nums[l];
		} else if (l == r - 1) {
			ans = Math.max(nums[l], nums[r]);
		} else {
			int p1 = nums[l] + Math.min(f2(nums, l + 2, r, dp), f2(nums, l + 1, r - 1, dp));
			int p2 = nums[r] + Math.min(f2(nums, l + 1, r - 1, dp), f2(nums, l, r - 2, dp));
			ans = Math.max(p1, p2);
		}
		dp[l][r] = ans;
		return ans;
	}

	// 严格位置依赖的动态规划
	public static boolean predictTheWinner3(int[] nums) {
		int sum = 0;
		for (int num : nums) {
			sum += num;
		}
		int n = nums.length;
		int[][] dp = new int[n][n];
		for (int i = 0; i < n - 1; i++) {
			dp[i][i] = nums[i];
			dp[i][i + 1] = Math.max(nums[i], nums[i + 1]);
		}
		dp[n - 1][n - 1] = nums[n - 1];
		for (int l = n - 3; l >= 0; l--) {
			for (int r = l + 2; r < n; r++) {
				dp[l][r] = Math.max(
						nums[l] + Math.min(dp[l + 2][r], dp[l + 1][r - 1]),
						nums[r] + Math.min(dp[l + 1][r - 1], dp[l][r - 2]));
			}
		}
		int first = dp[0][n - 1];
		int second = sum - first;
		return first >= second;
	}

}
