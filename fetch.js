// 1. JSON

const student = {
    name: 'Sakib',
    age: 32,
    movies: ['king kong', 'gotham']
}

// convert in JSON using stingify
const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

// convert in js object using parse
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);


// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


//  keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 25, 28, 35];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);



// "forOf" on array like object 
// loop on an object using "forIn"



//  add or remove from an array
const products = [
    { name: 'laptop', price: 320000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 30000, brand: 'xiaomi', color: 'blue' },
    { name: 'watch', price: 3200, brand: 'casio', color: 'black' },
    { name: 'sunlgass', price: 150, brand: 'rayban', color: 'black' },
    { name: 'camera', price: 80000, brand: 'canon', color: 'yellow' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' };
// copy products array and then add newProduct 
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');