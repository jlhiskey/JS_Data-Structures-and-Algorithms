'use strict';

const LinkedList = require('../lib/linked-list');

const smallLinkedList = new LinkedList();
const bigLinkedList = new LinkedList();
const anotherbigLinkedList = new LinkedList();
const emptyList = new LinkedList();

for (let i = 1; i > 0; i--) {
  smallLinkedList.insertAtHead(`Small List Value= ${i}`);
}
for (let i = 3; i > 0; i--) {
  bigLinkedList.insertAtHead(`Big List Value= ${i}`);
  anotherbigLinkedList.insertAtHead(`Another Big List Value= ${i}`);
}

describe('#linkedlist.js', () => {
  describe('testing linked-list', () => {
    test('Testing that linked-list.listZipper properly combines lists with first linked being smaller', () => {
      smallLinkedList.listZipper(smallLinkedList, bigLinkedList);
      expect(smallLinkedList.head.value).toEqual('Small List Value= 1');
      expect(smallLinkedList.head.next.value).toEqual('Big List Value= 1');
      expect(smallLinkedList.head.next.next.value).toEqual('Big List Value= 2');
      expect(smallLinkedList.head.next.next.next.value).toEqual('Big List Value= 3');
    });
    test('Testing that linked-list.listZipper properly combines lists with lists being same length', () => {
      bigLinkedList.listZipper(bigLinkedList, anotherbigLinkedList);
      expect(bigLinkedList.head.value).toEqual('Big List Value= 1');
      expect(bigLinkedList.head.next.value).toEqual('Another Big List Value= 1');
      expect(bigLinkedList.head.next.next.value).toEqual('Big List Value= 2');
      expect(bigLinkedList.head.next.next.next.value).toEqual('Another Big List Value= 2');
      expect(bigLinkedList.head.next.next.next.next.value).toEqual('Big List Value= 3');
      expect(bigLinkedList.head.next.next.next.next.next.value).toEqual('Another Big List Value= 3');
    });
    test('Testing that linked-list.listZipper returns null if no list exists', () => {
      expect(() => smallLinkedList.listZipper(emptyList, emptyList)).toThrow();
    });
  });
});
