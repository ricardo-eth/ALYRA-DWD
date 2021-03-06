let code = "KFLK GIFSCVDV R JR JFCLKZFE JZ ZC E P R GRJ UV JFCLKZFE T VJK HL ZC E P R GRJ UV GIFSCVDV"


for (let d = 0; d <= 26; d++) {                       // Ok nous avons un déchifrage caesar donc 26 possiblités
  let decypher = ''                                   // on initialise le déchifrage dans la boucle vu qu'on va devoir y passer 26 fois dessus

  for (let i = 0; i < code.length; i++) {             // ici on va parcourir notre string avec une boucle pour déchifrer 1 à 1 le code 
    let ascii = ''                                         // cette variable va récuper la forme integer de chaque lettre
    if(code[i] !== ' '){
      ascii = code.charCodeAt(i) + d
      if(ascii > 90)                                  // Voila le premier problème notre alphabet ascii va de 65 à 90 or si on depasse 90 il faudrat recompter à partir de 65
        decypher += String.fromCharCode(ascii - 26)   // donc on fait - 26 si cela dépasse :)
      else 
        decypher += String.fromCharCode(ascii)
    }
    else{
      decypher += ' '
    }
  }
  console.log(`Décalage de ${d}\n${decypher}\n`)      
}