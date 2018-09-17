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
-  Vertical Order Traversal
-  Print the top view of a Binary Search Tree.
-  Check if a tree is a Binary Search Tree.
-  Bottom View.
-  Check if a Value is contained in a Binary Search Tree.
-  Check if the tree is a balanced tree.
-  find the Maximum depth of a Binary Search Tree.
-  Check if two nodes are cousins.

// -- To Continue -- Pointer
-  Print the Bottom View of a Binary Search Tree. -- Validate bottom view with various inputs.  - This is done.
-  Lowest Common Ancestor.
-  Print Ancestors of a node.
-  Print Neighbours.
-  Print all nodes that don’t have sibling
-  Find k-th smallest element in BST
-  print all the ancestors.
-  in order successor and Predecessor.
- Count the number of Binary Search Trees That can be formed.
-  You are given a binary tree and a given sum. The task is to check if there exist a subtree whose sum of all nodes is equal to the given sum.
-  Delete Minimum.
- Delete Maximum.
- Delete Any node in a Binary Search Tree.
- Check if a binary tree is subtree of another binary tree
- Reverse level order traversal binary tree https://www.youtube.com/watch?v=D2bIbWGgvzI
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
    }
    return traversalArr;
};

/*

Vertical Traversal using Breadth First Search

Pseudocode
- Start from the root node.
- we have to use Breadth first traversal here.
- We cannot recurse here since we are using Breadth First Traversal.
- One for the root node and other for the non root nodes.
- We have to get the vertical distance somehow for each nodes. The vertical Distance of the parent is started as 0.
- As we travel left we decrement the vertical distance by 1 from the current nodes parent vertical distance.
- Similarly as we traverse right we increment the vertical distance by 1, using the current nodes parent vertical distance.
- To get the vertical distance we cannot use the vertical distance general variable declared outside.
- The vertical distance variable declared outside will hold true only for the root node.
- But for the non root nodes we have to pass use the vertical distance of the current parent.
- In order to do that. We create an object {vd: tempnode.vd, value: tempnode.node.value}
- If there is a left we push it to the queue.
- if there is a right we push it to the queue.
- At the end of the while loop we dequeue from the queue.
- we Assign the dequeued value to the temnode variable.
- We loop util the tempnode variable holds true.
- We return from the function once the while loop truncates.
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

Pseudocode
- Start from the root node.
- we have to use Breadth first traversal here.
- We cannot recurse here since we are using Breadth First Traversal.
- One for the root node and other for the non root nodes.
- We have to get the vertical distance somehow for each nodes. The vertical Distance of the parent is started as 0.
- As we travel left we decrement the vertical distance by 1 from the current nodes parent vertical distance.
- Similarly as we traverse right we increment the vertical distance by 1, using the current nodes parent vertical distance.
- To get the vertical distance we cannot use the vertical distance general variable declared outside.
- The vertical distance variable declared outside will hold true only for the root node.
- But for the non root nodes we have to pass use the vertical distance of the current parent.
- In order to do that. We create an object {vd: tempnode.vd, value: tempnode.node.value}
- If there is a left we push it to the queue.
- if there is a right we push it to the queue.
- At the end of the while loop we dequeue from the queue.
- we Assign the dequeued value to the temnode variable.
- We loop util the tempnode variable holds true.
- We return from the function once the while loop truncates.


The above steps are general forBFS.
- To print the top view. we have to select the one node of each vertical distance number.
- For example

-When we run the above code.
-topViewObj will contain an array of objects.
- There can be two different nodes with the same Vd.
- For top view. We select the first node for each vertical distance.
*/

*/
BinarySearchTree.prototype.topView = function () {
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
                // This pushes the value to the top view arr.
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

/*
Vertical Order Traversal

Pseudocode.

- Same as top view.
- Except one small logic change that I have indicated in the code.
- Validate this various inputs.
*/


BinarySearchTree.prototype.BottomView = function () {
    let verticalTraversalArray = {};
    let bottomView = {};
    let verticalDistance = 0;
    let queue = new QueueUsingArr();
    let tempnode = this;
    while (tempnode) {
        if (tempnode === this) {
            if (Object.keys(verticalTraversalArray).indexOf(`${verticalDistance}`) < 0) {
                // This logic alone differs from that of the top view.
                bottomView[`${verticalDistance}`] = tempnode.value;
                verticalTraversalArray[`${verticalDistance}`] = [tempnode.value];
            } else {
                // This logic alone differs from that of the top view.
                bottomView[`${verticalDistance}`] = tempnode.value;
                verticalTraversalArray[`${verticalDistance}`].push(tempnode.value);
            }
            if (tempnode.left !== null) {
                queue.enqueue({vd: verticalDistance - 1, node: tempnode.left});
            }
            if (tempnode.right !== null) {
                queue.enqueue({vd: verticalDistance + 1, node: tempnode.right});
            }
        } else {
            if (Object.keys(verticalTraversalArray).indexOf(`${tempnode.vd}`) < 0) {
                bottomView[`${tempnode.vd}`] = tempnode.node.value;
                verticalTraversalArray[`${tempnode.vd}`] = [tempnode.node.value];
            } else {
                bottomView[`${tempnode.vd}`] = tempnode.node.value;
                verticalTraversalArray[`${tempnode.vd}`].push(tempnode.node.value);
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
    return bottomView;
};

/*
isValidBST

Pseudo code

- Start from the root.
- If there is left then check if the value of left is greater than the root value.
- If so return false.
- Similarly check if there is right and if there is a right check . check if its value is less than the root.
- if it is return false.
- If there is no left or right then we return null
- Check the important if condition
*/


BinarySearchTree.prototype.isValidBST = function () {
    if (this.left === null || this.right === null) {
        return true;
    }
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
    // important if condition . this is where we recurse and if anything in the previous function return false. Then we return false.
    if (!this.left.isValidBST() || !this.right.isValidBST()) {
        return false;
    }
    return true;
};


/*
Is Contained.

Pseudocode.

Handle Conditions.

- when the value is less go left
- When the value is great go right.
- when going left if there is a node keep on traversing.
- Similarly when going right if there is a node keep on traversing.

*/

BinarySearchTree.prototype.isContained = function (value) {
    if (value === this.value) {
        return true;
    }

    if (value < this.value) {
        if (this.left !== null) {
            return this.left.isContained(value);
        }else{
            return false;
        }
    } else if (value > this.value) {
        if (this.right !== null) {
            return this.right.isContained(value);
        }else{
            return false;
        }
    }
};

/*

Print left Height and right height of Each node.
Useful Youtube Link https://www.youtube.com/watch?v=TWDigbwxuB4
-check the left and the right of each node.
-If the left is null return 0. // This is the base case
-Similarly If the right is null return 0. // This is the base case.
- Have two Variables that store the left and the right height.
- at the end Add the maximum of left height and right height with 1.
*/
BinarySearchTree.prototype.printHeightEachNode = function () {
    // base case
    let arr = [];

    function traverasl(root) {
        if (root === null) {
            return 0;
        }
        let leftHeight = traverasl(root.left);
        let rightHeight = traverasl(root.right);
        arr.push({node: root.value, left: leftHeight, right: rightHeight});
        return 1 + Math.max(leftHeight, rightHeight);
    }

    traverasl(this);
    return arr;
};

/*
Check Height Balanced.

- A tree is height balanced if the left height and the right height difference is not greater than 1. for each and every node.
- Same code as printing the left and right height of each nodes. except that if the left height or the right height === -1 then return -1
*/
BinarySearchTree.prototype.isBalanced = function () {
    // base case
    function traverasl(root) {
        if (root === null) {
            return 0;
        }
        let leftHeight = traverasl(root.left);
        if (leftHeight === -1) {
            return -1;
        }
        let rightHeight = traverasl(root.right);
        if (rightHeight === -1) {
            return -1;
        }
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }

    if (traverasl(this) === -1) {
        return false;
    } else {
        return true;
    }
};

/*

Print Maximum Depth.

- Same code as print the max depth of each node. at the end return the maximum height of the tree.
*/

BinarySearchTree.prototype.MaxDepth = function () {
    function traversal(root) {
        if (root === null) {
            return 0;
        }
        let leftHeight = traversal(root.left);
        let rightHeight = traversal(root.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return traversal(this) - 1;
};

/*

To Check Two Nodes are cousins of each other.

They should be in the same level and they should have different parents.
*/

BinarySearchTree.prototype.isCousins = function (value1, value2) {
    let level = 0;
    var storage = [];
    if (!value1 || !value2) {
        return 'Either Value 1 or Value 2 is not defined.';
    }

    function traversal(root, parent) {
        if (root.left !== null) {
            level = level + 1;
            traversal(root.left, root);
        }
        if (root.right !== null) {
            level = level + 1;
            traversal(root.right, root);
        }
        if (root.value === value1 || root.value === value2) {
            storage.push({node: root.value, level: level, parent: parent});
        }
        level = level - 1;
    }

    traversal(this, this);
    if (storage[0] && storage[1]) {
        if (storage[0].level === storage[1].level) {
            if(storage[0].parent !== storage[1].parent){
                return true;
            }else{
                return false;
            }
        } else {
            return false;
        }
    }else{
        return 'Something Wrong with your function please check that.';
    }
};


// //https://www.youtube.com/watch?v=F-_1sbnPbWQ&t=288s
// BinarySearchTree.prototype.LowestCommonAncestor = function (value1, value2){
//     let leftTraversal;
//     let rightTraversal;
//     let lca;
//     debugger;
//     function traversal(root){
//         if(root === null){
//             return null;
//         }
//         if(root.value === value1 || root.value === value2){
//             return root;
//         }
//         leftTraversal= traversal(root.left);
//         rightTraversal=traversal(root.right);
//         if(leftTraversal !==null && rightTraversal !==null){
//             return root;
//         } else {
//             return leftTraversal ? leftTraversal :rightTraversal;
//         }
//     }
//     return traversal(this);
// };


BinarySearchTree.prototype.LowestCommonAncestorBST = function (value1, value2){
    function traversal(root){
        if(root.value >)
    }
    return traversal(this);
};



var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else {
        return root;
    }
}