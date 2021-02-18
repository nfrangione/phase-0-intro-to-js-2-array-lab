var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat (name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  return [...cats, name];
  //var addLast = cats.concat(name);
  //return addLast;
}

function prependCat(name){
  return [name, ...cats];
  //var addFirst = [name, ...cats];
  //return addFirst;
}

function removeLastCat() {
  return cats.slice(0, cats.length-1);
  //var lastRemoved = cats.slice(0, array.length-1);
  //return lastRemoved;
}

function removeFirstCat() {
  return cats.slice(1);
  //var firstRemoved = cats.slice(1);
  //return firstRemoved;
}