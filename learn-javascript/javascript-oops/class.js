"use strict";

// Class is a definition of a type of custom data structure that includes 
// both data and behavior which operates on the data.

// Class form stores methods and data on an object instance which must be 
// accessed with 'this'.

// All data and methods are public.

class Animal {
    constructor(name) {
        this.name = name; // Member property
    }

    print() {
        console.log(this.name);
    }
}

class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(name) {
        var animal = new Animal(name);
        this.animals.push(animal);
    }

    print() {
        console.log('Animals in the zoo:');
        for (var i = 0; i < this.animals.length; i++) {
            this.animals[i].print();
        }
    }
}

var zoo = new Zoo(); // Creates a new value of type Zoo
zoo.addAnimal('dog');
zoo.addAnimal('cat');
zoo.addAnimal('deer');

zoo.print();