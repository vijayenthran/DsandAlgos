

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
    function traversal(root){

        if(root.left === null){
            return {root:root , value:'left'}
        }else if(root.right === null){
            return {root:root , value:'right'}
        }
        if(root.left!==null){
            return traversal(root.left);
        }
        if(root.right!==null){
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
    while(tempnode){
        if(tempnode.left !== null){
            queue.enqueue(tempnode.left);
        }
        if(tempnode.right !== null){
            queue.enqueue(tempnode.right);
        }

        if(tempnode.left === null){
            tempnode.left = new BinaryTree(value);
            break;
        }else if(tempnode.right === null){
            tempnode.right = new BinaryTree(value);
            break;
        }
        tempnode = queue.dequeue();
    }
};