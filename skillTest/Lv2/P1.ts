export const productOfArrays = (arr1: number[][], arr2: number[][]) => {
	const a1Rows = arr1.length,
		a1Cols = arr1[0].length,
		a2Cols = arr2[0].length;

	const answer = new Array(a1Rows);

	for (let i = 0; i < a1Rows; i++) {
		answer[i] = new Array(a2Cols);
		for (let j = 0; j < a2Cols; j++) {
			answer[i][j] = 0;
			for (let k = 0; k < a1Cols; k++) {
				answer[i][j] += arr1[i][k] * arr2[k][j];
			}
		}
	}

	return answer;
};
