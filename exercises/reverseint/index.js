// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let stringed = n + ''
	let negative = false;
	let reversed = ''
	if(stringed[0] === '-'){
		stringed = stringed.slice(1)
		negative = true
	}	
	for(let i = 0; i < stringed.length; i++){
		reversed = stringed[i] + reversed	
	}
	return negative ? +('-' + reversed) : +reversed
}

module.exports = reverseInt;
