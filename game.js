/**
 * ==========================================
 * Atminties treniruoklis
 * File: game.js
 * Release: RC-1
 * ==========================================
 */

"use strict";

/* ==========================================
   Žaidimo būsena
========================================== */

const game = {
    currentMission: 0,
    totalMissions: QUESTIONS.length,
    score: 0
};

/* ==========================================
   Paleidimas
========================================== */

document.addEventListener("DOMContentLoaded", initGame);

/* ==========================================
   Inicializacija
========================================== */

function initGame() {

    console.log("Atminties treniruoklis paleistas");

    UI.showScreen("welcomeScreen");

    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", startGame);
    }

}

/* ==========================================
   Pradėti žaidimą
========================================== */

function startGame() {

    game.currentMission = 0;
    game.score = 0;

    loadMission();

    UI.showScreen("gameScreen");

}

/* ==========================================
   Įkelti misiją
========================================== */

function loadMission() {

    const mission = QUESTIONS[game.currentMission];

    updateMissionCounter();

    showInstruction(mission.instruction);

    showMemoryItems(mission.memoryItems);

    startTimer();

}

/* ==========================================
   Misijos numeris
========================================== */

function updateMissionCounter() {

    const missionCounter = document.getElementById("missionCounter");

    if (!missionCounter) return;

    missionCounter.textContent =
        `Misija ${game.currentMission + 1} iš ${game.totalMissions}`;

}

/* ==========================================
   Instrukcija
========================================== */

function showInstruction(text) {

    const instruction = document.getElementById("instruction");

    if (!instruction) return;

    instruction.textContent = text;

}

/* ==========================================
   Parodyti paveikslėlius
========================================== */

function showMemoryItems(items) {

    const container = document.getElementById("imageContainer");

    if (!container) return;

    container.innerHTML = "";

    items.forEach(item => {

        const card = document.createElement("div");

        card.className = "imageCard";

        card.textContent = item;

        container.appendChild(card);

    });

}