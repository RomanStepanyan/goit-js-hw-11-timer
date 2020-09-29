'use strict'
const ref = {
    daysRef : document.querySelector('span[data-value="days"]'),
    hoursRef : document.querySelector('span[data-value="hours"]'),
    minutsRef : document.querySelector('span[data-value="mins"]'),
    secondsRef : document.querySelector('span[data-value="secs"]'),
}

function pad(value) {
    return String(value).padStart(2, '0')
} 

function daysTimeChange () {
    const targetDate = new Date(1640988000000);
    const todayDate = new Date();
    const time = targetDate - todayDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    ref.daysRef.textContent = pad(days);
    ref.hoursRef.textContent = pad(hours);
    ref.minutsRef.textContent = pad(mins);
    ref.secondsRef.textContent = pad(secs);

}

function countDown () {    
    setInterval(() =>{
        daysTimeChange ()        
    }, 1000)
}
countDown ()


