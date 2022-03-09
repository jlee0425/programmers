// import { jointPath } from './../CodingTest/2021Kakao/합승택시';
// import { expect } from 'chai';
// import { describe } from 'mocha';

// describe('합승 택시 요금', () => {
// 	it('6	4	6	2	[[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]', () => {
// 		expect(
// 			jointPath(6, 4, 6, 2, [
// 				[4, 1, 10],
// 				[3, 5, 24],
// 				[5, 6, 2],
// 				[3, 1, 41],
// 				[5, 1, 24],
// 				[4, 6, 50],
// 				[2, 4, 66],
// 				[2, 3, 22],
// 				[1, 6, 25],
// 			]),
// 		).to.equal(82);
// 	});
// });

const gradeList = {
  F: 0,
  'D-': 1,
  D0: 2,
  'D+': 3,
  'C-': 4,
  C0: 5,
  'C+': 6,
  'B-': 7,
  B0: 8,
  'B+': 9,
  'A-': 10,
  A0: 11,
  'A+': 12
}
function solution (grades) {
  var answer = []
  let transcript = new Map()

  for (let g of grades) {
    const [cl, gr] = g.split(' ')
    console.log(cl, gr, gradeList[gr])

    // transcript.set(cl, (Math.max((transcript.get(cl) || 0), gradeList[gr])));
    transcript.set('?', 0)
  }

  console.log('transcript', transcript)

  return answer
}
