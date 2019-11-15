// import $ from "jquery";


//use EITHER import or require, but not both... and be consistent!
import $ from 'jquery';
import cart from './practice.js';
import {hello} from './say-hello.js';

//if using brackets to import mu


const $ = require('jquery');
const cart = require('./practice.js');
const hello = require('./say-hello.js');

// $(document).ready(function() {



    $('body').html("Hello").css('background-color', 'red');

    const sayHello = (name) => {
        return console.log('Hello, ' + name + '!');
    };


sayHello('Bryan');


hello.sayHi("bobaroonie");

console.log(cart.item.weight);

// });






