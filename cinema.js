// Questions database
const questions = {
    cinema: [
        { question: "Who directed 'Inception'?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron"], answer: 0 },
        { question: "What year was 'The Godfather' released?", options: ["1972", "1980", "1990"], answer: 0 },
        { question: "Who played Jack Dawson in 'Titanic'?", options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp"], answer: 0 },
        { question: "Which movie features the quote 'I'll be back'?", options: ["Terminator", "RoboCop", "Predator"], answer: 0 },
        { question: "What is the highest-grossing film of all time?", options: ["Avatar", "Titanic", "Avengers: Endgame"], answer: 0 },
        { question: "Who won Best Director at the Oscars in 2020?", options: ["Bong Joon-ho", "Martin Scorsese", "Sam Mendes"], answer: 0 },
        { question: "What animated film features a character named 'Woody'?", options: ["Toy Story", "Shrek", "Finding Nemo"], answer: 0 },
        { question: "Which film features a dystopian future with flying cars?", options: ["Blade Runner", "The Matrix", "Gattaca"], answer: 0 },
        { question: "Who played Hermione Granger in the Harry Potter series?", options: ["Emma Watson", "Kristen Stewart", "Natalie Portman"], answer: 0 },
        { question: "What is the name of the fictional African country in 'Black Panther'?", options: ["Wakanda", "Zamunda", "Elbonia"], answer: 0 },
        // Add more questions to reach a total of 50 for this category
    ]
};

// Initialize selected questions and answers
let selectedQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = {}; // Object to store the user's selected answers
let correctAnswers = 0; // Variable to store the count of correct answers
let timeLeft = 100; 

window.onload = function() {
    loadQuestions();
    startTimer();
};

function loadQuestions() {
    selectedQuestions = getRandomQuestions('cinema', 5); // Get 5 random questions
    showQuestion(currentQuestionIndex); // Show the first question
}

function startTimer() {
    const timerElement = document.getElementById('time');
    
    const countdown = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Format the time display
        timerElement.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            submitQuiz(); // Automatically submit the quiz when time is up
        } else {
            timeLeft--;
        }
    }, 1000); // Update every second
}

function getRandomQuestions(category, numberOfQuestions) {
    const allQuestions = questions[category];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    return shuffled.slice(0, numberOfQuestions); // Return the first 'numberOfQuestions'
}

function showQuestion(index) {
    const quizQuestionsContainer = document.getElementById('quizQuestions');
    quizQuestionsContainer.innerHTML = ''; // Clear previous question
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.add('hidden'); // Hide alert message initially

    const q = selectedQuestions[index]; // Get the current question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = ` 
        <p>${q.question}</p> 
        ${q.options.map((option, i) => { 
            return `<label><input type="radio" name="question${index}" value="${i}" onchange="recordAnswer(${index}, ${i})">${option}</label><br>`;
        }).join('')}
    `;
    
    quizQuestionsContainer.appendChild(questionDiv);

    // Hide/show buttons based on the question index
    document.getElementById('prevQuestionBtn').classList.toggle('hidden', index === 0);
    document.getElementById('nextQuestionBtn').classList.toggle('hidden', index === selectedQuestions.length - 1);
    document.getElementById('submitQuizBtn').classList.toggle('hidden', index < selectedQuestions.length - 1);
}

function nextQuestion() {
    const q = selectedQuestions[currentQuestionIndex]; // Get the current question

    // Check if an answer has been selected for the current question
    if (selectedAnswers[currentQuestionIndex] === undefined) {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.classList.remove('hidden'); // Show alert message
        alertMessage.innerText = "Please select an answer before moving to the next question."; // Set alert message text
        return; // Prevent moving to the next question
    } else {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.classList.add('hidden'); // Hide alert message if an answer is selected
    }

    // Proceed to the next question if validation passes
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}


function recordAnswer(questionIndex, selectedOption) {
    selectedAnswers[questionIndex] = selectedOption; // Store the selected answer
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function showQuestion(index) {
    const quizQuestionsContainer = document.getElementById('quizQuestions');
    quizQuestionsContainer.innerHTML = ''; // Clear previous question
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.add('hidden'); // Hide alert message initially

    const q = selectedQuestions[index]; // Get the current question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = ` 
        <p>${q.question}</p> 
        ${q.options.map((option, i) => { 
            const checked = selectedAnswers[index] === i ? 'checked' : ''; // Check if this option was previously selected
            return `<label><input type="radio" name="question${index}" value="${i}" onchange="recordAnswer(${index}, ${i})" ${checked}>${option}</label><br>`;
        }).join('')}
    `;
    
    quizQuestionsContainer.appendChild(questionDiv);

    // Hide/show buttons based on the question index
    document.getElementById('prevQuestionBtn').classList.toggle('hidden', index === 0);
    document.getElementById('nextQuestionBtn').classList.toggle('hidden', index === selectedQuestions.length - 1);
    document.getElementById('submitQuizBtn').classList.toggle('hidden', index < selectedQuestions.length - 1);
}


function nextQuestion() {
    const q = selectedQuestions[currentQuestionIndex]; // Get the current question

    // Check if an answer has been selected for the current question
    if (selectedAnswers[currentQuestionIndex] === undefined) {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.classList.remove('hidden'); // Show alert message
        alertMessage.innerText = "Please select an answer before moving to the next question."; // Set alert message text
        return; // Prevent moving to the next question
    } else {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.classList.add('hidden'); // Hide alert message if an answer is selected
    }

    // Proceed to the next question if validation passes
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}


function submitQuiz() {
    correctAnswers = 0; // Reset correct answers count
    for (let i = 0; i < selectedQuestions.length; i++) {
        if (selectedAnswers[i] === selectedQuestions[i].answer) {
            correctAnswers++; // Increment if the answer is correct
        }
    }
    showModal(); // Show modal after quiz submission
}
function goBack() {
    // Redirect to the category page
    window.location.href = 'category.html'; // Adjust this path if necessary
}

function showModal() {
    document.getElementById('scoreModal').style.display = "flex"; // Show the modal
}

function closeModal() {
    document.getElementById('scoreModal').style.display = "none"; // Hide the modal
}

function showScore() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (name && email) {
        const finalScoreMessage = document.getElementById('finalScoreMessage');
        finalScoreMessage.innerText = `Thank you, ${name}! You got ${correctAnswers} out of ${selectedQuestions.length} correct.`;
        document.getElementById('finalScoreContainer').style.display = 'block'; // Show the score display

        // Optionally, disable the input fields and buttons to prevent further submissions
        document.getElementById('userName').disabled = true;
        document.getElementById('userEmail').disabled = true;
        document.querySelector('.modal button').disabled = true;

        // Send data to the PHP script
        fetch('cinema.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, score: correctAnswers }),
        })
        .then(response => response.text())
        .then(data => {
            console.log("Server Response: " + data); // Log server response to the console
        })
        .catch(error => {
            console.error('Error:', error);
        });
        

        closeModal(); // Close the modal after showing the score
    } else {
        alert('Please enter both your name and email.');
    }
}


function closeScore() {
    // Hide the final score container and restart the quiz or perform another action
    window.location.href = 'category.html';
    fun// You can call restartQuiz() or other functions here if needed
}