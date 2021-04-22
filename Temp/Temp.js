const resultSeconds = document.getElementById('resultSeconds');
const resultMinutes = document.getElementById('resultMinutes');
const resultHours = document.getElementById('resultHours');
const resultDays = document.getElementById('resultDays');

const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value ;
    // Your code ici

    //Days in year
    let numberOfDays = numberOfYears * daysInYear ;
    resultDays.textContent = numberOfYears + " years is " + numberOfDays + " days";
    console.log(numberOfYears + " years is " + numberOfDays + " days");

    //Hours in year
    let numberOfHours = numberOfDays * hoursInDay;
    resultHours.textContent = numberOfYears + " years is " + numberOfHours + " hours";
    console.log(resultHours.textContent = numberOfYears + " years is " + numberOfHours + " hours");

    //Minutes in year
    let numberOfMinutes = numberOfHours * minutesInHour;
    resultMinutes.textContent = numberOfYears + " years is " + numberOfMinutes + " minutes";
    console.log(resultMinutes.textContent = numberOfYears + " years is " + numberOfMinutes + " minutes");

    //Seconds in year
    let numberOfSeconds = numberOfMinutes * secondsInMinute;
    resultSeconds.textContent = numberOfYears + " years is " + numberOfSeconds + " seconds";
    console.log(resultSeconds.textContent = numberOfYears + " years is " + numberOfSeconds + " seconds");

});