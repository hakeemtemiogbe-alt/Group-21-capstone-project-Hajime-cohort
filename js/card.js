// card.js - builds the planet card inside #cards-container.
// All the styling is already in css/Foundation.css, so this file only builds the HTML.
//
// Two functions are made available to the other scripts (data.js, search.js):
// showPlanet(planet) -> shows ONE planet card (replaces any card already on the page)
// showNoResults() -> shows the "No results found!" message instead
//
// "planet" is one object from the JSON, with these keys:
// name, type, image, description, gravity, mass, period,
// temperature, moons, diameter, distanceFromSun

(function () {
const container = document.getElementById("cards-container");

// The 4 small icons are written here as SVG, so no image files are needed.
// They use currentColor, so they change colour by themselves in dark mode.
const ICONS = {
temperature:
'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
'<path d="M8 4a2.5 2.5 0 0 1 5 0v9.2a4.5 4.5 0 1 1-5 0z"/>' +
'<circle cx="18.5" cy="4.5" r="1.4"/></svg>',
moons:
'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
'<path d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11z"/></svg>',
diameter:
'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
'<circle cx="12" cy="12" r="10"/></svg>',
distance:
'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
'<circle cx="12" cy="12" r="4"/>' +
'<path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>'
};

// Small helper: make an element, with optional class and text.
function make(tag, className, text) {
const el = document.createElement(tag);
if (className) el.className = className;
if (text !== undefined) el.textContent = text;
return el;
}

// If the JSON has no value for something, show "N/A" instead of "undefined".
function show(value) {
return value === undefined || value === null || value === "" ? "N/A" : value;
}

// One stat box: Gravity / Mass / Period
function statItem(label, value) {
const item = make("div", "stat-item");
item.append(make("span", "", label), make("strong", "", show(value)));
return item;
}

// One detail line: icon + value (temperature, moons, diameter, distance)
function detailItem(iconName, value, label) {
const item = make("li", "detail-item");
item.innerHTML = ICONS[iconName]; // only our own fixed SVG text, never data from the JSON
item.title = label;
item.append(make("span", "", show(value)));
return item;
}

function showPlanet(planet) {
const card = make("article", "planet-card");

const image = make("img", "planet-image");
image.src = planet.image;
image.alt = planet.name:

const heading = make("div");
heading.append(
make("h3", "planet-name", show(planet.name)),
make("p", "planet-type", show(planet.type))
);

const description = make("p", "planet-description", show(planet.description));

const stats = make("div", "planet-stats");
stats.append(
statItem("Gravity", planet.gravity),
statItem("Mass", planet.mass),
statItem("Period", planet.period)
);

const details = make("ul", "planet-details");
details.append(
detailItem("temperature", planet.temperature, "Temperature"),
detailItem("moons", planet.moons, "Moons"),
detailItem("diameter", planet.diameter, "Diameter"),
detailItem("distance", planet.distanceFromSun, "Distance from the Sun")
);

card.append(image, heading, description, stats, details);
container.replaceChildren(card);
}

function showNoResults() {
const message = make("div", "status-message");
message.append(
make("h3", "", "No results found!"),
make(
"p",
"",
"We couldn't find any planet matching your search. Please double-check the name and try again."
)
);
container.replaceChildren(message);
}

// Make the two functions usable from the other script files.
window.showPlanet = showPlanet;
window.showNoResults = showNoResults;
})();
  
