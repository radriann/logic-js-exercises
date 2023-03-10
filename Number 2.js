// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// Solucion creada por laindomJS

function cutWords(string, number) {
	let result = [];

	if (typeof string !== 'string' || typeof number !== 'number') {
		return 'One parameter is incorrect';
	}

	if (string.length === 0) return 'The string is empty';
	if (number > string.length) return 'The string is too short';

	for (let i = 0; i < number; i++) {
		result += string[i];
	}
	return result;
}

cutWords('Hello World', 11);

// Solucion creada por Raynier95

const recortarPalabra=(texto,recorte)=>{
  if(typeof texto !== 'string') return console.warn(`No es un texto valido`)
  if(typeof recorte !== 'number') return console.warn(`No es un numero valido`);
  if(Math.sign(recorte)===-1) return console.warn(`No se admiten negativos`);
  const nuevaPalabra = Array.from(texto)
  nuevaPalabra.length = recorte
  console.log(nuevaPalabra)
}
recortarPalabra('cascada',3)