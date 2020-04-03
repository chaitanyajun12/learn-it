/**
 * ES6 modules by default are in strict mode.
 * 
 * 1. Access to ES6 modules is possible only via http/https protocol scheme. 
 *    That is why added the python's http.server.
 * 2. HTML specification mandates valid MIME types to be present for the module JS scripts.
 *    So, added the valid content-type headers for JS files.
 */ 

import { vehicle } from './vehicle.js';

let car = vehicle('Car', 'Maruthi', 'Baleno', '8L');
car.print();

let bike = vehicle('Bike', 'Yamaha', 'Fazer', '1L');
bike.print();