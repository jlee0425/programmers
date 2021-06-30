import { keypad } from '../코딩테스트/2020Kakao_Internship/키패드';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('키패드 누르기', () => {
	it('[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"', () => {
		expect(keypad([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')).to.eql(
			'LRLLLRLLRRL',
		);
	});

	it('[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"', () => {
		expect(keypad([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')).to.eql(
			'LRLLRRLLLRR',
		);
	});

	it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	', () => {
		expect(keypad([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')).to.eql(
			'LLRLLRLLRL',
		);
	});
});
