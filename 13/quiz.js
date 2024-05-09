const quizData = [
  {
    question: "What color is a red apple?",
    choices: ["Blue", "Yellow", "Green", "Red"],
    correctAnswer: "Red",
  },
  {
    question: "How many legs does a dog have?",
    choices: ["Two", "Three", "Four", "Six"],
    correctAnswer: "Four",
  },
  {
    question: "What is the opposite of up?",
    choices: ["Down", "Left", "Right", "Sideways"],
    correctAnswer: "Down",
  },
  {
    question: "What is the capital of the Moon?",
    choices: ["Moon City", "Lunarville", "Moonopolis", "Doesn't have one"],
    correctAnswer: "Doesn't have one",
  },
  {
    question: "What do you use to cut paper?",
    choices: ["Scissors", "Hammer", "Spoon", "Toothbrush"],
    correctAnswer: "Scissors",
  },
  {
    question: "What is the main ingredient in pizza?",
    choices: ["Bananas", "Chocolate", "Cheese", "Broccoli"],
    correctAnswer: "Cheese",
  },
  {
    question: "What is the capital of Antarctica?",
    choices: [
      "Iceberg City",
      "Frostbite Falls",
      "Penguinopolis",
      "Doesn't have one",
    ],
    correctAnswer: "Doesn't have one",
  },
  {
    question: "What is the primary language spoken on Mars?",
    choices: ["Martian", "English", "Spanish", "French"],
    correctAnswer: "Martian",
  },
  {
    question: "What is the national sport of Atlantis?",
    choices: [
      "Underwater Basket Weaving",
      "Surfing",
      "Synchronized Swimming",
      "Water Polo",
    ],
    correctAnswer: "Underwater Basket Weaving",
  },
  {
    question: "How many wheels does a unicycle have?",
    choices: ["One", "Two", "Three", "Four"],
    correctAnswer: "One",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionElement.innerText = q.question;
  choicesElement.innerHTML = "";
  for (let choice of q.choices) {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => selectAnswer(button, choice);
    choicesElement.appendChild(button);
  }
}

function selectAnswer(button, choice) {
  const buttons = choicesElement.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

function checkAnswer() {
  const selectedButton = choicesElement.querySelector(".selected");
  if (!selectedButton) {
    feedbackElement.innerText = "Please select an answer.";
    return;
  }

  const choice = selectedButton.innerText;
  const q = quizData[currentQuestion];
  if (choice === q.correctAnswer) {
    score++;
    feedbackElement.innerText = "Correct!";
  } else {
    feedbackElement.innerText = "Wrong!";
  }

  const buttons = choicesElement.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";
  feedbackElement.style.display = "none";
  resultElement.innerText = `Your score: ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", checkAnswer);

loadQuestion();
