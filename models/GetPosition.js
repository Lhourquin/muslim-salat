export default class GetPosition {

    constructor(){
        this.url = `https://api-adresse.data.gouv.fr/reverse/`;
    }

    getPosition(){

        //const {latitude, longitude} = position.coords;

        return fetch(`${this.url}?lon=3.1480196&lat=50.7291769`)
                .then(response => response.json())
                .then(json=> console.log(json))
    }
}