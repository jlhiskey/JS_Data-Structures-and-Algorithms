'use strict';

const LinkedList = require('../lib/linked-list');

module.exports = function reverseLinkedTwo(linkedList) {
  const reversedList = new LinkedList();
  let currentNode = linkedList.head;
  const reversedArray = [];
  while (currentNode) {
    reversedArray.push(currentNode.value);
    if (currentNode.next) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
  for (let i = 0; i < reversedArray.length; i++) {
    reversedList.insertAtHead(reversedArray[i]);
  }
  return reversedList;
};
