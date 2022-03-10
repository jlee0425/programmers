/**
 * If there are multiple combinations, return any.
 * if there are no combinations, return null.
 *
 * @param target
 * @param nums
 * @returns any combination of numbers that combines to target or null.
 */
const howSum = (target: number, nums: number[], memo = {}): number[] | null => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	for (let n of nums) {
		const next = howSum(target - n, nums, memo);
		if (next) {
			memo[n] = [...next, n];
			return memo[n];
		}
	}
	memo[target] = null;
	return null;
};

const howSumTable = (target: number, nums: number[]): number[][] => {
	const table: (number[] | null)[] = new Array(target + 1).fill(null);

	for (let num of nums) table[num] = [num];
	for (let num of nums) {
		for (let i = num; i <= target; i++) {
			if (table[i] && num + i <= target) {
				table[i + num] = [...table[num], ...table[i]];
			}
		}
	}

	return table;
};

console.table(howSumTable(7, [2, 3]));
console.table(howSumTable(7, [3, 4, 7, 5]));
console.table(howSumTable(7, [2, 4]));
console.table(howSumTable(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));
