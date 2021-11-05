'use strict';
let getField = document.querySelector("#penguinIdField")
let button = document.querySelector("#searchBtn")
let button2 = document.querySelector("#getAllBtn")

let getData = () => {
    let getValue = getField.value;

    getFetch(getValue);
    
    return getValue;
}

let getFetch = (id) => {
    fetch('https://localhost:8083/get/${id}', {
        method: 'GET',
        headers: {
            "Content-type": "application/JSON"
        },
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.status}`);
            }
            response.json()
                .then((data) => {
                    console.log(data);
            })
    })
}

let getAllFetch = () => {
    fetch('https://localhost:8083/getAll', {
        method: 'GET',
        headers: {
            "Content-type": "application/JSON"
        },
    })
    .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.status}`);
            }
            response.json()
                .then((data) => {
                    console.log(data);
            })
    })
}

button.addEventListener('click', getData);
button2.addEventListener('click', getAllFetch)
