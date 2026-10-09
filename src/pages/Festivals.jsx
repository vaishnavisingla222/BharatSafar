
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Festivals.css";

const festivals = [
  {
    name: "Diwali",
    location: "Jaipur, Rajasthan",
    month: "October – November",
    category: "Cultural",
    icon: "🪔",
    description:
      "Celebrate the festival of lights with glowing diyas, decorated streets, sweets, and vibrant markets.",
    traditions: [
      "Lighting diyas and decorating homes",
      "Exploring festive markets",
      "Enjoying traditional sweets and rangoli",
    ],
    bestPlaces: ["Jaipur", "Varanasi", "Amritsar"],
    tip: "Book accommodation early and check local event and firework rules.",
    destination: "Jaipur",
  },
  {
    name: "Holi",
    location: "Mathura & Vrindavan, Uttar Pradesh",
    month: "February – March",
    category: "Cultural",
    icon: "🎨",
    description:
      "Welcome spring with colours, music, joyful gatherings, and centuries-old traditions.",
    traditions: [
      "Playing with colours",
      "Attending traditional celebrations",
      "Enjoying festive sweets such as gujiya",
    ],
    bestPlaces: ["Mathura", "Vrindavan", "Jaipur"],
    tip: "Plan transport and accommodation well in advance during peak celebrations.",
    destination: "Mathura",
  },
  {
    name: "Navratri",
    location: "Ahmedabad, Gujarat",
    month: "September – October",
    category: "Dance & Music",
    icon: "💃",
    description:
      "Experience energetic Garba and Dandiya nights filled with traditional music, colourful outfits, and devotion.",
    traditions: [
      "Participating in Garba and Dandiya",
      "Wearing traditional attire",
      "Visiting decorated temples",
    ],
    bestPlaces: ["Ahmedabad", "Vadodara", "Surat"],
    tip: "Check event schedules and ticket requirements before travelling.",
    destination: "Ahmedabad",
  },
  {
    name: "Onam",
    location: "Kerala",
    month: "August – September",
    category: "Cultural",
    icon: "🌸",
    description:
      "Discover Kerala's harvest festival through floral decorations, traditional feasts, cultural performances, and boat races.",
    traditions: [
      "Creating Pookalam floral designs",
      "Enjoying the Onam Sadya feast",
      "Watching traditional performances and boat races",
    ],
    bestPlaces: ["Kochi", "Alleppey", "Thiruvananthapuram"],
    tip: "Reserve popular backwater stays early, especially during the festival period.",
    destination: "Kochi",
  },
  {
    name: "Durga Puja",
    location: "Kolkata, West Bengal",
    month: "September – October",
    category: "Religious",
    icon: "🙏",
    description:
      "Explore magnificent pandals, artistic installations, cultural performances, and celebrations honouring Goddess Durga.",
    traditions: [
      "Visiting decorated pandals",
      "Watching cultural performances",
      "Experiencing traditional food and festivities",
    ],
    bestPlaces: ["Kolkata", "Howrah"],
    tip: "Use public transport where possible because popular areas can be crowded.",
    destination: "Kolkata",
  },
  {
    name: "Pushkar Camel Fair",
    location: "Pushkar, Rajasthan",
    month: "Usually October – November",
    category: "Fair",
    icon: "🐪",
    description:
      "Experience a lively desert-town fair known for traditional markets, cultural performances, and Rajasthan's local heritage.",
    traditions: [
      "Exploring handicraft stalls",
      "Watching cultural performances",
      "Discovering local Rajasthani cuisine",
    ],
    bestPlaces: ["Pushkar", "Ajmer"],
    tip: "Check the official event dates before booking your trip.",
    destination: "Pushkar",
  },
  {
    name: "Durga Puja & Dussehra",
    location: "Mysuru, Karnataka",
    month: "September – October",
    category: "Religious",
    icon: "🏰",
    description:
      "Witness Mysuru's royal Dasara traditions, illuminated palace, cultural programmes, and festive processions.",
    traditions: [
      "Viewing the illuminated Mysore Palace",
      "Attending cultural programmes",
      "Exploring local festive markets",
    ],
    bestPlaces: ["Mysuru"],
    tip: "Check official programme announcements for procession timings and access restrictions.",
    destination: "Mysuru",
  },
  {
    name: "Hornbill Festival",
    location: "Kisama, Nagaland",
    month: "December",
    category: "Dance & Music",
    icon: "🥁",
    description:
      "Discover the cultural heritage of Nagaland through traditional performances, crafts, food, and music.",
    traditions: [
      "Watching cultural performances",
      "Exploring indigenous arts and crafts",
      "Sampling Naga cuisine",
    ],
    bestPlaces: ["Kisama", "Kohima"],
    tip: "Check travel permits and local entry requirements before departure.",
    destination: "Shillong",
  },
];

const categories = [
  "All",
  "Cultural",
  "Religious",
  "Dance & Music",
  "Fair",
];

function Festivals() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedFestival, setSelectedFestival] = useState(null);

  const filteredFestivals = festivals.filter((festival) => {
    const query = search.toLowerCase();

    const matchesSearch =
      festival.name.toLowerCase().includes(query) ||
      festival.location.toLowerCase().includes(query) ||
      festival.bestPlaces.some((place) =>
        place.toLowerCase().includes(query)
      );

    const matchesCategory =
      category === "All" || festival.category === category;

    return matchesSearch && matchesCategory;
  });

  function openMap(festival) {
    navigate("/map", {
      state: { destination: festival.destination },
    });
  }

  function planTrip(festival) {
    navigate("/planner", {
      state: { destination: festival.destination },
    });
  }

  return (
    <div className="festival-page">
      <section className="festival-header">
        <p className="festival-tag">✦ CELEBRATE INDIA ✦</p>

        <h1>Experience India's Festivals</h1>

        <p>
          Discover the colours, traditions, music, and celebrations
          that make India's festivals truly special.
        </p>
      </section>

      <section className="festival-content">
        <div className="festival-controls">
          <input
            type="text"
            placeholder="Search festivals or destinations..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search festivals"
          />

          <div className="festival-filters">
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

        <p className="festival-result-count">
          Showing {filteredFestivals.length}{" "}
          {filteredFestivals.length === 1 ? "festival" : "festivals"}
        </p>

        <div className="festival-grid">
          {filteredFestivals.map((festival) => (
            <button
              type="button"
              className="festival-card"
              key={festival.name}
              onClick={() => setSelectedFestival(festival)}
            >
              <div className="festival-icon">{festival.icon}</div>

              <div className="festival-info">
                <span className="festival-category">
                  {festival.category}
                </span>

                <h3>{festival.name}</h3>

                <p className="festival-location">
                  📍 {festival.location}
                </p>

                <span className="festival-month">
                  🗓️ {festival.month}
                </span>

                <p className="festival-description">
                  {festival.description}
                </p>

                <span className="festival-card-link">
                  Discover festival <span aria-hidden="true">↗</span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="festival-empty">
            <span>🔎</span>
            <h3>No festivals found</h3>
            <p>Try another festival name, destination, or category.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {selectedFestival && (
        <div
          className="festival-modal-overlay"
          onClick={() => setSelectedFestival(null)}
        >
          <section
            className="festival-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="festival-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="festival-modal-close"
              aria-label="Close festival details"
              onClick={() => setSelectedFestival(null)}
            >
              ×
            </button>

            <div className="festival-modal-banner">
              <span>{selectedFestival.icon}</span>
              <p>INDIA'S CULTURAL JOURNEY</p>
            </div>

            <div className="festival-modal-body">
              <span className="festival-category">
                {selectedFestival.category}
              </span>

              <h2 id="festival-modal-title">
                {selectedFestival.name}
              </h2>

              <p className="festival-modal-description">
                {selectedFestival.description}
              </p>

              <div className="festival-detail-item">
                <strong>📍 Main location</strong>
                <span>{selectedFestival.location}</span>
              </div>

              <div className="festival-detail-item">
                <strong>🗓️ Typical period</strong>
                <span>{selectedFestival.month}</span>
              </div>

              <h3>Traditions and experiences</h3>
              <ul className="festival-traditions">
                {selectedFestival.traditions.map((tradition) => (
                  <li key={tradition}>{tradition}</li>
                ))}
              </ul>

              <h3>Places to explore</h3>
              <div className="festival-place-tags">
                {selectedFestival.bestPlaces.map((place) => (
                  <span key={place}>{place}</span>
                ))}
              </div>

              <div className="festival-travel-tip">
                <strong>Travel tip</strong>
                <p>{selectedFestival.tip}</p>
              </div>

              <div className="festival-modal-actions">
                <button
                  className="festival-primary-button"
                  onClick={() => planTrip(selectedFestival)}
                >
                  Plan a Trip
                </button>

                <button
                  className="festival-secondary-button"
                  onClick={() => openMap(selectedFestival)}
                >
                  View on Map
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Festivals;
