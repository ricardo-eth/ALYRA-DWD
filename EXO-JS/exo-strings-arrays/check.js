let text = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

textFinder = text.search('Javascript')

if(textFinder >= 0){
    console.log('Le mot recherché est bien le texte')
} else {
    console.log('Ce que vous cherchez ne se trouve pas ici')
}