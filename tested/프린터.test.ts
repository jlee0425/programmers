import { printer } from '../CodingTest/Stack&Queue/프린터';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('프린터', () => {
	it('[2, 1, 3, 2]	2', () => {
		expect(printer([2, 1, 3, 2], 2)).to.eql(1);
	});

	it('[1, 1, 9, 1, 1, 1]	0', () => {
		expect(printer([1, 1, 9, 1, 1, 1], 0)).to.eql(5);
	});
});
