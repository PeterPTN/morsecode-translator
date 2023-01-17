import {
    addAboutClass,
    addAlphabetClass,
    upvateValues, 
    clearInputs
} from "./dom-utils.js";

import { decodeMorse, codeIntoMorse } from "./data-utils.js";

const morseCode = {
    " ": "/",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    "¿": "..-.-",
    "¡": "--...-"
};

const switchBtn = document.querySelector("#switchType");
switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("morse");
})

const form = document.querySelector(".morse__form");
form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();
        const formData = new FormData(form);
        let input;
        let output;

        for (const [key, value] of formData) {
            input = value;
        }

        if (input.length === 0) {
            throw new Error("No input was found");
        }

        if (switchBtn.className == "morse") {
            output = decodeMorse(input, morseCode);
        } else {
            output = codeIntoMorse(input, morseCode);
        }

        upvateValues(output)
    } catch (error) {
        upvateValues(error)
    }
})

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
    addAboutClass();

    setTimeout(() => {
        document.addEventListener("click", (e) => {
            if (e.target.className.includes("modal active")) {
                addAboutClass();
            }
        })
    }, 500)
})

const alphaBtn = document.querySelector("#alphabetBtn");
alphaBtn.addEventListener("click", () => {
    addAlphabetClass();
})

const clearBtn = document.querySelector(".morse__form-buttons-clear");
clearBtn.addEventListener("click", () => {
    clearInputs();
})


