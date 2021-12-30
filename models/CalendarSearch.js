export default class CalendarSearch {
  constructor() {
    this.url =
      "http://api.aladhan.com/v1/calendarByCity?country=France&method=2";
  }

  searchByCity(city) {
    return fetch(`${this.url}&city=${city}`)
      .then((Response) => Response.json())
      .then((obj) => obj.data)
      .then(
        (dataArray) =>
          dataArray.map((data) => {
            return {
              date: {
                gregorian: data.date.gregorian.date,
                hijri: data.date.hijri.date,
              },
              salat: {
                fajr: data.timings.Fajr,
                shourouk: data.timings.Sunrise,
                dhor: data.timings.Dhuhr,
                asr: data.timings.Asr,
                maghreb: data.timings.Maghrib,
                icha: data.timings.Isha,
                midnight: data.timings.Midnight,
              },
            };
          })

        //dataArray.map(data => console.log(data.date.gregorian.date))
      );
  }
}
