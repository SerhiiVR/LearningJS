"use strict";

//const { sum } = require("lodash");

// Load the full build.
// var _ = require('lodash');
// Load the core build.
//var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');
 
// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');
// alert("I JavaScript");

//let admin;
//let name;

/*let userName = prompt('Yor name?','');
alert(`${userName}`);
confirm('yes or no');*/

/*let value = true;
alert(typeof value); // boolean

/!*value = String(value); // теперь value это строка "true"
let apples = 'a';
let oranges = 'b';
alert(+apples + +oranges); // string*!/

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

name = "Djohn";
admin = name;
alert(admin);
let planetErs;
let currentSiteVisitor;
let button = document.getElementsByTagName('button').item(0);
button.innerHTML = 'JJJJJJ';*/
/*let nameJS = prompt("Какое оффициальное название JavaScript?",'');

if(nameJS === "ECMAScript"){
    alert("Верно!");
}else{
    alert("Не знаете? ECMAScript!");
}*/

/*let number = prompt("Number","");

if(number > 0){
    alert("1")
}else if(number < 0){
    alert("-1");
}else {
    alert("0");
}*/
/*let a,b;

let result = (a + b < 4)? 'Malo': 'Mnogo';*/

/*let message = (login === 'Sotrudnik') ? 'Privet' :
    (login === 'Direktor') ? 'Zdorov' :
        (login == '') ? 'Net logina' :
            '';*/
/*let login = prompt("Login: ", '');
let par;
if (login === 'admin') {
    par = prompt('Password', '');
    if (par === 'I char') {
        alert('Hello');
    } else if (par === '' || par === null) {
        alert("Abort");
    } else {
        alert('Ne wernii parol');
    }
} else if (login === '' || login === null) {
    alert("Abort");
} else {
    alert('I dont now you');
}*/

/*for (let i = 1; i <= 10; i++) {
    i % 2 ? '' : alert(i);
}*/
/*let i = 0;
while (i<3){
    alert( `number ${i}!` );
    i++;
}*/


/*let a;

do {
    a = prompt("Number", 0);
    console.log(a);
} while (a !== null && a < 100)*/
/*let n = 10;
next:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if(i%j == 0)continue next;
    }
    alert(i);
}*/

/*let browser = "8";
if (browser === 'Edge'){
    alert('1');
}else if((browser?'chrome':'Firefox') || (browser ? 'Safari': 'Opera')){
    alert('2');
}else {
    alert('3');
}*/
/*const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
    case 3:
        alert('2 b 3');
        break;
    default:
        alert('');
}*/
// checkAge(prompt("Age",''));
// function checkAge(age){
//     //return age > 18 ? true:confirm('???');
//     return age > 18 || confirm('???');
// }

/*let a = prompt("a",'');
let b = prompt("b",'');
alert(min(a,b));
function min(a,b){
    return a < b ? a:b;
}*/
//alert(pow(3, 3));

// function pow(x, n) {
//     let t = x;
//     for (let i = 1; i < n; i++) {
//         x *= t;
//     }
//     return x;
// }

// //let funArrow = (a, b) => a + b;
// /**
//  *
//  * @param question
//  * @param yes
//  * @param no
//  */
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// //debugger;

// ask("Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение."));

/*
function changeColor(newColor) {
    let elem = document.getElementById('para');
    elem.style.color = newColor;
    console.log(elem.toString().length);
}*/

// OBJECT ---------------------------------------------------------------------

// let user = {};

// user.name = "John";
// user.surename = "Smith";
// user.name = 'Pete';
// delete user.name;

// let schedule = {};
// //alert("hi");
// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// function isEmpty(someObject){

// for (const key in someObject) {

// return false;
// }
// return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum = 0;
// for (const key in salaries) {
//   sum += +salaries[key];
//   alert(salaries[key]);
// }
//   alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);

//   function multiplyNumeric(menu){
//     for (const key in menu) {
//        // alert('q');
//        if(typeof(menu[key]) == 'number'){
//         //alert('q');
//         menu[key] *= 2;
//        }
//     }
//   }

//   for (const key in menu) {
//      alert(menu[key]);
//   }

//   //let rt = _.cloneDeep(menu);

//   for (const key in rt) {
//       alert(re[key]);
//   }


// let calculator = {
//     read(){
//     calculator.first = prompt('first','');
//     calculator.second = prompt('second','');
//    },

//    sum(){
//     return +this.first + +this.second;
//    },

//    mul(){
//     return +this.first * +this.second;
//    }

//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

 ladder.up().up().down().showStep();