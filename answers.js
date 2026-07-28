/**
 * ==========================================
 * Atminties treniruoklis
 * File: answers.js
 * Release: v1.0.0
 * ==========================================
 */

"use strict";

/* ==========================================
   Parodyti atsakymų ekraną
========================================== */

function showAnswers() {

    stopTimer();

    UI.showScreen("answerScreen");

    showQuestionTitle();

    showAnswerButtons();

}

/* ==========================================
   Klausimo antraštė
========================================== */

function showQuestionTitle() {

    const title = document.getElementById("questionTitle");

    if (!title) return;

    title.textContent = "Kuris paveikslėlis buvo rodomas?";

}

/* ==========================================
   Sugeneruoti atsakymų mygtukus
========================================== */

function showAnswerButtons() {

    const mission = QUESTIONS[game.currentMission];

    const container = document.getElementById("answersContainer");

    if (!container) return;

    container.innerHTML = "";

    // Sukuriame atsakymų kopiją
    const shuffledAnswers = [...mission.answers];

    // Fisher–Yates maišymas
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffledAnswers[i], shuffledAnswers[j]] =
            [shuffledAnswers[j], shuffledAnswers[i]];

    }

    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answerCard";

        button.textContent = answer;

        button.addEventListener("click", () => {

            answerSelected(answer);

        });

        container.appendChild(button);

    });

}

/* ==========================================
   Pasirinktas atsakymas
========================================== */

function answerSelected(answer) {

    const isCorrect = checkAnswer(answer);

    showFeedback(isCorrect);

}

/* ==========================================
   Patikrinti atsakymą
========================================== */

function checkAnswer(answer) {

    const mission = QUESTIONS[game.currentMission];

    return answer === mission.correctAnswer;

}