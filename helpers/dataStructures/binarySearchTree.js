class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null; 
  }

  insert = (val) => {
    if(isNaN(val)) return undefined;
    let newNode = new Node(val);
    if (!this.root) this.root = newNode;
    else {
      let element = this.root; 
      while (element) {
        if(element.val < val) {
          if (element.right) {
            element = element.right;
            continue;
          }
          element.right = newNode;
        } else if (element.val > val) {
          if (element.left) {
            element = element.left
            continue;
          } 
          element.left = newNode;  
        }
        element = null;
      }
    }
    return this;
  }


  find = val => {
    if (isNaN(val)||!this.root) return undefined;
    if (val === this.root.val) return this.root;
    let element = this.root; 
    while(true) {
      if (val > element.val) {
          if (!element.right) return undefined;
          if (element.right.val == val) return element.right;
          element = element.right; continue;
      } else {
         if (!element.left) return undefined;
         if (element.left.val === val) return element.left;
         element = element.left; continue;
      }
    }
  }
}

let Tree = new BinarySearchTree;

Tree.insert(10).insert(5).insert(13).insert(11).insert(2).insert(16)
.insert(7).insert(200).insert(199).insert(201).insert(202).insert(203).insert(198);

console.log(Tree.find(199))
console.log(Tree)