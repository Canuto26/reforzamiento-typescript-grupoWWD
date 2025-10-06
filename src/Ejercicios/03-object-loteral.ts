// Definimos el objeto estudiante con sus propiedades
const estudiante = {
  nombre: "Sofía López",
  edad: 21,
  carrera: "Ingeniería de Sistemas",
  semestre: 6,
  // Método que devuelve una descripción del estudiante
  descripcion(): string {
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera} en el semestre ${this.semestre}.`;
  }
};
// Mostramos la descripción en consola
console.log(estudiante.descripcion());
