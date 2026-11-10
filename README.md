# 🇮🇳 BharatSafar — Explore India, Your Way

**Discover India. Experience its culture. Plan your journey.**

BharatSafar is an India-focused travel planning website designed to help users discover destinations, explore cultural festivals, plan personalized trips, estimate travel budgets, and explore places through an interactive map.

🔗 **Live Demo:** [Visit BharatSafar](https://bharat-safar-222.vercel.app/)

---

## ✨ Features

### 🏠 Home Page
- Welcoming landing page introducing the BharatSafar platform.
- Travel-focused design highlighting India's destinations and cultural diversity.
- Integrated local MP4 travel video showcasing the beauty of India.
- Easy navigation to the main sections of the website.

### 🗺️ Explore Destinations
- Discover destinations across different regions of India.
- Search destinations by name or state.
- Filter destinations by categories such as mountains, heritage, beaches, nature, and adventure.
- View destination overviews, popular attractions, the best time to visit, suggested trip duration, and estimated budgets.

### 🧭 Interactive Map
- Explore selected Indian destinations on an interactive map.
- Select map markers to view destination information.
- Search and browse available destinations.
- Navigate from a destination overview to trip planning.

### 🎉 Festivals of India
- Discover India's vibrant cultural and religious festivals.
- Explore festival traditions, locations, and typical celebration periods.
- Search festivals and filter them by category and state.
- Find suggested places to experience festivals and access trip-planning options.

### ✈️ Trip Planner
- Create personalized travel plans.
- Select destinations and enter trip details.
- Validate travel dates and required information.
- Save and edit planned trips.

### 💰 Budget Planner
- Estimate travel expenses based on trip details.
- Calculate accommodation, food, transport, and activity costs.
- View an expense breakdown in a structured table.
- Estimate individual contributions for group travel.

### ❤️ Saved Trips
- View saved travel plans.
- Revisit trip details and manage saved entries.
- Delete trips that are no longer needed.

### 🎨 Responsive User Interface
- Clean, travel-inspired visual design.
- Reusable React components.
- Interactive cards, filters, forms, and navigation.
- Responsive layouts for desktop and mobile screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic and interactivity |
| Vite | Development server and build tool |
| React Router | Client-side navigation |
| HTML5 | Page structure and video integration |
| CSS3 | Styling, layouts, animations, and responsiveness |
| React Leaflet | Interactive map integration |
| Leaflet | Map functionality |
| OpenStreetMap | Map tile data |
| LocalStorage | Persisting saved trip data in the browser |
| Git & GitHub | Version control and collaboration |
| Vercel | Deployment and hosting |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- A code editor such as Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/vaishnavisingla222/BharatSafar.git
```

### 2. Navigate to the project directory

```bash
cd BharatSafar
```

Use the actual folder name created by Git if it differs.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

Vite generates the production build in the `dist` directory.

---

## 📁 Project Structure

```text
BharatSafar/
├── public/
│   └── bharatsafar-logo.png
├── src/
│   ├── assets/
│   │   ├── Incredible India!.mp4
│   │   └── destination images...
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SplashScreen.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Planner.jsx
│   │   ├── Festivals.jsx
│   │   ├── Budget.jsx
│   │   ├── SavedTrips.jsx
│   │   └── Map.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*The structure above is representative. Update it if your actual repository contains additional files or different filenames.*

---

## 🌍 Deployment

BharatSafar is deployed using Vercel.

To deploy your own version:

1. Push your project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Select **Vite** as the framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the project.

Future changes pushed to the configured production branch can trigger automatic deployments.

---

## 🔮 Future Enhancements

- Expand destination coverage across all Indian states and union territories.
- Add destination-specific photographs and richer travel guides.
- Integrate real-time weather information.
- Add backend and database integration for persistent user accounts and trip storage.
- Implement authentication and cloud-based saved trips.
- Add transport and accommodation recommendations.
- Integrate real-time travel prices and booking links.
- Introduce a personal travel journal to record completed trips and memories.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch to GitHub.
5. Open a pull request.

---

## 📄 License

Choose a license for your project before publishing one. If you intend to make the code open source, consider the [MIT License](https://opensource.org/license/mit).

---

**BharatSafar — Your journey through the incredible diversity of India begins here.** 🇮🇳
