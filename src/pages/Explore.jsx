
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

import kerala from "../assets/kerala.png";
import RishikeshMussorie from "../assets/RishikeshMussorie.png";
import sevenSister from "../assets/sevenSister.png";
import west from "../assets/west.png";
import shimla from "../assets/shimla.jpg"
import manali from "../assets/manali.jpeg"
import agra from "../assets/agra.webp"
import varanasi from "../assets/varanasi.jpeg"
import mysore from "../assets/mysore.avif"
import goa from "../assets/goa.jpeg"

const destinations = [
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    category: "Mountains",
    image: shimla,
    description: "Enjoy pine forests, colonial architecture, and scenic Himalayan views.",
    attractions: ["The Ridge", "Mall Road", "Jakhoo Temple"],
    bestTime: "March to June",
    duration: "3–4 days",
    budget: "₹5,000–₹9,000",
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    category: "Mountains",
    image: manali,
    description: "Explore mountain valleys, rivers, adventure activities, and snowy landscapes.",
    attractions: ["Solang Valley", "Old Manali", "Hadimba Temple"],
    bestTime: "March to June",
    duration: "4–5 days",
    budget: "₹6,000–₹12,000",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    category: "Heritage",
    image: west,
    description: "Discover Rajasthan's royal forts, colorful markets, and pink-hued architecture.",
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹4,000–₹8,000",
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    category: "Heritage",
    image: west,
    description: "Experience beautiful lakes, palaces, and the romantic charm of Rajasthan.",
    attractions: ["Lake Pichola", "City Palace", "Fateh Sagar Lake"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹5,000–₹9,000",
  },
  {
    name: "Agra",
    state: "Uttar Pradesh",
    category: "Heritage",
    image: agra,
    description: "Visit world-famous Mughal monuments and explore India's rich history.",
    attractions: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    bestTime: "October to March",
    duration: "1–2 days",
    budget: "₹3,000–₹6,000",
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    category: "Spiritual",
    image: varanasi,
    description: "Discover sacred ghats, ancient temples, and the spiritual atmosphere of the Ganges.",
    attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Assi Ghat"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹3,000–₹7,000",
  },
  {
    name: "Goa",
    state: "Goa",
    category: "Beaches",
    image: goa,
    description: "Relax on tropical beaches and discover Portuguese-influenced architecture.",
    attractions: ["Baga Beach", "Fort Aguada", "Old Goa"],
    bestTime: "November to February",
    duration: "3–5 days",
    budget: "₹6,000–₹12,000",
  },
  {
    name: "Kochi",
    state: "Kerala",
    category: "Culture",
    image: kerala,
    description: "Explore coastal heritage, historic streets, art, and Kerala's local cuisine.",
    attractions: ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹4,000–₹8,000",
  },
  {
    name: "Alleppey",
    state: "Kerala",
    category: "Nature",
    image: kerala,
    description: "Enjoy peaceful backwaters, houseboats, and Kerala's lush green landscapes.",
    attractions: ["Alleppey Backwaters", "Alappuzha Beach", "Kuttanad"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹5,000–₹10,000",
  },
  {
    name: "Shillong",
    state: "Meghalaya",
    category: "Nature",
    image: sevenSister,
    description: "Discover misty hills, waterfalls, pine forests, and Northeast India's natural beauty.",
    attractions: ["Umiam Lake", "Elephant Falls", "Shillong Peak"],
    bestTime: "October to April",
    duration: "3–4 days",
    budget: "₹6,000–₹12,000",
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    category: "Adventure",
    image: RishikeshMussorie,
    description: "Combine Himalayan scenery with river rafting, yoga, and riverside sunsets.",
    attractions: ["Laxman Jhula area", "Triveni Ghat", "Neer Garh Waterfall"],
    bestTime: "September to November and March to May",
    duration: "2–3 days",
    budget: "₹3,000–₹7,000",
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    category: "Heritage",
    image: mysore,
    description: "Explore royal palaces, traditional markets, and Karnataka's cultural heritage.",
    attractions: ["Mysore Palace", "Chamundi Hills", "Devaraja Market"],
    bestTime: "October to March",
    duration: "2–3 days",
    budget: "₹4,000–₹8,000",
  },
];

const categories = [
  "All",
  "Mountains",
  "Heritage",
  "Spiritual",
  "Beaches",
  "Culture",
  "Nature",
  "Adventure",
];

function Explore() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.state.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || destination.category === category;

    return matchesSearch && matchesCategory;
  });

  const planTrip = (destination) => {
    navigate("/planner", {
      state: { destination: destination.name },
    });
  };

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore India</h1>
        <p>Discover incredible destinations, cultures, and experiences across India.</p>
      </div>

      <div className="explore-controls">
        <input
          type="text"
          placeholder="Search destination or state..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="destination-grid">
        {filteredDestinations.map((destination) => (
          <div className="destination-card" key={destination.name}>
            <div className="card-image">
              <img src={destination.image} alt={destination.name} />
            </div>

            <div className="card-content">
              <span className="destination-category">
                {destination.category}
              </span>

              <h3>{destination.name}</h3>
              <p className="destination-state">{destination.state}</p>
              <p>{destination.description}</p>

              <button
                className="view-details-button"
                onClick={() => setSelectedDestination(destination)}
              >
                View Overview
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <p className="no-destinations">
          No destinations found. Try another search or category.
        </p>
      )}

      {selectedDestination && (
        <div
          className="destination-modal-overlay"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="destination-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedDestination(null)}
              aria-label="Close overview"
            >
              &times;
            </button>

            <div className="modal-image">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
              />
            </div>

            <div className="modal-content">
              <span className="destination-category">
                {selectedDestination.category}
              </span>

              <h2>{selectedDestination.name}</h2>
              <p className="destination-state">{selectedDestination.state}</p>
              <p>{selectedDestination.description}</p>

              <h3>Top Attractions</h3>
              <ul>
                {selectedDestination.attractions.map((attraction) => (
                  <li key={attraction}>{attraction}</li>
                ))}
              </ul>

              <p>
                <strong>Best time:</strong> {selectedDestination.bestTime}
              </p>
              <p>
                <strong>Suggested duration:</strong>{" "}
                {selectedDestination.duration}
              </p>
              <p>
                <strong>Estimated budget:</strong> {selectedDestination.budget} per person
              </p>

              <button
                className="plan-trip-button"
                onClick={() => planTrip(selectedDestination)}
              >
                Plan This Trip
              </button>

              <button
                className="view-map-button"
                onClick={() =>
                  navigate("/map", {
                    state: { destination: selectedDestination.name },
                  })
                }
              >
                View on Map
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;
