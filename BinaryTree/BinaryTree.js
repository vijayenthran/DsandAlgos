var BinaryTree = new BinaryTree(11);


function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/*
Insertion Depth first.
*/
BinaryTree.prototype.insertion = function (value) {
    // if (this.left === null) {
    //     this.left = new BinaryTree(value);
    //     return;
    // } else if (this.right === null) {
    //     this.right = new BinaryTree(value);
    //     return;
    // }
    // if(this.left !== null && this.left.left !== null && this.left.right !== null){
    //     this.right.insertion(value);
    // }else{
    //     this.left.insertion(value);
    // }

    // if(this.left === null){
    //     this.left = new BinaryTree(value);
    // }else if(this.right === null){
    //     this.right = new BinaryTree(value);
    // }
    // debugger;
    function traversal(root) {

        if (root.left === null) {
            return {root: root, value: 'left'}
        } else if (root.right === null) {
            return {root: root, value: 'right'}
        }
        if (root.left !== null) {
            return traversal(root.left);
        }
        if (root.right !== null) {
            return traversal(root.right);
        }
    }

    let emptySpot = traversal(this);
    emptySpot.root[emptySpot.value] = new BinaryTree(value);
};


/*
Insertion Breadth First.
*/
BinaryTree.prototype.insertion = function (value) {
    let queue = new QueueUsingArr();
    let tempnode = this;
    while (tempnode) {
        if (tempnode.left !== null) {
            queue.enqueue(tempnode.left);
        }
        if (tempnode.right !== null) {
            queue.enqueue(tempnode.right);
        }

        if (tempnode.left === null) {
            tempnode.left = new BinaryTree(value);
            break;
        } else if (tempnode.right === null) {
            tempnode.right = new BinaryTree(value);
            break;
        }
        tempnode = queue.dequeue();
    }
};


BinaryTree.prototype.LowestCommonAncestor = function (value1, value2) {
    debugger;

    function traversal(root) {
        if (root === null) {
            return null
        }

        if (root.value === value1 || root.value === value2) {
            return root;
        }

        let leftValue = traversal(root.left);
        let rightValue = traversal(root.right);

        if (leftValue && rightValue) {
            return root;
        } else {
            if (leftValue) {
                return leftValue;
            } else if(rightValue){
                return rightValue;
            }else{
                return null;
            }
        }
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