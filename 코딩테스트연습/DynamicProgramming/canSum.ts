/**
 * a number in array can be used as many times as needed.
 * all numbers are non-negative.
 *
 * @param target
 * @param numbers
 * @returns boolean indicating whether the target number can be made by adding numbers from the given array
 *
 * ex) canSum(7, [5, 3, 4, 7]) -> true
 * ex) canSum(7, [2, 4]) -> false
 */

const canSum_DP = (target: number, numbers: number[], dp = {}) => {
	if (target in dp) return dp[target];
	if (target === 0) return true;
	if (target < 0) return false;

	for (let num of numbers) {
		const remainder = target - num;
		const res = canSum_DP(remainder, numbers, dp);
		if (res) {
			dp[target] = res;
			return true;
		}
	}

	dp[target] = false;
	return false;
};

const canSum = (target: number, numbers: number[]): boolean => {
	if (target === 0) return true;
	if (target < 0) return false;

	for (let num of numbers) {
		if (canSum(target - num, numbers)) return true;
	}

	return false;
};

const canSumTable = (target: number, nums: number[]): boolean[] => {
	const res = new Array(target + 1).fill(false);

	for (let num of nums) {
		res[num] = true;
	}
	for (let i = 0; i <= nums.length; i++) {
		if (res[i]) {
			for (let j = i; j <= target; j++) {
				if (res[j]) {
					if (i + j <= target) res[i + j] = true;
				}
			}
		}
	}

	return res;
};

console.table(canSumTable(7, [2, 3]));
console.table(canSumTable(7, [5, 4, 3]));
// console.log(canSum_DP(7, [2, 3]));
// console.log(canSum_DP(7, [5, 3, 4, 7]));
// console.log(canSum_DP(7, [2, 4]));
// console.log(canSum_DP(8, [2, 3, 5]));
// console.log(canSum_DP(300, [7, 14]));

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));
