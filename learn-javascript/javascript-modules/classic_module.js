"use strict";

// 1. Modules are another way of organizing code just like classes.
// 2. From the early days of JS, module was an important and common pattern that was used 
//    even without a dedicated syntax natively in JS. This pattern can be termed as a 
//    classic module format.

// The key characteristics of a classic module are:
// 1. Outer function which is called at least once and returns module's instance.
// 2. Module's instance have one or more functions exposed.
// 3. These exposed functions can operate on module instance's internal hidden data.

// With modules, functions and data are accessed as identifier variables in scope without
// 'this' prefix.

// With modules, we need to explicity specify which data/functions we want to expose for
// others to use. Everything else remains private.

// Since, module of this form is a function, instantiating which creates modules, another 
// description for these functions is module factories.

function Vehicle(type, brand, model, price) {
    var publicAPI = {
        print: function() {
            console.log(`Type: ${ type }\nBrand: ${ brand }\nModel: ${ model }\nPrice: ${ price }`)
        }
    };

    return publicAPI;
}

function Car(car) {
    var vehicle = Vehicle('CAR', car.brand, car.model, car.price);
    var publicAPI = {
        print() {
            vehicle.print();
            console.log(`Airbags: ${ car.airbags }\nPower windows: ${ car.powerwindows }`);
        }
    };

    return publicAPI;
}

function Bike(bike) { // Outer function
     // Module's internal hidden data
    var vehicle = Vehicle('BIKE', bike.brand, bike.model, bike.price);
    var publicAPI = { // Exposed function
        print() {
            vehicle.print();
            console.log(`Engine capacity: ${ bike.enginecapacity }`);
        }
    };

    return publicAPI; // Returning module instance
}

var car = Car({
    brand: 'Maruthi',
    model: 'Baleno',
    price: '8L',
    airbags: 'Driver & Passenger',
    powerwindows: 'Front & Rear'
});

car.print();

var bike = Bike({
    brand: 'Yamaha',
    model: 'Fazer',
    price: '1L',
    enginecapacity: '150cc'
});

bike.print();