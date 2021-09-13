const numbers = [23, 28, 35, 29, 25];

const student = {
    name: 'Sakib',
    age: 32,
    movies: ['king kong', 'gotham']
}


// 1. template string
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);



// 2. Arrow function
const getTwentyEight = () => 28;

const addSixtyThree = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;

// multiline arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 35];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);