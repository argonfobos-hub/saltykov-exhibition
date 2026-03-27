// ===== МОДАЛЬНЫЕ ОКНА ТАЙМЛАЙНА =====
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event, modal) {
    if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeModalBtn(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== МОДАЛЬНЫЕ ОКНА КНИГ =====
function openBookModal(bookId) {
    document.getElementById(bookId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookModal(event, modal) {
    if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeBookModalBtn(bookId) {
    document.getElementById(bookId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== ЗАКРЫТИЕ ПО ESCAPE =====
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== ГЕНЕРАТОР ЦИТАТ =====
// === ГЕНЕРАТОР ЦИТАТ ===
var quotes = [
    "Многие склонны путать понятия: «Отечество» и «Ваше превосходительство»",
    "Российская власть должна держать свой народ в состоянии постоянного изумления",
    "Чего-то хотелось: не то конституции, не то севрюжины с хреном, не то кого-нибудь ободрать.",
    "Самые плохие законы — в России, но этот недостаток компенсируется тем, что их никто не выполняет",
    "Литература и пропаганда — это одно и то же",
    "Дозволяется при встрече с начальством вежливыми и почтительными телодвижениями выражать испытываемое при сем удовольствие",
    "Во всех странах железные дороги для передвижения служат, а у нас сверх того и для воровства",
    "Если я усну и проснусь через сто лет и меня спросят, что сейчас происходит в России, я отвечу: пьют и воруют...",
    "У нас нет середины: либо в рыло, либо ручку пожалуйте!",
    "— Mon cher, — говаривал Крутицын, — разделите сегодня все поровну, а завтра неравенство все-таки вступит в свои права.",
    "Для того чтобы воровать с успехом, нужно обладать только проворством и жадностью. Жадность в особенности необходима, потому что за малую кражу можно попасть под суд.",
    "...Крупными буквами печатались слова совершенно несущественные, а все существенное изображалось самым мелким шрифтом.",
    "Всякому безобразию своё приличие."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = quotes[randomIndex];
}

// ===== ТЕСТ =====
const quizQuestions = [
    {
        question: "Как вы относитесь к риску?",
        options: ["Избегаю любой опасности", "Просчитываю все варианты", "Действую решительно", "Наблюдаю со стороны"]
    },
    {
        question: "Что для вас важнее всего?",
        options: ["Безопасность и покой", "Власть и влияние", "Идеалы и принципы", "Личная выгода"]
    },
    {
        question: "Как вы ведёте споры?",
        options: ["Избегаю конфликтов", "Говорю много, но по делу", "Настаиваю на своём", "Лицемерю и подстраиваюсь"]
    }
];

let currentQuestion = 0;
let answers = [];

function loadQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showResult();
        return;
    }
    
    const q = quizQuestions[currentQuestion];
    document.getElementById('quiz-question').textContent = `Вопрос ${currentQuestion + 1}: ${q.question}`;
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    answers.push(index);
    currentQuestion++;
    loadQuestion();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const results = [
        "🐟 Премудрый пискарь — вы осторожны и предпочитаете не высовываться",
        "🦊 Иудушка Головлёв — вы хитры и расчётливы",
        "🦅 Орёл-меценат — вы любите показную благотворительность",
        "🐻 Медведь-воевода — вы склонны к произволу и власти"
    ];
    
    const randomResult = results[Math.floor(Math.random() * results.length)];
    
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-options').classList.add('hidden');
    document.getElementById('quiz-result').textContent = randomResult;
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('quiz-restart').classList.remove('hidden');
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-options').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-restart').classList.add('hidden');
    loadQuestion();
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
