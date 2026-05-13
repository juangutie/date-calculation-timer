let performanceStartTime;
let animationRequestId;
let savedCallback;

export function startTimer(callback) {
    const animationStartTime = document.timeline.currentTime;
    savedCallback = callback;
    performanceStartTime = performance.now();
    animationRequestId = requestAnimationFrame(
        function step(currentTime) {
            animationRequestId = requestAnimationFrame(step);
            savedCallback(formatToString(currentTime - animationStartTime));
        }.bind(this),
    );
}

export function stopTimer() {
    if (animationRequestId !== undefined) {
        const stopTime = performance.now();
        cancelAnimationFrame(animationRequestId);
        animationRequestId = undefined;
        savedCallback(formatToString(stopTime - performanceStartTime));
    }
}

function formatToString(elapsedTime) {
    const elapsedMillis = Math.floor(elapsedTime) % 1000;
    const elapsedSeconds = Math.floor(elapsedTime / 1000) % 60;
    const elapsedMinutes = Math.floor(elapsedTime / 60000) % 60;
    const elapsedHours = Math.floor(elapsedTime / 3600000);
    if (elapsedHours > 0) {
        const hh = String(elapsedHours);
        const mm = String(elapsedMinutes).padStart(2, "0");
        const ss = String(elapsedSeconds).padStart(2, "0");
        const mss = String(elapsedMillis).padStart(3, "0");
        return `${hh}:${mm}:${ss}.${mss}`;
    } else if (elapsedMinutes > 0) {
        const mm = String(elapsedMinutes);
        const ss = String(elapsedSeconds).padStart(2, "0");
        const mss = String(elapsedMillis).padStart(3, "0");
        return `${mm}:${ss}.${mss}`;
    } else {
        const ss = String(elapsedSeconds);
        const mss = String(elapsedMillis).padStart(3, "0");
        return `${ss}.${mss}`;
    }
}
