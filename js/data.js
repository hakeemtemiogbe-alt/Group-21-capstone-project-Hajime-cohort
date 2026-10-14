const url = 'https://anurella.github.io/json/planet.json';
const defaultPlanet = "Earth";
let allPlanets = [];


function getPlanet(planetName, planets) {
  return planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());
}

fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  allPlanets = data;
  loadDefault = getPlanet(defaultPlanet, allPlanets);
  showPlanet(loadDefault);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
