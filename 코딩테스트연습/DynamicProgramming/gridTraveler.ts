/**
 * in a 2D grid(x * y), staring from (0, 0), how many ways can you travel to (x, y)?
 * you may only move down or right.
 */

const gridTraveler = (x: number, y: number, dp = {}): number => {
	const key = `${x},${y}`;
	if (key in dp) return dp[key];
	if (x === 0 || y === 0) return 0;
	if (x === 1 || y === 1) return 1;
	dp[key] = gridTraveler(x - 1, y, dp) + gridTraveler(x, y - 1, dp);
	return dp[key];
};

gridTraveler(3, 4);

const gridTabulation = (m: number, n: number): number[][] => {
	const table = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
	table[1][1] = 1;

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i < m) table[i + 1][j] += table[i][j];
			if (j < n) table[i][j + 1] += table[i][j];
		}
	}
	return table;
};

console.table(gridTabulation(10, 8));
