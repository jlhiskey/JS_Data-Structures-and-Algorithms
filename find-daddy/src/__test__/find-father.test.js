'use strict';

const findTreeRepeat = require('../lib/find-father');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing whosYourDaddy()', () => {
  test('testing to see if a father is found', () => {
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

    findTreeRepeat(treeOne, 6, 30);

    expect(findTreeRepeat(treeOne, 6, 30))
      .toEqual('You are the father.');
  });
  test('test to see if empty tree returns no father', () => {
    const A = new Node(3);
    const B = new Node(6);
    const C = new Node(5);
    const D = new Node(7);
    const E = new Node(30);
    const F = new Node(15);
    const G = new Node(10);

    const treeOne = new BinaryTree();

    A.left = B;
    A.right = C;

    B.left = D;
    B.right = E;

    C.left = F;
    C.right = G;

    findTreeRepeat(treeOne, 3, 30);

    expect(findTreeRepeat(treeOne, 3, 30))
      .toEqual('No father found.');
  });
  test('testing to see if there is no child', () => {
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

    findTreeRepeat(treeOne, 6, 700);

    expect(findTreeRepeat(treeOne, 6, 700))
      .toEqual('No child found.');
  });
});
