let text = 'In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.\n\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\n\
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.'

let oldName = 'Alice'
let regex = new RegExp(oldName, "g");
let newName = 'Ricardo'

newString = text.replace(regex, newName)


console.log(newString)