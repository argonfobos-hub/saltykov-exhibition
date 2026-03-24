// Генератор цитат
const quotes = [
    "«Премудрый пискарь» — о страхе жить",
    "«История одного города» — сатира на власть и глупость",
    "«Господа Головлёвы» — о нравственном разложении дворянства",
    "«Медведь на воеводстве» — о произволе чиновников",
    "«Карась-идеалист» — о мечтателях в жестоком мире",
    "«Орёл-меценат» — о лицемерной благотворительности",
    "«Либерал» — о пустых реформаторах",
    "«Праздный разговор» — о бессмысленных спорах интеллигенции"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').textContent = `"${quotes[randomIndex]}"`;
}

// Модальное окно для книг
const bookData = {
    history: {
        title: "История одного города",
        description: "Сатирический роман о вымышленном городе Глупове и его правителях. Через гротеск и абсурд Щедрин показывает пороки российской государственности и общества."
    },
    gospoda: {
        title: "Господа Головлёвы",
        description: "Семейная хроника о вырождении дворянского рода. Центральная фигура — Иудушка Головлёв, ставший символом лицемерия и нравственной пустоты."
    },
    tales: {
        title: "Сказки для детей изрядного возраста",
        description: "Цикл сатирических сказок, где под видом детских историй Щедрин критикует социальные пороки: страх жизни, бюрократию, лицемерие."
    }
};

function showBookModal(bookId) {
    const modal = document.getElementById('book-modal');
    document.getElementById('modal-title').textContent = bookData[bookId].title;
    document.getElementById('modal-description').textContent = bookData[bookId].description;
    modal.classList.remove('hidden');
}

function closeBookModal() {
    document.getElementById('book-modal').classList.add('hidden');
}

// Закрытие модального окна по клику вне его
window.onclick = function(event) {
    const modal = document.getElementById('book-modal');
    if (event.target === modal) {
        closeBookModal();
    }
}

// Тест: Какой вы герой Щедрина?
const quizQuestions = [
    {
        question: "Как вы относитесь к риску?",
        options: [
            "Избегаю любой опасности",
            "Просчитываю все варианты",
            "Действую решительно",
            "Наблюдаю со стороны"
        ]
    },
    {
        question: "Что для вас важнее всего?",
        options: [
            "Безопасность и покой",
            "Власть и влияние",
            "Идеалы и принципы",
            "Личная выгода"
        ]
    },
    {
        question: "Как вы ведёте споры?",
        options: [
            "Избегаю конфликтов",
            "Говорю много, но по делу",
            "Настаиваю на своём",
            "Лицемерю и подстраиваюсь"
        ]
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
    document.getElementById('quiz-next').classList.add('hidden');
    document.getElementById('quiz-restart').classList.remove('hidden');
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-options').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-next').classList.remove('hidden');
    document.getElementById('quiz-restart').classList.add('hidden');
    loadQuestion();
}

// Плавная прокрутка
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});