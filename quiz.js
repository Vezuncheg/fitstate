// ── QUIZ DATA ──
const questions = [
  {
    text: "Какая твоя главная цель?",
    options: [
      { text: "Похудеть и убрать лишний жир",        scores: { em: 2, so: 1, me: 1, st: 1 } },
      { text: "Набрать мышечную массу",               scores: { em: 0, so: 0, me: 2, st: 2 } },
      { text: "Улучшить форму и рельеф",              scores: { em: 1, so: 1, me: 2, st: 1 } },
      { text: "Просто быть здоровее и энергичнее",   scores: { em: 1, so: 2, me: 1, st: 1 } },
    ]
  },
  {
    text: "Как давно ты пытаешься достичь этой цели?",
    options: [
      { text: "Только начинаю",                               scores: { em: 0, so: 0, me: 0, st: 2 } },
      { text: "Несколько месяцев — результата почти нет",      scores: { em: 1, so: 1, me: 2, st: 1 } },
      { text: "Больше года — есть результат, но слабый",      scores: { em: 2, so: 1, me: 2, st: 1 } },
      { text: "Пробовал много раз, всегда останавливаюсь",   scores: { em: 1, so: 1, me: 1, st: 3 } },
    ]
  },
  {
    text: "Что чаще всего происходит, когда ты срываешься?",
    options: [
      { text: "Стресс или плохое настроение — и я ем лишнее",  scores: { em: 4, so: 0, me: 0, st: 0 } },
      { text: "В компании или на праздниках не могу отказаться", scores: { em: 0, so: 4, me: 0, st: 0 } },
      { text: "Теряю мотивацию и бросаю через 1–2 недели",     scores: { em: 0, so: 0, me: 0, st: 4 } },
      { text: "Я питаюсь нормально, но вес всё равно стоит",   scores: { em: 0, so: 0, me: 4, st: 0 } },
    ]
  },
  {
    text: "Как ты относишься к тренировкам?",
    options: [
      { text: "Тренируюсь, но результата нет",          scores: { em: 1, so: 0, me: 3, st: 0 } },
      { text: "Хочу, но не нахожу время или мотивацию", scores: { em: 2, so: 1, me: 0, st: 2 } },
      { text: "Начинаю — бросаю — начинаю снова",       scores: { em: 0, so: 0, me: 0, st: 4 } },
      { text: "Почти не тренируюсь",                    scores: { em: 1, so: 2, me: 1, st: 1 } },
    ]
  },
  {
    text: "Как часто ты думаешь «завтра начну»?",
    options: [
      { text: "Почти никогда — я дисциплинирован",      scores: { em: 0, so: 0, me: 2, st: 0 } },
      { text: "Иногда, особенно после срыва",           scores: { em: 2, so: 2, me: 0, st: 1 } },
      { text: "Часто — каждый понедельник новый старт", scores: { em: 1, so: 1, me: 0, st: 4 } },
      { text: "Постоянно, это меня уже раздражает",     scores: { em: 2, so: 0, me: 1, st: 3 } },
    ]
  },
  {
    text: "Какой у тебя режим дня?",
    options: [
      { text: "Сплю 7–8 часов, режим стабильный",       scores: { em: 0, so: 0, me: 1, st: 0 } },
      { text: "Сплю мало, много стресса на работе",     scores: { em: 3, so: 1, me: 1, st: 1 } },
      { text: "Режим хаотичный, ем когда придётся",     scores: { em: 2, so: 1, me: 2, st: 1 } },
      { text: "Работаю ночью или посменно",             scores: { em: 1, so: 0, me: 3, st: 1 } },
    ]
  },
  {
    text: "Что мешает тебе больше всего прямо сейчас?",
    options: [
      { text: "Не знаю с чего начать и что делать",      scores: { em: 1, so: 0, me: 1, st: 3 } },
      { text: "Знаю что делать, но не хватает силы воли", scores: { em: 3, so: 2, me: 0, st: 1 } },
      { text: "Нет поддержки и нужного окружения",       scores: { em: 1, so: 3, me: 0, st: 1 } },
      { text: "Всё перепробовал — ничего не работает",   scores: { em: 0, so: 0, me: 4, st: 1 } },
    ]
  }
];

// ── ARCHETYPES ──
const archetypes = {
  em: {
    emoji: "😰",
    type: "Твой тип",
    title: "Эмоциональный едок",
    desc: "Еда стала твоим способом справляться со стрессом, усталостью и плохим настроением. Ты не слаб — просто у тебя нет нужных инструментов замены этого паттерна.",
    problem: "🔴 Главная проблема: Триггеры срывов управляют тобой, а не ты ими. Без работы с причиной — любая диета временная.",
    fix: "✅ FitState устраняет эмоциональные триггеры и даёт конкретные инструменты замены — ты перестаёшь есть от стресса.",
    tgParam: "emotional_eater"
  },
  so: {
    emoji: "🍕",
    type: "Твой тип",
    title: "Социальный заложник",
    desc: "Дома ты держишься отлично, но любое застолье, праздник или компания — и всё рушится. Тебе сложно отказывать, и ты не знаешь как вести себя в социальных ситуациях.",
    problem: "🔴 Главная проблема: Социальное давление и отсутствие стратегии «в компании» сводят на нет весь прогресс.",
    fix: "✅ FitState даёт конкретные стратегии поведения в любой ситуации — ты начинаешь контролировать выбор, а не обстоятельства.",
    tgParam: "social_hostage"
  },
  me: {
    emoji: "⚖️",
    type: "Твой тип",
    title: "Метаболический скептик",
    desc: "Ты ешь мало, занимаешься, делаешь всё «правильно» — но вес стоит или растёт. Кажется, что с твоим метаболизмом что-то не так.",
    problem: "🔴 Главная проблема: Скрытый профицит калорий или замедленный обмен из-за хронического недоедания. Стандартные подходы не работают.",
    fix: "✅ FitState делает точный расчёт под твои параметры и перезапускает метаболизм правильным дефицитом.",
    tgParam: "metabolic_skeptic"
  },
  st: {
    emoji: "🔁",
    type: "Твой тип",
    title: "Стартер-стопер",
    desc: "Твоя мотивация в начале огромная — ты готов горы свернуть. Но через 10–14 дней она испаряется, и всё начинается заново. Ты пробовал много раз.",
    problem: "🔴 Главная проблема: Ты работаешь на силе воли — а она конечна. Без системы и внешней поддержки срыв неизбежен.",
    fix: "✅ FitState заменяет силу воли системой: ежедневные касания, куратор, сообщество — ты просто не можешь выпасть.",
    tgParam: "starter_stopper"
  }
};

// ── STATE ──
let current = 0;
let answers = new Array(questions.length).fill(null);
const scores = { em: 0, so: 0, me: 0, st: 0 };

// Telegram bot username — замени на свой
const TG_BOT = "fitstate_quiz_bot";

// ── INIT ──
function init() {
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  const container = document.getElementById("questionsContainer");
  const pct = Math.round((current / questions.length) * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("stepLabel").textContent = `Вопрос ${current + 1} из ${questions.length}`;
  document.getElementById("prevBtn").style.display = current > 0 ? "inline-flex" : "none";

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.disabled = answers[current] === null;
  nextBtn.textContent = current === questions.length - 1 ? "Получить результат →" : "Далее →";

  container.innerHTML = `
    <div class="question">
      <p class="question__text">${q.text}</p>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option ${answers[current] === i ? "selected" : ""}" onclick="selectOption(${i})">
            <div class="option__circle"></div>
            <span>${opt.text}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function selectOption(idx) {
  answers[current] = idx;
  document.querySelectorAll(".option").forEach((el, i) => {
    el.classList.toggle("selected", i === idx);
  });
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  if (answers[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

// ── CALCULATE RESULT ──
function calcResult() {
  const totals = { em: 0, so: 0, me: 0, st: 0 };
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    const s = questions[qIdx].options[ansIdx].scores;
    Object.keys(s).forEach(k => totals[k] += s[k]);
  });
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

// ── SHOW RESULT ──
function showResult() {
  const archKey = calcResult();
  const arch = archetypes[archKey];
  const tgUrl = `https://t.me/${TG_BOT}?start=${arch.tgParam}`;

  document.getElementById("quizBox").style.display = "none";
  const resultEl = document.getElementById("quizResult");
  resultEl.style.display = "block";

  resultEl.innerHTML = `
    <div class="result__emoji">${arch.emoji}</div>
    <div class="result__type">${arch.type}</div>
    <h2 class="result__title">${arch.title}</h2>
    <p class="result__desc">${arch.desc}</p>
    <div class="result__problem">${arch.problem}</div>
    <div class="result__fix">${arch.fix}</div>
    <p class="result__cta-label">
      👇 Перейди в Telegram-бот — узнай, каким ты будешь через 2 месяца по программе FitState
    </p>
    <a class="result__tg" href="${tgUrl}" target="_blank">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.018 9.51c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.918 14.42l-2.95-.924c-.64-.203-.654-.64.136-.948l11.528-4.445c.535-.194 1.002.131.93.944z"/>
      </svg>
      Узнать результат за 2 месяца
    </a>
    <p style="margin-top:20px;font-size:13px;color:var(--muted);">
      Бесплатно · Результат сохранится в боте
    </p>
  `;

  resultEl.scrollIntoView({ behavior: "smooth", block: "center" });

  // Save to localStorage for reference
  localStorage.setItem("fitstate_archetype", archKey);
  localStorage.setItem("fitstate_archetype_name", arch.title);
}

// ── START ──
document.addEventListener("DOMContentLoaded", init);
