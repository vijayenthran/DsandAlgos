function BinarySearchtree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchtree.prototype.insert = function (value) {
    if (!value) {
        return 'Please call insert with a value';
    }

    if (value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchtree(value);
        }
        else {
            this.left.insert(value);
        }
    }

    if (value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchtree(value);
        } else {
            this.right.insert(value)
        }
    }
};

BinarySearchtree.prototype.printLevels = function () {
    let level = 0;
    let levelsArr = [];

    function traversal(root) {
        levelsArr.push({node: root, level: level});
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
    return levelsArr;
};


BinarySearchtree.prototype.printRightView = function () {
    let rightViewArr = [];
    let level = 0;

    function traversal(root) {
        if (!rightViewArr[level]) {
            rightViewArr[level] = root.value;
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
    return rightViewArr;
};

BinarySearchtree.prototype.printleftView = function () {
    let rightViewArr = [];
    let level = 0;

    function traversal(root) {
        if (!rightViewArr[level]) {
            rightViewArr[level] = root.value;
        }
        if (root.left !== null) {
            level = level + 1;
            traversal(root.left)
        }
        if (root.right !== null) {
            level = level + 1;
            traversal(root.right)
        }
        level = level - 1;
    }

    traversal(this);
    return rightViewArr;
};

BinarySearchtree.prototype.addValues = function () {
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

BinarySearchtree.prototype.verticalDistance = function () {
    let vdArr = [];

    function traversal(root, vd) {
        vdArr.push({node: root.value, vd: vd});
        if (root.left !== null) {
            traversal(root.left, vd - 1);
        }
        if (root.right !== null) {
            traversal(root.right, vd + 1);
        }
    }

    traversal(this, 0);
    return vdArr;
};

BinarySearchtree.prototype.BFT = function () {
    let queue = new QueueUsingArr();
    let tempnode = this;
    let arr = [];
    while (tempnode) {
        arr.push(tempnode.value);
        if (tempnode.left !== null) {
            queue.enqueue(tempnode.left);
        }
        if (tempnode.right !== null) {
            queue.enqueue(tempnode.right);
        }
        tempnode = queue.dequeue();
    }
    return arr;
};


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


BinarySearchtree.prototype.BottomView = function () {
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


BinarySearchtree.prototype.isvalidBST = function () {
    debugger;

    function traversal(root) {
        if (root === null) {
            return true;
        }
        if (root.left !== null) {
            if (root.left.value > root.value) {
                return false;
            }
        }
        if (root.right !== null) {
            if (root.right.value < root.value) {
                return false;
            }
        }
        if (!traversal(root.left) || !traversal(root.right)) {
            return false;
        }
        return true;
    }

    return traversal(this)
};

BinarySearchtree.prototype.isContained = function (value) {
    if(value === this.value){
        return true;
    }
    if(value < this.value){
        if (this.left !== null) {
            return this.left.isContained(value);
        } else {
            return false;
        }
    }
    if(value > this.value){
        if (this.left !== null) {
            return this.left.isContained(value);
        } else {
            return false;
        }
    }
};

BinarySearchtree.prototype.printHeights = function (){
    let leftHeight;
    let rightHeight;
    function traversal(root){
        if(root === null){
            return 0;
        }
        leftHeight = traversal(root.left);
        rightHeight = traversal(root.right);
        console.log(root.value, leftHeight, rightHeight);
        return 1 + Math.max(leftHeight, rightHeight)
    }
    traversal(this)
};

BinarySearchtree.prototype.isheightBalanced = function (){
    let leftHeight;
    let rightHeight;
    function traversal(root){
        if(root === null){
            return 0;
        }
        leftHeight = traversal(root.left);
        rightHeight = traversal(root.right);
        if(Math.abs(leftH))
        return 1 + Math.max(leftHeight, rightHeight)
    }
    traversal(this)
};