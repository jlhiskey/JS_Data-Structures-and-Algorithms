'use strict';

module.exports = function whosYourDaddy(tree, parent, child) {
  let targetParent = null;
  let response = 'No child found.';
  function findDaddy(root) {
    if (!root) {
      return undefined;
    }
    findDaddy(root.left);
    if (root.value === parent) {
      console.log('found parent');
      targetParent = root;
      console.log('parent=', targetParent.value);
      return undefined;
    }
    findDaddy(root.right);
    return undefined;
  }
  function findChild(root) {
    if (!root) {
      return undefined;
    }
    findChild(root.left);
    if (root.value === child) {
      console.log('found child');
      response = 'You are the father.';
      console.log('response=', response);
      return undefined;
    }
    findChild(root.right);
    return undefined;
  }

  findDaddy(tree.root);
  if (targetParent) {
    console.log('looking for child');
    findChild(targetParent);
  }
  if (!targetParent) {
    response = 'No father found.';
  }
  return response;
};
