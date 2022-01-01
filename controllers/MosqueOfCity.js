import MosqueOfCityList from "../models/MosqueOfCityList.js";

export default class Home {
    constructor() {
      (this.name = "MosqueOfCity"), (this.url = "../views/mosqueOfCity.html");
    }
  
    executeHttpRequest() {
      document
      .getElementById("searchByCity")
      .addEventListener("click", (event) => {
        event.preventDefault();
        let mosque = new MosqueOfCityList();
        console.log(mosque.SearchList());
        //this.renderCalendarOfMonth();
      });
    }
  }
  