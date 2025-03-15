//arrays
//enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//1. create an array
//an array is created by using square brackets [].
//an array can store any data type.
//an array can store multiple data types.
//an array can store other arrays.
//an array can store objects.
//an array can store functions.
//an array can store variables.
//an array can store expressions.
//an array can store numbers.

const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//output: ["apple", "banana", "mango", "orange"];


//2. access an array
//an array is accessed by using the index number of the item.
//the index number starts from 0.
//the index number is used to access the item in the array.
//the index number is used to update the item in the array.
//the index number is used to delete the item in the array.

const fruitsList = ["apple", "banana", "mango", "orange"];
console.log(fruitsList[0]);
//output: apple

//3. update an array
//an array is updated by using the index number of the item.
//the index number is used to update the item in the array.

const fruitsList1 = ["apple", "banana", "mango", "orange"];
fruitsList1[0] = "kiwi";
console.log(fruitsList1);
//output: ["kiwi", "banana", "mango", "orange"];

//4. delete an array 
//an array is deleted by using the delete keyword.

const fruitsList2 = ["apple", "banana", "mango", "orange"];
delete fruitsList2[0];
console.log(fruitsList2);
//output: [empty, "banana", "mango", "orange"];

//5. iterate an array
//an array is iterated using the for loop.
//the for loop is used to iterate the array.

const fruitsList3 = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruitsList3.length; i++) {
    console.log(fruitsList3[i]);
}
//output: apple
//banana
//mango
//orange

//6. add an item to an array
//an item is added to an array using the push method.
//the push method is used to add an item to the ene of the array.

const fruitsList4 = ["apple", "banana", "mango", "orange"];
fruitsList4.push("kiwi");
console.log(fruitsList4);
//output: ["apple", "banana", "mango", "orange", kiwi];

//7. remove an item from an array
//an item is removed from an array using the pop method.
//the pop method is used to remove an item from the end of the array.

const fruitsList5 = ["apple", "banana", "mango", "orange"];
fruitsList5.pop();
console.log(fruitsList5);
//output: ["apple", "banana", "mango"];

//8. add an item to the beginning of an array
//an item is added to the beginning of an array using the unshift method.
//the unshift method is used to add an item to the beginning of the array.

const fruitsList6 = ["apple", "banana", "mango", "orange"];
fruitsList6.unshift("kiwi");
console.log(fruitsList6);
//output: ["kiwi", "apple", "banana", "mango", "orange"];

//9. remove an item from the beginning of an array
//an item is removed from the beginning of an array using the shift method.
//the shift method is used to remove an item from the beginning of the array.

const fruitsList7 = ["apple", 'banana', "mango", "orange"];
fruitsList7.shift();
console.log(fruitsList7);
//output: ["banana", "mango", "orange"];

//10. find an item in an array
//an item is found in an array using the indexOf method.
//the indexOf method is used to find the index of an item in the array.

const fruitsList8 = ["apple", "banana", "mango", "orange"];
console.log(fruitsList8.indexOf("mango"));
//output: 2

//11. find the last item in an array
//the last item in an array is found using the length property and the index number.

const fruitsList9 = ["apple", "banana", "mango", "orange"];
console.log(fruitsList9(fruitsList9.length - 1));
//output: orange

//12. copy an array
//an array is copied using the slice method.
//the slice method is used to copy an array.

const fruitsList10 = ["apple", "banana", "mango", "orange"];
const fruitsListCopy = fruitsList10.slice();
console.log(fruitsListCopy);
//output: ["apple", "banana", "mango", "orange"];

//13. merge two arrays 
//two arrays are merged using the concat method. 
//the concat method is used to merge two arrays.

const fruitsList11 = ["apple", "banana", "mango"];
const fruitsList12 = ["orange", "kiwi"];
const fruitsListMerge = fruitsList11.concat(fruitsList12);
console.log(fruitsListMerge);
//output: ["apple", "banana", "mango", "orange", "kiwi"];

//14. reverse an array
//an array is reversed using the reverse method.
//the reverse method is used to reverse an array.

const fruitsList13 = ["apple", "banana", "mango", "orange"];
fruitsList13.reverse();
console.log(fruitsList13);
//output: ["orange", "mango", "banana", "apple"];

//15. sort an array
//an array is sorted using the sort method.
//the sort method is used to sort an array.

const fruitsList14 = ["apple", "banana", "mango", "orange"];
fruitsList14.sort();
console.log(fruitsList14);
//output: ["apple", "banana", "mango", "orange"];

//16. filter an array
//an array is filtered using the filter method. 
//the filter method is used to filter an array.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
//output: [2, 4];

//17. map an array
//an array is mapped using the map method.
//the map method is used to map an array. 

const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers1.map(number => number * number);
console.log(squaredNumbers);
//output: [1, 4, 9, 16, 25];

//18. reduce an array
//an array is reduced using the reduce method.
//the reduce method is used to reduce an array.

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((a, b) => a + b);
console.log(sum);
//output: 15;

//19. find an item in an array
//an item is found in an array using the find method.
//the find method is used to find an item in an array. 

const fruitsList15 = ["apple", "banana", "mango", "orange"];
const fruitsListFind = fruitsList15.find(fruit => fruit === "mango");
console.log(fruitsListFind); 
//output: mango

//20. find the index of an item in an array