'use strict';

const fizzBuzz = require('../lib/fizz-buzz');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing to see if fizz-buzz.js is working with a tree that has values that touch all cases', () => {
  test('testing to see if the correct cat is adopted', () => {
    const A = new Node(3); // tree.root.value
    const B = new Node(6); // tree.root.left.value
    const C = new Node(5); // tree.root.right.value
    const D = new Node(7); // tree.root.left.left.value
    const E = new Node(30); // tree.root.left.right.value
    const F = new Node(15); // tree.root.right.left.value
    const G = new Node(10); // tree.root.right.right.value

    const tree = new BinaryTree(A);

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    fizzBuzz(tree.root);

    expect(tree.root.value)
      .toEqual('fizz'); // const A Original Value = 3
    expect(tree.root.left.value)
      .toEqual('fizz'); // const B Original Value = 6
    expect(tree.root.right.value)
      .toEqual('buzz'); // const C Original Value = 5
    expect(tree.root.left.left.value)
      .toEqual(7); // const D Original Value = 7
    expect(tree.root.left.right.value)
      .toEqual('fizzbuzz'); // const E Original Value = 30
    expect(tree.root.right.left.value)
      .toEqual('fizzbuzz'); // const F Original Value = 15
    expect(tree.root.right.right.value)
      .toEqual('buzz'); // const G Original Value = 10
  });
  describe('testing to see if fizz-buzz.js is working with a tree that has no nodes', () => {
    test('testing to see if the correct cat is adopted', () => {
      const tree = new BinaryTree();
      expect(fizzBuzz(tree.root))
        .toEqual(undefined);
    });
  });
});
