import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
import Navbar from "../components/Navbar";
import kerala from "../assets/kerala.png";
import RishikeshMussorie from "../assets/RishikeshMussorie.png";
import sevenSister from "../assets/sevenSister.png";
import west from "../assets/west.png";

const destinations = [
  {
    name: "Rishikesh - Mussoorie",
    state: "Uttarakhand",
    category: "Mountains",
    icon: "🏔️",
    image: RishikeshMussorie,
    description: "Mountain views, river adventures and peaceful escapes.",
    attractions: ["Laxman Jhula area", "Kempty Falls", "Gun Hill"],
    duration: "3–4 days",
    bestTime: "March–June, September–November",
    budget: "₹5,000–₹10,000 per person",
  },
  {
    name: "Kerala",
    state: "Kerala",
    category: "Beaches",
    icon: "🌊",
    image: kerala,
    description: "Discover tropical coastlines, backwaters and greenery.",
    attractions: ["Alleppey backwaters", "Munnar", "Kovalam Beach"],
    duration: "5–7 days",
    bestTime: "October–March",
    budget: "₹8,000–₹15,000 per person",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    category: "Heritage",
    icon: "🏰",
    image: west,
    description: "Explore royal palaces, historic forts and colourful markets.",
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace"],
    duration: "2–3 days",
    bestTime: "October–March",
    budget: "₹4,000–₹8,000 per person",
  },
  {
    name: "Seven Sisters",
    state: "Northeast India",
    category: "Culture",
    icon: "🌿",
    image: sevenSister,
    description: "Experience lush landscapes and diverse local cultures.",
    attractions: ["Kaziranga National Park", "Shillong", "Tawang"],
    duration: "5–8 days",
    bestTime: "October–April",
    budget: "₹10,000–₹20,000 per person",
  },
];

const categories = [
  "All",
  "Mountains",
  "Beaches",
  "Heritage",
  "Culture",
];

function Explore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  const filteredDestinations = destinations.filter((destination) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      destination.name.toLowerCase().includes(searchText) ||
      destination.state.toLowerCase().includes(searchText) ||
      destination.category.toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" ||
      destination.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-page">
      <Navbar />

      <section className="explore-header">
        <p className="explore-tag">DISCOVER INDIA</p>
        <h1>Where Will Your Next Journey Take You?</h1>
        <p>
          From peaceful mountains to sunny beaches and royal cities,
          discover a destination that feels right for you.
        </p>
      </section>

      <section className="explore-content">
        <div className="explore-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search destinations, states or categories..."
            aria-label="Search destinations"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="explore-results-heading">
          <h2>
            {activeCategory === "All"
              ? "Discover Destinations"
              : `${activeCategory} Getaways`}
          </h2>
          <p>
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "destination"
              : "destinations"}{" "}
            found
          </p>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="destination-grid">
            {filteredDestinations.map((destination) => (
              <article
                className="explore-card"
                key={destination.name}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${destination.name}`}
                onClick={() => setSelectedDestination(destination)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedDestination(destination);
                  }
                }}
              >
                <div
                  className={`card-image ${destination.category.toLowerCase()}`}
                >
                  <img src={destination.image} alt={destination.name} />
                </div>

                <div className="card-info">
                  <span className="destination-category">
                    {destination.icon} {destination.category}
                  </span>
                  <h3>{destination.name}</h3>
                  <p className="destination-state">
                    📍 {destination.state}
                  </p>
                  <p className="destination-description">
                    {destination.description}
                  </p>
                  <span className="view-details">
                    View destination details →
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="explore-empty">
            <h3>No destinations found</h3>
            <p>
              Try another search or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Show all destinations
            </button>
          </div>
        )}
      </section>

      {selectedDestination && (
        <div
          className="destination-modal-overlay"
          onClick={() => setSelectedDestination(null)}
        >
          <section
            className="destination-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="destination-modal-close"
              aria-label="Close destination details"
              onClick={() => setSelectedDestination(null)}
            >
              ×
            </button>

            <img
              className="destination-modal-image"
              src={selectedDestination.image}
              alt={selectedDestination.name}
            />

            <div className="destination-modal-content">
              <p className="explore-tag">
                {selectedDestination.icon} {selectedDestination.category}
              </p>

              <h2 id="destination-modal-title">
                {selectedDestination.name}
              </h2>

              <p className="destination-modal-location">
                📍 {selectedDestination.state}
              </p>

              <p className="destination-modal-description">
                {selectedDestination.description}
              </p>

              <h3>Popular Attractions</h3>
              <ul>
                {selectedDestination.attractions.map((attraction) => (
                  <li key={attraction}>{attraction}</li>
                ))}
              </ul>

              <div className="destination-modal-facts">
                <div>
                  <span>Recommended Duration</span>
                  <strong>{selectedDestination.duration}</strong>
                </div>

                <div>
                  <span>Best Time to Visit</span>
                  <strong>{selectedDestination.bestTime}</strong>
                </div>

                <div>
                  <span>Estimated Budget</span>
                  <strong>{selectedDestination.budget}</strong>
                </div>
              </div>

              <p className="destination-budget-note">
                Budget figures are indicative estimates, not live prices.
                Actual costs depend on your travel dates and preferences.
              </p>

              <button
                type="button"
                className="destination-plan-btn"
                onClick={() => {
                  const destination = selectedDestination.name;
                  setSelectedDestination(null);
                  navigate("/planner", {
                    state: { destination },
                  });
                }}
              >
                Plan This Trip →
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Explore;