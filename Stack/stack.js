'use strict';

/*
Problems

-  Reverse a String using Stack.
-  Check if the brackets are balanced in a given string.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
-  Using Stack perform infix to postfix conversion.
// Helper https://www.youtube.com/watch?v=vXPL6UavUeA
- Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
- Sort a stack so that its elements are in ascending order.
*/


// Stack using Array
function StackusingStorageArr () {
    this.storage = []
}

StackusingStorageArr.prototype.push = function(value){
    if(!value){
        throw new Error('Please have a value to push into the stack');
    }
    this.storage.push(value);
};


StackusingStorageArr.prototype.pop = function (){
    if(this.getsize() < 1){
        throw new Error('There are no elements present in the stack to remove');
    }
    this.storage.pop();
};

StackusingStorageArr.prototype.getsize = function (){
    return this.storage.length;
};

StackusingStorageArr.prototype.peek = function (){
    return this.storage;
};

// ---------------------------------------------------------------------------

function StackUsingStorageAsObject(){
    this.storage = {};
    this.counter = 0;
}

StackUsingStorageAsObject.prototype.push = function(value){
    if(!value){
        throw new Error('cannot insert an empty value into the stack.');
    }
    this.storage[`${++this.counter}`] = value;
};

StackUsingStorageAsObject.prototype.pop = function (){
    if(this.size() < 1){
        throw new Error ('There are no elements to pop from the stack');
    }
    delete  this.storage[`${this.counter}`];
    this.counter = this.counter - 1;
};

StackUsingStorageAsObject.prototype.peek = function (){
    return this.storage;
};

StackUsingStorageAsObject.prototype.size = function (){
    return Object.keys(this.storage).length;
    // Here alternatively we can also return the counter value
    // instead of looking up for keys on the object.
};

// Using Stack perform infix to postfix conversion.
// Helper https://www.youtube.com/watch?v=vXPL6UavUeA


function BalancedParenthesis(string){
    if(!string){
        throw new Error('Please provide a valid string.');
    }

    var stack = new StackUsingStorageAsObject();

    for(let i=0; i<string.length; i++){
        if(string[i] === '('){
            stack.push(string[i]);
        }else if(string[i] === ')'){
            if(stack.size() < 1){
                return false;
            }else{
                stack.pop();
            }
        }
    }

    if(stack.size() === 0){
        return true;
    }else{
        return false;
    }
}
