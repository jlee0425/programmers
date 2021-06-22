import { rotateMatrix } from './../코딩테스트/2021Dev_Matching/행렬테두리회전';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('행렬 테두리 회전하기', () => {
	it('6	6	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]', () => {
		expect(
			rotateMatrix(6, 6, [
				[2, 2, 5, 4],
				[3, 3, 6, 6],
				[5, 1, 6, 3],
			]),
		).to.eql([8, 10, 25]);
	});

	it('3	3	[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]', () => {
		expect(
			rotateMatrix(3, 3, [
				[1, 1, 2, 2],
				[1, 2, 2, 3],
				[2, 1, 3, 2],
				[2, 2, 3, 3],
			]),
		).to.eql([1, 1, 5, 3]);
	});

	it('6	6	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]', () => {
		expect(rotateMatrix(100, 97, [[1, 1, 100, 97]])).to.eql([1]);
	});
});
