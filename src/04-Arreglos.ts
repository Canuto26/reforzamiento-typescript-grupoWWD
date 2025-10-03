// - Crear un arreglo con calificaciones.
// - Calcular el promedio con un bucle for.
// - Mostrarlo en consola.


let contador = parseInt(prompt("Ingrese la cantidad de calificaciones (se puede con decimales): \n") || "0");

let calificaciones: number[] = [];

for (let i = 0; i < contador; i++) {
    
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}: `) || "0");
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 5) {
        alert("Calificación inválida. Ingrese una calificación entre 0 y 5.");
        i--; // Decrementar i para repetir la entrada
        
    } else {
        calificaciones.push(calificacion);
        console.log(`Calificación ${i + 1}: ${calificacion}`);
    }
}

let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}

console.log(`El promedio es: ${suma / calificaciones.length}`);