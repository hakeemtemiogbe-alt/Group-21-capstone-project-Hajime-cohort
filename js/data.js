// URL with Planet data.
const url = 'https://anurella.github.io/json/planet.json';
// Used to load Earth on page load.
const defaultPlanet = "Earth";
// Initializes a empty array for the planet data.
let allPlanets = [];


// Function used to filter a planet from the planet array.
function getPlanet(planetName, planets) {
  return planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());
}

// Read data from the URL and assigns the planet data to the allPlanets array.
fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  // The planet data is assigned to the allPlanets array initialized earlier.
  allPlanets = data;

  // Filters the allPlanets array to find Earth data.
  loadDefault = getPlanet(defaultPlanet, allPlanets);

  // Uses the showPlanet() function in card.js to load Earth on page load.
  showPlanet(loadDefault);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
