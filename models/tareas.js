class Task {
  constructor(title, description, completed = false) {
    this.title = title,
      this.description = description,
      this.completed = completed
  }

  completada() {
    this.complete = true
  }

  incomplete() {
    this.complete = false
  }

  display() {
    console.log(`Title :${this.title}`);
    console.log(`description: ${this.description}`);
    console.log(`Completada: ${this.complete ? 'Si' : 'No'}`)
  }
}


class Tareas {
  constructor() {
    this.lista = [];
  }

  agregarTarea(titulo, descripcion = '') {
    const tarea = new Task(titulo, descripcion);
    this.lista.push(tarea)
  }

  mostrarTarea() {
    if (this.lista.legth === 0) {
      console.log('No hay tareas que mostrar ');
      return;
    }
    this.lista.forEach((tarea, index) => {
      console.log(`ID: ${index}`);
      tarea.display();
      console.log('---');
    });
  }
  borrarTarea(id) {
    if (id >= 0 && id < this.lista.length) {
      this.lista.splice(id, 1);
      console.log('Tarea eliminada');
    } else {
      console.log('ID de tarea no valido');
    }
  }
  actualizarTarea(idActualizar, nuevoTitulo, nuevaDescripcion) {
    if (idActualizar >= 0 && idActualizar < this.lista.length) {
      this.lista[idActualizar].title = nuevoTitulo;
      this.lista[idActualizar].descripcion = nuevaDescripcion
      console.log('Tarea Actulizada correctamente')
    } else {
      console.log('ID no valido')
    }
  }
}

module.exports = Tareas;
