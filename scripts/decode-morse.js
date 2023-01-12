export default function decodeMorse(input) {
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

    const inputAsArray = input.split(" ");

    const result = inputAsArray
        .reduce((result, letter) => {

            // Forward slash === Space
            if (letter == "/") result.push(" ");
            else if (/['!?]/.test(letter)) result.push(letter); 
            Object.entries(morseCode).forEach(([key, value]) => {
                if (letter === value) result.push(key)
            })

            return result;
        }, [])
        .join("")
        .toLowerCase();

    return result;
}