// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".



// Solucion creada por Raynier95
const recortarPalabra = (texto,recorte) => {
  if (typeof texto !== 'string') return console.warn(`No es un texto valido`);
  if (typeof recorte !== 'number') return console.warn(`No es un numero valido`);
  if (Math.sign (recorte) === -1) return console.warn(`No se admiten negativos`);
  
	const nuevaPalabra = Array.from(texto)
  nuevaPalabra.length = recorte
  console.log(nuevaPalabra)
}
recortarPalabra('cascada',3)