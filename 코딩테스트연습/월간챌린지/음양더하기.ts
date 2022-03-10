// see: https://programmers.co.kr/learn/courses/30/lessons/76501

const absSigns = (absolutes: number[], signs: boolean[]) => {
	return absolutes.reduce(
		(acc, cur, i) => (signs[i] ? acc + cur : acc - cur),
		0
	);
};
