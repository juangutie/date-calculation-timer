import { timerElement } from "./elements.js";

export const timer = {
    start: function () {
        const animationStartTime = document.timeline.currentTime;
        this.performanceStartTime = performance.now();
        this.animationRequestId = requestAnimationFrame(function step(currentTime) {
            this.animationRequestId = requestAnimationFrame(step.bind(this));
            updateTimerElement(currentTime - animationStartTime);
        }.bind(this));
    },
    stop: function() {
        if (this.animationRequestId !== undefined) {
            const stopTime = performance.now();
            cancelAnimationFrame(this.animationRequestId);
            this.animationRequestId = undefined;
            updateTimerElement(stopTime - this.performanceStartTime);
        }
    }
}

function updateTimerElement(elapsedTime) {
    const elapsedMillis = Math.floor(elapsedTime) % 1000;
    const elapsedSeconds = Math.floor(elapsedTime / 1000) % 60;
    const elapsedMinutes = Math.floor(elapsedTime / 60000) % 60;
    const elapsedHours = Math.floor(elapsedTime / 3600000);
    if (elapsedHours > 0) {
        const hh = String(elapsedHours);
        const mm = String(elapsedMinutes).padStart(2, "0");
        const ss = String(elapsedSeconds).padStart(2, "0");
        const mss = String(elapsedMillis).padStart(3, "0")
        timerElement.textContent = `${hh}:${mm}:${ss}.${mss}`;
    } else if (elapsedMinutes > 0) {
        const mm = String(elapsedMinutes);
        const ss = String(elapsedSeconds).padStart(2, "0");
        const mss = String(elapsedMillis).padStart(3, "0")
        timerElement.textContent = `${mm}:${ss}.${mss}`;
    } else {
        const ss = String(elapsedSeconds);
        const mss = String(elapsedMillis).padStart(3, "0")
        timerElement.textContent = `${ss}.${mss}`;
    };
}