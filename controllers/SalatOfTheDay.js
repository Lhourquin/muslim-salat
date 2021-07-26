import SalatOfTheDaySearch from "../models/SalatOfTheDaySearch.js";

export default class SalatOfTheDay {

    constructor(){

        this.name = 'Today',
        this.url = '../views/salatOfTheDay.html'
    }

    executeHttpRequest (){

        document.getElementById('searchByCity').addEventListener('click', (event)=> {

            event.preventDefault();

          

            this.renderSalatOfTheDay();
        });
    }

    renderSalatOfTheDay(){
        let salatOftheDaySearch = new SalatOfTheDaySearch();
        //let eventListRow = document.getElementById('event-list-row');        

        salatOftheDaySearch.searchByCity(document.getElementById('city').value)
        .then(function(obj){

            document.getElementById('dateOfTheDay').textContent = obj.date;
            document.getElementById('fajr').textContent = obj.salat.fajr;
            document.getElementById('shourouk').textContent = obj.salat.shourouk;
            document.getElementById('dhor').textContent = obj.salat.dhor;
            document.getElementById('asr').textContent = obj.salat.asr;
            document.getElementById('maghreb').textContent = obj.salat.maghreb;
            document.getElementById('icha').textContent = obj.salat.icha;
            document.getElementById('midnight').textContent = obj.salat.midnight;

            }
        )

        
    }
}
