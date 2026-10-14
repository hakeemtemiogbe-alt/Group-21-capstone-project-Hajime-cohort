// The search form input.
const searchInput = document.getElementById('search-input');
// The search form button.
const searchBtn = document.getElementById('search-button');

/*
This function takes the input and filters the allPlanets array
to check if it exist while returning approprate data.
*/
function searchPlanet(e) {
  e.preventDefault();
  // Fetches the input data entered.
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Perform nothing if nothing is entered in the input.
  if (searchTerm === "") {
    return
  }

  // Filters the allPlanets array to find the searched planet.
  const filterPlanet = getPlanet(searchTerm, allPlanets);
  if (filterPlanet) {
    // Uses the showPlanet() function in card.js to load searched planet if found.
    showPlanet(filterPlanet);
  }else {
    // Uses the showNoResults() function in card.js to show no planet is found.
    showNoResults();
  }
}

// Triggers the button when click and performs the search operation.
searchBtn.addEventListener('click', searchPlanet);
