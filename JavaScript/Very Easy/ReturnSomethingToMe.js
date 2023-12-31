/*
Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples

giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something"
*/

const giveMeSomething = (a) => {
    return "something" + " " + a;
}

console.log(giveMeSomething("is better than nothing")) //Output: something is better than nothing 
console.log(giveMeSomething("Bob Jane")) // Output: "something Bob Jane"
console.log(giveMeSomething("something")) // Output: "something something"