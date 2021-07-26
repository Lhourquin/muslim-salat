import SalatOfTheDaySearch from "../models/SalatOfTheDaySearch.js";

export default class SalatOfTheDay {

    constructor(){

        this.name = 'Today',
        this.url = '../views/salatOfTheDay.html'
    }

    executeHttpRequest (){

        document.getElementById('searchByCity').addEventListener('click', (event)=> {

            event.preventDefault();

          

            this.renderCalendarOfMonth();
        });
    }

    renderCalendarOfMonth(){
        let salatOftheDaySearch = new SalatOfTheDaySearch();
        //let eventListRow = document.getElementById('event-list-row');        

        salatOftheDaySearch.searchByCity(document.getElementById('city').value);

        
    }
}
