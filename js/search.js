const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

function searchPlanet(e) {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    return
  }

  const filterPlanet = getPlanet(searchTerm, allPlanets);
  if (filterPlanet) {
    showPlanet(filterPlanet);
  }else {
    showNoResults();
  }
}

searchBtn.addEventListener('click', searchPlanet);
