// 4. Crea una función que tome una matriz de números como argumento y devuelva el número más grande.

function maxNumber(arr) {
  if (!Array.isArray(arr)) return 'Please provide an array'
  if (arr.length === 0) return 'The array may be contain elements'
  
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return 'The array only may be contain numbers'
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
maxNumber([3,6,1,2,3,66,7,1,212,31,1])