const RATIO = 1.600934

const userMilesDistance = 1

const convertMiToKm = (value) => {
  
  let kilometreSum = value * RATIO
  return kilometreSum
}

let kilometreReturn = convertMiToKm(userMilesDistance)

console.log(`${userMilesDistance} Miles équivaut a ${kilometreReturn.toFixed(2)} Kilomètres.`)