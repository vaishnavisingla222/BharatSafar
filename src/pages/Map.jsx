import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const destinations = [
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    type: "Mountains",
    emoji: "🏔️",
    position: [31.1048, 77.1734],
    description:
      "A scenic hill station known for mountain views, colonial architecture and peaceful walks.",
    attractions: ["The Ridge", "Mall Road", "Kufri"],
    bestTime: "March–June, October–February",
    duration: "2–3 days",
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    type: "Adventure",
    emoji: "❄️",
    position: [32.2432, 77.1892],
    description:
      "A mountain getaway with snowy peaks, pine forests and adventure activities.",
    attractions: ["Solang Valley", "Old Manali", "Hadimba Temple"],
    bestTime: "March–June",
    duration: "3–4 days",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    type: "Heritage",
    emoji: "🏰",
    position: [26.9124, 75.7873],
    description:
      "The Pink City, celebrated for royal palaces, historic forts and colourful markets.",
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace"],
    bestTime: "October–March",
    duration: "2–3 days",
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    type: "Heritage",
    emoji: "🏞️",
    position: [24.5854, 73.7125],
    description:
      "A romantic city of lakes, palaces and beautiful Rajasthani architecture.",
    attractions: ["Lake Pichola", "City Palace", "Saheliyon Ki Bari"],
    bestTime: "October–March",
    duration: "2–3 days",
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    type: "Heritage",
    emoji: "🕌",
    position: [27.1767, 78.0081],
    description:
      "A historic destination famous for Mughal architecture and the Taj Mahal.",
    attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    bestTime: "October–March",
    duration: "1–2 days",
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    type: "Culture",
    emoji: "🪔",
    position: [25.3176, 82.9739],
    description:
      "An ancient city on the Ganges, known for its ghats, temples and spiritual traditions.",
    attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Assi Ghat"],
    bestTime: "October–March",
    duration: "2–3 days",
  },
  {
    name: "Goa",
    state: "Goa",
    type: "Beaches",
    emoji: "🏖️",
    position: [15.2993, 74.124],
    description:
      "A coastal escape with beaches, Portuguese heritage, local cuisine and lively markets.",
    attractions: ["Baga Beach", "Fort Aguada", "Old Goa"],
    bestTime: "November–February",
    duration: "3–5 days",
  },
  {
    name: "Kochi",
    state: "Kerala",
    type: "Culture",
    emoji: "🌴",
    position: [9.9312, 76.2673],
    description:
      "A coastal city with historic streets, waterfront views and a rich blend of cultures.",
    attractions: ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace"],
    bestTime: "October–March",
    duration: "2–3 days",
  },
  {
    name: "Alleppey",
    state: "Kerala",
    type: "Nature",
    emoji: "🛶",
    position: [9.4981, 76.3388],
    description:
      "Experience Kerala's tranquil backwaters, green canals and traditional houseboats.",
    attractions: ["Alleppey Backwaters", "Alappuzha Beach", "Marari Beach"],
    bestTime: "November–February",
    duration: "2–3 days",
  },
  {
    name: "Shillong",
    state: "Meghalaya",
    type: "Nature",
    emoji: "🌿",
    position: [25.5788, 91.8933],
    description:
      "A green hill city surrounded by misty hills, waterfalls and beautiful landscapes.",
    attractions: ["Umiam Lake", "Elephant Falls", "Shillong Peak"],
    bestTime: "October–April",
    duration: "3–4 days",
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    type: "Adventure",
    emoji: "🧗",
    position: [30.0869, 78.2676],
    description:
      "A riverside destination known for yoga, spiritual experiences and outdoor adventures.",
    attractions: ["Ram Jhula", "Triveni Ghat", "Neer Garh Waterfall"],
    bestTime: "September–April",
    duration: "2–3 days",
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    type: "Heritage",
    emoji: "🏛️",
    position: [12.2958, 76.6394],
    description:
      "A heritage city famous for its royal palace, traditional markets and cultural history.",
    attractions: ["Mysore Palace", "Chamundi Hills", "Devaraja Market"],
    bestTime: "October–March",
    duration: "1–2 days",
  },
];

const destinationIcon = (emoji) =>
  L.divIcon({
    className: "bharatsafar-marker",
    html: `<span>${emoji}</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  });

function MapFocus({ destination }) {
  const map = useMap();

  useEffect(() => {
    if (destination) {
      map.flyTo(destination.position, 8, {
        duration: 0.8,
      });
    }
  }, [destination, map]);

  return null;
}

function Map() {
  const location = useLocation();
  const destinationFromExplore = location.state?.destination;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(() => {
  return (
    destinations.find(
      (destination) =>
        destination.name.toLowerCase() ===
        destinationFromExplore?.toLowerCase()
    ) || destinations[0]
  );
});

  const filteredDestinations = destinations.filter((destination) => {
    const query = search.trim().toLowerCase();

    return (
      destination.name.toLowerCase().includes(query) ||
      destination.state.toLowerCase().includes(query) ||
      destination.type.toLowerCase().includes(query)
    );
  });

  function selectDestination(destination) {
    setSelectedDestination(destination);
  }

  return (
    <div className="map-page">
      <section className="map-header">
        <p className="map-tag">YOUR NEXT ADVENTURE</p>
        <h1>Explore India on the Map</h1>
        <p>
          Discover destinations, explore their highlights and find inspiration
          for your next journey.
        </p>
      </section>

      <section className="map-content">
        <div className="map-main">
          <div className="map-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search a city, state or travel type..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search destinations"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="map-panel">
            <MapContainer
              center={selectedDestination.position}
              zoom={5}
              scrollWheelZoom
              className="india-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapFocus destination={selectedDestination} />

              {destinations.map((destination) => (
                <Marker
                  key={destination.name}
                  position={destination.position}
                  icon={destinationIcon(destination.emoji)}
                  eventHandlers={{
                    click: () => selectDestination(destination),
                  }}
                >
                  <Popup>
                    <strong>{destination.name}</strong>
                    <br />
                    {destination.state}
                    <br />
                    <button
                      type="button"
                      onClick={() => selectDestination(destination)}
                    >
                      View overview
                    </button>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <p className="map-hint">
            Tip: Click a marker on the map or select a destination from the
            list.
          </p>

          <div className="map-destination-list">
            <h2>Find your destination</h2>
            <p className="map-sidebar-description">
              {filteredDestinations.length} destinations available
            </p>

            {filteredDestinations.length > 0 ? (
              <div className="map-destination-grid">
                {filteredDestinations.map((destination) => (
                  <button
                    type="button"
                    key={destination.name}
                    className={`map-destination ${
                      selectedDestination.name === destination.name
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => selectDestination(destination)}
                  >
                    <span className="map-destination-icon">
                      {destination.emoji}
                    </span>
                    <span className="map-destination-text">
                      <strong>{destination.name}</strong>
                      <small>{destination.state}</small>
                    </span>
                    <span className="map-destination-arrow">→</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="map-no-results">
                No destinations found. Try another city or state.
              </p>
            )}
          </div>
        </div>

        <aside className="map-sidebar">
          {selectedDestination ? (
            <>
              <p className="map-tag">DESTINATION OVERVIEW</p>
              <span className="map-overview-emoji">
                {selectedDestination.emoji}
              </span>
              <h2>{selectedDestination.name}</h2>
              <p className="map-overview-state">
                📍 {selectedDestination.state}
              </p>

              <span className="map-type-badge">{selectedDestination.type}</span>

              <p className="map-overview-description">
                {selectedDestination.description}
              </p>

              <div className="map-overview-fact">
                <span>🗓️ Best time to visit</span>
                <strong>{selectedDestination.bestTime}</strong>
              </div>

              <div className="map-overview-fact">
                <span>⏳ Recommended duration</span>
                <strong>{selectedDestination.duration}</strong>
              </div>

              <div className="map-attractions">
                <h3>Popular attractions</h3>
                <ul>
                  {selectedDestination.attractions.map((attraction) => (
                    <li key={attraction}>{attraction}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="map-plan-button"
                onClick={() =>
                  navigate("/planner", {
                    state: { destination: selectedDestination.name },
                  })
                }
              >
                Plan This Trip →
              </button>
            </>
          ) : (
            <p>Select a destination to see its overview.</p>
          )}
        </aside>
      </section>
    </div>
  );
}

export default Map;
