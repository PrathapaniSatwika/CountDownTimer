let timer;
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        const minutesInput = document.getElementById('minutesInput');
        const minutes = parseInt(minutesInput.value);

        if (!isNaN(minutes) && minutes > 0) {
            let totalSeconds = minutes * 60;

            timer = setInterval(() => {
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;

                const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                document.getElementById('timerDisplay').textContent = formattedTime;

                if (totalSeconds === 0) {
                    clearInterval(timer);
                    isTimerRunning = false;
                } else {
                    totalSeconds--;
                }
            }, 1000);

            isTimerRunning = true;
        }
    }
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').textContent = '00:00:00';
    isTimerRunning = false;
}

function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}
document.getElementById('minutesInput').addEventListener('input', function () {
    resetTimer();
});