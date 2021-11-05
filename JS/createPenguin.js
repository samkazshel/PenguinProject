'use strict';
let nameField = document.querySelector("#penguinNameInput");
let ageField = document.querySelector("#penguinAgeInput");
let happyField = document.querySelector("#penguinHappyFeet");
let create = document.querySelector("#createSubmit");


let postData = () => {
    let nameValue = nameField.value;
    let ageValue = ageField.value;
    let happyFeet = happyField.value;

    let newPenguin = {
        name: nameValue,
        age: ageValue,
        happyFeet: happyFeet
    }

    postFetch(newPenguin);
}

let postFetch = (object) => {
    fetch('http://localhost:8083/createPenguin', {
        method: 'POST',
        headers: {
            "Content-type": "application/JSON"
        },
        body: JSON.stringify(object)
    })
        .then((response) => {
            if (response.status !== 201) {
                console.error(`Status: ${response.status}`);
            }
            response.json()
                .then((data) => {
                    console.log(data);
            })
    })
}

create.addEventListener('click', postData);