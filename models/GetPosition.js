export default class GetPosition {
  constructor() {
    this.url = `https://api-adresse.data.gouv.fr/reverse/`;
  }

  getPosition(lon, lat) {
    return fetch(`${this.url}?lon=${lon}&lat=${lat}`)
      .then((response) => response.json())
      .then((json) => json.features)
      .then((features) => features[0])
      .then((obj) => obj.properties)
      .then((properties) => properties.city);
  }
}
