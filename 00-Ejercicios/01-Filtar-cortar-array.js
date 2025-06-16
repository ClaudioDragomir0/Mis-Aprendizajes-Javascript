/* Ejercicio 1: Filtrar y contar elementos en un array

Crea un programa que tenga un array con varios nombres de personas (puedes poner 8-10 nombres). 

El programa debe recorrer el array y contar cuántos nombres empiezan con la letra "A" (mayúscula). 

Al final, muestra en la consola el número total de nombres que cumplen esa condición.

Pistas:

Usa un bucle para recorrer el array.

Usa un condicional para comprobar la primera letra de cada nombre.

Usa una variable para llevar la cuenta. */

const nombres = ["Ana", "Luis", "Carlos", "Alberto", "María", "Antonio", "Pedro", "Andrea"];

const nombresConA = nombres.filter(nombre => nombre[0] === "A");

console.log(`Nombres que empiezan con "A": ${nombresConA.length}`);