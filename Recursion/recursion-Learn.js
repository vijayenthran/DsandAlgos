/*
Understand Recursion Link

Start here - Basic Recurive Problems.
https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

https://www.thecodingdelight.com/understanding-recursion-javascript/

Recursion Practise Problems Geeks for geeks.
https://www.geeksforgeeks.org/recursion-practice-problems-solutions/
*/


// Write a JavaScript program to calculate the factorial of a number

function factorialRecursion(n) {
    // base case
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    return n * factorialRecursion(n - 1);
}

factorialRecursion(5);

/*
Write a JavaScript program to get the integers in range (x, y)
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

function getIntegersInRange(x, y) {

    let numArr = [];

    function recurse(x, y) {
        if (x === y) {
            return;
        }
        x = x + 1;
        if (x !== y) {
            numArr.push(x);
        }
        return recurse(x, y);
    }

    recurse(x, y);
    return numArr;
}

function getIntegersInRangeMethod2(x, y, arr) {
    if (x === y) {
        return arr;
    } else {
        x = x + 1;
        if (x !== y) {
            arr.push(x);
        }
    }
    return getIntegersInRangeMethod2(x, y, arr);
}

getIntegersInRangeMethod2(2, 9, []);

/*
pass in the previous remainder as a parameter to maintain its state instead of getting reassigned during every recursion.

Ex gcd of 6, 8

Max of 6, 8

8 = 6 * 1 + 2

Pass the remainder and smallest to the recursive function again.

6 = 2*3 = 0;

Since we get remainder as 0 return the previous remainder which is 2. This is our Gcd

Algorithm

- Find the max and min number of two numbers.
- get the remainder using maxnumber % minnumber
- if current remainder calculation is 0 and if we have a previous remainder return that remainder.
- if remiander calculation is 0 and if we dont have a previous remainder return the minimum number
- else we recurse.
*/

function Gcd(num1, num2, remainder) {
    // find Maximum of Two numbers.
    let maxNumber = Math.max(num1, num2);
    let minumber;
    if (maxNumber === num1) {
        minumber = num2;
    } else {
        minumber = num1;
    }
    // Store the remainder in a variable.
    let remainderCacl = maxNumber % minumber;
    if (remainderCacl === 0 && remainder) {
        return remainder;
    } else if (remainderCacl === 0 && !remainder) {
        return minumber;
    } else {
        return Gcd(minumber, remainderCacl, remainderCacl)
    }
}

Gcd(6, 8);


/*
Write a JavaScript program to compute the sum of an array of integers
*/

function calculteSumRecursion(arr, sum) {
    if (arr.length < 1) {
        return sum;
    }
    sum = sum + arr[arr.length - 1];
    return calculteSumRecursion(arr.slice(0, -1), sum);
}

calculteSumRecursion([1, 2, 3, 4, 5, 6], 0);

/*
Write a JavaScript program to compute the exponent of a number.

-- Try calculate exponents using dynamic Programming. -- There is no use of Dp here as we are not repeating anything,.
*/

function calculateExponent(base, exp) {
    if (exp === 1) {
        return base;
    }
    return base * calculateExponent(base, exp - 1);
}

calculateExponent(8, 2);

/*
Write a JavaScript program to get the first n Fibonacci numbers

use dp to solve this problem
*/

function fibinocci(n) {
    if (n === 1 || n === 0) {
        return 1
    }
    return fibinocci(n - 1) + fibinocci(n - 2);
}

fibinocci(5);


var storageArr = [];

function fibinocciDp(num) {
    storageArr[0] = 0;
    storageArr[1] = 1;
    for (let i = 2; i <= num; i++) {
        storageArr[i] = storageArr[i - 1] + storageArr[i - 2];
    }
    return storageArr[num];
}

fibinocciDp(5);


/*
 Write a JavaScript program for binary search.
 Note in order to perform binary search the array should be sorted.
 if not sort the array. Sorting the array is an expensive operation.
*/

function binaryArraySearch(arr, searchNumber) {
    let arrMedian = Math.ceil(arr.length / 2);
    // base case
    if (arr.length === 1 && arr[0] === searchNumber) {
        return searchNumber
    }

    if (searchNumber >= arr[arrMedian]) {
        return binaryArraySearch(arr.slice(arrMedian, arr.length), searchNumber);
    } else if (searchNumber <= arr[arrMedian]) {
        return binaryArraySearch(arr.slice(0, arrMedian), searchNumber);
    } else {
        return 'There is no such element present in the Array that has been provided.';
    }
}

binaryArraySearch([0, 1, 2, 3, 4, 5, 6], 7);


/*

- Print all the subStrings of a String using recursion
- string 'abc' should Print a,b,c,ab,bc,abc.


*/


function printSubstring(string, strPointer, length, storage) {
    if (length === string.length) {
        return storage;
    }
    if(strPointer === string.length || strPointer+length > string.length){
        strPointer = 0;
        length = length +1;
    }
    storage.push(string.slice(strPointer, strPointer+length));
    return printSubstring(string,strPointer+1, length, storage);
}

printSubstring('abcd', 0,1, []);