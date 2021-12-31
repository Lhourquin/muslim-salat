import CalendarSearch from "../models/CalendarSearch.js";
import GetPosition from "../models/GetPosition.js";
import CalculMidnight from "../models/CalculMidnight.js";
export default class CalendarSalatOfMounth {
  constructor() {
    (this.name = "Calendar"),
      (this.url = "../views/calandarSalatOfMounth.html");
  }

  executeHttpRequest() {
    document
      .getElementById("searchByCity")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.renderCalendarOfMonth();
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

  renderCalendarOfMonth() {
    let calculMidnight = new CalculMidnight();
    let calendarSearch = new CalendarSearch();
    let template = document.getElementById("DayAndHourRow");
    let eventListRow = document.getElementById("event-list-row");

    calendarSearch
      .searchByCity(document.getElementById("city").value)
      .then(function (result) {
        eventListRow.innerHTML = "";
        for (let item of result) {
          let cloneTemplate = document.importNode(template.content, true);

          let td = cloneTemplate.querySelectorAll("td");

          td[0].textContent = item.date.gregorian;
          let fajrHours = (td[1].textContent = item.salat.fajr.slice(0, 5));
          td[2].textContent = item.salat.shourouk.slice(0, 5);
          td[3].textContent = item.salat.dhor.slice(0, 5);
          td[4].textContent = item.salat.asr.slice(0, 5);
          let maghrebHours = (td[5].textContent = item.salat.maghreb.slice(
            0,
            5
          ));
          td[6].textContent = item.salat.icha.slice(0, 5);
          td[7].textContent = calculMidnight.calculMidnight(
            fajrHours,
            maghrebHours
          );
          eventListRow.appendChild(cloneTemplate);
        }
      });

    document.getElementById("city").value = "";
  }
}
