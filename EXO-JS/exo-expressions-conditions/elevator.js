let currentFloor = '5'
let targetFloor = '-11'

let verification = Number(targetFloor) != Number(currentFloor)
let horsEtage = currentFloor >= -2 && currentFloor <= 7

let formule = verification + horsEtage

console.log(horsEtage)

switch (formule) {
  
  case true :
    console.log(
      `Vous etes au niveau ${currentFloor} et vous voulez aller au niveau ${targetFloor}`
    )
    break
  case false:
    console.log(
      `Le niveau demandé existe pas`
    )
    break
      default:
    // Default case
    console.log("Vous êtes déjà au niveau demandé")
}