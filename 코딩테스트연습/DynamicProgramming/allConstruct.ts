/**
 *
 * @param target
 * @param wordBank
 * @param memo
 * @returns
 */

const allConstruct = (
	target: string,
	wordBank: string[],
	memo = {}
): string[][] => {
	if (target in memo) return memo[target];
	if (target === '') return [[]];

	let curPath = [];
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const result = allConstruct(target.replace(word, ''), wordBank, memo);
			curPath.push(...result.map((path) => [word, ...path]));
			memo[word] = curPath;
		}
	}

	memo[target] = curPath;
	return curPath;
};

console.log(allConstruct('', ['abc', 'bd']));

console.log(
	allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar', 'a'])
);
console.log(
	allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
	allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
		'e',
		'ee',
		'eee',
		'eeee',
		'eeeee',
		'eeeeee',
	])
);

console.log(allConstruct('eee', ['e', 'e', 'e']));
console.log(
	allConstruct('purple', ['purp', 'p', 'ur', 'ple', 'purpl', 'purple', 'e'])
);
