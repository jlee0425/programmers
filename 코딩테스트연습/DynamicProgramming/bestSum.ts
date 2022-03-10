/**
 * If there are multiple combinations, return the least amount of number.
 * if there are no combinations, return null.
 *
 * @param target
 * @param nums
 * @returns best combination of numbers that combines to target or null.
 */
const bestSum = (
	target: number,
	nums: number[],
	memo = {}
): number[] | null => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	let shortest: number[] | null = null;
	for (let n of nums) {
		const nextTarget = target - n;
		const result = bestSum(nextTarget, nums, memo);
		if (result) {
			const curCombination = [n, ...result];
			if (!shortest || shortest.length > curCombination.length) {
				shortest = curCombination;
			}
		}
	}

	memo[target] = shortest;
	return shortest;
};

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [3, 4, 7, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(100, [1, 2, 4, 25]));
