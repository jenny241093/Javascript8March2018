let departureHour=8;
let departureMinutes=40;
let flightDuration=120;


let hours=Math.floor(flightDuration/60);
let minutes=flightDuration%60;
let totalHours=departureHour+hours;
let totalMinutes=departureMinutes+minutes;

    if(totalMinutes>59)
    {
        totalHours++;
        totalMinutes=totalMinutes-60;
    }
    if(totalHours>12)
    {
        totalHours=1;
    }
console.log(`${totalHours}h ${totalMinutes}m`);