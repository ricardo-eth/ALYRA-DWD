// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou/et venteuse ou/et avec une température froide

//Méteo pluvieuse 
let isRainy = false
//Méteo venteuse 
let isWindy = false
//Méteo froide 
let isCold = true

if (isRainy && isWindy && isCold)  {
  console.log("Mettez votre manteau car c'est la fin du monde dehors !!")
} else if (isRainy && isWindy) {
  console.log('Mettez votre manteau car il y a du vent et de la pluis.')
} else if (isCold && isWindy) {
  console.log('Mettez votre manteau car il y a beaucoup de vent et il fait froid.')
} else if (isCold && isRainy) {
  console.log('Mettez votre manteau car il fait froid et il pleut.')
} else if (isRainy) {
  console.log('Mettez votre manteau car il y a de la pluis.')
} else if (isWindy) {
  console.log('Mettez votre manteau car il y a beaucoup de vent.')
}  else if (isCold) {
  console.log('Mettez votre manteau car il fait froid.')
} else {
  console.log("Nous n'avez pas besoin de manteau today.")
}
