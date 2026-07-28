/**
 * ==========================================
 * Atminties treniruoklis
 * File: ui.js
 * Release: v0.4.0A
 * ==========================================
 */

"use strict";

const UI = {

    /**
     * Parodo vieną ekraną
     */
    showScreen(screenId) {

        // Paslepiame visus ekranus
        document
            .querySelectorAll(".screen")
            .forEach(screen => {
                screen.classList.remove("active");
            });

        // Parodome pasirinktą
        const screen = document.getElementById(screenId);

        if (screen) {
            screen.classList.add("active");
        }

    },

    /**
     * Pakeičia žaidimo pavadinimą
     */
    setTitle(title) {

        const gameTitle = document.getElementById("gameTitle");

        if (gameTitle) {
            gameTitle.textContent = title;
        }

    }

};