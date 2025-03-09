// Quiz Questions and Answers
const questions = [
    {
        question: "What is climate change?",
        options: ["A) Ensure access to affordable and clean energy", "B) A long-term shifts in temperatures and weather patterns", "C) End poverty in all its forms", "D) Promote sustained economic growth"],
        correctAnswer: "B"
    },
    {
        question: "Which SDG focuses on climate change?",
        options: ["A) SDG 1", "B) SDG 13", "C) SDG 5", "D) SDG 10"],
        correctAnswer: "B"
    },
    {
        question: "What is the main point of climate change?",
        options: ["A) End hunger", "B) Achieve universal health coverage", "C) Provide clean water and sanitation", "D) As greenhouse gas emissions blanket the Earth, they trap the sun's heat."],
        correctAnswer: "D"
    },
    {
        question: "How to prevent climate change?",
        options: ["A) Save energy", "B) Turn on lights always", "C) You cannot prevent it", "D) Do not reuse energy"],
        correctAnswer: "A"
    },
    {
        question: "What is one of the effects of climate change?",
        options: ["A) Road accident", "B) High school fights", "C) Hotter temperature", "D) None of the above"],
        correctAnswer: "C"
    }
];

// Variables to keep track of quiz state
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Function to display the current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.removeEventListener("click", handleOptionClick); // Remove previous listeners
        option.addEventListener("click", handleOptionClick);  // Add new listener for the current question
    });
}

// Function to handle answer check
function handleOptionClick(event) {
    const selectedIndex = Array.from(optionsElements).indexOf(event.target); // Get the index of the selected option
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = ["A", "B", "C", "D"].indexOf(currentQuestion.correctAnswer); // Convert correctAnswer letter to index

    if (selectedIndex === correctIndex) {
        score++;
        event.target.style.backgroundColor = "green";  // Correct answer indicator
    } else {
        event.target.style.backgroundColor = "red";  // Incorrect answer indicator
    }
    disableOptions();
}

// Disable the options after answering
function disableOptions() {
    optionsElements.forEach(option => option.removeEventListener("click", handleOptionClick));
}

// Show next question
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        resetOptions();
        displayQuestion();
    }
});

// Show previous question
prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resetOptions();
        displayQuestion();
    }
});

// Submit quiz and display score
submitButton.addEventListener("click", () => {
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
    submitButton.disabled = true;  // Disable submit button after submission
});

// Reset options' styles before showing the next question
function resetOptions() {
    optionsElements.forEach(option => {
        option.style.backgroundColor = "";  // Reset the background color
    });
}

// Initial display
displayQuestion();
