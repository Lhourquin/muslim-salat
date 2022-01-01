export default class MosqueOfCityList{
    constructor(){
        this.url = `https://mawaqit.net/api/2.0/mosque/search?`;

    }

    SearchList() {
        return fetch(`https://mawaqit.net/api/2.0/mosque/search?word=tourcoing&fields=slug%2Clabel`)
        .then((Response)=> console.log(Response.json()));
    }
}