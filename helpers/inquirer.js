const inquirer = require('inquirer');
require('colors');


const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      { value: '1', name: '1. Crear Tarea' },
      { value: '2', name: '2. Alistar Tarea' },
      { value: '3', name: '3. Listar Tareas Pendientes' },
      { value: '4', name: '4. Listar Tareas Completadas' },
      { value: '5', name: '5. Completar Tarea (s)' },
      { value: '6', name: '6. Borrar Tarea' },
      { value: '7', name: '7. Salir' }
    ],
  }
];

const inquireMenu = async () => {
  console.clear();
  console.log('##################'.green);
  console.log(' Que deseas Hacer '.green);
  console.log('##################\n'.green);

  const prompt = inquirer.createPromptModule()
  try {
    const respuesta = await prompt(preguntas);
    return respuesta.opcion;

  } catch (err) {
    console.error('Erro la obtener la opcion:', err);

  }
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'descripcion',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  try {
    const { descripcion } = await inquirer.prompt(question);  
    return descripcion

  } catch (err) {
    console.error('Error al leer el input:', err);
  }
};

const pausa = async ()=>{
  const respuesta = await inquirer.prompt({type: 'input', name: 'pausa', message: 'Presiona una tecla para continuar'});
  console.log(respuesta);
}


module.exports = {
  inquireMenu,
  pausa,
  leerInput
};
