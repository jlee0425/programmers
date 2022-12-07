// see: https://programmers.co.kr/learn/courses/30/lessons/64061

const craneGame = (board: number[][], moves: number[]) => {
	let answer = 0;
	let stack = [];
	console.table(board);

	moves.forEach((num) => {
		let curDoll = -1;
		for (let i = board.length - 1; i >= 0; i--) {
			curDoll = board[i][num - 1];
			if (curDoll !== -1) {
				board[i][num - 1] = -1;
				break;
			}
		}
		if (curDoll === stack[stack.length - 1]) {
			stack.push(curDoll);
			// stack.pop();
			answer += 2;
		} else if (curDoll !== -1) {
			stack.push(curDoll);
		}
		console.table(board);
		console.log(stack);
	});

	return answer;
};

console.table(
	craneGame(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4]
	)
);
