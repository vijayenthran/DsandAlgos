'use strict';


function QueueUsingArr (){
  this.data = [];
}

QueueUsingArr.prototype.enqueue = function(value){
    this.data.push(value);
};


QueueUsingArr.prototype.dequeue = function () {
    this.data.splice(0,1);
};


QueueUsingArr.prototype.length = function () {
   this.data.length;
};


module.exports = {
    QueueUsingArr : QueueUsingArr,
};