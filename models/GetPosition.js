export default class GetPosition {

    constructor(){
        this.url = `https://api.opencagedata.com/geocode/v1/json?`
    }

    getPosition(position){

        const {latitude, longitude} = position.coords;

        fetch(`${this.url}q=${latitude}+${longitude}&key=1ed6b9f1608f4aadb41c23a712c8c75a`)
                .then(response => response.json)
                .then(console.log);
    }
}