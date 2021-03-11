const min = 1
const max = 101
const step = 5

const count = (min, max, step) => {
 for(let i = min; i <= max; i+= step){
  console.log(i)
  }
}

count(min, max, step)