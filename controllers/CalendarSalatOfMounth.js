import CalendarSearch from '../models/CalendarSearch.js';
import GetPosition from '../models/GetPosition.js';
export default class CalendarSalatOfMounth {

    constructor(){
        this.name = 'Calendar',
        this.url = '../views/calandarSalatOfMounth.html'
    }

    executeHttpRequest (){

        document.getElementById('searchByCity').addEventListener('click', (event)=> {

            event.preventDefault();

           // this.getThePosition();
            this.renderCalendarOfMonth();
        });

        document.getElementById('searchByLocalisation').addEventListener('click', (event)=> {

            event.preventDefault();

            this.getThePosition();
        })
    }

    getThePosition(){

        let getPosition = new GetPosition();
        //let lat = 0;
        //let lon = 0;
        //console.log(`la latitude ${lat} et la longitude ${lon}`);

        function getCoords (pos) {
            let crds = pos.coords;
            let lat = crds.latitude;
            let lon = crds.longitude;
            
            console.log(`Dans la fonction getCoords la latitude ${lat} et la longitude ${lon}`);
            console.log(getPosition.getPosition(lon, lat));
        };

        //console.log(`apres la fonction getCoords ? => la latitude ${lat} et la lognitude `);
        
        navigator.geolocation.getCurrentPosition(getCoords);
        //console.log(lat);
        //getPosition.getPosition();
        //navigator.geolocation.getCurrentPosition(getPosition.getPosition);
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
            
           // console.log(item.date.gregorian);
           // console.log(item.salat.fajr);
            let td = cloneTemplate.querySelectorAll('td');

            td[0].textContent = item.date.gregorian;
            td[1].textContent = item.salat.fajr.slice(0,5);
            td[2].textContent = item.salat.shourouk.slice(0,5);
            td[3].textContent = item.salat.dhor.slice(0,5);
            td[4].textContent = item.salat.asr.slice(0,5);
            td[5].textContent = item.salat.maghreb.slice(0,5);
            td[6].textContent = item.salat.icha.slice(0,5);
            td[7].textContent = item.salat.midnight.slice(0,5);

            eventListRow.appendChild(cloneTemplate);

          }

             }   
           
            );

        
    }
    

}
