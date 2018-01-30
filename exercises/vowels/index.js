// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(vowels[str[i].toLowerCase()]) {
      count++
    }
  }
  return count
}

module.exports = vowels;
