export const addLatency = (output = "default") => {
    return (output.length * 5) + 1000;
}

export const loader = (flag) => {
    const outputTitle = document.querySelector(".output__title");

    if (flag) {
        outputTitle.innerText = "Translating...";
    } else {
        outputTitle.innerText = "Output:"
    }
}

export const upvateValues = (output) => {
    loader(true);
    const outputElement = document.querySelector(".output__area");
    let latency;
    outputElement.textContent = "";

    if (typeof output === "string") {
        latency = addLatency(output);
    } else {
        latency = addLatency();
    }

    setTimeout(() => {
        outputElement.textContent = output
        loader(false);
    }, latency)
}

export const addAboutClass = () => {
    const blackout = document.querySelector(".blackout");
    const modal = document.querySelector(".modal");
    blackout.classList.toggle("active");
    modal.classList.toggle("active");
}

export const addAlphabetClass = () => {
    const alphabetAside = document.querySelector(".alphabet");
    alphabetAside.classList.toggle("active");
}

export const clearInputs = () => {
    const outputElement = document.querySelector(".output__area");
    outputElement.textContent = "";
}

