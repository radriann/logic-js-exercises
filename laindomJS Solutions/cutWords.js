// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

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