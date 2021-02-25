let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']

for (let i = 0; i <= list.length; ++i) {
list = list[i].toUpperCase()

 switch (list) {
    case 'ALICE':
      console.log('Alice want to exchange with Bob')
    case 'BOB':
      console.log('Bob want to exchange with Alice')
    case 'CHARLIE':
      console.log('Charlie is a generic third participant')
    case 'CRAIG':
      console.log('Craig is a password cracker')
    case 'EVE':
      console.log('Eve is an eavesdropper')
  }
}