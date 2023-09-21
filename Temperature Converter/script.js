document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const resultText = document.getElementById("resultText");

    convertBtn.addEventListener("click", function () {
        const celsiusInput = document.getElementById("celsius");
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            resultText.innerText = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
        } else {
            resultText.innerText = "Please enter a valid temperature in Celsius.";
        }
    });
});
