const readline = require('readline');

const pausa = () => {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`\nPresione ${'ENTER'.green} para continuar \n`, () => {
      rl.close();
      resolve();
    });
  });
};

module.exports = {
  pausa
};
