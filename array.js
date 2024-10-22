let arr = [1, 2, 3]; // example 1

arr.push(4);
console.log(arr); // [1, 2, 3, 4]

let ar = [1, 2, 3, 4]; // Example 2


let popped = ar.pop();
console.log(ar, popped); // [1, 2, 3], 4

let arr1 = [1, 2, 3, 4]; // Example 3


let first = arr1.shift();
console.log(arr1, first); // [2, 3, 4], 1


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
}