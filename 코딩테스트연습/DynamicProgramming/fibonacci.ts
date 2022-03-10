/**
 * Dynamic Programming vs Recursion
 */

const fib_DP = (n: number, dp = {}): number => {
	if (n in dp) return dp[n];
	if (n <= 2) return 1;
	dp[n] = fib_DP(n - 1, dp) + fib_DP(n - 2, dp);
	return dp[n];
};

const fib2_recursion = (n: number): number => {
	if (n <= 2) return 1;
	return fib2_recursion(n - 1) + fib2_recursion(n - 2);
};

const fib_tabulation = (n: number): number[] => {
	const res = new Array(n + 1).fill(0);
	res[1] = 1;

	for (let i = 2; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}

	return res;
};

const fib_tabulation2 = (n: number): number[] => {
	const res = new Array(n + 1).fill(0);
	res[1] = 1;

	for (let i = 0; i <= n; i++) {
		res[i + 1] += res[i];
		res[i + 2] += res[i];
	}

	return res;
};

// console.time('memoization');
// fib_DP(30);
// console.timeEnd('memoization');
// console.log(fib_DP(30));

// console.time('recursion');
// const res = fib2_recursion(30);
// console.timeEnd('recursion');
// console.log(res);

console.time('tabulation');
console.table(fib_tabulation(50));
console.timeEnd('tabulation');

console.time('tabulation2');
console.table(fib_tabulation2(50));
console.timeEnd('tabulation2');
