import { supoja } from '../코딩테스트연습/BruteForce/모의고사';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('모의고사', () => {
	it('[1,2,3,4,5]', () => {
		expect(supoja([1, 2, 3, 4, 5])).to.eql([1]);
	});

	it('[1,3,2,4,2]', () => {
		expect(supoja([1, 3, 2, 4, 2])).to.eql([1, 2, 3]);
	});

	it('[0,0,0,0,0]', () => {
		expect(supoja([0, 0, 0, 0, 0])).to.eql([1, 2, 3]);
	});
});
