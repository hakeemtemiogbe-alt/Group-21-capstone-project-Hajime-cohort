# Group 21 Capstone Project: Planets App

A responsive planets web app built for the Hajime cohort capstone. It shows one planet at a time, with a searchable planet card and a comparison table, in light and dark mode.

Built with HTML, CSS and JavaScript. Planet data is fetched from a JSON API.

## Team

| Name | GitHub |
|---|---|
| Hakeem (Team Lead) | [hakeemtemiogbe-alt](https://github.com/hakeemtemiogbe-alt) |
| Fikunayomi (Assistant Team Lead) | [Fikky004](https://github.com/Fikky004) |
| Aderonke | [aderonkeadekanye37](https://github.com/aderonkeadekanye37) |
| Akaninyeneiniudoh-cloud | [akaninyeneiniudoh-cloud](https://github.com/akaninyeneiniudoh-cloud) |
| Akinwunmisemiu03-boop | [akinwunmisemiu03-boop](https://github.com/akinwunmisemiu03-boop) |
| EbubeCosmas | [EbubeCosmas](https://github.com/EbubeCosmas) |
| EdikanI427 | [EdikanI427](https://github.com/EdikanI427) |
| Favouregbunine | [favouregbunine](https://github.com/favouregbunine) |
| MattyD-coder | [mattyD-coder](https://github.com/mattyD-coder) |
| Nonso Jonas | [nonsojonas](https://github.com/nonsojonas) |
| Grace Ajadi | [Grace001-tech](https://github.com/Grace001-tech) |

## How we work

- Never push directly to `main`.
- Each person works on their own branch, named after the task, for example `header-toggle`.
- When your work is ready, open a pull request.
- The person who opens a pull request must not merge it. Someone else reviews and merges it.


## Live Site

https://group21-planets-hajime.netlify.app

## How to Run Locally

1. Clone the repository:
   `git clone https://github.com/hakeemtemiogbe-alt/Group-21-capstone-project-Hajime-cohort.git`
2. Open the project folder and open `index.html` in your browser (or use the VS Code Live Server extension).
3. You need an internet connection, because the planet data is fetched from a JSON API:
   https://anurella.github.io/json/planet.json

   ## Components and Contributors

| Component | What it does | Worked on by |
|---|---|---|
| Foundation HTML | Base semantic page structure | mattyD-coder, Fikky004 |
| Foundation CSS | Layout, light and dark colours, fonts | aderonkeadekanye37, Fikky004 |
| Header and theme toggle | Logo and light/dark mode button | Foundation group above. EbubeCosmas also submitted a version (PR #14, not merged because the foundation already covered it) |
| JavaScript foundation | JS files created and linked in order, theme toggle code | hakeemtemiogbe-alt |
| Planet card (`card.js`) | Builds the planet card and the "no results" message | favouregbunine |
| Data fetching and search (`data.js`, `search.js`) | Fetches planets from the API and searches by name | nonsojonas |
| Loading state | Loader shown while searching | nonsojonas |
| Comparison table | Static NASA planetary facts | hakeemtemiogbe-alt, EbubeCosmas |
| Footer | About section, member names and links | akinwunmisemiu03-boop, Grace001-tech, Fikky004 (coordination) |
| Design review | Checked the site against the Figma design and the project brief | EdikanI427, akaninyeneiniudoh-cloud |
| README and deployment | Documentation and Netlify deployment | hakeemtemiogbe-alt |
