// The search form input.
const searchInput = document.getElementById('search-input');
// The search form button.
const searchBtn = document.getElementById('search-button');
const searchMsg = document.getElementById('search-message');
const loader = document.getElementById('loader');

/*
This function takes the input and filters the allPlanets array
to check if it exist while returning approprate data.
*/
async function searchPlanet(e) {
  e.preventDefault();
  // Fetches the input data entered.
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Perform nothing if nothing is entered in the input.
  if (searchTerm === "") {
    return
  }

  loader.style.display = 'flex';

  const minDelay = 500;
  const maxTimeout = 3000;
  const startTime = Date.now();

  try {
    // Checks if allPlanets array is empty.
    while (allPlanets.length === 0) {
      if (Date.now() - startTime >= maxTimeout) {
        throw new Error("Request timed out. Check your network connection.");
      }

      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Filters the allPlanets array to find the searched planet.
    const filterPlanet = getPlanet(searchTerm, allPlanets);

    const elapsedTime = Date.now() - startTime;
    const remainingDelay = Math.max(0, minDelay - elapsedTime);

    await new Promise(resolve => setTimeout(resolve, remainingDelay));

    if (filterPlanet) {
      // Uses the showPlanet() function in card.js to load searched planet if found.
      showPlanet(filterPlanet);
      searchMsg.hidden = true;
    }else {
      // Uses the showNoResults() function in card.js to show no planet is found.
      showNoResults();
      searchMsg.hidden = false;
    }

  } catch (error) {
    // Uses the showNoResults() function in card.js to show error message.
    showNoResults();
    // Below script modifies the error message in the showNoResults() function
    const statusMessage = document.querySelector('.status-message');
    statusMessage.innerHTML =
    `
      <h3>Please, Try again.</h3>
      <p>${error.message}</p>
    `;
  } finally {
    loader.style.display = 'none';
  }
}

// Triggers the button when click and performs the search operation.
searchBtn.addEventListener('click', searchPlanet);
