import addLatency from "./add-latency.js";
import loader from "./loader.js";

export const upvateValues = (output) => {
    loader(true);
    const outputElement = document.querySelector(".output__area");
    outputElement.textContent = "";
    const latency = addLatency(output);

    setTimeout(() => {
        outputElement.textContent = output
        loader(false);
    }, latency)
}