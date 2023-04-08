// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// factorial:  5! = 1 x 2 x 3 x 4 x 5 = 120;
function factorial(num) {
	if (typeof num !== 'number') return 'The paramter is not a number';

	const transformedNumber = parseInt(num);
	let factorial = 1;

	for (let i = 1; i <= transformedNumber; i++) {
		factorial *= i;
	}
	return factorial;
}
factorial(5);


/* RECURSIVE SOLUTION */
function recursiveFactorial(num) {
  if (typeof num !== 'number') return 'The parameter is not a number';
  const transformedNumber = parseInt(num);
  if (num === 0) return 1;
  return transformedNumber * recursiveFactorial(transformedNumber - 1);
}
recursiveFactorial(5);