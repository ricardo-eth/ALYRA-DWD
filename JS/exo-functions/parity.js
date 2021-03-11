const number = 3

const isOdd = (nb) => {
   
  // old code
  /* if(nb % 2 === 0 ){
    return false
  } else {
    return true
  }*/

  return nb % 2 === 0 ? true : false

  // other compact version
  // return nb % 2 !== 0 
}



const isEven = (nb) => {
  
  // old code
  /*if(isOdd(nb)) {
    console.log('true')
  } else {
    console.log('false')
  }*/

  return !isOdd(nb)
}

console.log(isEven(number))
