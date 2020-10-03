export class CountDown {
    constructor ({tagId, targetDate}){
        this.coutDownDate = new Date(targetDate);
        this.daysRef = document.querySelector(`${tagId} .value[data-value="days"]`);
        this.hoursRef = document.querySelector(`${tagId} .value[data-value="hours"]`);
        this.minutsRef = document.querySelector(`${tagId} .value[data-value="mins"]`);
        this.secondsRef = document.querySelector(`${tagId} .value[data-value="secs"]`);
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
        
    daysTimeChange () {
        const todayDate = new Date();
        const time = this.coutDownDate - todayDate;
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.daysRef.textContent = days;
        this.hoursRef.textContent = hours;
        this.minutsRef.textContent = mins;
        this.secondsRef.textContent = secs;
    }

    countDown () {    
        setInterval(() =>{
            this.daysTimeChange ()        
        }, 1000)
    }
}
