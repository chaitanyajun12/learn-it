// Variables (aka identifiers) are containers of values.
// Please comment the lines commented with "Error!" for this file to run.

// var
// Function scope

// let
// Block scope and reassignment works

var name = 'Krishna';
if (name) {
    var skill = 'JS';
    let designation = 'Sofware Engineer';    
}

console.log(skill); // Works
console.log(designation); // Error!

// const
// Block scope and reassignment will not work.
// Value should assigned during declaration const variable.

var createBlockScope = true;
if (createBlockScope) {
    const constInitVal = 0;
    let letInitValue = 0;
    
    constInitVal += 1; // Error!
    letInitValue += 1;
}

console.log(constInitVal); // Error!
console.log(letInitValue); // Error!

// If an object is assigned to const variable, the object can be modified.
// It is recommended to use const variable only with primitive values rather than on object values.
// This is advised to avoid confusion since, the object can be modified but new value cannot be assigned.
const obj = {
    name: 'Krishna',
    company: 'Microsoft',
    skill: 'JS'
};

obj.skill = 'Python';
console.log(`Updated skill is ${ obj.skill }`);

obj = null; // Error!