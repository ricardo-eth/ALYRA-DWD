// un programme qui affichera un message contenant tous les vêtements et accessoires
// que vous devrez porter en fonction des données méteo

let isRainy = false
let temperature = 17
let clothes = '' + 'un t-shirt, un caleçon, '

if (isRainy) {
  clothes += 'parapluie, '
}

if (temperature < 15) {
  clothes += 'un manteau, un pull, un pantalon et des bottes.'
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'un pull, un pantalon, des chausettes et des chaussures.'
} else {
  clothes += 'une casquette, des lunettes de soleil, un short et des claquettes.'
}


console.log(`Je vous recommande de porter: ${clothes}`)