// Objects (value collection) are unordered keyed collection of various values.
// We can access the element by the key/property name

var me = {
    name: 'Krishna',
    company: 'Microsoft',
    jobs: [
        'design', 'code', 'fix', 'iterate'
    ]   
};

console.log(`I work at ${ me.company }`); // Using dot to access value
console.log(`I work at ${ me["company"] }`); // Using square brackets to access value

// Arrays are special type of object value comprise of an 
// orderded and numerically indexed list of data.
"use strict";

// Arrays
// Arrays can hold any primitive or object value.
// Even functions are values which can be present in arrays/objects.
var planets = ['Earth', 'Mars', 'Venus'];
console.log(planets);
console.log(planets.length);

console.log(planets[0]);


// Functions, like arrays are special type (aka, sub-type) of object.
function hello(name) {
    console.log('My name is ' + name);
}

hello('Krishna Chaitanya M');