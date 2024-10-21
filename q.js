// Questions database
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
    ],
    socialMedia: [
        { question: "Which social media platform is known for its 140-character limit?", options: ["Twitter", "Facebook", "Instagram"], answer: 0 },
        { question: "Which app is primarily used for sharing images and short videos?", options: ["Instagram", "Snapchat", "TikTok"], answer: 0 },
        { question: "What year was Facebook launched?", options: ["2004", "2006", "2010"], answer: 0 },
        { question: "Which social media platform allows 10-minute video uploads as of 2021?", options: ["YouTube", "Facebook", "Instagram"], answer: 0 },
        { question: "What does 'DM' stand for in social media?", options: ["Direct Message", "Daily Message", "Dynamic Messaging"], answer: 0 },
        { question: "Which platform is known for its disappearing messages?", options: ["Snapchat", "Twitter", "LinkedIn"], answer: 0 },
        { question: "Who founded Facebook?", options: ["Mark Zuckerberg", "Steve Jobs", "Bill Gates"], answer: 0 },
        { question: "Which platform is known for professional networking?", options: ["LinkedIn", "Instagram", "Reddit"], answer: 0 },
        { question: "What is the main purpose of Pinterest?", options: ["Sharing recipes", "Saving ideas", "Networking"], answer: 1 },
        { question: "What is the maximum number of characters for a tweet as of 2021?", options: ["280", "140", "320"], answer: 0 },
        // Add more questions to reach a total of 50 for this category
    ],
    generalKnowledge: [
        { question: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul"], answer: 0 },
        { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Venus"], answer: 0 },
        { question: "Who wrote 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain"], answer: 0 },
        { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], answer: 0 },
        { question: "What is the main ingredient in bread?", options: ["Flour", "Sugar", "Salt"], answer: 0 },
        { question: "What is the currency of the United States?", options: ["Dollar", "Euro", "Pound"], answer: 0 },
        { question: "What gas do plants absorb from the atmosphere?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen"], answer: 0 },
        { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"], answer: 0 },
        { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga"], answer: 0 },
        { question: "How many continents are there?", options: ["7", "5", "6"], answer: 0 },
        // Add more questions to reach a total of 50 for this category
    ],
    food: [
        { question: "What is the main ingredient in pizza?", options: ["Dough", "Rice", "Pasta"], answer: 0 },
        { question: "Which fruit is known for having seeds on the outside?", options: ["Strawberry", "Kiwi", "Banana"], answer: 0 },
        { question: "What is sushi traditionally wrapped in?", options: ["Seaweed", "Rice", "Lettuce"], answer: 0 },
        { question: "What ingredient gives curry its yellow color?", options: ["Turmeric", "Saffron", "Paprika"], answer: 0 },
        { question: "What type of pasta is shaped like little ears?", options: ["Orecchiette", "Fusilli", "Penne"], answer: 0 },
        { question: "What is the primary ingredient in hummus?", options: ["Chickpeas", "Lentils", "Beans"], answer: 0 },
        { question: "What is a common seasoning used in Italian cooking?", options: ["Basil", "Cumin", "Oregano"], answer: 0 },
        { question: "What type of cheese is used in a traditional Greek salad?", options: ["Feta", "Cheddar", "Mozzarella"], answer: 0 },
        { question: "What is the main ingredient in chocolate?", options: ["Cocoa", "Vanilla", "Sugar"], answer: 0 },
        { question: "Which country is famous for the dish 'Paella'?", options: ["Spain", "Italy", "Mexico"], answer: 0 },
        // Add more questions to reach a total of 50 for this category
    ]
};

// Ensure you have a total of 50 questions for each category


let selectedQuestions = [];

// Automatically transition to category page after fade-out
window.onload = function() {
    // Show the categories after the fade-in and fade-out animation (3 seconds total)
    setTimeout(() => {
        document.getElementById('logoPage').classList.add('hidden');
        document.getElementById('categoryPage').classList.remove('hidden');
    }, 3000);  // 3 seconds for the fade-in and fade-out process
};

let currentQuestionIndex = 0;

function getRandomQuestions(category, numberOfQuestions) {
    const allQuestions = questions[category];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random()); // Shuffle questions
    return shuffled.slice(0, numberOfQuestions); // Return the first 'numberOfQuestions' from the shuffled array
}



function loadQuestions(category) {
    lastSelectedCategory = category;
    
    selectedQuestions = getRandomQuestions(category, 5);
    const quizPage = document.getElementById('quizPage');
    
    // Set the background image based on the selected category
    switch (category) {
        case 'cinema':
            quizPage.style.backgroundImage = "url('1.jpg')";
            break;
        case 'socialMedia':
            quizPage.style.backgroundImage = "url('file:///path-to-socialmedia-background.jpg')";
            break;
        case 'generalKnowledge':
            quizPage.style.backgroundImage = "url('file:///path-to-generalknowledge-background.jpg')";
            break;
        case 'food':
            quizPage.style.backgroundImage = "url('file:///path-to-food-background.jpg')";
            break;
        default:
            quizPage.style.backgroundImage = "none"; // Default background if no image found
            break;
    }

    // Proceed to the quiz page
    document.getElementById('categoryPage').classList.add('hidden');
    document.getElementById('quizCategory').innerText = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('quizPage').classList.remove('hidden');

    currentQuestionIndex = 0; // Reset the question index
    showQuestion(currentQuestionIndex); // Show the first question
}


function showQuestion(index) {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear previous question

    const q = selectedQuestions[index]; // Get the current question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
        <p>${q.question}</p>
        ${q.options.map((option, i) => `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label><br>`).join('')}
    `;
    questionsContainer.appendChild(questionDiv);

    // Show/hide navigation buttons
    document.getElementById('prevQuestionBtn').classList.toggle('hidden', index === 0);
    document.getElementById('nextQuestionBtn').classList.toggle('hidden', index === selectedQuestions.length - 1);
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// Function to submit quiz and show results (remains unchanged)
function submitQuiz() {
    let correctAnswers = 0;

    selectedQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            correctAnswers++;
        }
    });

    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('resultPage').classList.remove('hidden');
    document.getElementById('resultText').innerText = `You got ${correctAnswers} out of ${selectedQuestions.length} correct.`;
}

// Function to restart the quiz (remains unchanged)
function restartQuiz() {
    document.getElementById('resultPage').classList.add('hidden');
    document.getElementById('logoPage').classList.remove('hidden');

    // Re-initiate fade-in and fade-out process
    setTimeout(() => {
        document.getElementById('logoPage').classList.add('hidden');
        document.getElementById('categoryPage').classList.remove('hidden');
    }, 3000);
}
