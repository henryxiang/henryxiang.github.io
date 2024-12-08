public class DistinctSubsequencesII {

	// a b a a
	// 0 1 2 3
	//    {}                      all = 1
	// 0: {} {a}                  newAdd = 1 (all-cnt['a']); all = 2 (+=newAdd); cnt['a'] = 1 (+=newAdd)
	// 1: {}  {a}                 newAdd = 2 (all-cnt['b']); all = 4 (+=newAdd); cnt['b'] = 2 (+=newAdd) 
	//    {b} {ab}
	// 2: {}   {a}  {b}  {ab}     newAdd = 3 (all-cnt['a']); all = 7 (all + newAdd); cnt['a'] = 4 (+=newAdd)
	//    {a}* {aa} {ba} {aba}
	// 3: {}   {a}  {b}  {ab}     newAdd = 3 (all-cnt['a']); all = 10 (all + newAdd); cnt['a'] = 7 (+=newAdd)
	//    {aa} {ba} {aba}
	//    {a}* {aa}* {ba}* {aba}* 
	//    {aaa}  {baa}  {abaa}

	public static int distinctSubseqII(String s) {
		int mod = 1000000007;
		char[] str = s.toCharArray();
		int[] cnt = new int[26]; // number of subsequences ending with chr - 'a'
		int all = 1, // include empty string
			newAdd;
		for (char x : str) {
			newAdd = (all - cnt[x - 'a'] + mod) % mod;
			cnt[x - 'a'] = (cnt[x - 'a'] + newAdd) % mod;
			all = (all + newAdd) % mod;
		}
		return (all - 1 + mod) % mod;  // exclude empty string
	}

}
