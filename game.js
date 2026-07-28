/**
 * ==========================================
 * SDL Game Engine
 * File: game.js
 * Version: 0.3.0
 * ==========================================
 */

"use strict";

/* ==========================================
   Žaidimo būsena
========================================== */

const game = {

    currentQuestion: 0,
    score: 0,
    state: "welcome"

};


/* ==========================================
   Paleidimas
========================================== */

document.addEventListener("DOMContentLoaded", initialize);


/* ==========================================
   Inicializacija
========================================== */

function initialize() {

    console.log(`${CONFIG.gameTitle} v${CONFIG.version}`);

    UI.setTitle(CONFIG.gameTitle);

    Progress.update(1);

    document
        .getElementById("startButton")
        .addEventListener("click", startGame);

}


/* ==========================================
   Pradėti žaidimą
========================================== */

function startGame() {

    game.state = "playing";

    game.currentQuestion = 0;

    UI.showScreen("gameScreen");

    showQuestion();

}


/* ==========================================
   Rodyti užduotį
========================================== */

function showQuestion() {

    const question = QUESTIONS[game.currentQuestion];

    document.getElementById("gameScreen").innerHTML = `

        <div class="card">

            <h2>${question.title}</h2>

            <p>${question.instruction}</p>

        </div>

    `;

}