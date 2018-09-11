'use strict';

function reverseArr(arr) {
  const revArr = arr;
  arr = [];
  for (let i = 0; i < revArr.length ; i++ ) {
    arr[i] = revArr[(revArr.length - 1 ) - i ]; 
  }
  return arr;
}