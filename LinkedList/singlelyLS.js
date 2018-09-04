/*
myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')
myList.insertAfter(refNode, value)

=> new node
insert new node associated with value passed in after refNode
myList.removeAfter(refNode)

=> removed node
remove node after the refNode
myList.insertHead(value)

=> new head
insert new head node at the beginning of the list with the value passed in
myList.removeHead()

=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in
* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?
myList.appendToTail(value)

=> new tail node
add a new tail node at the end of the list with the associated value passed in
myList.removeTail()

=> removed tail node
remove the tail node from the list


** Part 2
Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?
Think about time complexity. What would it be for your current implementation of a linked list?
How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?
Once you've come up with a plan, implement the following methods.
myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode
myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in

*/

function Node(value) {
    this.value = value;
    this.next = null;
}


function SinglyLinkedList(value) {
    this.head;
    if (!this.head) {
        this.head = new Node(value);
    }
}

SinglyLinkedList.prototype.forEach = function (callbackfn) {
    function traversal(node) {
        while (node.next !== null) {
            callbackfn(node.value);
            node = node.next;
        }
    }

    traversal(this.head);
};

SinglyLinkedList.prototype.print = function (callbackfn) {
    let printString;

    function traversal(node) {
        while (node.next !== null) {
            if (!printString) {
                printString = node.value;
            } else {
                printString.concat(node.value);
            }
            node = node.next;
        }
    }

    traversal(this.head);
    return printString;
};

SinglyLinkedList.prototype.insertAfter = function (refNode, value) {
    if (!refNode || !value) {
        throw new Error('Either the Ref node or the Value is missing please check.');
    }
    let node = this.head;
    while (node.next !== null) {
        if (node === refNode) {
            let newNode = new Node(value);
            let tmp = node.next;
            node.next = newNode;
            newNode.next = tmp;
        }
        node = node.next;
    }
};

SinglyLinkedList.prototype.removeAfter = function (refNode) {
    if (!refNode) {
        throw new Error('the Ref node is missing');
    }
    let node = this.head;
    while (node.next !== null) {
        if (node === refNode) {
            node.next = node.next.next;
        }
        node = node.next;
    }
};

SinglyLinkedList.prototype.insertHead = function (value) {
    if (!value) {
        throw new Error('value is missing');
    }
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
};

SinglyLinkedList.prototype.removeHead = function () {
    if (this.head.next !== null) {
        this.head = this.head.next;
    } else {
        throw new Error('There is only only element in the list and we cannot remove the root node');
    }

};

SinglyLinkedList.prototype.findNode = function (value) {
    if (!value) {
        throw new Error('value is missing');
    }
    let node = this.head;
    while (node.next !== null) {
        if (node.value === value) {
            return node;
        }
        node = node.next;
    }
};