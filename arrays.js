var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift("foo")
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars) {
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars) {
  chocolateBars.push("foo")
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index ) {
  return chocolateBars[2];
}

///
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift(1,2);
}
///
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

///
function destructivelyRemoveElementFromEndOfArray(array) {
  var destroyArray = array.pop(-1);
  return destroyArray;
}
///
function removeElementFromEndOfArray(array) {
  array.slice(2);
}

