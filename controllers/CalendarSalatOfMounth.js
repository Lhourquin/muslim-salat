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
        let template = document.getElementById('DayAndHourRow');
        let eventListRow = document.getElementById('event-list-row');

        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        calendarSearch.searchByCity(month, year, document.getElementById('city').value)
        .then(function (result){

          eventListRow.innerHTML = '';
          for(let item of result){

            let cloneTemplate = document.importNode(template.content, true);
            
            console.log(item.date.gregorian);
            console.log(item.salat.fajr);
            let td = cloneTemplate.querySelectorAll('td');

            td[0].textContent = item.date.gregorian;
            td[1].textContent = item.salat.fajr;
            td[2].textContent = item.salat.shourouk;
            td[3].textContent = item.salat.dhor;
            td[4].textContent = item.salat.asr;
            td[5].textContent = item.salat.maghreb;
            td[6].textContent = item.salat.icha;
            td[7].textContent = item.salat.midnight;

            eventListRow.appendChild(cloneTemplate);

          }

          /*
                document.getElementsByTagName('tr')[1].children[0].textContent = result[0].date.gregorian;
                document.getElementsByTagName('tr')[1].children[1].textContent = result[0].salat.fajr;
                document.getElementsByTagName('tr')[1].children[2].textContent = result[0].salat.shourouk;
                document.getElementsByTagName('tr')[1].children[3].textContent = result[0].salat.dhor;
                document.getElementsByTagName('tr')[1].children[4].textContent = result[0].salat.asr;
                document.getElementsByTagName('tr')[1].children[5].textContent = result[0].salat.maghreb;
                document.getElementsByTagName('tr')[1].children[6].textContent = result[0].salat.icha;
                document.getElementsByTagName('tr')[1].children[7].textContent = result[0].salat.midnight;

          */
             }   
            //console.log(result[0].date.gregorian)
           
            );

        
    }
    

}
