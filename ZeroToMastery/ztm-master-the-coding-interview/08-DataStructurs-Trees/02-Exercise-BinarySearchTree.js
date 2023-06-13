class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create a new node with the value
    let node = new Node(value);

    // if there is no root, then the root becomes the node
    if (!this.root) {
      this.root = node;
      // otherwise we enter a while loop
    } else {
      // place holder for the root
      let currentNode = this.root;
      while (true) {
        // left side of the tree if the value is less than the current node value
        if (value < currentNode.value) {
          // if there is no node on the left, we create one with the node that was created and we return
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          // if none of the loop condtions are met, the current node becomes the left node
          currentNode = currentNode.left;
        }
        // right side of the tree if the value is greater than the current node value
        if (value > currentNode.value) {
          // if no node on the right, we create one with the node that was created in the first step and we return
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          // if none of the loop conditions are met, the current node becomes the right node
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    // if there is no root, return false
    if (!this.root) {
      return false;
    }
    // placeholder for the root so we can change the values as we loop
    let currentNode = this.root;
    // as long as current node exits, while loop continues
    while (currentNode) {
      // return true if the value of the current node equals value
      if (currentNode.value === value) {
        return true;
        // otherwise set the current node to the current left or right node
      } else {
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        }
        if (currentNode.value < value) {
          currentNode = currentNode.right;
        }
      }
    }
    // return false if the while loop does not return true
    return false;
  }
  //remove
  remove(value) {
    // we need to find the value, then find its left and right values... remove value and replace it with its left value
    if (!this.root) {
      return "Value not found";
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.remove(170));
// console.log(tree.root.value, tree.root.right, tree.root.left);
console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(1), tree.lookup(17), tree.lookup(9));

// recursive function to traverse node
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
