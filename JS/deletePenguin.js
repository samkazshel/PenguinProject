'use strict';
let deleteField = document.querySelector("#penguinIdField")
let button = document.querySelector("#deleteBtn")

let deleteData = () => {
    let deleteValue = deleteField.value;

    deleteRequest(deleteValue)


    return deleteValue;
}

let deleteRequest = (id) => {
    fetch('http://localhost:8083/delete/${id}', {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
            })

    })
}

button.addEventListener('click', deleteData);