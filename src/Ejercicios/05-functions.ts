// Creamos una función llamada calcularPromedio que recibe un arreglo de números
// y devuelve el promedio de esos valores.
function calcularPromedio(numeros: number[]): number {
  // Si el arreglo está vacío, devolvemos 0 para evitar errores de división por cero.
  if (numeros.length === 0) {
    return 0;
  }

  // Calculamos la suma de todos los elementos usando reduce().
  const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  // Calculamos el promedio dividiendo la suma entre la cantidad de elementos.
  const promedio = suma / numeros.length;
  // Devolvemos el resultado.
  return promedio;
}

// Probamos la función con un arreglo de calificaciones.
const calificaciones: number[] = [4.0, 3.5, 4.8, 5.0, 4.2];

// Llamamos a la función y mostramos el resultado en consola.
const resultado = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${resultado.toFixed(2)}`);