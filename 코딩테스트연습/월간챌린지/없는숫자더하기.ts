/**
 * see: https://programmers.co.kr/learn/courses/30/lessons/86051
 */

const sumOfVacants = (nums: number[]) => {
	return 45 - nums.reduce((acc, cur) => acc + cur, 0);
};
