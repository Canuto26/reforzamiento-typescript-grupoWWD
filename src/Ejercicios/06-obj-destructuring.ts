// Reutilizamos el objeto del ejercicio 3
const estudiante = {
  nombre: "Sofía López",
  edad: 21,
  carrera: "Ingeniería de Sistemas",
  semestre: 6,
  descripcion(): string {
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera} en el semestre ${this.semestre}.`;
  }
};

// Desestructuramos las propiedades nombre y carrera
const { nombre, carrera } = estudiante;

// Mostramos los valores en consola
console.log(`Nombre del estudiante: ${nombre}`);
console.log(`Carrera: ${carrera}`);
