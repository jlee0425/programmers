/**
 * [문제]
 *
 * 지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info,
 * 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
 * 각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 *
 * [제한사항]
 * info 배열의 크기는 1 이상 50,000 이하입니다.
 * info 배열 각 원소의 값은 지원자가 지원서에 입력한 4가지 값과 코딩테스트 점수를 합친
 * "개발언어 직군 경력 소울푸드 점수" 형식입니다.
 * 개발언어는 cpp, java, python 중 하나입니다.
 * 직군은 backend, frontend 중 하나입니다.
 * 경력은 junior, senior 중 하나입니다.
 * 소울푸드는 chicken, pizza 중 하나입니다.
 * 점수는 코딩테스트 점수를 의미하며, 1 이상 100,000 이하인 자연수입니다.
 * 각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.
 * query 배열의 크기는 1 이상 100,000 이하입니다.
 * query의 각 문자열은 "[조건] X" 형식입니다.
 *
 * [조건]은 "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열입니다.
 * 언어는 cpp, java, python, - 중 하나입니다.
 * 직군은 backend, frontend, - 중 하나입니다.
 * 경력은 junior, senior, - 중 하나입니다.
 * 소울푸드는 chicken, pizza, - 중 하나입니다.
 * '-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.
 * X는 코딩테스트 점수를 의미하며 조건을 만족하는 사람 중 X점 이상 받은 사람은 모두 몇 명인 지를 의미합니다.
 * 각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.
 * 예를 들면, "cpp and - and senior and pizza 500"은 "cpp로 코딩테스트를 봤으며,
 * 경력은 senior 이면서 소울푸드로 pizza를 선택한 지원자 중
 * 코딩테스트 점수를 500점 이상 받은 사람은 모두 몇 명인가?"를 의미합니다.
 *
 * @param info programmers
 * @param query query
 * @returns number of programmers that matches each query
 */

function dev(this: any, lang, field, exp, food, score) {
	this.lang = lang;
	this.field = field;
	this.exp = exp;
	this.food = food;
	this.score = score;
}

export const ranking = (info: string[], query: string[]): number[] => {
	const ans: number[] = new Array(query.length).fill(0);
	const queries = [];
	const devs = [];

	for (let i = 0; i < query.length; i++) {
		let [lang, field, exp, foodScore] = query[i].split(' and ');
		let [food, score] = foodScore.split(' ');
		queries.push(new dev(lang, field, exp, food, score));
	}

	for (let j = 0; j < info.length; j++) {
		let [pLang, pField, pExp, pFood, pScore] = info[j].split(' ');
		devs.push(new dev(pLang, pField, pExp, pFood, pScore));
	}

	for (let i = 0; i < queries.length; i++) {
		const q = queries[i];
		devs
			.filter((d) => matchScore(d.score, q.score))
			.forEach((dev) => {
				if (
					matchLang(dev.lang, q.lang) &&
					matchExp(dev.exp, q.exp) &&
					matchField(dev.field, q.field) &&
					matchFood(dev.food, q.food)
				) {
					ans[i]++;
				}
			});
	}

	return ans;
};

function matchLang(lang, query) {
	return lang == query || query == '-';
}
function matchField(field, query) {
	return field == query || query == '-';
}
function matchExp(exp, query) {
	return exp == query || query == '-';
}
function matchFood(food, query) {
	return food == query || query == '-';
}
function matchScore(score, query) {
	return Number(score) >= Number(query);
}
