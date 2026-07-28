/**
 * ==========================================
 * Atminties treniruoklis
 * File: feedback.js
 * Release: v1.0.0
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

        if (icon) {
            icon.textContent = "😊";
        }

        if (title) {
            title.textContent = "Teisingai!";
        }

        if (message) {
            message.textContent = "Puikiai įsiminėte paveikslėlį.";
        }

    } else {

        if (icon) {
            icon.textContent = "❌";
        }

        if (title) {
            title.textContent = "Neteisingai";
        }

        if (message) {
            message.textContent = "Bandykite prisiminti dar atidžiau.";
        }

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

    console.log(
        `Rezultatas: ${game.score} iš ${game.totalMissions}`
    );

}