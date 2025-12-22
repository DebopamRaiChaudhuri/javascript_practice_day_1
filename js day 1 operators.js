let a = "niharika";
let b = 15;
console.log(a+b);

console.log(typeof (a+b));
 //constant
// const firstName = "Niharika";
// let firstName = rai ; // This will throw an error because firstName is a constant

//adding new key in constatnt object
const person = {
    name: "Niharika",
    age: 21
};
person['gender'] = 'female'; // This is allowed
console.log(person);

//dictionary of 5 words
const dictionary = {
    daisuki: "to like something very much",
    arigatou: "thank you",
    sayonara: "goodbye",
    ohayou: "good morning",
    aishiteiru: "I love you"
};
console.log(dictionary);

// variable declaration and printing
let name = "Orion";
let userage = 32;
let isgraduted = true;
console.log(name);
console.log(userage);
console.log(isgraduted);

// simple arithmetic operations
let n = 15;
let d = 14;
console.log("n+d=", n+d);
console.log("n-d =", n-d);
console.log( "n*d = ", n*d);
console.log("n/d =", n/d);
console.log("n**d =", n**d);
console.log("n % d =", n%d);

// comparison operators
let x = 15;
let y = "15";
console.log(x==y); // true (same value) (equal ==)
console.log(x!=y); // false (same value) (not equal !=)
console.log(x===y); // false (same value, different data type)
console.log(x!==y); // true (same value, different data type)
console.log(x>y); // false
console.log(x<y); // false
console.log(x>=y); // true
console.log(x<=y); // true

// logical operators
let age = 24
let hasGraduated = true;

console.log (age>18 && hasGraduated); // true (both conditions true AND)
console.log (age>18 || hasGraduated); // true (at least one condition true OR)
console.log (!hasGraduated); // false (NOT)




// average marks of 3 subjects (Today's task)
const subjects = {
    math: 95,
    science: 90,
    english: 85
};
let average = (subjects.math + subjects.science + subjects.english) / 3;
console.log("Average marks: ", average);
console .log(average >=40) 