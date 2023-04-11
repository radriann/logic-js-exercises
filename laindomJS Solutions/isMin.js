// 14. Crea una función que tome una matriz de números como argumento y devuelva el número más pequeño.

function isMin(arr) {
  if (!Array.isArray(arr)) return 'Please provide an array'
  if (arr.length === 0) return 'The array must be contain elements'
  
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return 'The array only be contain numbers'
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}
isMin([53,69,18,57,91,83])