import { upvateValues } from "./update-dom.js";
import decodeMorse from "./decode-morse.js";
import codeIntoMorse from "./code-into-morse.js";
import loader from "./loader.js";

const form = document.querySelector(".morse__form");

form.addEventListener("submit", (event) => {
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

    if (/[A-Za-z]/.test(input)) {
        output = codeIntoMorse(input);
    } else {
        output = decodeMorse(input);
    }

    upvateValues(output)
})

const clearBtn = document.querySelector(".morse__form-buttons-clear");

clearBtn.addEventListener("click", () => {

})
