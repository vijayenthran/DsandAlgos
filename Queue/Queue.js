'use strict';


function QueueUsingArr (){
  this.data = [];
}

QueueUsingArr.prototype.enqueue = function(value){
    this.data.push(value);
};


QueueUsingArr.prototype.dequeue = function () {
    let splicedValue = this.data.splice(0,1);
    return splicedValue[0];
};


QueueUsingArr.prototype.length = function () {
   return this.data.length;
};

QueueUsingArr.prototype.peek = function () {
    return this.data;
};


function QueueUsingObject (){
    this.storage = {};
    this.counter = 0;
    this.startPointer = 1;
}

QueueUsingObject.prototype.enqueue = function(value){
    if(!value){
        throw new Error('Please enter a valid value to insert into the stack');
    }
    this.storage[`${++this.counter}`] = value;
};

QueueUsingObject.prototype.dequeue = function(){

    if(this.size() <1){
        throw new Error('There are no elements to remove from the Queue');
    }
    /*dequeue without a start pointer*/
    // let keys = Object.keys(this.storage);
    // delete this.storage[`${keys[0]}`];
    delete this.storage[`${this.startPointer}`];
    this.startPointer = this.startPointer - 1;
};

QueueUsingObject.prototype.size = function(){
    // we can also return the size using
    return Object.keys(this.storage).length;
};

QueueUsingObject.prototype.peek = function(){
    return this.storage;
};

module.exports = {
    QueueUsingArr : QueueUsingArr,
};