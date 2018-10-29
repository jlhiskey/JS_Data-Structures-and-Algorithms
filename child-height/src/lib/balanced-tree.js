'use strict';

module.exports = function balancedTree(tree) {
  let isBalanced = false;
  const leftSide = tree.root.left;
  const rightSide = tree.root.right;
  let leftHeight = null;
  let rightHeight = null;
  const calculateLeftHeight = (leftTree) => {
    return calculateLeftHeightHelper(leftTree); // eslint-disable-line
  };
  let calculateLeftHeightHelper = (root) => {
    if (root === null) {
      return -1;
    }
    if (root.left === null && root.right === null) {
      return 0;
    }
    const leftChildHeight = calculateLeftHeightHelper(root.left);
    const rightChildHeight = calculateLeftHeightHelper(root.right);
    leftHeight = Math.max(leftChildHeight, rightChildHeight);
    leftHeight += 1;
    return undefined;
  };
  const calculateRightHeight = (rightTree) => {
    return calculateRightHeightHelper(rightTree); // eslint-disable-line
  };
  let calculateRightHeightHelper = (root) => {
    if (root === null) {
      return -1;
    }
    if (root.left === null && root.right === null) {
      return 0;
    }
    const leftChildHeight = calculateRightHeightHelper(root.left);
    const rightChildHeight = calculateRightHeightHelper(root.right);
    rightHeight = Math.max(leftChildHeight, rightChildHeight);
    rightHeight += 1;
    return undefined;
  };
  calculateLeftHeight(leftSide);
  calculateRightHeight(rightSide);
  if (leftHeight === rightHeight || leftHeight === rightHeight + 1 || leftHeight === rightHeight - 1) { // eslint-disable-line
    isBalanced = true;
  }
  return isBalanced;
};
