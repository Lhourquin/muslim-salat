export default class CalculMidnight {

  toArrayOfNumber(string) {
    let arrayOfNumber = [];
    string.split(":").map((letter) => {
      arrayOfNumber.push(parseInt(letter));
    });
    return arrayOfNumber;
  }

  toHoursAndMinutesFajr(arrayOfNumberFajr) {
    return moment(arrayOfNumberFajr, "HH:mm").add(1, "days");
  }

  toHoursAndMinutesMaghreb(arrayOfNumberMaghreb) {
    return moment(arrayOfNumberMaghreb, "HH:mm");
  }

  durationsDivideByTwoInMilliseconds(arrayOfNumberFajr, arrayOfNumberMaghreb) {
    let milliseconds = moment(arrayOfNumberFajr, "DD/MM/YYYY HH:mm:ss").diff(
      moment(arrayOfNumberMaghreb, "DD/MM/YYYY HH:mm:ss")
    );
    let duration = moment.duration(milliseconds / 2);
    return duration;
  }

  maghrebAddDurationInHoursAndMinutes(duration, maghrebHour) {
    let durationInHours = Math.floor(duration.asHours());
    let durationInMinutes = Math.floor(duration.minutes());
    let midnight = moment(maghrebHour)
      .add(durationInHours, "hours")
      .add(durationInMinutes, "minutes");
    let toStringMidnightMomentObj = moment(midnight).format();

    return toStringMidnightMomentObj;
  }



  getTheMiddleOfNight(stringOfMidnight) {
    let arrayOfString = stringOfMidnight.split("T");
    arrayOfString.shift();
    let newArrayOfString = arrayOfString.toString().split("+");
    newArrayOfString.pop();
    let result = newArrayOfString.toString().split(":").slice(0, 2);
    return result.join(":").toString();
  }

  calculMidnight(fajrHours, MaghrebHours){
    let fajr = this.toArrayOfNumber(fajrHours);
    let maghreb = this.toArrayOfNumber(MaghrebHours);
    let fajrHoursAndMinutes = this.toHoursAndMinutesFajr(fajr);
    let maghrebHoursAndMinutes = this.toHoursAndMinutesMaghreb(maghreb);
    let hoursAndMinutesFajrAndMaghrebInMilliseconds = this.durationsDivideByTwoInMilliseconds(fajrHoursAndMinutes, maghrebHoursAndMinutes);
    let durationInDateFormat = this.maghrebAddDurationInHoursAndMinutes(hoursAndMinutesFajrAndMaghrebInMilliseconds, maghrebHoursAndMinutes);
    let dateInStringFormat = this.getTheMiddleOfNight(durationInDateFormat);
    return dateInStringFormat;
  }
  
}
