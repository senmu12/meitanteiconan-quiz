// ===================================
// 名探偵コナンクイズ
// script.js
// ===================================

// ===== 変数 =====
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

// ===== HTML取得 =====
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const choices = document.getElementById("choices");
const resultText = document.getElementById("resultText");

const startButton = document.getElementById("startButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const retryButton = document.getElementById("retryButton");
const tweetButton = document.getElementById("tweetButton");

// ===== ボタン設定 =====
startButton.onclick = startQuiz;
prevButton.onclick = prevQuestion;
nextButton.onclick = nextQuestion;
retryButton.onclick = resetQuiz;

// ===== クイズ開始 =====
function startQuiz(){

    questions = [...quizData];

    shuffle(questions);

    questions = questions.slice(0,10);

    questions.forEach(q=>{

        q.shuffledChoices = [...q.choices];

        shuffle(q.shuffledChoices);

    });

    selectedAnswers = new Array(questions.length).fill(null);

    currentQuestion = 0;

    score = 0;

    startScreen.style.display = "none";
    resultScreen.style.display = "none";
    quizScreen.style.display = "block";

    showQuestion();

}

// ===== 配列シャッフル =====
function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}


// ===== 問題表示 =====
function showQuestion(){

    const q = questions[currentQuestion];

    questionNumber.textContent =
        "問題 " + (currentQuestion + 1) + " / " + questions.length;

    question.textContent = q.question;

    choices.innerHTML = "";

    q.shuffledChoices.forEach((choice,index)=>{

        const btn = document.createElement("button");

        btn.textContent = choice;

        btn.className = "choice";

        // 前に選んだ答えを表示
        if(selectedAnswers[currentQuestion]===index){

            btn.classList.add("selected");

        }

        // 選択
        btn.onclick = function(){

            selectedAnswers[currentQuestion]=index;

            showQuestion();

        };

        choices.appendChild(btn);

    });

    // 「前へ」ボタン
    prevButton.disabled = (currentQuestion===0);

    // 「次へ」は回答後のみ押せる
    nextButton.disabled =
        (selectedAnswers[currentQuestion]===null);

}

// ===== 前へ =====
function prevQuestion(){

    if(currentQuestion>0){

        currentQuestion--;

        showQuestion();

    }

}

// ===== 次へ =====
function nextQuestion(){

    if(currentQuestion < questions.length-1){

        currentQuestion++;

        showQuestion();

    }else{

        calculateScore();

        showResult();

    }

}


// ===== 採点 =====
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

// ===== 結果表示 =====
function showResult(){

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    resultText.textContent =
        "あなたのスコアは " + score + " / " + questions.length + " 点です！";

    // X投稿ボタン
    tweetButton.onclick = function(){

        const text =
`名探偵コナンクイズで ${score}/${questions.length} 点でした！

あなたも挑戦してみよう！

#名探偵コナン
#コナンクイズ`;

        const url =
"https://senmu12.github.io/meitanteiconan-quiz/";

        const tweetUrl =
"https://twitter.com/intent/tweet?text="
+ encodeURIComponent(text)
+ "&url="
+ encodeURIComponent(url);

        window.open(tweetUrl, "_blank");

    };

}

// ===== もう一度プレイ =====
function resetQuiz(){

    startScreen.style.display = "block";

    quizScreen.style.display = "none";

    resultScreen.style.display = "none";

}

// ===== 初期表示 =====
window.onload = function(){

    startScreen.style.display = "block";

    quizScreen.style.display = "none";

    resultScreen.style.display = "none";

};
