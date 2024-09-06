require('colors');

const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');

let tareas = [];  // Arreglo para almacenar las tareas

const main = async () => {
  let opt = '';

  do {
    // Mostrar el menú y obtener la opción seleccionada
    opt = await inquireMenu();

    switch (opt) {
      case '1':
        // Crear tarea
        const descripcion = await leerInput('Descripción de la tarea:');
        tareas.push({ descripcion, completado: false });
        console.log('Tarea creada exitosamente!\n');
        break;

      case '2':
        // Listar tareas
        console.log('\nTareas:\n');
        tareas.forEach((tarea, i) => {
          const idx = `${i + 1}.`.green;
          const { descripcion, completado } = tarea;
          const estado = completado ? 'Completada': 'Pendiente';
          console.log(`${idx} ${descripcion} :: ${estado}`);
        });
        break;
      
        case '3':
          // Listar tareas completadas
          console.log('\nTareas completadas:\n');
          console.log(opt)
        case '7':
          opt='0'
          break;
        default:
          console.error('Opcion no validad'.yellow)

    }

    if (opt !== '0') await pausa();

  } while (opt !== '0');

  console.log('¡Hasta luego!');
};

main();
