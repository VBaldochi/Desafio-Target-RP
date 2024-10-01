const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma string: ', (userInput) => {
  const lowerCaseInput = userInput.toLowerCase();
  const count = (lowerCaseInput.match(/a/g) || []).length;

  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não foi encontrada na string.");
  }

  rl.close();
});