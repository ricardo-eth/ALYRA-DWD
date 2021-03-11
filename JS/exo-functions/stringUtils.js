
const reverseStr = (data) => {
  return data.split('').reverse().join('')
}

const isPalindrome = (value) => {
  if(reverseStr(value) === value){
    console.log(`True ${value} est un palindrome`)
  } else {
    console.log(`False ${value} est pas un palindrome`)
  }
}

const inputUser = "kawak"

isPalindrome(inputUser)