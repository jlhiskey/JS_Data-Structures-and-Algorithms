'use strict';

const LinkedList = require('../lib/linked-list');

const testList1 = new LinkedList();
const testList2 = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 5; i++) {
  testList1.insertAtHead(`value ${i}`);
}
for (let i = 0; i < 5; i++) {
  testList2.insertAtHead(`value ${i}`);
}

describe('#linkedlist.js', () => {
  describe('testing linked-list', () => {
    test('Testing that linked-list.listZipper properly combines lists', () => {
      testList1.listZipper(testList1, testList2);
      expect(testList1.head.next.value && testList1.head.value).toEqual('value 4');
    });
    test('Testing that linked-list.listZipper returns null if no list exists', () => {
      try {
        emptyList.listZipper(emptyList, emptyList);
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ The list is empty');
      }
    });
  });
});
