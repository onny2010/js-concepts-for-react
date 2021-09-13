// 1. how to declare a variable using let and const 
const fathersName = 'Arnold';
let season = 'winter';
season = 'rainy';



// 2. conditions
// 6 basic condition: >, <, ===, !==,<=, >=
// multiple condition: &&, || 

if (fathersName === 'arnold' || season === 'winter') {

}
else if (fathersName === 'Arnold') {

}
else {

}

// 3. array
//    index
//    length, push
const numbers = [23, 28, 35, 29, 25];


// 4. loop
for (let i = 0; i < numbers.length; i++) {
    const number = number[i];
    console.log(number);
}


//  5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}


const output = multiply(28, 35);


//  6.objects
// 3 ways to access property by name
const student = {
    name: 'Sakib',
    age: 32,
    movies: ['king kong', 'gotham']
}

const myVariable = 'age';

console.log(student.age);       // directly by property
console.log(student['age']);    //access via property name string
console.log(student[myVariable]); //access via property name in a variable
