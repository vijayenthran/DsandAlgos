function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
    if (!value) {
        throw new Error('Please define the value to insert.');
    }
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
};

BinarySearchTree.prototype.printRightView = function () {
    let rightView = [];
    var level = 0;

    function traversal(root) {
        if (root === null) {
            return;
        }
        if (!rightView[level]) {
            rightView[level] = root.value;
        }
        if (root.right !== null) {
            level = level + 1;
            traversal(root.right);
        }

        if (root.left !== null) {
            level = level + 1;
            traversal(root.left);
        }
        level = level - 1;
    }

    traversal(this);
    return rightView;
};

BinarySearchTree.prototype.LevelOrderTraversal = function () {
    let queue = new Queue();
    let tempnode = this;
    while (tempnode) {
        if (tempnode.left !== null) {
            queue.enqueue(tempnode.left);
        }
        if (tempnode.right !== null) {
            queue.enqueue(tempnode.right);
        }
        tempnode = queue.dequeue();
    }
};

BinarySearchTree.prototype.verticalDistance = function () {
    function traversal(root, VerticalDistanceValue) {
        if (root.left !== null) {
            traversal(root, VerticalDistanceValue - 1);
        }
        if (root.right !== null) {
            traversal(root, VerticalDistanceValue + 1);
        }
        traversal(root, 0);
    }

};

BinarySearchTree.prototype.isvalidBST = function () {
    function traversal(root) {
        if (root.left !== null) {
            if (root.value < root.left.value) {
                return false;
            } else {
                return traversal(root.left);
            }
        }
        if (root.right !== null) {
            if (root.value > root.right.value) {
                return false;
            } else {
                return traversal(root.right);
            }
        }
    }

    if (traversal(this) === false) {
        return false;
    } else {
        return true;
    }
};

BinarySearchTree.prototype.isvalidBST = function () {
    if (this.left !== null) {
        if (this.left.value > this.value) {
            return false;
        }
    }

    if (this.right !== null) {
        if (this.right.value < this.value) {
            return false;
        }
    }

    if (!traversal(this.left) || !traversal(this.right)) {
        return false;
    }
    return true;
};

BinarySearchTree.prototype.printHeightAtEachnode = function () {
    let leftheight, rightHeight;
    function traversal(root) {
      if(root === null){
          return 0;
      }
        leftheight = traversal(root.left);
        rightHeight = traversal(root.right);
        return 1 + Math.max(leftheight, rightHeight);
    }

    traversal(this)

};

function test1() {
    var a = Object.assign.apply(null, {}, arguments);
    console.log(a);
}

test1('a', 'b', 'c');

