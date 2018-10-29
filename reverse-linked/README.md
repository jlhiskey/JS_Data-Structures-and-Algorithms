[![Build Status](https://travis-ci.com/jlhiskey/code-challenge.svg?branch=master)](https://travis-ci.com/jlhiskey/code-challenge)

# Character-Tally
 - Write 3 functionS that accept a linked list and returns a returns a reversed linked list.
 ## Function
 - When you input 'testList'
    expect(testList.head.value).toEqual('Value 1');
    expect(testList.head.next.value).toEqual('Value 2');
    expect(testList.head.next.next.value).toEqual('Value 3');
    expect(testList.head.next.next.next.value).toEqual('Value 4');
    expect(testList.head.next.next.next.next.value).toEqual('Value 5');
    - Returns:
    - expect(reversedList.head.value).toEqual('Value 5');
      expect(reversedList.head.next.value).toEqual('Value 4');
      expect(reversedList.head.next.next.value).toEqual('Value 3');
      expect(reversedList.head.next.next.next.value).toEqual('Value 2');
      expect(reversedList.head.next.next.next.next.value).toEqual('Value 1');