export const rotateMatrix = (
	rows: number,
	columns: number,
	queries: number[][],
): number[] => {
	const matrix = [];

	for (let i = 0; i < rows; i++) {
		matrix[i] = [];
		for (let j = 0; j < columns; j++) {
			matrix[i][j] = i * columns + j + 1;
		}
	}

	const ans = [];

	queries.map(([r1, c1, r2, c2]) => {
		let queue = [];
		let [row, col] = [r1, c1 - 1];
		const count = (r2 - r1 + 1) * (c2 - c1 + 1) - (r2 - r1 - 1) * (c2 - c1 - 1);
		for (let i = 0; i < count; i++) {
			queue.push(matrix[row][col]);
			if (col === c1 - 1 && row != r1 - 1) {
				row--;
			} else if (row == r1 - 1 && col != c2 - 1) {
				col++;
			} else if (col == c2 - 1 && row != r2 - 1) {
				row++;
			} else {
				col--;
			}
		}

		ans.push(Math.min(...queue));

		[row, col] = [r1 - 1, c1 - 1];

		for (let i = 0; i < count; i++) {
			matrix[row][col] = queue.shift();
			if (col === c1 - 1 && row != r1 - 1) {
				row--;
			} else if (row == r1 - 1 && col != c2 - 1) {
				col++;
			} else if (col == c2 - 1 && row != r2 - 1) {
				row++;
			} else {
				col--;
			}
		}
	});

	return ans;
};
