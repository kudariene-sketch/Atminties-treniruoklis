/**
 * ==========================================
 * SDL Game Engine
 * File: ui.js
 * Version: 0.1.0
 * ==========================================
 */

"use strict";

const UI = {

    showScreen(screenId) {

        document
            .querySelectorAll(".screen")
            .forEach(screen => screen.classList.remove("active"));

        document
            .getElementById(screenId)
            .classList.add("active");

    },

    setTitle(title) {

        document.getElementById("game-title").textContent = title;

    }

};