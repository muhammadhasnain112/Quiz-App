const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "80°C", "100°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "Which country hosted the 2020 Olympics?",
        options: ["China", "Japan", "Brazil", "USA"],
        answer: "Japan"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Alexander Bell", "Thomas Edison", "Newton"],
        answer: "Thomas Edison"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: "CSS"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: "Diamond"

    }
];
let Start = document.getElementById('start')
let h1 = document.getElementById('h1')
let h6 = document.getElementById('h6')
let div = document.getElementById('div')
let count = 0;
let time
let Score = 0;

let set

function Quiz() {
    time = 120;

    if (count >= questions.length) {
        div.innerHTML = "";
        Start.disabled = true;
        if (Score > 4) {
            Swal.fire({
                title: "You Win!",
                text: `Your Correct Answers Is ${Score}`,
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "You Lost!",
                text: `Your Correct Answers Is ${Score}`,
                icon: "error"
            });
        }
        return;
    }

    Start.innerText = `Next`;
    div.innerHTML = ``;
    h1.innerHTML = questions[count].question;

    questions[count].options.forEach((e, i) => {
        div.innerHTML += `
            <input type="radio" value="${e}" name="Options" id="label${i}" class="label">
            <label for="label${i}">${e}</label><br>`;
    });
    Start.disabled = true;
    let inputs = document.querySelectorAll('input[name="Options"]');
    inputs.forEach((e) => {
        e.addEventListener('change', () => {
            Start.disabled = false;
            if (e.value == questions[count].answer) {
                Score++;
            }
        });
    });

    clearInterval(set)
    set = setInterval(timer, 500);
    count++;
}



function timer() {
    if (Start.disabled) {
        Start.style.backgroundColor = `grey`
    } else {
        Start.style.backgroundColor = `black`

    }
    if (time < 0) {
        h6.innerHTML = `Time Up`
        clearInterval(set);
        Quiz();
        return;
    }

    let min = Math.floor(time / 60);
    let sec = time % 60;

    if (sec < 10) sec = `0${sec}`;
    if (min < 10) min = `0${min}`;

    h6.innerHTML = `${min}:${sec}`;
    --time;
}
Start.addEventListener('click', Quiz);
