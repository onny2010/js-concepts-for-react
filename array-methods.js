const products = [
    { name: 'laptop', price: 320000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 30000, brand: 'xiaomi', color: 'blue' },
    { name: 'watch', price: 3200, brand: 'casio', color: 'black' },
    { name: 'sunlgass', price: 150, brand: 'rayban', color: 'black' },
    { name: 'camera', price: 80000, brand: 'canon', color: 'yellow' }
];
// 1. map for get item with return
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// 2. forEach for get item without return 
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

});


// 3. filter by using condition for get item or items
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(pd => pd.name.includes('n'));
console.log(specificName);




// 4. find by using condition and get item but first result will be shown
const special = products.find(p => p.name.includes('n'));
console.log(special);