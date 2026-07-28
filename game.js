/**
 * ==========================================
 * SDL Game Engine
 * File: game.js
 * Version: 0.1.0
 * ==========================================
 */

"use strict";

/* Žaidimo būsena */

const game = {

    currentQuestion: 0,
    score: 0,
    state: "welcome"

};


/* Paleidžiama užkrovus puslapį */

document.addEventListener("DOMContentLoaded", init);


/* Inicializacija */

function init() {

    console.log(CONFIG.gameTitle + " v" + CONFIG.version);

    document.getElementById("game-title").textContent = CONFIG.gameTitle;

    document
        .getElementById("startButton")
        .addEventListener("click", startGame);

}


/* Pradėti žaidimą */

function startGame() {

    game.state = "playing";

    document
        .getElementById("welcomeScreen")
        .classList.remove("active");

    document
        .getElementById("gameScreen")
        .classList.add("active");

    console.log("Žaidimas pradėtas");

}