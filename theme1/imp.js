window.onload = data = allStorage();
window.onload = loadtable(data);

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let noInput = document.querySelector('#no');

let nameInput = document.querySelector('#name');
let dateInput = document.querySelector('#date');
let timeInput = document.querySelector('#time');
let priceInput = document.querySelector('#price');
var chart;
var no = 0;
var id = 1

btnAdd.addEventListener('click', () => {

    no = noInput + 1;
    let name = nameInput.value;
    let date = dateInput.value;
    let time = timeInput.value;
    let price = priceInput.value;
    let template = `    
                <tr data-id='${id}'>
                    <td>${my_srno + 1}</td>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${time}</td>
                    <td>${price}</td>
                    <td><strong><a href="" class="btn btn-danger" onclick="deleterow(this)">Delete</a></strong></td>
                </tr>`;
    table.innerHTML += template;

    var newItem = {
        'id': my_srno,
        'name': name,
        'date': date,
        'time': time,
        'price': price
    };
    // chart.data[0].dataPoints.push({ x: new Date(2012, 01, 1), y: 26});
    // console.clear()
    // console.log(chart.data[0].dataPoints);
    // chart.render();

    localStorage.setItem(my_srno, JSON.stringify(newItem));
    location.reload();
});
function deleterow(my) {
    var row = my.parentNode.parentNode.parentNode;
    console.log(row);
    fadeout(row);
    var data_row = row.getAttribute("data-id");
    console.log("this is data ", data_row);
    localStorage.removeItem(data_row);
}
function fadeout(element) {
    var fade = element;
    var intervalID = setInterval(function () {

        if (!fade.style.opacity) {
            fade.style.opacity = 1;
        }
    });
}
var my_srno;
function loadtable(data) {
    console.log("this is load table ", data);
    let table = document.querySelector('table');
    var my_data = (data)
    var lenght = my_data.length;
    count = 0;
    while (count < lenght) {
        my_data2 = JSON.parse(my_data[count]);
        let template = `    
        <tr data-id='${my_data2.id}'>
        <td>${count + 1}</td>
        <td>${my_data2.name}</td>
        <td>${my_data2.date}</td>
        <td>${my_data2.time}</td>
        <td>${my_data2.price}</td>
        <td><strong><a href="" class="btn btn-danger" onclick="deleterow(this)">Delete</a></strong></td>
        </tr>`;
        table.innerHTML += template;
        count++;
    }
    console.log("count is ", count);
    my_srno = count;

}
console.log("this is my sr no", my_srno);
var mydata = data;
window.onload = function (mydata) {
    console.log("this is chart data ", mydata);

    chart = new CanvasJS.Chart("chartContainer",
        {
            title: {
                text: "Simple Date-Time Chart"
            },
            axisX: {
                title: "timeline",
                gridThickness: 2
            },
            axisY: {
                title: "Expense"
            },
            data: [
                {
                    type: "area",
                    dataPoints: [//array
                        { x: new Date(2012, 01, 1), y: 26},
                        { x: new Date(2012, 01, 3), y: 38},
                        { x: new Date(2012, 01, 5), y: 43},
                        { x: new Date(2012, 01, 7), y: 29},
                        { x: new Date(2012, 01, 11), y: 41},
                        { x: new Date(2012, 01, 13), y: 54},
                        { x: new Date(2012, 01, 20), y: 66},
                        { x: new Date(2012, 01, 21), y: 60},
                        { x: new Date(2012, 01, 25), y: 53},
                        { x: new Date(2012, 01, 27), y: 60}

                    ]
                }
            ]
        });
    chart.render();
}
