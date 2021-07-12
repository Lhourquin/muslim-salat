export default class Home {

    constructor(){
        this.name = 'Home',
        this.url = '../views/home.html'
    }
    
    executeHttpRequest(){
        console.log(this.name);
    }
}