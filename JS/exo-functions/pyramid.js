const nbBase = 10
const reverse = false
const character = "h"

const showStars = (nbBase, reverse, character) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += character.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += character.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

let str1 = showStars(nbBase, reverse, character)
console.log(str1)