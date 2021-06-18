import { newid } from '../코딩테스트/2021Kakao/신규아이디';
import { expect } from 'chai';
import { describe } from 'mocha';

describe('신규 아이디 추천', () => {
	it('"...!@BaT#*..y.abcdefghijklm"', () => {
		expect(newid('...!@BaT#*..y.abcdefghijklm')).to.equal('bat.y.abcdefghi');
	});
	it('"z-+.^."', () => {
		expect(newid('z-+.^.')).to.equal('z--');
	});
	it('"=.="', () => {
		expect(newid('=.=')).to.equal('aaa');
	});
	it('"123_.def"', () => {
		expect(newid('123_.def')).to.equal('123_.def');
	});
	it('"abcdefghijklmn.p"', () => {
		expect(newid('abcdefghijklmn.p')).to.equal('abcdefghijklmn');
	});
	it('"aaaaaaaaaaaaaaaa"', () => {
		expect(newid('aaaaaaaaaaaaaaaa')).to.equal('aaaaaaaaaaaaaaa');
	});
	it('b......@', () => {
		expect(newid('b......@')).to.equal('bbb');
	});
});
