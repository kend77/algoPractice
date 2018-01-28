// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const seen = {}
  for(let i = 0; i < stringA.length; i++) {
      let letter = stringA[i].toLowerCase()
      if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 122) {
      if(seen[letter]) {
        seen[letter]++
      } else {
        seen[letter] = 1
      }
    }
  }

  for(let j = 0; j < stringB.length; j++) {
    let currentLetter = stringB[j].toLowerCase()
    if(currentLetter.charCodeAt(0) >= 65 && currentLetter.charCodeAt(0) <= 122) {
    if(!seen[currentLetter] || seen[currentLetter] - 1 < 0) {
      return false
    }
    if(seen[currentLetter]) {
      seen[currentLetter]--
    }
    }
  }
  return true
}


module.exports = anagrams;
