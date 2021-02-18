const txt = 'C\'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'
const autor = 'Gustave Flaubert'
const nameBook = 'Salammbô'

console.log(txt)
console.log(`Voici l'extrait du livre ${nameBook} de ${autor} avec ${txt.length} caractères :`)
console.log('----------------------------------')

for(let i = 0; i < txt.length; ++i ) {
console.log(`le caractère ${txt[i]} à l'index ${i}`)
}

console.log('----------------------------------')
console.log('fin de l\'extrait.')