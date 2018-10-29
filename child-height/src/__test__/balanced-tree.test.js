'use strict';

const balancedTree = require('../lib/balanced-tree');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing all cases of balanced-trees function', () => {
  test('testing to see a tree is balanced', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(15);
    const G = new Node(10);

    const treeOne = new BinaryTree(A);

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    balancedTree(treeOne);

    expect(balancedTree(treeOne))
      .toEqual(true);
  });
  test('testing to see if a tree is unbalanced', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(15);
    const G = new Node(10);
    const H = new Node(100);
    const I = new Node(99);
    const J = new Node(102);

    const treeTwo = new BinaryTree(A);

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    C.left = H;
    H.left = I;
    I.left = J;

    balancedTree(treeTwo);

    expect(balancedTree(treeTwo))
      .toEqual(false);
  });
});
