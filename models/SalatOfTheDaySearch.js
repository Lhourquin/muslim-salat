export default class SalatOfTheDaySearch {
  constructor() {
    this.url =
      "https://api.aladhan.com/v1/timingsByCity?country=France&method=2";
  }

  searchByCity(city) {
    return fetch(`${this.url}&city=${city}`)
      .then((Response) => Response.json())
      .then((obj) => obj.data)
      .then(
        (dataArray) =>
          (dataArray = {
            date: dataArray.date.gregorian.date,
            salat: {
              fajr: dataArray.timings.Fajr,
              shourouk: dataArray.timings.Sunrise,
              dhor: dataArray.timings.Dhuhr,
              asr: dataArray.timings.Asr,
              maghreb: dataArray.timings.Maghrib,
              icha: dataArray.timings.Isha,
              midnight: dataArray.timings.Midnight,
            },
          })
      );
  }
}
