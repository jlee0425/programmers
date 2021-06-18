import { notCompleted } from '../코딩테스트연습/Hash/완주못한선수';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('완주하지 못한 선수', () => {
	it('["leo", "kiki", "eden"]	["eden", "kiki"]', () => {
		expect(notCompleted(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).to.eql(
			'leo',
		);
	});

	it('["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]', () => {
		expect(
			notCompleted(
				['mislav', 'stanko', 'mislav', 'ana'],
				['stanko', 'ana', 'mislav'],
			),
		).to.eql('mislav');
	});

	it('["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]', () => {
		expect(
			notCompleted(
				['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
				['josipa', 'filipa', 'marina', 'nikola'],
			),
		).to.eql('vinko');
	});
});
