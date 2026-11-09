# OLIVA — Mediterranean Wellness

A simple university project using React, Tailwind CSS, and a Node.js server.

## Run
1. Open the `OLIVA` folder in VS Code.
2. Open Terminal and run `npm start`.
3. Open `http://localhost:3000`.

You need Node.js and an internet connection. No npm install or Vite is required.

## How the folders work
- `src/App.jsx` — main page navigation and tracking data.
- `src/pages/` — Home, About, Features, Dashboard, Contact.
- `src/components/layout/` — Navbar and Footer.
- `src/components/trackers/` — Water, Steps, Sleep, Mood, Custom Goals.
- `src/components/messages/` — water reminder and step encouragement.
- `src/utils/storage.js` — browser LocalStorage helpers.
- `src/assets/` — olive branch, landscape, and tile illustrations.
- `src/styles/` — **one small CSS file for each part** of the website.

## Features
- Record water, steps, sleep, and mood.
- Change daily goals.
- View progress and motivational messages.
- Values are stored in the same browser with LocalStorage.
- A warning appears when the water target is exceeded. A target is **not** a medical safety limit.
- The contact form is only a demonstration; it does not send email.

## Design
Arabic-Mediterranean-inspired colors, olive branch, traditional tile details, and warm cream backgrounds. The website is still in English.

## Notes
This is a frontend student project. React, Tailwind, and Babel are loaded from CDNs. The app uses simple state-based page navigation instead of React Router.

## Goal achievement messages
When water, steps, or sleep reaches its saved daily goal, the Dashboard displays a congratulation message. The message updates automatically when values or goals change. The message styling is in `src/styles/goals.css`.



## Website Screenshots

### Home Page
![Home Page](docs/screenshots/home.png)

### About Page
![About Page](docs/screenshots/about.png)

### Features Page
![Features Page](docs/screenshots/features.png)

### Dashboard Page
![Dashboard Page](docs/screenshots/dashboard.png)

### Contact Page
![Contact Page](docs/screenshots/contact.png)
