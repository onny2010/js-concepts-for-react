const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // add in localStorage
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

localStorage.setItem('friendsAges', [22, 23, 24])
localStorage.setItem('friendsAges2', JSON.stringify([22, 23, 24]));

const pen = { price: 10, color: 'yellow' };
// localStorage.setItem('pen', pen)
localStorage.setItem('pen', JSON.stringify(pen));

// when we play with this value we should
const storedPen = localStorage.getItem('pen');
console.log(storedPen);
const penObject = JSON.parse(storedPen);
console.log(storedPen);
