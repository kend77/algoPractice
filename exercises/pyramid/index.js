// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let middle = n - 1
  for(let i = 0; i < n; i++) {
    let level = ''
    for(let j = 0; j < (n * 2 - 1); j++) {
      if(j >= middle - i && j <= middle + i) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}


module.exports = pyramid;
