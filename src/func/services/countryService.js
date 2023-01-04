export class CountryService {
  getCountries() {
    return fetch("data/countries.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
