//binary search trees
// Node constructor
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  insert(data) {
    if (this.data === data) {
      throw new Error(`the input data:${data} already exist within tree`);
    } else if (this.data > data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  //recursive
  findMin() {
    if (this.left) {
      return this.left.findMin();
    }
    return this.data;
  }

  /*
  //iterative
  findMin(){
    let current=this
    while(current.left){
      current=current.left
    }
    return current.data
  }
  */

  delete(data) {
    if (data < this.data && this.left) {
      this.left = this.left.delete(data);
    } else if (data > this.data && this.right) {
      this.right = this.right.delete(data);
    } else {
      if (this.data === data) {
        if (this.right && this.left) {
          let minVal = this.right.findMin();
          this.data = minVal;
          this.right = this.right.delete(minVal);
        } else if (this.left) {
          return this.left;
        } else if (this.right) {
          return this.right;
        } else {
          return null;
        }
      }
    }
    return this;
  }

  find(data) {
    if (this.data === data) {
      return true;
    } else if (data < this.data && this.left !== null) {
      return this.left.find(data);
    } else if (data > this.data && this.right !== null) {
      return this.right.find(data);
    }
    return false;
  }

  /* INORDER Traversals
   * 1) Left Sub Tree
   * 2) Print Node
   * 3) Right Sub Tree
   */
  inorder(currentNode) {
    if (currentNode) {
      this.inorder(currentNode.left);
      console.log(currentNode.data);
      this.inorder(currentNode.right);
    }
  }

  /* Preorder Traversals
   * 1) Print Node
   * 2) Left Sub Tree
   * 3) Right Sub Tree
   */
  preorder(currentNode) {
    if (currentNode) {
      console.log(currentNode.data);
      this.preorder(currentNode.left);
      this.preorder(currentNode.right);
    }
  }

  /* Postorder Traversals
   * 1) Left Sub Tree
   * 2) Right Sub Tree
   * 3) Print Node
   */
  postorder(currentNode) {
    if (currentNode) {
      this.postorder(currentNode.left);
      this.postorder(currentNode.right);
      console.log(currentNode.data);
    }
  }

  findHeight(currentNode) {
    if (currentNode === null) {
      return -1;
    }
    let leftHeight = this.findHeight(currentNode.left);
    let rightHeight = this.findHeight(currentNode.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(num) {
    if (this.root === null) {
      this.root = new Node(num);
    } else {
      this.root.insert(num);
    }
  }

  delete(data) {
    if (this.root) {
      this.root = this.root.delete(data);
    }
  }

  find(data) {
    if (this.root) {
      return this.root.find(data);
    }
    return false;
  }

  inorder() {
    if (this.root) {
      this.root.inorder(this.root);
    }
  }

  preorder() {
    if (this.root) {
      this.root.preorder(this.root);
    }
  }

  postorder() {
    if (this.root) {
      this.root.postorder(this.root);
    }
  }

  findHeight() {
    if (this.root) {
      return this.root.findHeight(this.root);
    }
    return -1;
  }
}

const tree = new BST();
const tree1 = new BST();
tree.insert(25);
tree.insert(55);
tree.insert(15);
tree.insert(18);
tree.insert(8);
tree.insert(75);
tree.insert(85);
console.log(tree.findHeight());
// console.log(tree.postorder());
