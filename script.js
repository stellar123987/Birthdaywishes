
const birthdayBox = document.getElementById('birthday-box');
const countdown = document.getElementById('countdown');
const countdownTimer = document.getElementById('countdown-timer');
const cakeContainer = document.getElementById('cake-container');
const messageCard = document.getElementById('message-card');

let timer = 5;

// Open Box
birthdayBox.addEventListener('click', () => {
    birthdayBox.classList.add('hidden');
    countdown.classList.remove('hidden');

    const interval = setInterval(() => {
        countdownTimer.textContent = timer--;
        if (timer < 0) {
            clearInterval(interval);
            countdown.classList.add('hidden');
            cakeContainer.classList.remove('hidden');
        }
    }, 1000);
});

// Blow Candles
cakeContainer.addEventListener('mousedown', () => {
    setTimeout(() => {
        cakeContainer.classList.add('hidden');
        messageCard.classList.remove('hidden');
    }, 2000);
});
