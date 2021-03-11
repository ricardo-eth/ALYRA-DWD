// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap' // Avec .reverse() les éléments devient le dernier et le dernier devient le premier et ainsi de suite.

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)
