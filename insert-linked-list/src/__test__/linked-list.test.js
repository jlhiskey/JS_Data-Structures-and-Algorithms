'use strict';

const LinkedList = require('../lib/linked-list');

const testList = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 5; i++) {
  testList.insertAtHead(`value ${i}`);
}

describe('#linkedlist.js', () => {
  describe('testing linked-list', () => {
    test('Testing that linked-list.deleteListItem properly removes items', () => {
      testList.insertAtEnd('value New');
      expect(testList.head.next.next.next.next.next.value).toEqual('value New');
    });
    test('Testing that linked-list.deleteListItem returns null if no list exists', () => {
      try {
        emptyList.insertAtEnd('value New');
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ The list is empty');
      }
    });
  });
});
