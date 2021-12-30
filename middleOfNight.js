//target element html contains hour
let fajr = document.getElementById('fajr').textContent;
let maghreb = document.getElementById('maghreb').textContent;
let middleOfNight = document.getElementById('middleOfNight');


//function to get array with format needs for moment js
function toNumber(string) {
   
   let arrayOfNumber = [];
   string.split(':').map(letter => {
       arrayOfNumber.push(parseInt(letter));
   })

   return arrayOfNumber;

}
// variable for result of toNumber
let numberFajr = toNumber(fajr);
let numberMaghreb = toNumber(maghreb);

// variable for result of moment js
let fajrHour = moment(numberFajr, "HH:mm").add(1, "days");
let maghrebHour = moment(numberMaghreb, "HH:mm");

/* 

Compte la différence depuis le plus avancée vers le moins avancée en terme d'horaires.
exemple entre 23h et 4h, depuis le plus grand nombre 23h, 19h sépare 23h et 4h (23 - 19 = 4)
la variable toMilliseconds donne le nombre de temps entre le maghreb et le fajr en millisecondes
*/
var toMilliseconds = moment(fajrHour,"DD/MM/YYYY HH:mm:ss").diff(moment(maghrebHour,"DD/MM/YYYY HH:mm:ss"));
// La variable duration créer un objet pour manipuler les millisecondes avec d'autres fonction de moment JS moment.duration()
var duration = moment.duration(toMilliseconds / 2);

let durationInHours = Math.floor(duration.asHours());
let durationInMinutes = Math.floor(duration.minutes());
let midnight = moment(maghrebHour).add(durationInHours, 'hours').add(durationInMinutes, 'minutes');

let toStringMidnightMomentObj = moment(midnight).format();

function getOnlyHours(string){

    let arrayOfString = string.split('T');
    arrayOfString.shift();
    let newArrayOfString = arrayOfString.toString().split('+');
    newArrayOfString.pop();
    let result = newArrayOfString.toString().split(':').slice(0, 2);
    return result.join(':').toString();
}

middleOfNight.textContent += getOnlyHours(toStringMidnightMomentObj);