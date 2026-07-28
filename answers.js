/**
 * ==========================================
 * Atminties treniruoklis
 * File: answers.js
 * Release: v1.0.0
 * ==========================================
 */

"use strict";

/* ==========================================
   Parodyti atsakymų mygtukus
========================================== */

function showAnswerButtons() {

    const mission = QUESTIONS[game.currentMission];

    const container = document.getElementById("answersContainer");

    if (!container) return;

    container.innerHTML = "";

    mission.answers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answerCard";

        button.textContent = answer;

        button.addEventListener("click", function () {

            answerSelected(answer);

        });

        container.appendChild(button);

    });

}

/* ==========================================
   Pasirinktas atsakymas
========================================== */

function answerSelected(answer) {

    const correct = checkAnswer(answer);

    if (correct) {

        console.log("Teisingas atsakymas");

    } else {

        console.log("Neteisingas atsakymas");

    }

}

/* ==========================================
   Atsakymo tikrinimas
========================================== */

function checkAnswer(answer) {

    const mission = QUESTIONS[game.currentMission];

    return answer === mission.correctAnswer;

}