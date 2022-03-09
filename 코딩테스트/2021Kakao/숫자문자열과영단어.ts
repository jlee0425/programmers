/**
 * see: https://programmers.co.kr/learn/courses/30/lessons/81301
 */

const STRING_TO_NUM = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

const numStringToNum = (str: string): number => {
	let answer = str;
	Object.entries(STRING_TO_NUM).forEach(([str, num]) => {
		answer = answer.replace(new RegExp(str, 'g'), String(num));
	});

	return Number(answer);
};

console.log(numStringToNum('one4seveneight'));
console.log(numStringToNum('100'));
