let text =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let searchText = 'bob';

console.log(text.toLowerCase().trim(' '))
console.log('--------------------------------')

let newText = text.toLowerCase().trim(' ')

if (newText.includes(searchText)) {
  console.log(`Le mot ${searchText} est bien dans le texte`)
} else {
  console.log(`Le mot bob n'y est pas !!! `)
}