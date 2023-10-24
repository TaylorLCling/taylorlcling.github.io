// First Auto Generate Button
document.getElementById('btn1-3').addEventListener('click', function() {
    displayRandomNumber(1, 3);
});

// Second Auto Generate Button
document.getElementById('btn1-4').addEventListener('click', function() {
    displayRandomNumber(1, 4);
});

// Random number generation classic
document.getElementById('btnCustomRange').addEventListener('click', function() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    displayRandomNumber(minValue, maxValue);
});

function displayRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('generatedNumber').innerText = randomNumber;

    // Reset the animation
    displayElement.style.animation = 'none';
    // Force a reflow
    void displayElement.offsetWidth;
    // Reapply the animation
    displayElement.style.animation = '';

    displayElement.innerText = randomNumber;

    // Vibrate for 200 milliseconds (only works on mobile devices that support the Vibration API)
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

// Check for saved user preference and apply it
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
}

// Attach the function to a button or other UI element
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);