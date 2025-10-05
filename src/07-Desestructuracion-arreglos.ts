//07-Desestructuracion-arreglos
import  calificaciones  from './04-Arreglos';
// const calificaciones: number[]=[4.5, 3.8, 4.2, 5.0, 4.7];

const [primero,segundo = 0]= calificaciones;

console.log("Primera calificación:", primero);
console.log("Segunda calificación:", segundo);