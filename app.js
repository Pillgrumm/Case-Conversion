// app.js
document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");

    const sentenceCase = (text) => {
        return text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    };

    const lowerCase = (text) => text.toLowerCase();

    const upperCase = (text) => text.toUpperCase();

    const capitalizedCase = (text) => {
        return text
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());
    };

    const alternatingCase = (text) => {
        return text
            .split("")
            .map((char, index) =>
                index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
            )
            .join("");
    };

    const inverseCase = (text) => {
        return text
            .split("")
            .map((char) =>
                char === char.toUpperCase()
                    ? char.toLowerCase()
                    : char.toUpperCase()
            )
            .join("");
    };

    const buttons = {
        "sentence-case": sentenceCase,
        "lower-case": lowerCase,
        "upper-case": upperCase,
        "capitalized-case": capitalizedCase,
        "alternating-case": alternatingCase,
        "inverse-case": inverseCase,
    };

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            const converter = buttons[button.id];
            const input = inputText.value;
            outputText.value = converter(input);
        });
    });
});
