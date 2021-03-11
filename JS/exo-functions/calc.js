const nb1 = 10
const nb2 = 30
const operator = '%'


const add = (nb1, nb2) => {
  return nb1 + nb2
}

const sub = (nb1, nb2) => {
  return nb1 - nb2
}

const mul = (nb1, nb2) => {
  return nb1 * nb2
}

const div = (nb1, nb2) => {
  return nb1 / nb2
}

const calc = (operator, nb1, nb2) => {
  switch (operator) {
    case '+' :
      return add(nb1, nb2);
      break;
    case '-':
      return sub(nb1, nb2);
      break;
    case '*':
       return mul(nb1, nb2);  
      break;
    case '/':
       return div(nb1, nb2);
       break;
    default:
	    return`Opérateur incorrect`;
      break;
  }
}

var sum = calc(operator, nb1, nb2)

console.log(sum)