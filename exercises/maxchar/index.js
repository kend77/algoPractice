// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let seen = {}
	let max = null
	let maxCount = 0;
	for(let i = 0; i < str.length; i++){
		seen[str[i]] ? seen[str[i]]++ : seen[str[i]] = 1
	}
	for(let char in seen) {
		if(seen[char] > maxCount) {
			maxCount = seen[char]
			max = char
		}
	}
	return max
}

module.exports = maxChar;
