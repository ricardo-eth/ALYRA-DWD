
let currentFloor = '1'
let targetFloor = '1'

let verification = Number(targetFloor) != Number(currentFloor)

switch (verification) {
  
  case true:
    console.log(
      `Vous etes au niveau ${currentFloor} et vous voulez aller au niveau ${targetFloor}`
    )
    break
      default:
    // Default case
    console.log("Vous êtes déjà au niveau demandé")
}