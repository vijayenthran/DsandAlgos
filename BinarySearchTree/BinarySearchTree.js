'use strict';

/*
Question
-  Implement a general Binary Search Tree that can insert Values
-  Find the nodes whose neighbours are null. // This is nothing but print the rightView in the tree.
-  Add all the node values from the binary search tree.
-  Print the node value along with its level in a binary tree.

// -- To Continue -- Pointer
-  Pre-Order, PostOrder, In order traversal.
-  Print the left view of a Binary Search Tree.
-  Print the top view of a Binary Search Tree.
-  Print the Bottom View of a Binary Search Tree.
*/

/*
Test Values

Code to Initialize a Binary Search Tree and Fill that up with Children.
Useful When needed to test other prototype methods.

var test = new BinarySearchTree(11);
test.insert(11);
test.insert(20);
test.insert(10);
test.insert(6);
test.insert(5);

*/


/*
Constructor Function
Binary Tree is a tree with Two nodes.
Since there can only be two nodes left and rigt. We have left and right Values
*/
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/*

Insert Values into a Binary Search Tree

Pesudocode

- Check if the value that is going to be isnerted less than the root
- if the value is less then we have to traverse left side of the tree.
- If the value is greater go to the right side of the tree.
- Recurse until the correct spot is obtained. Once the spot is obtained.
- Create a new BinarySearch Tree node and insert it into that place
- The base case here for recursion and to find the right spot to insert is that the value of the left or right should be null
*/


BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(value);
        } else {
            // Recurse until the left value is null and insert it where the value is null
            this.left.insert(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            // Recurse until the right value is null and insert it where the value is null
            this.right.insert(value);
        }
    }
};


/*Traverse through the tree and print its values along with its level

Peseudocode

- Start from the root.
- The Level is initialized to Zero
- Then as you enter through the levels. Then print the levels as well.
- This Traversal Method is PreOrder Traversal.
- When you try to recurse one element deep. either left or right then increase the level.
- If there is no left or right then decrease the level.
*/


BinarySearchTree.prototype.printLevels = function () {
    let levelsAndValues = [];
    let level = 0;

    function traversal(root) {
        levelsAndValues.push({rootValue: root.value, level: level});
        if (root.left !== null) {
            level = level + 1;
            traversal(root.left);
        }
        if (root.right !== null) {
            level = level + 1;
            traversal(root.right);
        }
        level = level - 1;
    }

    traversal(this);
    return levelsAndValues;
};


/*
Traverse and Print the right View of the tree

PseudoCode.

- Start form the root.
- Of Course the root will the right most side of the tree.
- Check if the this is the root. If it is then push it to the right view array.
- Next Start iterating right.
- Push the right most elements to the array to the tree along with the levels.
- When all the right most elements are done.
- Now come to the left side.
- Check if there is already an element in the array if then dont log. else log.
- In the left side again start considering the right most node.
*/

BinarySearchTree.prototype.printRightView = function () {
    let rightView = [];
    let level = 0;

    function traversal(root) {
        if (!rightView[level]) {
            rightView[level] = root.value;
        }
        if (root.right !== null) {
            level = level + 1;
            traversal(root.right)
        }

        if (root.left !== null) {
            level = level + 1;
            traversal(root.left)
        }
        level = level - 1;
    }

    traversal(this);
    return rightView;
};

/*
Add All the node Values in the Binary Search Tree.

PseudoCode.

- Do in order Pre order or post Order Traversal.
- Have a constant sum value and initialize it to 0.
- NOTE : We cannot have the sum value initialized to 0 because during every recursion. It will reset itself.
- Then add the sum value to the current node value.
- return the sum at the end.
*/

BinarySearchTree.prototype.addValues = function () {
    let sum = 0;

    function traversal(root) {
        sum = sum + root.value;
        if (root.left !== null) {
            traversal(root.left);
        }
        if (root.right !== null) {
            traversal(root.right);
        }
    }

    traversal(this);
    return sum;
};


/*
In order Traversal -- This is depth first traversal of a binary search tree.

Pseudo code
- This is to visit the left first.
- Then Print the Value.
- Then visit the right

https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/


BinarySearchTree.prototype.inOrderTraversalNormal = function () {
    if (this.left !== null) {
        this.left.inOrderTraversal();
    }
    console.log(this.value);
    if (this.right !== null) {
        this.right.inOrderTraversal();
    }
};

/*
Pseudo code
- This is to visit the left first.
- Then Print the Value.
- Then visit the right
- This in order traversal is used to return the traversed value in an array.
- It uses the help of a traversal function. This function will be used for recursion


https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.inOrderTraversalExtFunc = function () {
    let inOrderValueArr = [];

    // This is the helper function that is used for traversal.
    function traversal(root) {
        if (root.left !== null) {
            traversal(root.left);
        }
        inOrderValueArr.push(root.value);
        if (root.right !== null) {
            traversal(root.right);
        }
    }

    traversal(this);
    return inOrderValueArr;
};

BinarySearchTree.prototype.inOrderTraversalNormal = function () {
    if (this.left !== null) {
        this.left.inOrderTraversal();
    }
    console.log(this.value);
    if (this.right !== null) {
        this.right.inOrderTraversal();
    }
};

/*
Pseudo code
- This is to visit the left first.
- Then Print the Value.
- Then visit the right
- This in order traversal is used to return the traversed value in an array.
- It uses the help of a traversal function. This function will be used for recursion


https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.inOrderTraversalAddFunc = function () {
    let inOrderValueArr = [];

    // This is the helper function that is used for traversal.
    function traversal(root) {
        if (root.left !== null) {
            traversal(root.left);
        }
        inOrderValueArr.push(root.value);
        if (root.right !== null) {
            traversal(root.right);
        }
    }

    traversal(this);
    return inOrderValueArr;
};

/*
Pseudo code
- Print the Value.
- visit the left.
- Then visit the right.

https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.preOrderTraversalNormal = function () {
    console.log(this.value);
    if (this.left !== null) {
        this.left.inOrderTraversal();
    }
    if (this.right !== null) {
        this.right.inOrderTraversal();
    }
};


/*
Pseudo code
- Print the Value.
- visit the left.
- Then visit the right.
- This in order traversal is used to return the traversed value in an array.
- It uses the help of a traversal function. This function will be used for recursion


https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.preOrderTraversalAddFunc = function () {
    let preOrderValueArr = [];

    // This is the helper function that is used for traversal.
    function traversal(root) {
        preOrderValueArr.push(root.value);
        if (root.left !== null) {
            traversal(root.left);
        }
        if (root.right !== null) {
            traversal(root.right);
        }
    }

    traversal(this);
    return preOrderValueArr;
};



/*
Pseudo code
- visit the left.
- Then visit the right.
- Print the Value.

https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.postOrderTraversalNormal = function () {
    if (this.left !== null) {
        this.left.inOrderTraversal();
    }
    if (this.right !== null) {
        this.right.inOrderTraversal();
    }
    console.log(this.value);
};


/*
Pseudo code
- visit the left.
- Then visit the right.
- Print the Value.
- This in order traversal is used to return the traversed value in an array.
- It uses the help of a traversal function. This function will be used for recursion


https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
*/

BinarySearchTree.prototype.postOrderTraversalAddFunc = function () {
    let postOrderTraversal = [];

    // This is the helper function that is used for traversal.
    function traversal(root) {
        if (root.left !== null) {
            traversal(root.left);
        }
        if (root.right !== null) {
            traversal(root.right);
        }
        postOrderTraversal.push(root.value);
    }

    traversal(this);
    return postOrderTraversal;
};