import { camouflage } from './../CodingTest/Hash/위장';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('위장', () => {
	it('[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]', () => {
		expect(
			camouflage([
				['yellowhat', 'headgear'],
				['bluesunglasses', 'eyewear'],
				['green_turban', 'headgear'],
			]),
		).to.equal(5);
	});

	it('[["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]', () => {
		expect(
			camouflage([
				['crowmask', 'face'],
				['bluesunglasses', 'face'],
				['smoky_makeup', 'face'],
			]),
		).to.equal(3);
	});
});
