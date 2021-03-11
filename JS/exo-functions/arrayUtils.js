const list = [99, 100, 101, 1]

const list2 = [6, 2, 1, 3, 2, 4, 5, 7, 5, 1]

const biggest = (data) => {
  let dataMax = data[0]

  for (let i = 1; i < data.length; i++) {
    let value = data[i]
    dataMax = value > dataMax ? value : dataMax
  }

  return dataMax
}

console.log(biggest(list))

const sortAscend = (data) => {
  data.sort((a, b) => a - b);
  return data
}

console.log(sortAscend(list))

const makeUnique = (list) => {
  
// old version  
//let uniqueArray = [...new Set(sortAscend(list))];

// version optimisé
let uniqueArray = sortAscend(Array.from(new Set(list)))
return uniqueArray
}

console.log(makeUnique(list2))