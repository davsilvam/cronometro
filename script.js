let visor = document.querySelector('#visor')
const startBtn = document.querySelector('#start-btn')
const pauseBtn = document.querySelector('#pause-btn')
const stopBtn = document.querySelector('#stop-btn')
visor.innerHTML = '00:00:00'

let time = 10
let ms = 0
let ss = 0
let min = 0

function startCounter() {
    cron = setInterval(() => { counter() }, time)
    startBtn.setAttribute('disabled', true)
    pauseBtn.removeAttribute('disabled')
    stopBtn.removeAttribute('disabled')
}

function pauseCounter() {
    clearInterval(cron)
    startBtn.removeAttribute('disabled')
    pauseBtn.setAttribute('disabled', true)
}

function stopCounter() {
    clearInterval(cron)
    resetCounter()
    startBtn.removeAttribute('disabled')
    pauseBtn.setAttribute('disabled', true)
    stopBtn.setAttribute('disabled', true)
}

function resetCounter() {
    visor.innerHTML = '00:00:00'
    ms = 0
    ss = 0
    min = 0
}

function counter() {
    ms++
    if (ms == 100) {
        ms = 0
        ss++
        if (ss == 60) {
            ss = 0
            min++
        }
    }

    model = (min < 10 ? '0' + min : min) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms)
    visor.textContent = model
}