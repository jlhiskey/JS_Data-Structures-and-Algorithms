'use strict';

const Queue = require('../lib/queue');

const myQueue = new Queue();


describe('#queue.js', () => {
  describe('testing queues-stacks', () => {
    test('Testing that enqueue is working properly', () => {
      myQueue.enqueue(1);
      myQueue.enqueue(2);
      myQueue.enqueue(3);
      myQueue.enqueue(4);
      expect(myQueue.stackA._storage).toEqual([1, 2, 3, 4]);
    });
    test('Testing that dequeue is working properly', () => {
      myQueue.enqueue(1);
      myQueue.enqueue(2);
      myQueue.enqueue(3);
      myQueue.enqueue(4);
      expect(myQueue.dequeue()).toEqual(1);
    });
  });
});
