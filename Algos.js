// Write all the poly fills of map reduce and filter and then check.
// Find the Smallest element and the next smallest element in the array
// Swap elements in an array without using temp variable. 


function Queue(maxCapacity){
    this.data = {};
    this.currentPointer = 0;
    this.updatedPointer = 0;
    this.maximumCapacity = maxCapacity || 3;
}

Queue.prototype.enqueue = function(element){
    if (this.count() >= this.maximumCapacity) {
        return 'The maximum size of the Queue Has been achieved. Cannot add more items to the Queue.'
    }
    this.data[this.updatedPointer] = element;
    this.updatedPointer ++;
    return this.data;
}

Queue.prototype.dequeue = function (){
    if(this.count() === 0){
        return 'There are no elements to remove from the Queue. Please add elements to the Queue.'
    }
    delete this.data[this.currentPointer];
    this.currentPointer ++;
    return this.data;
}

Queue.prototype.peek = function (){
    if (this.count() === 0){
        return `There are no more items to see in the Queue`;
    }
    return this.data[this.updatedPointer-1];
}

Queue.prototype.count = function (){
    return this.updatedPointer-1 - this.currentPointer;
}

// Time Complexity of this find is O(1);
Queue.prototype.contains = function (value){
    for(var prop in this.data){
        if (this.data.hasOwnProperty(prop) && this.data[prop] === value){
            return true;
        }else{
            return false;
        }
    }
}

Queue.prototype.until = function (value){
    let hopsCount=0;
    for(var prop in this.data){
        if (this.data.hasOwnProperty(prop) && this.data[prop] !== value) {
            hopsCount+=1;
        }
    }
    return hopsCount;
}

// Function Stack // find the minimum element in the stack

function Stack () {

}

Stack.prototype.push = function () {

}

Stack.prototype.pull = function(){

}

Stack.prototype.size = function (){

}

Stack.prototype.getMinimum = function (){

}


//// Stack to return the minimum element using the Time Complexity of O(1);

// change the current pointer.
function Stack() {
    this.currentPointer = 0;
    this.data = {};
    this.minumumElement;
}

// return the length of the stack.
Stack.prototype.push = function (element) {
    if(typeof element !== 'number'){
        return 'The element is not supported in this stack. Please try only numbered elements.';
    }
    if (!this.minumumElement){
        this.minumumElement = element;
    }else if(this.minumumElement > element){
        this.minumumElement = element;
    }
    this.data[++this.currentPointer] = element;
    console.log(this.currentPointer);
    return this.data;
}

Stack.prototype.pop = function () {
    if(this.currentPointer <= 0){
        return `There are no elements to pop from the stack. Please push elements first`;
    }
    delete this.data[this.currentPointer];
    return this.data;
}

Stack.prototype.size = function () {
    return this.currentPointer;
}

Stack.prototype.getMinimum = function () {
    return this.minumumElement;
}


// stack check Brackets 

function Stack(){
    this.data = [];
}

Stack.prototype.push = function (element) {
    this.data.push(element);
    return this.data;
}


Stack.prototype.pop = function () {
    if(this.size() === 0){
        return `There are no elements to remove from the stack array. Please insert before removal.`
    }
    this.data = this.data.slice(0, this.size()-1);
    return this.data;
}

Stack.prototype.size = function (){
    return this.data.length;
}

let string = string.split('').filter(element => element);
function wrapper(string){
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            test.push(string[i]);
        } else if (test.size() > 0 && string[i] === ')') {
            test.pop();
        } else if (test.size() === 0 && string[i] === ')') {
            return false;
        }
    }
    if(test.size() === 0){
        return true;
    }
    return false;
}


'{()}'


// Factorial

// Norman Factorial

function factorial(num){
    let n;
    if(num === 1 || num === 0){
        return 1;
    }

    for(let i=num; i>1; i--){
        if(!n){
            n = i;
        }else{
            console.log(n);
            n = n*i;
        }
    }
    return n;
}

factorial(5);


function factorialRecursion (n){ 
    if(n === 0){
        return 1;
    }
    return n * factorialRecursion(n-1)
}

factorialRecursion(5);


// Recursive Reverse// Reverse an array recursively.

function RecursiveReverse (arr) {
    if(arr.length === 1){
       return arr;
    }

    return arr.slice(arr.length-1).concat(RecursiveReverse(arr.slice(0,arr.length-1)));
}

RecursiveReverse(['1', '2', '3']);

//Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier (arr, num){
    if(arr.length === 1){
        let arr2 = [];
        arr2.push(arr[0] *num);
        return arr2;
    }
    var arr1 = [];
    arr1.push(arr[0]*num);
    return arr1.concat(recursiveMultiplier(arr.slice(1), num));
}

recursiveMultiplier([1, 2, 3], 4);


function recursiveMultiplier(arr, num) {
    if (arr.length === 1) {
        return [arr[0] * num];
    }
    return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num))
}

recursiveMultiplier([1, 2, 3], 3)

//Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function RecursiveComponent (base, num){
    if(num === 1){
        return base;
    }

    return base * RecursiveComponent(base, num-1)
}

RecursiveComponent(2, 2)

// Same above Problem using a while Loop.

function RecursiveComponent (base, num){
    let value;
    let vijay = num;
    while(vijay >= 1){
        if(value === undefined){
            value = base;
        }else{
            value = value *  base;
        }
        vijay= vijay-1;
    }
    return value;
}

// Fibinocci normal Recursion. 

function fibinocciSeries(n) {
    let a1 = 0;
    let a2 = 1;
    let i=1;
    let sum;
    while( i < n){
        sum = a1+a2;
        a1 = a2;
        a2 = sum;
        i++;
    }
    return sum;
}

fibinocciSeries(4);

// Fibinocci Series Recursion. 

function fibinocciRecursion (n) {
    if(n === 0) {
        return 0;
    }else if( n===1){
        return 1;
    }
    return fibinocciRecursion(n-1) + fibinocciRecursion(n-2);
}

fibinocciRecursion(3);


// Function reverse a string

function stringReverse (string){
    if(string.length === 1){
        return string;
    }
    return string.slice(string.length-1) + stringReverse(string.slice(0, string.length-1))
}

// REcursive Reverse Array solution

function recursiveReverse (arr){
    if(arr.length === 1){
        return arr;
    }

    return [arr[arr.length-1]].concat(recursiveReverse(arr.slice(0,-1)))
    
}


recursiveReverse([1,2,3])


// flatten array using Recursion. Solution

function flattenArray (arr){     
    if(arr.length === 1){
        return arr;
    }
    let vijay = [];
      if(Array.isArray(arr[0])){
        //   vijay.concat(arr[0]);
        flattenArray(arr[0])
      }else{
          return vijay.concat(arr);
      }
      return [].concat(flatten(arr.slice(1)));
}

flattenArray([[1], [2]]);
function flattenArrayUsingReduce(arr){
    arr.reduce(function(accumulator, currentValue){
        if(Array.isArray(currentValue)){
            return accumulator.concat(currentValue)
        }else{
            return accumulator.push(currentValue);
        }
    }, [])
}

flattenArrayUsingReduce([[1], [2]]);

// let arr = [1, [2], [3, [[4]]]];
// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// }


function flatten (arr){
    return arr.reduce(function(accumulator, value){
        return accumulator.concat(Array.isArray(value)? flatten(value) : value)
    }, [])
}

// minstack Stack solution. 

function Stack (){
    this.currentElement = 0;
    this.data = {};
}

Stack.prototype.push = function(element){
    this.data[++this.currentElement] = element;
}

Stack.prototype.pop = function (){
    delete this.data[this.currentElement];
}


function Minstack (){
    this.data = {};
    this.currentElement = 0;
    this.minstack = new Stack();
}

Minstack.prototype.push = function(element){
    if(this.minstack.currentElement === 0){
        this.minstack.push(element);
    } else if (this.minstack.currentElement >= 0 && element < this.minstack.data[this.minstack.currentElement]){
        this.minstack.push(element);
    }
    this.data[++this.currentElement] = element; 
}

Minstack.prototype.pop = function (){
    delete this.data[this.currentElement];
}

Minstack.prototype.getMinimum = function (){
    reutrn this.minstack.data[this.minstack.currentElement];
}


// Minstack Pseudo Code. 

// have tow stacks. 
// One is the regular stack. 
// The other stack is to push the minimum value into the Array.


// 

function Stack (){
    this.data = {};
    this.counter = 0;
}

// Stack push return the no of elements in the counter.
Stack.prototype.push = function(element){
    this.data[++this.counter] = element;
    return this.counter;
}

Stack.prototype.pop = function (){
    if(this.counter === 0){
        return 'There are no more elements to pop from the stack . Please insert Elements to pop from the stack';
    }
    delete this.data[this.counter];
    this.counter -=1;
    return this.data;
}

Stack.prototype.size = function (){
    return this.counter;
}

Stack.prototype.peek = function (){
    return this.data[this.counter];
}


// Implement a Queue using a Stack pesudo code.
    // Have two stack. 
    // Stack in 
    // Stack out
    // During push push it in stack in.
    //during pop check stackout stack.
    // if there are no elements in the stack out stack then put elements to the stack .
    // pop the last element of the stack. 
    // Else if there are elements just pop the last element. 

function Queue(){
    this.stackIn = new Stack();
    this.stackOut = new Stack();
    this.queuecounter = 0;
}

Queue.prototype.enqueue = function(element){
    this.queuecounter += 1;
    return this.stackIn.push(element);
}

Queue.prototype.dequeue = function (){
    if (Object.keys(this.stackOut.data).length >= 1){
        this.queuecounter -= 1;
        return this.stackOut.pop();
    }else{
        // for (var prop in this.stackIn.data){
        //     console.log('I am prop' + prop);
        //     if (this.stackIn.data.hasOwnProperty(prop)) {
        //         console.log('I am getting execited' + prop);
        //         this.stackOut.push(this.stackIn.data[this.stackIn.counter]);
        //         this.stackIn.pop();
        //     }
        //     }
        let temp = 0;
        for (let i = 0; i < this.queuecounter ; i++){
            console.log('I am getting executed');
            this.stackOut.push(this.stackIn.data[this.stackIn.counter]);
            this.stackIn.pop();
            temp +=1;
        }
        this.queuecounter = this.queuecounter -temp;
        temp =0;
        }
        
}




// Minstack Pseudo Code. 

// have tow stacks. 
// One is the regular stack. 
// The other stack is to push the minimum value into the Array.


// 
function MinStack (){
    this.data = {};
    this.counter = 0;
    this.minstack = new Stack();
}


MinStack.prototype.push = function(element){
    if(Object.keys(this.minstack.data).length<1){
        console.log('I am here 1');
        this.minstack.push(element);
    }else if(this.minstack.peek() > element){
        console.log('I am here 2');
        this.minstack.push(element)
    }else{
        console.log('I am here 3');
        this.minstack.push(this.minstack.peek())
    }
    this.data[++this.counter] = element;
    return this.counter;
}

MinStack.prototype.pop = function (){
    delete this.data[this.counter];
    this.counter -=1;
    this.minstack.pop();
    return this.data;
}

MinStack.prototype.minumElement = function(){
    return this.minstack.peek();
}


// Brackets Comparision 

// pseudo code.
// Create a stack with a data store.
// check brackets gives a string.
// When we find a open bracket push it to the stack. 
// When we find a close bracket pop up from the stack.
// if stack is empty and we push a close bracket return an error saying that it cannot be done. 


function BracketsComparision (){
    this.bracketStack = new Stack();
}


BracketsComparision.prototype.comp = function (string){
    let processString = string.split('').filter(elem =>  elem); // Do it without filter and split.
    for(let i=0; i<processString.length ; i++){
        if(processString[i] === '('){
            this.bracketStack.push(processString[i]);
        } else if (processString[i] === ')' && this.bracketStack.counter > 0){
            this.bracketStack.pop();
        } else if (processString[i] === ')' && this.bracketStack.counter < 1){
            return false;
        }
    }
    if(this.bracketStack.counter === 0){
        return true;
    }
    return false;
}

// function reverse array using recursion
// Another PAttern can be that we can have a wrapper function outside Reverse Array 
// and have a variable and push it to that array.
function ReverseArray (arr){
    if(arr.length === 1){
        return arr;
    }

    return [arr[arr.length-1]].concat(ReverseArray(arr.slice(0,-1)));
}

ReverseArray(['1', '2', '3']);

// // Add without any in built methods..


// Sorting ------------------------------------- Exercises

// Bubble Sort
// Pseudo code 
// We will not follow Pesudo Classical Javascript Pattern Here. 
// This is just a method. and it returns sorted list. This can also be a prototype method for any constructor Function
// 1) Take one element and compare it to the adjacent element. If its small then swap the smaller element
//    To the Right 
// 2) Keep Repeating. until all the elemtns are swaped
// Keep repeating this step until the elements in the list are sorted. 


// INPUT -- unsorted LIST 
// OUTPUT -- SORTED LIST 

// My logic. 
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length ; j++){
            if(arr[j+1]){
                if(arr[j]>arr[j+1]){
                    let temp;
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    return arr;
}


bubbleSort([1,6,8,2,5]);

// Change the for loop logic properly. 



// Selection Sort  -------------------------------- Exercise

// Pseudo code for selection Sort Algorithm. Using Two Arrays.

// 1) Choose the smallest element in the first array and push it to the second array. 
// 2) Repeat the same process for all the elements in the arrays. 

function slectionSort (arr){
    let newArr = [];
    while(arr.length > 0){
        if(arr.length === 1){
            newArr.push(arr[0]);
            return newArr;
        }
        let smallestElement = arr[0];
        for(let i=0; i<arr.length; i++){
            if(arr[i]< smallestElement){
                smallestElement = arr[i]
            }
        }
        newArr.push(smallestElement);
        arr = arr.filter(element => element !== smallestElement);
    }
    return newArr;
}

slectionSort([1, 6, 8, 2, 5]);


// Selection Sort -- using single array in place array. 
// Pesudo code.
// Get the Largest element in the array and replace it with the last value in the array. 
// Have a largest pointer and keep decrementing for every loop. Because as the last element is always the largest. we dont need to do one extra look there for j
// Keep repeating this step until all the elements in the array are sorted.
function selectionSortInPlace (arr){
    let largestTargetPointer = arr.length-1;
    let largestElement, largestElementIndex;
    for(let i=0; i< arr.length ; i++){
        largestElement = arr[0];
        largestElementIndex = 0;
        // Have a largest pointer and keep decrementing for every loop. Because as the last element is always the largest. we dont need to do one extra look there for j
        for(let j=0; j<= largestTargetPointer ; j++){
            if(arr[j]> largestElement){
                largestElement = arr[j];
                largestElementIndex = j;
            }
        }
        let temp = arr[largestTargetPointer];
        arr[largestTargetPointer] = largestElement;
        arr[largestElementIndex] = temp;
        largestTargetPointer = largestTargetPointer -1;
    }
    return arr;
}


selectionSortInPlace([1, 6, 8, 2, 5]);



// Insertion Sort algorithm. - -using new Array 

function insertionSort (arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(newArr.length === 0){
            newArr.push(arr[i]);
        }
        for(let j=0; j<newArr.length; j++){
           if(arr[i]> newArr[j] && j === newArr.length-1){
                newArr.push(arr[i]);
           } 
           else if (arr[i] < newArr[j]){
                for(let k= newArr.length; k>=j+1; k--){
                    newArr[k] = newArr[k-1];
                }
                newArr[j] = arr[i];
                // newArr.splice(j,0,arr[i]);
                break;
                // console.log('I am here');
            }
        }
    }
    return newArr;
}

insertionSort([1, 6, 8, 2, 5]);


// Logic to implement array splice without using the splice method. // Hint Loop starting from behind.
function abctest (arr){
    for(let i=arr.length; i>0; i--){
        arr[i] = arr[i-1];
        console.log(arr);
    }
    return arr.length;
}
abctest([1, 6, 8, 2, 5]);


// insertion sort in place. 
// Pesudo code. 
// have a sorted array pointer. 
// First check the pointer to the next element. 
// if the next element is greater than the pointer leave else swap. 
// . Once Swapping is done. 
// The second for loop is loop through within the sorted array and then swap on the right place.
// Check the code and look at the exercise of bianka Front end Masters

// insertion Sort in place. 
function insertionSortInPlace(arr){
    let sortedArrayPointer = 0;
    // while (sortedArrayPointer < arr.length-1){
    //     for(let i)
    // }
    for(let i=0; i<arr.length; i++){
        if(arr[sortedArrayPointer + 1]){
            if(arr[sortedArrayPointer+1] < arr[sortedArrayPointer]){
                let temp = arr[sortedArrayPointer];
                arr[sortedArrayPointer] = arr[sortedArrayPointer +1];
                arr[sortedArrayPointer +1] = temp;
            }
        }
        for(let j=0; j<sortedArrayPointer; j++){
            if(arr[sortedArrayPointer] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[sortedArrayPointer];
                arr[sortedArrayPointer] = temp;
            }
        }
        sortedArrayPointer = sortedArrayPointer +1;
    }
    return arr;
}
insertionSortInPlace([1, 6, 8, 2, 5]);

// Correct Implementation Insertion Sort in place.
function insertionSortInplace(arr) {
    let sortedPtr = 0;
    while (sortedPtr < arr.length) {
        if (arr[sortedPtr + 1]) {
            if (arr[sortedPtr + 1] < arr[sortedPtr]) {
                let temp = arr[sortedPtr + 1];
                arr[sortedPtr + 1] = arr[sortedPtr];
                arr[sortedPtr] = temp;
            }
        }
        for (let j = 0; j <= sortedPtr; j++) {
            if (arr[sortedPtr] < arr[j]) {
                let temp = arr[sortedPtr];
                for (let k = sortedPtr; k > j; k--) {
                    arr[k] = arr[k - 1];
                }
                arr[j] = temp;
                break;
            }
        }
        sortedPtr = sortedPtr + 1;
    }

    return arr;
}

insertionSortInplace([1, 6, 8, 2, 5])

// Merge Sort -------- Merge Sort Algorithm


// Merge Sort Routine PesudoCode
// This takes in two lists 1) Left List and The other one is the Right List.
// Decleare a new List in which we will be pushing elements. 
// Loop until the Sum of the left Lists and the Right Lists. 
// have a left list and a right list pointer. Make the two pointers point to the initial position at the beginning. 
// if the left pointer value is greater than the right pointer value. Push the right pointer to the new list and increment the right pointer.
// Similarly , if the right pointer value is greater than the left pointer value push the left pointer value to the array and then increase the left pointer value.
// Finally after the sorting is done. It returns the merged list. 

function mergeSortRoutine(leftprArr, rightprArr){
    let mergedList=[];
    let leftArrPointer=0;
    let RightArrPointer=0;
    for(let i=0; i<(leftprArr.length+rightprArr.length)-2; i++){
        if(leftprArr[leftArrPointer] > rightprArr[RightArrPointer]){
            mergedList.push(rightprArr[RightArrPointer]);
            RightArrPointer = RightArrPointer+1;
        }else{
            mergedList.push(leftprArr[leftArrPointer]);
            leftArrPointer = leftArrPointer + 1;
        }
    }
    return mergedList;
}

// Returns [3, 9, 10, 27, 38];
mergeSortRoutine([3,27,38,43], [9,10,82]);


// Implement the Merge Sort Itself.

// Pesudo Code the Merge Sort Algorithm itself.

// first get an array. 
// Split the Array into two halves.
// Use Math operation to split the array.
// Once the array is Split. 
// Assign the Left and the Right Arrays.
// Keep Splitting until the left arrray only has one element.
// Have a recursive function and keep recursing until the Array.length < 2. This is the base condition. Once the base condition is met. return that element.

// mergeSort(list)
// base case: if list.length < 2, return
// break the list into halves L & R
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)
// return merge(Lsorted, Rsorted)


// Note the Time Complexity. here.
// Time Complexity is n logn - Because . When dividing the array into 2 its log n.
// Then we are merging array using mergeRoutine that its the n part. 

function mergeSort(list){

    let midsize, lSorted, rSorted;
    if(list.length % 2 === 0){
        midsize = list.length/2;
    }else{
        midsize = Math.floor((list.length-1)/2)
    }

    if(list.length < 2){
        return list;
    }
    let leftArray = list.slice(0,midsize);
    let rightArray = list.slice(midsize);
    lSorted = mergeSort(leftArray);
    rSorted = mergeSort(rightArray);
    return mergeSortRoutine(lSorted, rSorted);
}

function mergeSortRoutine(leftptrArr, rightptrArr) {
    let mergedList = [];
    let leftPointer = 0, rightPointer = 0;
    for (let i = 0; i < leftptrArr.length + rightptrArr.length; i++) {
        if (!leftptrArr[leftPointer] && rightptrArr[rightPointer]) {
            mergedList.push(rightptrArr[rightPointer]);
            rightPointer += 1;
        } else if (!rightptrArr[rightPointer] && leftptrArr[leftPointer]) {
            mergedList.push(leftptrArr[leftPointer]);
            leftPointer += 1;
        } else if (leftptrArr[leftPointer] < rightptrArr[rightPointer]) {
            mergedList.push(leftptrArr[leftPointer]);
            leftPointer += 1;
        } else if (leftptrArr[leftPointer] > rightptrArr[rightPointer]) {
            mergedList.push(rightptrArr[rightPointer]);
            rightPointer += 1;
        }
    }
    return mergedList;
}

mergeSort([3, 27, 38, 43, 9, 10, 82])



// Quick Sort algorithm. 

// Pesudo Code. 

// Main point is have a pivot location and then make a note of the pivot index. 
// In most rare case. If the list is already sorted. Then if we choose the highest
// as the pivot it will lead to worst case scenario. which is n square.

function quickSort(arr, low, high){
    if(low === undefined || high === undefined){
        low = 0;
        high = arr.length-1;
    }
    debugger;
    if(low<high){
        debugger;
        let partition = quickSortPartition(arr, low, high);
        quickSort(arr, low, partition-1);
        quickSort(arr, partition+1, high);
    }

    // base condition;
    if(high-low === arr.length-1) {
        return arr;
    }
}

function quickSortPartition(arr, low, high) {
    let pivotIndex = high;
    let compareIndex = low; // Compare index can be thought as the pivot location. 
    for (let i = low; i <= high; i++) {
        if(pivotIndex === compareIndex){
            return compareIndex;
        }
        if (arr[compareIndex] >= arr[pivotIndex]) {
            let temp = arr[compareIndex];
            arr[compareIndex] = arr[pivotIndex - 1];
            arr[pivotIndex - 1] = arr[pivotIndex];
            arr[pivotIndex] = temp;
            pivotIndex -= 1;
        } else if (arr[compareIndex] <= arr[pivotIndex]) {
            compareIndex += 1;
        }
    }
    return compareIndex;
}
quickSort([5, 3, 1, 4, 2]);
quickSortPartition([5, 3, 1, 4, 2])
quickSort([5, 3, 1, 4, 2])
quickSort([3, 7, 8, 5, 2, 1, 9, 5, 4]);



// Understand difference between Linked list and Array. 
// Both arrays and linked list can store data of linear type.

// Advantages of linked list over array. 
// 1) Insertion and deletion of a element in a linked list is not as expensive as in a Array
// 2) Arrays size has to be known Before but this does not apply to javascript. As arrays are objects with special methods. 


// Advantages of arrays over linked list.
// 1) Accessing elements in an array is easy(O(1)). But in linked list we have to loop O(n).
// 2) Linked list has extra memory for pointer. // may be this is not applicable for javascript. 
// 3) Since memory of a linked list is random. Accessing elements will take a performance hit. 
        // In an array elements are present next to each other therefore. memory addresses are also next to each other
        // and accessing that memory location should be easy. when compared to a random memory location.


// Undestand infromation retrieval. 

// Search Answer for this Question Can a Linked List contain Duplicates.

// Linked List. 

// Linked list is a tree in which each node has only one child. 
// Linked list node contains two infomrations. Node Data. Next Node Refrence. 
// Node Data. -- The data that is stored in the node. 
//  Node Reference. -- The reference to the item that should follow. 


// Mostly I think -- Linked list is used to preserve a order. 


function Node(value){
    this.value = value
    this.next = null;
}

// Keep track of the head and tail with the linked list. 
// The head is used to keep track of the starting point of the linked list. 
// The Tail is used to keep track of the last position of the linked list. 
// We keep track of the head and tail so that the operations are easier.
function LinkedList(value){
    if(!value){
        throw new Error(`Please initialize a value for setting up the linked list`);
    }
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
}

// While Adding Elements to the tail. In singly linked list. 
// create a new node using the node constructor. 
// Then assign the current tail next position to the new tail position.
// Change the tail to the newly created tail.
LinkedList.prototype.addTail = function(value){
    let latestTail = new Node(value);
    this.tail.next = latestTail;
    this.tail = latestTail;
    this.length +=1;
}

LinkedList.prototype.removeNode = function (value){
    let nodeValue = this.head;
    if(nodeValue.value === value && nodeValue.next === null){
        throw `There is only head in the linked list. Insert other items to delete them`;
    }
    while(nodeValue.next !== null){
        if (nodeValue.next.value === value && nodeValue.next.next === null){ // if the delete node is the last one
            nodeValue.next = null;
            this.tail = nodeValue;
            this.length -= 1;
            return;
        } else if (nodeValue.next.value === value && nodeValue.next.next !== null){ // if the delete node is in the middle.
            nodeValue.next = nodeValue.next.next;
            this.length -= 1;
            return;
        }else if(nodeValue.value === value && nodeValue.next !== null && nodeValue === this.head){ // If the delete is head.
            this.head = nodeValue.next;
            this.length -= 1;
            return;
        }
        nodeValue = nodeValue.next;
    }
}


LinkedList.prototype.peek = function (){
    let nodeValue = this.head;
    let arr = [];
    let i=0;
    while (i < this.length) {
        arr.push(nodeValue);
        nodeValue = nodeValue.next; // Be careful here. It should not be this.head.next it should be nodevalue.next
        i++;
    }
    return arr;
}

// trees can be circular. But linked List cannot be circular.


// Initilaze a Constructor for the node of a tree.
function Node (value){
    this.value = value;
    this.child = [];
}


function Tree (value){
    this.root = new Node(value);
}


// Check to implement this using while loop.
Tree.prototype.addChild = function (value){
    debugger;
    function traverseTree (root){
        if(root.child.length === 2){
            return;
        }
        if(root.child.length < 2){
            root.child.push(new Node(value));
            return root;
        }else {
                traverseTree(root.child[0]);
                traverseTree(root.child[1]);
        }
    }
     // function traverseTree (root){
    //     if(insertedFlag){
    //         return root;
    //     }
    //     if(root.child.length < 2){
    //         root.child.push(new Node(value));
    //         insertedFlag = true;
    //     }else if(root.child[0].child.length < 2){
    //          traverseTree(root.child[0]);
    //     } else if (root.child[1].child.length < 2){
    //         traverseTree(root.child[1]);
    //     }
    // }
    return traverseTree(this.root);
}


Tree.prototype.contains = function () {

}



// N-array tree .. There are no limits. If its binary tree then the leaf can contain only two nodes. 

function Node(value){
    this.value = value;
    this.children = [];
}

function NArray (value){
    this.root = new Node(value);
}

NArray.prototype.add = function (value){
    let node = new Node(value)
    this.children.push(node);
    return node;
}

NArray.prototype.contains = function (value){
     if(value === this.root.value) {
         return true;
     }
     for(let i=0; i<this.root.children.length ;i++){

     }   
}


// // Pseudo code. // This is normal tree

// function Node(value){
//     this.value = value;
//     this.children = [];
// }

// // We dont need a node Value
// // Becuase each node is a tree by itself. 
// // And by adding nodes we are adding trees. 

// function Tree(value){
//     this.value = value;
//     this.children = [];
// }

// var tree = new Tree('node1');


// Pesudo code BST.

function Tree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

Tree.prototype.insert = function (value){
    function findPosition(root){
        if(value <= root.value){
            if(root.left === null){
                root.left = new Tree(value);
                return;
            }else{
                findPosition(root.left);
            }
        }else if(value > root.value){
            if(root.right === null){
                root.right = new Tree(value);
                return;
            }else{
                findPosition(root.right);
            }
        }
    }
    findPosition(this);
}

Tree.prototype.contains = function(value){
    function iterateThroughTree(root){
        // Every child or node is a tree 
        // So we only need to check root value. 
        // Initially we pass in the root. using the this keyword.
        // When we instantitate the tree . we use the new keyword.
        // This is where we have created the root.
        if(root.value === value && root.value !== null){
            return true;
        }else if(value <= root.value){
            iterateThroughTree(root.left);
        }else if(value > root.value){
            iterateThroughTree(root.right);
        }else if(root.value === null){
            return false;
        }
    }
    iterateThroughTree(this);
}




/// Function check palindrome


function palindromeValidator(string){
    function checkPalindrome(string) {
        // base condition for the recursive function.
        if (string.length === 1) {
            return string;
        }

        return string.charAt(string.length - 1) + checkPalindrome(string.slice(0, -1));
    }
    let stringReversed = checkPalindrome(string);
    if(abc === string){
        return true;
    }else{
        return false;
    }
}



// Binary Search Tree without using a new recurse function for traversing. 


// Pesudo Code. 

// Constructor. 

// It should have a value.
// A left value to hold the left reference. 
// A right value to hold the right reference.

// Insert.

// In order to insert. find the correct positon and insert.
// Recursion.
// If value <= current value. go left.
// If value > current value go right.


function BinarySearchTree (value){
    this.value = value;
    this.left  = null;
    this.right = null;
}


// Note here initially we would have passed a value to create. 
// a binary search tree. when we have instantiated the constructor
// var tree = new BinarySearchTree(value);  initially value is created.

// Try to return the entire tree at the end
BinarySearchTree.prototype.insert = function(value){
    if(value <= this.value){
        if(this.left === null){
            this.left = new BinarySearchTree(value);
        }else{
            this.left.insert(value);          
        }
    }else{
        if(this.right === null){
            this.right = new BinarySearchTree(value)
        }else{
            this.right.insert(value);
        }
    }
}

// Note here the return is very important because we need to return te returned value. 
// from the previous stack.
BinarySearchTree.prototype.contains = function (value){
    if(value === this.value) {
        return true;
    }else if(value <= this.value){
        if(this.left !== null){
            return this.left.contains(value);
        }else{
            return false;
        }
    } else if (value > this.value){
        if(this.right !== null){
            return this.right.contains(value);
        }else{
            return false;
        }
    }
}

function ChangetheValue(value) {
    console.log(value);
}

BinarySearchTree.prototype.inOrderTraversal = function () {
    if (this.left !== null) {
        this.left.inOrderTraversal();
    }
    ChangetheValue(this.value);
    if (this.right !== null) {
        this.right.inOrderTraversal();
    }
}

BinarySearchTree.prototype.preOrderTraversal = function () {
    console.log(this.value);
    if (this.left !== null) {
        this.left.preOrderTraversal();
    }
    if (this.right !== null) {
        this.right.preOrderTraversal();
    }
}


BinarySearchTree.prototype.postOrderTraversal = function () {
    if (this.left !== null) {
        this.left.postOrderTraversal();
    }
    if (this.right !== null) {
        this.right.postOrderTraversal();
    }
    console.log(this.value)
}


BinarySearchTree.prototype.deleteMinimum = function (parent) {
    if (!parent) {
        parent = this;
    }
    // Check if its a leaf node. 
    // Check if both the left and the right are null
    if (this.left === null && this.right === null) {
        parent.left = null;
    } else if (this.left === null && this.right !== null) {
        parent.left = this.right;
    } else {
        this.left.deleteMinimum(this);
    }
}

BinarySearchTree.prototype.addAll = function () {
    let sum = 0;
    function traversal(root) {
        sum = root.value + sum;
        if (root.left !== null) {
            traversal(root.left);
        }
        if (root.right !== null) {
            traversal(root.right);
        }
    }
    traversal(this);
    return sum;
}


// BinarySearchTree.prototype.deleteMinimum = function () {
//     if (this.left === null) {
//         this.value = null;
//     } else {
//         this.left.deleteMinimum();
//     }
// }

// BinarySearchTree.prototype.deleteMaximum = function () {
//     if (this.right === null) {
//         this.value = null;
//     } else {
//         this.right.deleteMaximum();
//     }
// }

// pesudo code.
// 1) Base case. While there is no left and right keep recursing.
// 2) When it reaches the end return.
// 



BinarySearchTree.prototype.inOrderTraversal = function (){
    // base case//
    debugger;
    if(this.left === null && this.right === null){
        console.log(this.value);
        return;
    }else{
        if(this.left){
            console.log(this.value);
            this.left.inOrderTraversal();
        }
        if(this.right){
            console.log(this.value);
            this.right.inOrderTraversal();
        }
    }
}

function ChangetheValue (value){
    console.log(value);
}
// Updated Version
// Pseudo code. 
// Until you find the smallest left node. Recurse.
// Once you found the left node. Then Make a chage to the value/  This can be console.logging 
// After this. call the right function. 

// Our base case here is we need to return. Some where. 
// Here once our criteria is not met. then the default return undefined will be called. 
// This will be our base case.
BinarySearchTree.prototype.inOrderTraversal = function () {
        if (this.left !== null) {
            this.left.inOrderTraversal();
        }
        ChangetheValue(this.value);  
        if (this.right !==null) {
            this.right.inOrderTraversal();
        }
}

// Pesudo code pre order traversal. 

// Travel till the depth of the left side. 
// if left == null stop going further.
// Jump to the root and access right.

// From the left access the right. This cannot be dont without the root.
// 

BinarySearchTree.prototype.preOrderTraversal = function(){
    console.log(this.value);
    if(this.left !== null){
        this.left.preOrderTraversal();
        if(this.right !== null){
            this.right.preOrderTraversal();
        }
    }
}


// Peseudo code Post Order.

// Travel till the depth of the grah. 
// Find till the child.
// Navigate to the root. .
// Print the right child. 
// Then print the root. 

BinarySearchTree.prototype.postOrderTraversal = function(){
    if (this.left !== null) {
        this.left.preOrderTraversal();
        if (this.right !== null) {
            this.right.preOrderTraversal();
        }
    }
    console.log(this.value)
}

// pesudo code. Delete minimum value. 
// traverse through the left. 
// The minimum is placed at the left of the binary search tree.
// The maximum is placed at the right of the binary search tree.

// Implementation wrong.
BinarySearchTree.prototype.deleteMinimum = function (){
    if(this.left !== null){
        this.left.deleteMinimum();
    }else{
        this.value = null;
    }
}
// Implementation wrong.
BinarySearchTree.prototype.deleteMinimum = function () {
    if (this.right !== null) {
        this.right.deleteMinimum();
    } else {
        this.value = null;
    }
}

// Delete minimum pesudo code. 

// go left until the left is null. 
// Once the node is reached. 
// check if there is a right for this.
// If there is a right .
// Sets the current nodes parent left to the current node right.
// if both left and right are null. 
// Then replace the current value with null.



BinarySearchTree.prototype.deleteMinimum = function (parent){
    debugger;
    if(!parent){
        parent = this;
    }
    // Handle if the minimum is the root and there are no left and right.
    // We can throw a message saying that there is only one element in 
    // The tree and it cannot be deleted.
    // If the minimum is the root.
    if(this.left === null && this.right === null && this === parent){
        this.value = null;
    }
    else if(this.left === null && this.right !== null && this === parent){
        parent = this.right;
    }
     // Check if its a leaf node. 
    // Check if both the left and the right are null
    else if(this.left === null && this.right === null){
        parent.left = null;
    } else if (this.left === null && this.right !== null){
        parent.left = this.right;
    }else{
        this.left.deleteMinimum(this);
    }
}


BinarySearchTree.prototype.deleteMaximum = function (parent) {
    if (!parent) {
        parent = this;
    }
    // Check if its a leaf node. 
    // Check if both the left and the right are null
    if (this.left === null && this.right === null) {
        parent.right = null;
    } else if (this.left !== null && this.right === null) {
        parent.right = this.left;
    } else {
        this.left.deleteMinimum(this);
    }
}


// Pesudo Code. 

// Binary Search Tree Add the elements in the tree.
BinarySearchTree.prototype.addAll = function (){
    let sum = 0;
    function traversal (root){
        sum = root.value + sum;
        if (root.left !== null) {
            traversal(root.left);
        }
        if (root.right !== null) {
            traversal(root.right);
        }
    }
    traversal(this);
    return sum;
}


function Queue(){
    this.data = [];
}

Queue.prototype.enqueue = function (value){
    this.data.push(value);
    return this.data;
}

Queue.prototype.dequeue = function(){
    return this.data.splice(0,1);
}

Queue.prototype.size = function (){
    return this.data.length;
}

// Print All the values of a binary search tree in BFS. Order. 
// This is also called Level Order Transversal.


// Psuedo code.

// 1) Create a queue.
// 2) Create a temporary node and assign it to the root of the tree.
// 3) Loop until the temp node is not null. 
// 4) Inside the loop. 
// 5) Console.log the value. 
// 6) Push the left and right child of the tree to the queue. using enqueue.
// 7) dequeue the first element of the Queue and assign it to temp node.
BinarySearchTree.prototype.levelOrderTraversalBreadthFirst = fucntion(){
    let queue = new Queue();
    let tempnode = this;
    while (tempnode){
        console.log(this.value);
        if(tempnode.left !== null){
            queue.enqueue(tempnode.left);
        }
        if (tempnode.right !== null) {
            queue.enqueue(tempnode.right);
        }
        tempnode = queue.dequeue();
    }   
}

function checkValidity(root){
    if(root.left !==null){
        if(root.left.value > root.value){
            return false;
        }
    }
    if (root.right !== null) {
        if (root.right.value < root.value) {
            return false;
        }
    }
}

BinarySearchTree.prototype.isValidBST = function (){
    debugger;
    if (checkValidity(this) === false){
        return false;
    }
    if(this.left || this.right){
        if (!this.left.isValidBST() || !this.right.isValidBST()) {
            return false;
        }
    }
   
    return true;
}

BinarySearchTree.prototype.deleteAnyNode = function (value, parent) {
    if(value === this.value){
        if(this.left !== null && this.right !== null){
            return;
        }else if(this.left !==null && this.right == null){
            parent.left = this.left;
        } else if (this.left === null && this.right !== null) {
            parent.left = this.right;
        } else{
            parent.left = null;
        }
    }
    if(this.left !== null){
        this.left.deleteAnyNode(value, this);
    }
    if(this.right !== null){
        this.right.deleteAnyNode(value, this);
    }
}
// Binary Search tree questions. 
// 1) Valid BST or not. 
// 2) Delete Min -- Consider edge cases like deleting root. when child is null and right has tree.
// 3) Insertion into the tree.
// 4) Delete Max.
// 5) Delete a particular node in a tree.
// 6) Addition all the nodes in the tree.
// 7) Balance a binary search tree
// 8) Check if a binary search tree is valid.

// Explore Binary decimal hexadecimal conversion. Using hasing function.
// Read coercion

const hasingExercise = (function(){
    let storage = [];

    // This is the hasing Function
    // Takes an input 
    // Returns an number that can be index in an array. 

    function hasing(input){
        let sum = 0;
        for (let i=0; i<input.length ; i++){
            sum = sum + input.charCodeAt(i);
        }
        return sum;
    }

    const myHashTable = {
        set(prop, value){
            let storageVal = hasing(prop);
            let newObj = {};
            newObj[prop] = value;

            // Check that if there is already an object there.
            // If there is insert it into the existing object.
            // Else create a new propery in that existing object and add the value.
            // This is used to treat collision.

            if(typeof storage[storageVal] === "object"){
                storage[storageVal][prop] = value
            }else{
                storage[storageVal] = newObj;
            }
            return storage;
        }

        get(prop){
            let storageVal = hasing(prop);

            // Check if there is an object to retrieve initially.
            // If there is no object to retrieve then throw an error.
            // But if there is an object to retrieve. 
            // Check the number of keys that are present in that object.
            // If the keys are greater than 1. Then there was a collision.
            // There fore. get the object and then the corresponsing key and return
            // If there was only one key then we know that there has not been any
            // collision. Therefore return the entire object.
            if(storage[storageVal]){
                if(Object.keys(storage[storageVal]).length > 1){
                    return storage[storageVal][prop];
                }else{
                    return storage[storageVal];
                }
            }else{
                throw 'There is no element to retrieve';
            }
        }

        remove(prop){
            let storageVal = hasing(prop);
            if (storage[storageVal]) {
                if (Object.keys(storage[storageVal]).length > 1) {
                    delete storage[storageVal][prop];
                } else {
                    storage.splice(storageVal, 1);
                }
            } else {
                throw 'There is no element to retrieve';
            }
           
            return storage;
        }
    }

    return {
        set : myHashTable.set,
        get : myHashTable.get,
        remove : myHashTable.remove,
    }
})();

