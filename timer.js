/**
 * ==========================================
 * Atminties treniruoklis
 * File: timer.js
 * Release: v1.0.0
 * ==========================================
 */

"use strict";

let timerValue = 5;
let timerInterval = null;

/**
 * Paleidžia laikmatį
 */
function startTimer() {

    stopTimer();

    timerValue = 5;

    updateTimer();

    timerInterval = setInterval(() => {

        timerValue--;

        updateTimer();

        if (timerValue <= 0) {

            stopTimer();

            if (typeof showAnswers === "function") {
                showAnswers();
            }

        }

    }, 1000);

}

/**
 * Sustabdo laikmatį
 */
function stopTimer() {

    if (timerInterval !== null) {

        clearInterval(timerInterval);

        timerInterval = null;

    }

}

/**
 * Atnaujina laikmačio rodymą
 */
function updateTimer() {

    const timer = document.getElementById("timer");

    if (timer) {
        timer.textContent = timerValue;
    }

}