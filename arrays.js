var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
 return [elem, ...arr]

}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem){
  return [...arr, elem]
}

function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, ind){
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.unshift()
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}