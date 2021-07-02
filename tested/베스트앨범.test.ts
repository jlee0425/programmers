import { bestAlbum } from '../코딩테스트연습/Hash/베스트앨범';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('베스트 앨범', () => {
	it('["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]', () => {
		expect(
			bestAlbum(
				['classic', 'pop', 'classic', 'classic', 'pop'],
				[500, 600, 150, 800, 2500],
			),
		).to.eql([4, 1, 3, 0]);
	});
});
