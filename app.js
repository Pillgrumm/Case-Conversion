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
            if (converter) {
                outputText.value = converter(input);
            }
        });
    });

    // Copy Text functionality with subtle notification
    const copyButton = document.getElementById("copy-text");
    const container = document.querySelector(".container");

    copyButton.addEventListener("click", function () {
        outputText.select();
        document.execCommand("copy");
        
        // Create notification
        const notification = document.createElement("div");
        notification.innerText = "Copied!";
        notification.classList.add("notification");
        container.appendChild(notification);
        
        // Remove notification after 2 seconds
        setTimeout(() => {
            notification.remove();
        }, 2000);
    });

    // Reset functionality
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
        inputText.value = ""; // Clear input text
        outputText.value = ""; // Clear output text
    });
});
