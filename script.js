const tweetButton = document.getElementById("tweetButton");

let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const choices = document.getElementById("choices");

const startButton = document.getElementById("startButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const retryButton = document.getElementById("retryButton");
const tweetButton = document.getElementById("tweetButton");
startButton.onclick = startQuiz;
prevButton.onclick = prevQuestion;
nextButton.onclick = nextQuestion;
retryButton.onclick = resetQuiz;

function startQuiz(){

    questions = [...quizData];

    shuffle(questions);

    questions = questions.slice(0,10);

    questions.forEach(q=>{

        q.shuffledChoices = [...q.choices];

        shuffle(q.shuffledChoices);

    });

    selectedAnswers = new Array(10).fill(null);

    currentQuestion = 0;

    score = 0;

    startScreen.style.display = "none";
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();

}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

function showQuestion(){

    const q = questions[currentQuestion];

    questionNumber.textContent =
        "問題 " + (currentQuestion + 1) + " / 10";

    question.textContent = q.question;

    choices.innerHTML = "";

    q.shuffledChoices.forEach((choice,index)=>{

        const btn = document.createElement("button");

        btn.textContent = choice;

        btn.className = "choice";

        if(selectedAnswers[currentQuestion]===index){

            btn.classList.add("selected");

        }

        btn.onclick=function(){

            selectedAnswers[currentQuestion]=index;

            showQuestion();

        };

        choices.appendChild(btn);

    });

    prevButton.disabled=(currentQuestion===0);

    nextButton.disabled=
        (selectedAnswers[currentQuestion]===null);

}

function prevQuestion(){

    if(currentQuestion>0){

        currentQuestion--;

        showQuestion();

    }

}

function nextQuestion(){

    if(currentQuestion<questions.length-1){

        currentQuestion++;

        showQuestion();

    }else{

        calculateScore();

        showResult();

    }

}

function calculateScore(){

    score = 0;

    for(let i=0;i<questions.length;i++){

        const q = questions[i];

        const selected = selectedAnswers[i];

        if(selected===null) continue;

        const selectedChoice = q.shuffledChoices[selected];

        const correctChoice = q.choices[q.answer];

        if(selectedChoice===correctChoice){

            score++;

        }

    }

}

function showResult(){
console.log(tweetButton);
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    document.getElementById("resultText").textContent =
        "あなたのスコアは " + score + " / 10 点です！";

    tweetButton.onclick = function(){

        const text =
`名探偵コナンクイズで ${score}/10点でした！

あなたも挑戦してみよう！

#名探偵コナン
#コナンクイズ`;

        const url =
"https://senmu12.github.io/meitanteiconan-quiz/";

        window.open(
            "https://twitter.com/intent/tweet?text="
            + encodeURIComponent(text)
            + "&url="
            + encodeURIComponent(url),
            "_blank"
        );
    };

}


function resetQuiz(){

    quizScreen.style.display = "none";

    resultScreen.style.display = "none";

    startScreen.style.display = "block";

}

window.onload = function(){

    startScreen.style.display = "block";

    quizScreen.style.display = "none";

    resultScreen.style.display = "none";

};
