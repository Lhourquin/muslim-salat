export default class GetPosition {

    constructor(){
        this.url = `https://api-adresse.data.gouv.fr/reverse/`;
    }

    getPosition(){

        //const {latitude, longitude} = position.coords;

        return fetch(`${this.url}?lon=3.1479955&lat=50.7292044`)
                .then(response => response.json())
                .then(json=> json.features)
                .then(features => features[0])
                .then(obj => obj.properties)
                .then(properties => console.log(properties.city))
    }
}