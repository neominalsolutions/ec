// ES6 ile gelen module system
import { Car, User } from './07_exports.js';
// import {useState,useEffect}  from 'react';
// import HomePage from './home';
// import * as excel from 'xlsx'

// Module olarak import etmek
import * as MyModule from './07_exports.js';
import * as MyModule2 from './07_exports2.js';

// default ile dosyayı import etme
import module from './07_exports2.js';

var c = new Car();
var u = new User();

// new System.Text.Json.JsonSerializer();
var c1 = new MyModule.Car();
var u1 = new MyModule.User();

var c2 = new MyModule2.Car();

// var s = new Shop();

var c3 = new module.Car();
var m3 = new module.Market();
console.log('c3', c3, 'm3', m3);
