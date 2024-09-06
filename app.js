require('colors');

const { inquireMenu, pausa } = require('./helpers/inquirer');
console.clear()


const main = async () => {
  let opt = '';

  do {
    // Mostrar el menú y obtener la opción seleccionada
    opt = await inquireMenu();
    console.log({opt})


    await pausa()

  } while(opt !== '7');
}
   
main()