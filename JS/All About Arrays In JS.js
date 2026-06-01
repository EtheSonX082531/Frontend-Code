// Creating an array
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

// push() => Adds an element to the end of the array
arr.push(7000);
console.log(arr);

// pop() => Removes the last element from the array
arr.pop();
console.log(arr);

// shift() => Removes the first element from the array
arr.shift();
console.log(arr);

// unshift() => Adds an element to the beginning of the array
arr.unshift(0);
console.log(arr);

// splice(startIndex, deleteCount)
// Removes 3 elements starting from index 2
arr.splice(2,3);
console.log(arr);

// slice(start, end)
// Creates a new array from index 0 to 4 (end index not included)
let newarr = arr.slice(0,5);
console.log(newarr);


// Reverse Example
let arr2 = [5,4,3,2,1];
console.log(arr2);

// reverse() => Reverses the original array
arr2.reverse();
console.log(arr2);


// Sorting Example
let ar = [9,34,0,1,67,12];

// Ascending sort (small to large)
let sr = ar.sort(function(a,b){
  return a - b;
});
console.log(sr);

// Descending sort (large to small)
let br = ar.sort(function(a,b){
  return b - a;
});
console.log(br);


// Array Iteration
let array = [11,22,33,44,55,66,77,88,99];

// forEach() => Loops through each element
// Used when you only want to perform an action
array.forEach(function(val){
    console.log(`Value is: ${val}`);
});


// map() => Creates a new array after modifying each element
let xx = array.map(function(val){
    return val + 100;
});
console.log(xx);


// filter() => Returns elements that satisfy a condition
// Here we keep only even numbers
let xy = array.filter(function(val){
   if(val % 2 === 0){
      return true;
   }
   else{
      return false;
   }
});
console.log(xy);


// reduce() => Combines all values into a single value
// Here we calculate the sum of all elements
let total = array.reduce(function(accumulator, val){
    return accumulator + val;
}, 0);

console.log(total);


// find() => Returns the first matching element
// Returns undefined if not found
let va = array.find(function(val){
  return val === 0;
});
console.log(va);


// some() => Returns true if at least one element satisfies the condition
let any = array.some(function(val){
   return val > 400;
});
console.log(any);


// every() => Returns true only if ALL elements satisfy the condition
let any2 = array.every(function(val){
   return val > 5;
});
console.log(any2);


// Array Destructuring
// b gets first element, d gets second element
let [b, d] = array;
console.log(b, d);


// Spread Operator (...)
// Creates a shallow copy of the array
let copy_of_array = [...array];

console.log(copy_of_array);
