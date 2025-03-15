//Types of functions

//1. function declaration

function greet(){
    console.log("hello I'm ironman");
}

greet();

//can be called before the function declaration (hoisted function);
//used for reusablity.


//2. function expression (anonymous function)

//a function assigned to a varibale, 
//it doesn't have a name,

const greet = function(){
    console.log("hello I'm ironman");
}

greet();
//not hoisted (can't be called before the function declaration).
//useful for assining a function to a variable.

//3. arrow function (ES6)

const add = (a, b) => a + b;

console.log(add(2, 3));

//implicit return if there is no curly braces.
//no need to write the return keyword.
//shorter syntax.
//lexical this (this keyword is bound to the parent scope).

//4. IIFE (Immediately Invoked Function Expression)

//a function that executes immediately after being defined.

(function(){
    console.log("I'm IIFE");
})();

//used to avoid polluting the global scope.
//used to create private variables.


//5. callback function (Higher order function)

//a function passed as an argument to another function, or return a function.
//used in async programming.

function operate(a, b, callback){
    return callback(a, b,);
}

const result = operate(2, 3, (x, y) => x * y);
console.log(result);

//used in functionl programming like, event listeners, promises, setTimeout, setInterval, etc.
//common in map, filter, reduce, forEach, etc.
//used in async programming.

//6. recursive function

//a function that calls itself until a base condition is met.

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));

//used in tree data structures, sorting algorithms, etc,
//used in functional programming.
//useful for problems like factorial, fibonacci, and tree traversal.

//7. generator function

//a function that can pause and resume
//used to create iterators.

function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

const numGen = numbers();

console.log(numGen.next().value);
//output: 1
console.log(numGen.next().value);
//output: 2

//uses the yield keyword to pause the function instead of return.
//good for handling large data sets.

//8. constructor function (ES5)

//a function used to create multiple objects with the same properties and methods.

function person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new person("Tony Stark", 40);
console.log(person1);
//output: {name: "Tony Stark", age: 40}

//used to create objects with the new keyword.
//used in object-oriented programming.
//used to create classes in ES5. (simmilar to classes in ES6 (OOP)).


//9. method function 

//a function inside an object.

const person = {
    name: "Tony Stark",
    age: 40,
    greet: function(){
        console.log("hello I'm ironman");
    }
}

person.greet();
//output: hello I'm ironman

//used to define behavior of an object.
//used in object-oriented programming.
//used to access object properties.
//used in classes in ES6 (OOP).

//10. static function (ES6)

//a function that belongs to the class itself, not the instance of the class.

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

person.greet = function(){
    console.log("hello I'm ironman");
}

person.greet();

//used to create utility functions.
//used to create helper functions.
//used in classes in ES6 (OOP).


//11. async function (ES8)

//a function that returns a promise.
//used to handle async operations.

async function fetchData(){
    return "data fetched";
}

fetchData().then(data => console.log(data));
//output: data fetched

//used to handle async operations.
//used to handle promises.
//used to handle fetch API and AJAX calls.

//12. rest parameter function

//a function that accepts any number of arguments as an array.

function sum(...args){
    return args.reduce((a, b,) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
//output: 15

//used to accept any number of arguments.
//used in array methods.
//used in functional programming.


//13. spread operator function

//a function that spreads an array into individual elements.

function sum(a, b, c, d, e){
    return a + b + c + d + e;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));
//output: 15

//used to spread an array into individual elements.
//used in array methods.
//used in functional programming.

//14. default parameter function 

//a function that assigns a default value to a parameter.

function greet(name = "Tony Stark"){
    console.log(`hello I'm ${name}`);
}

greet();
//output: hello I'm Tony Stark

//used to assign a default value to a parameter.
//used to avoid undefined values.
//used in functional programming.

//15. curried function 

//a function tha takes one argument at a time.

function sum(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3));
//output: 6

//used to take one argument at a time.
//used in functional programming.
//used in partial application.

//16. memoized function 

//a function that caches the result of a function.

function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
    }
}

const sum = memoize((a, b) => a + b);

console.log(sum(1, 2));
//output: 3

//used to cache the result of a function.
//used to avoid recomputation.
//used in dynamic programming.

//17. pure function

//a function that returns the same output for the same input.

function sum(a, b){
    return a + b;
}

console.log(sun(2, 3,));
//output: 5

//used to avoid side effects.
//used in functional programming.
//used in testing.

//18. higher order function 

//a function that takes another function as an argument or returns a function.

function operate(a, b, callback){
    return callback(a, b);
}

const result1 = operate(2, 3, (x, y) => x * y);
console.log(result1);
//output: 6

//used to create reusable functions, 
//used in functional programming.
//used in async programming.

//19. partial application function

//a function that takes a function and some arguments and returns a function,

function sum(a, b, c){
    return a + b + c;
}

function partial(fn, a, b){
    return function(c){
        return fn(a, b, c);
    }
}

const sumAB = partial(sum, 1, 2);
console.log(sumAB(3));
//output: 6

//used to take a function and some arguments and return a function.
//used in functional programming.
//used in partial application.

//20. pipe function 

//a function that takes multiple functions as arguments and returns a function.

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function pipe(...fns){
    return function(x){
        return fns.reduce((v, fn) => fn(v), x);
    }
}


const addMultiply = pipe(add, multiply);
console.log(addMultiply(2, 3));
//output: 5

//used to take multiple functions as arguments and return a function.
//used in functional programming.
//used in composition.

//21. compose function 

//a function that takes multiple functions as arguments and returns a function.

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function compose(...fns){
    return function(x){
        return fns.reduceRight((v, fn) => fn(v), x);
    }
}

const addMultiply1 = compose(add, multiply);
console.log(addMultiply1(2, 3));
//output: 6

//used to take multiple functions as arguments and return a function.
//used in functional programming.
//used in composition. 

