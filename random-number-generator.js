document.getElementById('btn1-3').addEventListener('click', function() {
    displayRandomNumber(1, 3);
});

document.getElementById('btn1-4').addEventListener('click', function() {
    displayRandomNumber(1, 4);
});

document.getElementById('btnCustomRange').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    displayRandomNumber(minValue, maxValue);
});

function displayRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('generatedNumber').innerText = randomNumber;
}
