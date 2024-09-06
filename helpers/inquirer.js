const inquirer = require('inquirer');
require('colors');


const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      { value: '1', name: `1. green Crear Tarea` },
      { value: '2', name: `2. Alistar Tarea` },
      { value: '3', name: `3 .green Listar Tareas Pendientes` },
      { value: '4', name: `4. Listar Tareas Completadas` },
      { value: '5', name: `5. Completar Tarea (s)` },
      { value: '6', name: `6. Borrar Tarea` },
      { value: '7', name: `7. Salir` }
    ],
  }
];

const inquireMenu = async () => {
  console.clear();
  console.log('##################'.green);
  console.log(' Que deseas Hacer '.green);
  console.log('##################\n'.green);

  const prompt = inquirer.createPromptModule();  // Creación de un módulo independiente
  const { opcion } = await prompt(preguntas);
  return opcion;
}


const pausa = async ()=>{
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`
    }
  ];
  const prompt= inquirer.createPromptModule();
  console.log('\n');
  await prompt(question);
}



module.exports = {
  inquireMenu,
  pausa
};
