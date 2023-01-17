export const decodeMorse = (input, morseCode) => {
    // Matches all non-morse code characters
    if (/[^\.\-\s\/]+/.test(input)) throw new Error("Not valid morsecode!");

    const inputAsArray = input.split(" ");

    const result = inputAsArray
        .reduce((arr, letter) => {
            Object.entries(morseCode).forEach(([key, value]) => {
                if (letter === value) arr.push(key)
            })
            return arr;
        }, [])
        .join("")
        .toLowerCase();

    return result.charAt(0).toUpperCase() + result.slice(1);
}

export const codeIntoMorse = (input, morseCode) => {
    const inputAsArray = input.toUpperCase().split("");

    let validated = inputAsArray.every((item) => {
        let values = Object.keys(morseCode);
        return values.includes(item);
    })

    if (validated) {
        return input.toUpperCase().split("").map((letter) => morseCode[letter]).join(" ").trim();
    } else {
        throw new Error("That has no proper morsecode equivalent, sorry!")
    }
}