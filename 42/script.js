document.getElementById("primeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let arv = document.getElementById("texttt").value;
    let num = parseInt(arv);
    let onAlgarv = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            onAlgarv = false;
            break;
        }
    }

    let resultDiv = document.getElementById("result");
    if (onAlgarv && num > 1) {
        resultDiv.textContent = num + " is a prime number.";
    } else {
        resultDiv.textContent = num + " is not a prime number.";
    }
});


function generateCalcTable() {
    var tableBody = document.getElementById("calcTable");
    for (let i = 1; i <= 10; i++) {
        let sqare = i * i
        let cube = i * i * i
        let sqrt = Math.sqrt(i)
        var newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${i}</td>
            <td>${sqare}</td>
            <td>${cube}</td>
            <td>${sqrt}</td>
        `
        tableBody.appendChild(newRow);

    }
}

function generateTruthTable() {
    var tableBody = document.getElementById("truthTableBody");
    for (let A of [true, false]) {
        for (let B of [true, false]) {

            let andResult = A && B;
            let orResult = A || B;
            let notAResult = !A;
            var newRow = document.createElement("tr");

            newRow.innerHTML = `
                <td>${A}</td>
                <td>${B}</td>
                <td>${andResult}</td>
                <td>${orResult}</td>
                <td>${notAResult}</td>
            `;
            tableBody.appendChild(newRow);
        }
    }
}

generateTruthTable();
generateCalcTable();