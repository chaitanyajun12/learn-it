"use strict";

// Function is a type of object value.

// function declaration
// Association between the identifier and the function value happens at compile/static time.
function foo() {
    console.log("I am a function declaration!");
}

foo();

// function expression
// Association between the function value and the identifier does not happen until runtime.
var bar = function() {
    console.log("I am a function expression!");
};

bar();

// functions assigned as properties in an object
var livingBeing = {
    walk: function() {
        console.log('Walking...');
    },

    run: function() {
        console.log('Running...');
    },

    jump() {
        console.log('Jumping...');
    }
};

livingBeing.walk();
livingBeing.jump();