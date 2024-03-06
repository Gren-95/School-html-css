function checkNumber() {
    var number = parseInt(prompt("Sisesta arv:"));

    if (!isNaN(number)) {
        var message = '';

        if (number >= 1 && number <= 100 && number % 7 === 0) {
            message += number + " on vahemikus 1 kuni 100 ja jagub 7-ga.<br>";
        } else {
            message += number + " ei vasta tingimusele 1.<br>";
        }

        if (number < 100 || number > 200) {
            message += number + " on alla 100 või üle 200.<br>";
        } else {
            message += number + " ei vasta tingimusele 2.<br>";
        }

        document.getElementById('result').innerHTML = message;
    } else {
        document.getElementById('result').innerHTML = "Palun sisesta arv!";
    }
}

function findLargestNumber(numbers) {
    return Math.max(...numbers.filter(number => !isNaN(number)));
}

function inputNumbers() {
    var numbers = [];
    for (var i = 0; i < 10; i++) {
        var number = parseInt(prompt("Sisesta arv " + (i + 1) + ":"));
        numbers.push(number);
    }
    return numbers;
}

function checkTenNumbers() {
    var numbers = inputNumbers();
    var largestNumber = findLargestNumber(numbers);
    document.getElementById('result').innerHTML = "Suurim arv on: " + largestNumber;
}

function submitQuiz() {
    var answers = [];
    var totalScore = 0;

    // Küsimus 1
    var question1 = document.querySelector('input[name="question1"]:checked');
    if (question1) {
        answers.push(question1.value);
        if (question1.value === "b") {
            totalScore++;
        }
    }
    // Küsimus 2
    var question2 = document.querySelector('input[name="question2"]:checked');
    if (question2) {
        answers.push(question2.value);
        if (question2.value === "a") {
            totalScore++;
        }
    }

    // Küsimus 3
    var question3 = document.querySelector('input[name="question3"]:checked');
    if (question3) {
        answers.push(question3.value);
        if (question3.value === "a") {
            totalScore++;
        }
    }

    // Küsimus 4
    var question4 = document.querySelector('input[name="question4"]:checked');
    if (question4) {
        answers.push(question4.value);
        if (question4.value === "b") {
            totalScore++;
        }
    }

    // Küsimus 5
    var question5 = document.querySelector('input[name="question5"]:checked');
    if (question5) {
        answers.push(question5.value);
        if (question5.value === "a") {
            totalScore++;
        }
    }

    // Kuva tulemus
    var result = "Tulemus: Saavutasid " + totalScore + " punkti 5-st.";
    document.getElementById("result").innerHTML = result;
}