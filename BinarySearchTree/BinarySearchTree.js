'use strict';

const queue = require('../Queue/Queue');

/*
Question
-  Implement a general Binary Search Tree that can insert Values
-  Find the nodes whose neighbours are null. // This is nothing but print the rightView in the tree.
-  Add all the node values from the binary search tree.
-  Print the node value along with its level in a binary tree.
-  Pre-Order, PostOrder, In order traversal.
-  Print the left view of a Binary Search Tree.
-  Level Order Traversal.
-  Vertical Order Traversal Of a Binary Search Tree. - Print Nodes With Vertical Distance BeTween Them
-  Traverse Breadth First in a binary Search Tree. -- Needs to have a Queue
-  Traverse Depth First in a Binary Search Tree. inorder, pre order, postorder traversal --- Verify this question.


// -- To Continue -- Pointer
- Vertical Order Traversal
-  Print the top view of a Binary Search Tree.
-  Print the Bottom View of a Binary Search Tree. -- Ask Question if there is this view.If so then the bottom view will be the entire tree.
-  Check if a tree is a Binary Search Tree.
-  Check if the tree is a balanced tree.
-  Check if a Value is contained in a Binary Search Tree.
- Lowest Common Ancestor.
- Print Neighbours.
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

test.insert(15);
test.insert(8);
test.insert(9);
test.insert(7);


//- More data // Unbalanced BST.
test.insert(15);
test.insert(8);
test.insert(9);
test.insert(7);
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
Pseudo Code.

- Logic Choose to traverse from the left hand side of the tree.
- keep track of the indexes and the levels.
- The levels are the indexes here.
- As you go one level deeper increase the levels.
- If you cannot go both the left or right then during the recursion cycle decrease the level.
*/

BinarySearchTree.prototype.printLeftView = function () {
    let leftViewArr = [];
    let level = 0;

    function traversal(root) {
        if (!leftViewArr[level]) {
            leftViewArr[level] = root.value
        }
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
    return leftViewArr;
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

/*
Vertical Distance

Pseudocode

- Vertical Distance is used to calculate the vertical Position of the node from the root.
- We first assign the vertical Distance as o.
- We start from the root.
- Then when we traverse left we then decrement the vertical distance by 1.
- When We traverse right we increment the Vertical distance by 1

Note:
We have to some how form a closure variable here.
- We cannot assign the value of vertical distance inside the traversal function.
- Because then during every recursion it will be reset.
- But at the same time we want to maintain the state of the variable . So we pass it through the parameter.
*/
BinarySearchTree.prototype.verticalDistance = function () {
    let arr = [];

    function traversal(root, verticalDistance) {
        arr.push({value: root.value, verticalDistance: verticalDistance});
        if (root.left !== null) {
            traversal(root.left, verticalDistance - 1);
        }
        if (root.right !== null) {
            traversal(root.right, verticalDistance + 1);
        }
    }

    // Set the initial Vertical Distance as 0
    traversal(this, 0);
    return arr;
};

/*
Level Order Traversal.

Pseudocode

- This is to print the Tree nodes in level. Starting from the root.
- This is the breadth first traversal of a tree.
- This needs a Queue.
- Select the root of the queue and assign it to the temp variable.
- Loop until the temp variable is null.
- Push the left and the right nodes to the queue.
- Then Pop the first element in the queue and push the left and right nodes to the queue.
- Repeat this step until the leaf node is reached.
*/

BinarySearchTree.prototype.breadthFirstTraversal = function () {
    let traversalArr = [];
    // let queue = new queue.QueueUsingArr();
    let queue = new QueueUsingArr();
    let tempnode = this;

    while (tempnode) {
        if (tempnode.left !== null) {
            queue.enqueue(tempnode.left);
        }
        if (tempnode.right !== null) {
            queue.enqueue(tempnode.right);
        }
        traversalArr.push(tempnode.value);
        tempnode = queue.dequeue();
        // if (!tempnode) {
        //     tempnode = null;
        // }
    }
    return traversalArr;
};

/*
Pseudocode

- Start from the root node.
- we have to travel Breadth first traversal here.
- We cannot recurse. So we have to maintain two different conditions.
- One for the root node and other for the non root nodes.
- We have to get the vertical distance somehow in a closure form.
- If we see the vertical distance calculation for each nodes.
- We pass the vd of the current node to the recursive function.
- But here there is no recursion. Therefore we have to maintain the value of the vertical distance by storing it some where.


*/

BinarySearchTree.prototype.verticalTraversalUsingBFS = function () {
    let traversalHash = [];
    let queue = new QueueUsingArr();
    let tempnode = this;
    let level = 0;
    while (tempnode) {
        if (tempnode === this) {
            traversalHash.push({vd: level, value: tempnode.value});
            if (tempnode.left !== null) {
                queue.enqueue({
                    vd: level - 1,
                    node: tempnode.left
                });
            }
            if (tempnode.right !== null) {
                queue.enqueue({
                    vd: level + 1,
                    node: tempnode.right
                });
            }
        } else {
            traversalHash.push({vd: tempnode.vd, value: tempnode.node.value});
            if (tempnode.node.left !== null) {
                queue.enqueue({
                    vd: tempnode.vd - 1,
                    node: tempnode.node.left
                });
            }

            if (tempnode.node.right !== null) {
                queue.enqueue({
                    vd: tempnode.vd + 1,
                    node: tempnode.node.right
                });
            }
        }
        tempnode = queue.dequeue();
    }
    return traversalHash;
};

/*

Print the Top view of a Binary Tree.

- We use Object instead of an array because. We cannot have negative indexes in an array.
- In objects we can have negative index and there fore we use objects.
- For Top view We will not recurse the function instead we will just use Breadth First Search.

*/
BinarySearchTree.prototype.topView = function () {
    debugger;
    let topViewObj = {};
    let topViewArr = [];
    let verticalDistance = 0;
    let tempnode = this;
    let queue = new QueueUsingArr();

    while (tempnode) {
        if (tempnode === this) {
            // Note the the keys of the objects are strings. Therefore you should be passing the strings. refer indexOf(`${verticalDistance}`)
            if (Object.keys(topViewObj).indexOf(`${verticalDistance}`) < 0) {
                topViewObj[`${verticalDistance}`] = [tempnode.value];
                topViewArr.push(tempnode.value);
            } else {
                topViewObj[`${verticalDistance}`].push(tempnode.value);
            }
            if (tempnode.left !== null) {
                queue.enqueue({vd: verticalDistance - 1, node: tempnode.left});
            }
            if (tempnode.right !== null) {
                queue.enqueue({vd: verticalDistance + 1, node: tempnode.right});
            }
        } else {
            if (Object.keys(topViewObj).indexOf(`${tempnode.vd}`) < 0) {
                topViewObj[`${tempnode.vd}`] = [tempnode.node];
                topViewArr.push(tempnode.node.value);
            } else {
                topViewObj[`${tempnode.vd}`].push(tempnode.node);
            }
            if (tempnode.node.left !== null) {
                queue.enqueue({vd: tempnode.vd - 1, node: tempnode.node.left});
            }
            if (tempnode.node.right !== null) {
                queue.enqueue({vd: tempnode.vd + 1, node: tempnode.node.right});
            }
        }
        tempnode = queue.dequeue();
    }
    return {
        topviewObj: topViewObj,
        topViewArr: topViewArr
    };
};