import { ranking } from '../코딩테스트/2021Kakao/순위검색';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('2021 KAKAO BLIND REC 순위 검색', () => {
	it('6 devs, 6 queries', () => {
		expect(
			ranking(
				[
					'java backend junior pizza 150',
					'python frontend senior chicken 210',
					'python frontend senior chicken 150',
					'cpp backend senior pizza 260',
					'java backend junior chicken 80',
					'python backend senior chicken 50',
				],
				[
					'java and backend and junior and pizza 100',
					'python and frontend and senior and chicken 200',
					'cpp and - and senior and pizza 250',
					'- and backend and senior and - 150',
					'- and - and - and chicken 100',
					'- and - and - and - 150',
				],
			),
		).to.eql([1, 1, 1, 1, 2, 4]);
	});
});
