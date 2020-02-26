"use strict";


// 1. isHometown
function isHometown(town){
  return town ==='San Francisco';
}
// Define your function here


// 2. getFullName
function getFullName(first, last){
  return `${first} ${last}`;
}
// Define your function here


// 3. calculateTotal
function calculateTotal (base, state, tax=0.05) {
  let fee = 0;
  let subtotal = base * (1 + tax);
  if(state === 'CA'){
    fee = 0.03* subtotal;
  }
  else if (state === 'PA') {
    fee = 2;
  }
  else if ( state === 'MA') {
    if ( base <= 100) {
      fee = 1;
    }
    else (
      fee = 3)
  }
  
  return (subtotal + fee);
}
// Define your function here
