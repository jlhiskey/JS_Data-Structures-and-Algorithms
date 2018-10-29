'use strict';

const LinkedList = require('../lib/linked-list');

module.exports = function reverseLinkedOne(linkedList) {
  const reversedList = new LinkedList();
  let currentNode = linkedList.head;
  while (currentNode) {
    reversedList.insertAtHead(currentNode);
    if (currentNode.next) {
      currentNode = currentNode.next;
    } else {
      break;
    }
  }
  return reversedList;
};
