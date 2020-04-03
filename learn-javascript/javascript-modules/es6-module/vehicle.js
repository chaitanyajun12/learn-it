function printVehicle(type, brand, model, price) {
    console.log(`${ type } + ${ brand } + ${ model } + ${ price }`)
}

function vehicle(type, brand, model, price) {
    // This reference object is exported
    var publicAPI = {
        print() {
            printVehicle(type, brand, model, price);             
        }
    }
    
    return publicAPI;
}

export { vehicle };