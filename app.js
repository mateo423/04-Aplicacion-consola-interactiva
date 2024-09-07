const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');
console.clear()


const main = async () => {
  let opt = '';
  const tareas = new Tareas()

  do {
    // Mostrar el menú y obtener la opción seleccionada
    opt = await inquireMenu();
    switch (opt) {
      case '1':
        const titulo = await leerInput('Ingrese el titulo de la Tarea :');
        const descripcion = await leerInput('Ingrese la descripcion de la tarea: ');
        tareas.agregarTarea(titulo, descripcion);
        console.log('Tarea agregada correctamente')
        break;
      case '2':
        tareas.mostrarTarea()
        break;
      case '3':
        const idActualizar = parseInt(await leerInput('ID de la tarea para Actualizar: '));
        const nuevoTitulo = await leerInput('Ingrese el nuevo Titulo: ');
        const nuevaDescipcion = await leerInput('Ingrese la nueva Descripcion: ');
        tareas.actualizarTarea(idActualizar, nuevoTitulo, nuevaDescipcion);
        break;
      case '4':
        const idBorar = parseInt(await leerInput('ID de la tarea completar: '))
        tareas.borrarTarea(idBorar)
        break;
      case '5':
        console.log('Saliendo....')
        break;


    }
    await pausa()

  } while (opt !== '5');
}

main()
