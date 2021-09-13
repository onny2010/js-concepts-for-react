// falsy: '', 0, false, null, undefined

// truthy: 'almas', true , 5, {}, []



// object declaration shortcut
// shortcut.1
const x = 28;
const y = 35;
const obj = {
    x: x,
    y: y
}

const obj1 = { x, y };

// shortcut.2
const name = 'Tasnia Hossain';
const area = 'Dinajpur';

const madam = {
    name: name,
    area: area
}
const madam2 = { name, area };




// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}


const money = 80;
let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha-biscuit'
};


// ternary operator
let food1 = money > 100 ? 'biriyani' : 'cha-biscuit';
console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter-water';
console.log(drink);


// number to string convertion
const num1 = 28;
const numStr = num1 + '';
console.log(numStr);


// string to number
const input = '500';
const inputnum = +input;
console.log(inputnum);


// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();


// toggle boolean
isActive = !isActive;