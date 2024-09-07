const inquirer = require('inquirer');
require('colors');


const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      { value: '1', name: `1. Crear Tarea` },
      { value: '2', name: `2. Alistar Tarea` },
      { value: '3', name: `3. Actualizar Tarea (s)` },
      { value: '4', name: `4. Borrar Tarea` },
      { value: '5', name: `5. Salir` }
    ],
  }
];

const inquireMenu = async () => {
  console.clear();
  console.log('##################'.green);
  console.log(' Que deseas Hacer '.green);
  console.log('##################\n'.green);

  const prompt = inquirer.createPromptModule();
  const { opcion } = await prompt(preguntas);
  return opcion;
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'input',
      message,
      validate: (value) => {
        if (value.length === 0) {
          return 'Por favor ingrese un valor '
        }
        return true
      },
    }
  ];
  try {
    const prompt = inquirer.createPromptModule()
    const { input } = await prompt(question);
    return input;
  } catch (err) {
    console.error('Error:', err);
  }
}

const pausa = async () => {
  const prompt = inquirer.createPromptModule()
  await prompt({
    type: 'input',
    name: 'pause',
    message: 'Presiona una tecla para continuar'
  })
  console.log('Continuado...')
}


module.exports = {
  inquireMenu,
  leerInput,
  pausa
};
