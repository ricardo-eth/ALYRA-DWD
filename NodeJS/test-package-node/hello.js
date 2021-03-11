const chalk = require('chalk')
var readlineSync = require('readline-sync');

const userName = readlineSync.question('May I have your name? ');
let ageStr = readlineSync.question('May i have your age? ');

age = Number(ageStr)
console.log(typeof age)


for (let i = 0; i < 10; ++i) {
  console.log(chalk.red.rgb(10,100 + i * 10, 200 )(`Hello ${userName} !`))
}