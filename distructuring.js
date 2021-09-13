// 1. array destructuring

const numbers = [42, 65];
// const x = number[0];
// const y = number[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
const [first, second] = boxify(90, 34);
// console.log(boxify(28, 35));

const student = {
    name: 'Sakib',
    age: 32,
    movies: ['king kong', 'gotham']
}

const [firstMovie, secondMovie] = student.movies;


//  objects destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name, age } = { id: 28, name: 'alu', age: 14, salary: 30000 };



const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 6.6,
        weight: 67,
        address: 'kumarkhali',
        drink: 'wine',
        watch: {
            color: 'black',
            price: 500,
            brand: 'rolex'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;