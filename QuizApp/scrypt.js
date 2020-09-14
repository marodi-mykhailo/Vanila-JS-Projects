const quizData = [
    {
        question: 'What’s the first thing a caterpillar usually eats after it’s born?',
        a: ' Other bugs',
        b: ' Grass',
        c: ' Its own eggshell', // correct answer
        d: ' Cheerios',
        correct: 'c'
    },
    {
        question: 'The trumpeter swan—North America’s largest waterfowl—weighs about how many pounds?',
        a: 10,
        b: 30, // correct
        c: 50,
        d: 70,
        correct: 'b'
    },
    {
        question: 'Which of the following animals is not nocturnal?',
        a: ' Sheep', // correct
        b: ' Skunk',
        c: ' Leopard',
        d: ' Tiger',
        correct: 'a'
    },
    {
        question: 'Walruses can eat about how many clams in one day?',
        a: '5.000', // correct
        b: '10.000',
        c: '12.000',
        d: '16.000',
        correct: 'a'
    },
    {
        question: 'What is a baby rabbit called?',
        a: ' Doe',
        b: ' Kit', // correct
        c: ' Buck',
        d: ' Hare',
        correct: 'b'
    }
]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answerData = document.querySelectorAll('.answer')
const quizHeading = document.getElementById('quiz__heading')

let score = 0;

let currentQuestion = 0;
function loadQuiz() {
    questionEl.innerText = quizData[currentQuestion].question
    a_text.innerText = quizData[currentQuestion].a
    b_text.innerText = quizData[currentQuestion].b
    c_text.innerText = quizData[currentQuestion].c
    d_text.innerText = quizData[currentQuestion].d

}

loadQuiz();

function getSelected(){
    let isSelected;
    answerData.forEach((answer) => {
        if(answer.checked){
            isSelected = answer.checked
            if(answer.id === quizData[currentQuestion].correct){
                score++
            }
        }
        answer.checked = false;

    })
    return isSelected;
}



submitBtn.addEventListener('click', ()=>{

    if (getSelected()){

        currentQuestion++
        if(currentQuestion < quizData.length){
            loadQuiz()
        }else {
            quizHeading.innerHTML = `<h1>You have ${score}/${quizData.length} correctly questions </h1>`
            submitBtn.innerHTML = `<button onclick="location.reload()">Play Again</button>`
        }
    }


})
