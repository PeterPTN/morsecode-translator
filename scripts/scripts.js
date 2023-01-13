import { addAboutClass, addAlphabetClass, upvateValues } from "./dom-utils.js";
import { decodeMorse, codeIntoMorse } from "./data-utils.js";

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
            output = decodeMorse(input);
        } else {
            output = codeIntoMorse(input);
        }

        upvateValues(output)
    } catch (error) {
        alert(error);
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

