/* Ejercicio 2: Simulación de inventario simple

Imagina que tienes un inventario de productos en una tienda. 

Crea un array con los nombres de 5 productos. Luego, pide al usuario (usando prompt()) que escriba el nombre de un producto. 

El programa debe buscar si ese producto existe en el inventario:

Si existe, muestra en consola: "Producto disponible".Si no existe, muestra: "Producto no encontrado".

Pistas:

Usa un array para el inventario.

Usa un bucle o el método adecuado para buscar el producto.

Usa condicionales para mostrar el mensaje correspondiente. */

// 1. Array con 5 productos

let inventario = ["pan", "leche", "huevos", "queso", "arroz"];

// 2. Pedir al usuario un producto

let productoBuscado = prompt("¿Qué producto buscas?");

// 3. Buscar el producto en el inventario

if (inventario.includes(productoBuscado)) {

  // 4. Si existe, mostrar mensaje

  console.log("Producto disponible");

} else {

  // Si no existe, mostrar otro mensaje

  console.log("Producto no encontrado");
  
}