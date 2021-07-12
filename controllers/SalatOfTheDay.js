export default class SalatOfTheDay {

    constructor(){

        this.name = 'Today',
        this.url = '../views/salatOfTheDay.html'
    }

    executeHttpRequest(){
        console.log(this.name);
    }
}
