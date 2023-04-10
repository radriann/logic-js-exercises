// 9. Crea una función que tome una matriz de números como argumento y devuelva una nueva matriz con solo los números pares.

function onlyEven(arr) {
	if (!Array.isArray(arr)) return 'Please provide an array'
	if (arr.length === 0) return 'The array may be contain elements'

	let onlyEven = []
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') return 'The array only contain numbers'
		if (arr[i] % 2 === 0) onlyEven.push(arr[i])
	}
	return onlyEven
}
onlyEven([2, 3, 4, 5, 6, 7, 8, 9, 10])
