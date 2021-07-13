import { hIndex } from './../코딩테스트연습/Sort/H-Index';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('H-Index', () => {
	it('[3, 0, 6, 1, 5]', () => {
		expect(hIndex([3, 0, 6, 1, 5])).to.equal(3);
	});

	it('[3, 0, 7, 1, 8]', () => {
		expect(hIndex([3, 0, 7, 1, 8])).to.equal(3);
	});

	it('[3, 0, 12, 1, 15]', () => {
		expect(hIndex([3, 0, 12, 1, 15])).to.equal(3);
	});
});
