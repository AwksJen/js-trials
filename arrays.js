"use strict";


//const items = [apple, berry, cherry];

// 1. printIndices
function printIndices(items) {
  for(let i = 0; i < items.length; i++) {
    console.log(items[i], i);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  for (let i = 0; i < items.length; i++){
    if (i % 2 === 0){
      console.log(items[i]);
    }
  }
}


// 3. smallestNItems
function smallestNItems(items, n) {
 items.sort((a, b) => a - b);

let newArr = [];
 for(let i = 0; i < n; i++) {
    newArr.push(items[i]);
  }

console.log(newArr.reverse());
 
}
