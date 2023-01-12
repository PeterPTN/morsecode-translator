export default function codeIntoMorse(input) {
    const morseCode = {
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
        "Z": "--.."
    }

    const inputAsArray = input.toUpperCase().split("");

    // console.log(inputAsArray);
    const result = inputAsArray
        .reduce((result, letter) => {

            // Forward slash === Space
            if (letter == " ") result.push("/");
            Object.entries(morseCode).forEach(([key, value]) => {
                if (letter === key) result.push(value);
            })

            return result;
        }, [])
        .join(" ")
        .toLowerCase();

    return result;
}