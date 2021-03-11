// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '12345678429'

const crackme8 = (password) => {
  // split: [1,2,3,4,5,6,7,8,9]
  // slice: [7, 8]
  // join: '78'

  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)
