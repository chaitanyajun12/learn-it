"use strict";

// Inheritance and Polymorphism

// Parent class
class Vehicle {
    constructor(type, brand, model, price) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    print() {
        console.log(`Type: ${ this.type }\nBrand: ${ this.brand }\nModel: ${ this.model }\nPrice: ${ this.price }`)
    }
}

// Child class
class Car extends Vehicle { // Inheritance acheived using the extends keyword in JS
    constructor(brand, model, price, airbags, powerwindows) {
        super('CAR', brand, model, price);
        this.airbags = airbags;
        this.powerwindows = powerwindows;
    }

    // 1. The inherited and overridden method can have the same name and co-exist is called polymorphism.    
    // 2. It means the same method name (print) can be used depending on the object value 
    //    assigned and the correponding class's method will be invoked.
    print() {
        super.print();
        console.log(`Airbags: ${ this.airbags }\nPower windows: ${ this.powerwindows }`);
    }
}

// Child class
class Bike extends Vehicle {
    constructor(brand, model, price, enginecapacity) {
        super('BIKE', brand, model, price, enginecapacity);
        this.enginecapacity = enginecapacity;
    }

    print() {
        super.print();
        console.log(`Engine capacity: ${ this.enginecapacity }`);
    }
}


var car = new Car('Maruthi', 'Baleno', '8L', 'Driver & Passenger', 'Front & Rear');
car.print();

var bike = new Bike('Yamaha', 'Fazer', '1L', '150cc');
bike.print();