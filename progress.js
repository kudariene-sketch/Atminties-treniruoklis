/**
 * ==========================================
 * SDL Game Engine
 * File: progress.js
 * Version: 0.1.0
 * ==========================================
 */

"use strict";

const Progress = {

    update(current) {

        const total = CONFIG.totalQuestions;

        // Tekstas (pvz. 3 / 10)
        document.getElementById("progress-text").textContent =
            `${current} / ${total}`;

        // Progreso juosta
        const percent = (current / total) * 100;

        document.querySelector(".progress-fill").style.width =
            `${percent}%`;

    }

};