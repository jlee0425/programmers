/**
 *
 * @param target
 * @param wordBank
 * @returns number of targets that are constructable using words in wordBank.
 */
const countConstruct = (
	target: string,
	wordBank: string[],
	memo = {}
): number => {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let count = 0;
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			count += countConstruct(
				target.replace(new RegExp(word), ''),
				wordBank,
				memo
			);
		}
	}
	memo[target] = count;
	return count;
};

console.log(countConstruct('', ['abc', 'bd']));

console.log(
	countConstruct('skateboard', [
		'bo',
		'rd',
		'ate',
		't',
		'ska',
		'sk',
		'boar',
		'a',
	])
);
console.log(
	countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
	countConstruct(
		'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
		['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']
	)
);

console.log(countConstruct('eee', ['e', 'e', 'e']));
