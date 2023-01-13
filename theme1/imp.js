let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let noInput = document.querySelector('#no');
let nameInput = document.querySelector('#name');
let dateInput = document.querySelector('#date');
let timeInput = document.querySelector('#time');
let priceInput = document.querySelector('#price');


btnAdd.addEventListener('click', () => {
    let no = noInput.value;
    let name = nameInput.value;
    let date = dateInput.value;
    let time = timeInput.value;
    let price = priceInput.value;

    let template = `    
                <tr>
                    <td>${no}</td>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${time}</td>
                    <td>${price}</td>
                </tr>`;

    table.innerHTML += template;
});