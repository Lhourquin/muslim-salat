import CalendarSearch from '../models/CalendarSearch.js';

export default class CalendarSalatOfMounth {

    constructor(){
        this.name = 'Calendar',
        this.url = '../views/calandarSalatOfMounth.html'
    }

    executeHttpRequest (){

        document.getElementById('searchByCity').addEventListener('click', (event)=> {

            event.preventDefault();

          

            this.renderCalendarOfMonth();
        });
    }

    renderCalendarOfMonth(){
        let calendarSearch = new CalendarSearch();

        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        calendarSearch.searchByCity(month, year, document.getElementById('city').value)
        .then(function (result){
                document.getElementsByTagName('tr')[1].children[0].textContent = result[0].date.gregorian;
                document.getElementsByTagName('tr')[1].children[1].textContent = result[0].salat.fajr;
             }   
            //console.log(result[0].date.gregorian)
           
            );

        
    }
    

}