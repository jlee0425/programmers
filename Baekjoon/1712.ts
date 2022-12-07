// see: https://www.acmicpc.net/problem/1712

const calcBreakEvenPoint = (
	constant: number,
	variable: number,
	target: number
): number => {
	if (target < variable) return -1;
	const pairs = {
		'{': '}',
		'[': ']',
		'(': ')',
	};
	console.table(pairs);
	return Math.floor(constant / (target - variable)) + 1;
};

const [c, v, target] = process.argv.slice(2).map(Number);

console.log(calcBreakEvenPoint(c, v, target));
