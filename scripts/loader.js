export default function loader(flag) {
    const outputTitle = document.querySelector(".output__title");

    if (flag) {
        outputTitle.innerText = "Translating...";
    } else {
        outputTitle.innerText = "Output:"
    }
}