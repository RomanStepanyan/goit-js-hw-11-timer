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
        
    timeTextContent(time) {
        this.daysRef.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hoursRef.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutsRef.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secondsRef.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));        
    }

    daysTimeChange() {
        const currentDate = new Date();
        const time = this.coutDownDate - currentDate;
        this.timeTextContent(time)
    }

    countDown () {    
        setInterval(() =>{
            this.daysTimeChange ()        
        }, 1000)
    }
}
