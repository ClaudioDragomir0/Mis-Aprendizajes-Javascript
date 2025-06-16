/* Ejercicio 3: FizzBuzz personalizado

Recorre los números del 1 al 30 usando un bucle for. 

Por cada número:

Si es divisible por 3, imprime "Fizz".

Si es divisible por 5, imprime "Buzz".

Si es divisible por ambos, imprime "FizzBuzz".

Si no es divisible por ninguno, imprime el número. */

for (let index = 0; index <= 30; index++) {

    if (index % 3 === 0 && index % 5 === 0) {

        console.log("Fizz Buzz");

    } else if (index % 3 === 0) {

        console.log("Fizz");

    } else if (index % 5 === 0) {

        console.log("Buzz");
        
    } else {

        console.log(index);

    }
    
}