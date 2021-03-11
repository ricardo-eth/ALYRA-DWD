let firstName = 'Bob' // Your name
let gender = 'male' // male or female

// Solution No 1 :

switch (gender) {
  case 'male':
      console.log(`Bonjour ${firstName}, vous êtes entré sur le chan`
    )
    break
  case 'female': 
    console.log(`Bonjour ${firstName}, vous êtes entrée sur le chan`
    )
    break
  default:
    console.log('Bonjour, pour rentrer vous devez choisir entre "male" ou "female"')
}

// Solution No 2 :
//let msg = `Bonjour ${firstName}, vous êtes entré${gender === 'male' ? '' : 'e'} sur le chan`
//console.log(msg)