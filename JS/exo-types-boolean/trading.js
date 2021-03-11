//Le prix du cours Bitcoin en $
let currentPrice = 50000

//Votre prix de vente
let sellingPrice = 100000

//Votre prix d'achat
let buyingPrice = 10000


if (currentPrice <= buyingPrice ) {
console.log('vous pouvez acheter du Bitcoin')
} else if (currentPrice >= sellingPrice) {
console.log('vous pouvez vendre du Bitcoin')
} else {
console.log('je vous recommande de ne rien faire')
}