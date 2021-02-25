let currentFloor = '5'
let targetFloor = '1'

let verification = Number(targetFloor) > Number(currentFloor) || Number(targetFloor) < Number(currentFloor)

console.log(verification)

switch (verification) {
  
  case (verification = true) :
    console.log(
      `Vous etes au niveau ${currentFloor} et vous voulez aller au niveau ${targetFloor}`
    )
    break
  case currentFloor === targetFloor:
    console.log(
      `Vous etes au niveau ${currentFloor} et vous voulez aller au niveau ${targetFloor}`
    )
    break
      default:
    // Default case
    console.log("Vous êtes déjà au niveau demandé")
}