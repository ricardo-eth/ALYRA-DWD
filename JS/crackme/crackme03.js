// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@  !          ' // length attend 13 espaces vide entre 0 et 13 pour le true a 14 
                                // '@' se trouve a la premiere place pour avoir True  
                                // '!' se trouve a la 2 eme place pour avoir True

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)
