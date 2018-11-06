var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(arr, foo) {
return [foo, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, foo) {
    arr.unshift(foo)
    return arr
}

function addElementToEndOfArray(arr, foo) {
  return [...arr, foo]

}


function destructivelyAddElementToEndOfArray(arr, foo) {
    arr.push(foo)
    return arr
}

function accessElementInArray(arr, foo) {
  return arr[foo]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, foo) {
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr, foo) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr, foo) {

  return arr
}

function removeElementFromEndOfArray(arr, foo) {

  return arr
}
