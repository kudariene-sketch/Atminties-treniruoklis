/**
 * ==========================================
 * Atminties treniruoklis
 * File: feedback.js
 * Release: v1.1.0
 * ==========================================
 */

"use strict";

/* ==========================================
   Parodyti grįžtamąjį ryšį
========================================== */

function showFeedback(isCorrect) {

    UI.showScreen("feedbackScreen");

    const icon = document.getElementById("feedbackIcon");
    const title = document.getElementById("feedbackTitle");
    const message = document.getElementById("feedbackMessage");

    if (isCorrect) {

        game.score++;

        icon.textContent = "😊";
        title.textContent = "Teisingai!";
        message.textContent = "Puikiai įsiminėte paveikslėlį.";

    } else {

        icon.textContent = "❌";
        title.textContent = "Neteisingai";
        message.textContent = "Kitą kartą pavyks geriau!";

    }

    const nextButton = document.getElementById("nextButton");

    if (nextButton) {
        nextButton.onclick = nextMission;
    }

}

/* ==========================================
   Kita misija
========================================== */

function nextMission() {

    game.currentMission++;

    if (game.currentMission >= game.totalMissions) {

        finishGame();
        return;

    }

    loadMission();

    UI.showScreen("gameScreen");

}

/* ==========================================
   Žaidimo pabaiga
========================================== */

function finishGame() {

    UI.showScreen("finishScreen");

    const finishTitle = document.querySelector("#finishScreen h2");
    const finishText = document.querySelector("#finishScreen p");

    if (finishTitle) {
        finishTitle.textContent = `Surinkai ${game.score} iš ${game.totalMissions}`;
    }

    if (finishText) {

        if (game.score === game.totalMissions) {
            finishText.textContent = "Puiki atmintis! Tu atlikai visas užduotis.";
        } else if (game.score >= Math.ceil(game.totalMissions * 0.7)) {
            finishText.textContent = "Labai gerai! Pabandyk dar kartą ir pagerink rezultatą.";
        } else {
            finishText.textContent = "Puiki pradžia! Treniruok atmintį ir bandyk dar kartą.";
        }

    }

    const restartButton = document.getElementById("restartButton");

    if (restartButton) {
        restartButton.onclick = startGame;
    }

}