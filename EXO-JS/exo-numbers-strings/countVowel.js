const txt = 'Je suis le ténébreux, - le veuf, - l\'inconsolé,\n\
Le prince d\'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
Dans la nuit du tombeau, toi qui m\'as consolé,\n\
Rends-moi le Pausilippe et la mer d\'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s\'allie.\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J\'ai rêvé dans la grotte où nage  la sirène...\n\
Et j\'ai deux fois vainqueur traversé l\'Achéron ;\n\
Modulant tour à tour sur la lyre d\'Orphée\n\
Les soupirs de la sainte et les cris de la fée.'


newText = txt.toLowerCase()

let nba = 0
let nbe = 0
let nbi = 0
let nbo = 0
let nbu = 0
let nby = 0

for(i = 0; i < txt.length; i++){
  if( newText[i] === 'e' || 
      newText[i] === 'é' || 
      newText[i] === 'è' || 
      newText[i] === 'ê'){
      ++nbe
    } else if ( newText[i] === 'a' || 
                newText[i] === 'à' ){
      ++nba
    } else if (newText[i] === 'i'){
      ++nbi
    } else if (newText[i] === 'o'){
      ++nbo
    } else if (newText[i] === 'u'){
      ++nbu
    } else if (newText[i] === 'y'){
      ++nby
    }
}

console.log(`nb a: ${nba}`)
console.log(`nb e: ${nbe}`)
console.log(`nb i: ${nbi}`)
console.log(`nb o: ${nbo}`)
console.log(`nb u: ${nbu}`)
console.log(`nb y: ${nby}`)