'use strict';

const LinkedList = require('../lib/linked-list');

module.exports = function reverseLinkedThree(linkedList) {
  const reversedList = new LinkedList();
  let currentNode;
  function recursiveHelper() {
    if (!currentNode) {
      currentNode = linkedList.head;
    }
    reversedList.insertAtHead(currentNode);
    currentNode = currentNode.next;
    if (currentNode.next) {
      recursiveHelper();
    }
    return reversedList;
  }

  recursiveHelper();
  return undefined;
};
