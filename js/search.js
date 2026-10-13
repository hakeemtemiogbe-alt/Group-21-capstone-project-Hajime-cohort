 const planets = [
    { name: 'Mercury', type: 'Terrestrial planet', desc: 'The smallest planet and the closest to the Sun. One orbit takes 88 Earth days.' },
    { name: 'Venus', type: 'Terrestrial planet', desc: 'The hottest planet, wrapped in thick clouds of carbon dioxide and sulphuric acid.' },
    { name: 'Earth', type: 'Terrestrial planet', desc: 'The only known world with liquid water on its surface and life.' },
    { name: 'Mars', type: 'Terrestrial planet', desc: 'A cold desert world with the tallest volcano in the solar system, Olympus Mons.' },
    { name: 'Jupiter', type: 'Gas giant', desc: 'The largest planet. Its Great Red Spot is a storm bigger than Earth.' },
    { name: 'Saturn', type: 'Gas giant', desc: 'Known for its wide, bright ring system made mostly of ice particles.' },
    { name: 'Uranus', type: 'Ice giant', desc: 'Rotates on its side, with an axial tilt of about 98 degrees.' },
    { name: 'Neptune', type: 'Ice giant', desc: 'The farthest planet from the Sun, with winds over 2,000 km/h.' }
  ];

  const form = document.getElementById('searchForm');
  const input = document.getElementById('planetInput');
  const message = document.getElementById('searchMessage');
  const result = document.getElementById('result');

  function showError(text) {
    form.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    message.textContent = text;
    result.hidden = true;
  }
  function clearError() {
    form.classList.remove('has-error');
    input.removeAttribute('aria-invalid');
    message.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    if (!query) {
      showError('Enter a planet name to search.');
      input.focus();
      return;
    }

    const match = planets.find(p => p.name.toLowerCase() === query);
    if (!match) {
      showError('No planet found for "' + input.value.trim() + '". Check the spelling and try again.');
      return;
    }

    clearError();
    document.getElementById('resultName').textContent = match.name;
    document.getElementById('resultType').textContent = match.type;
    document.getElementById('resultDesc').textContent = match.desc;
    result.hidden = false;
  });

  input.addEventListener('input', clearError);