import SalatOfTheDaySearch from "../models/SalatOfTheDaySearch.js";
import GetPosition from "../models/GetPosition.js";
import CalculMidnight from "../models/CalculMidnight.js";

export default class SalatOfTheDay {
  constructor() {
    (this.name = "Today"), (this.url = "../views/salatOfTheDay.html");
  }

  executeHttpRequest() {
    document
      .getElementById("searchByCity")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.renderSalatOfTheDay();
      });

    document
      .getElementById("searchByLocalisation")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.getThePosition();
      });
  }

  getThePosition() {
    let getPosition = new GetPosition();

    function getCoords(pos) {
      let crds = pos.coords;
      let lat = crds.latitude;
      let lon = crds.longitude;

      getPosition
        .getPosition(lon, lat)
        .then((result) => (document.getElementById("city").value = result));
    }

    navigator.geolocation.getCurrentPosition(getCoords);
  }

  renderSalatOfTheDay() {
    let salatOftheDaySearch = new SalatOfTheDaySearch();
    let calculMidnight = new CalculMidnight();
    salatOftheDaySearch
      .searchByCity(document.getElementById("city").value)
      .then(function (obj) {
        document.getElementById("dateOfTheDay").textContent = obj.date;
        let fajrHour = (document.getElementById("fajr").textContent =
          obj.salat.fajr);
        document.getElementById("shourouk").textContent = obj.salat.shourouk;
        document.getElementById("dhor").textContent = obj.salat.dhor;
        document.getElementById("asr").textContent = obj.salat.asr;
        let maghrebHour = (document.getElementById("maghreb").textContent =
          obj.salat.maghreb);
        document.getElementById("icha").textContent = obj.salat.icha;
        document.getElementById("midnight").textContent =
          calculMidnight.calculMidnight(fajrHour, maghrebHour);
      });
  }
}
