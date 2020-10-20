const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const finaltime = '10 Dec 2020';

function countdown() {
    const theDay = new Date(finaltime);
    const currentDate = new Date();

    const totalSeconds = (theDay - currentDate)/1000;
    const remainingDays = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds % 60);  
    console.log(remainingDays, hours, minutes , seconds);

daysE1.innerHTML   =  remainingDays;    
hoursE1.innerHTML  =  (hours);
minsE1.innerHTML   =  (minutes);
secondsE1.innerHTML  =  (seconds);
}

// function formatTime(time){
//     return time < 10 ? 0+time  : time;
// }

countdown();
setInterval(countdown,1000);