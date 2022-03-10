/**
 *
 * @param target
 * @param wordBank
 * @returns true if target is constructable using words in wordBank, false otherwise.
 */
const canConstruct = (
	target: string,
	wordBank: string[],
	memo = {}
): boolean => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			if (canConstruct(target.replace(new RegExp(word), ''), wordBank, memo)) {
				memo[target] = true;
				return true;
			}
		}
	}

	memo[target] = false;
	return false;
};

console.log(canConstruct('', ['abc', 'bd']));

console.log(
	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar', 'a'])
);
console.log(
	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
		'e',
		'ee',
		'eee',
		'eeee',
		'eeeee',
		'eeeeee',
	])
);
