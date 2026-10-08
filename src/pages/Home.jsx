import Navbar from "../components/Navbar";
import "./Home.css";
import banner from "../assets/banner.png";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <img src={banner} alt="BharatSafar Banner" className="hero-banner" />

        <div className="hero-content">

          <h1>
            Your Journey Across
            <span> Incredible India 🇮🇳</span>
          </h1>

          <p className="hero-description">
            Discover beautiful destinations, plan your trips, explore hidden
            gems, and travel smarter with BharatSafar.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore India</button>
            <button className="secondary-btn">Plan My Trip</button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="section-heading">
          <p>TRAVEL SMARTER</p>
          <h2>Everything You Need for Your Journey</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span>🗺️</span>
            <h3>Explore Destinations</h3>
            <p>Discover famous destinations and hidden gems across India.</p>
          </div>

          <div className="feature-card">
            <span>🧳</span>
            <h3>Plan Your Trip</h3>
            <p>Create your perfect itinerary based on your travel plans.</p>
          </div>

          <div className="feature-card">
            <span>💰</span>
            <h3>Manage Your Budget</h3>
            <p>Estimate your travel expenses and plan within your budget.</p>
          </div>

          <div className="feature-card">
            <span>🎉</span>
            <h3>Discover Festivals</h3>
            <p>
              Find festivals and cultural experiences happening across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
  <section
    className="hero"
    style={{ backgroundImage: `url(${banner})` }}
  ></section>;
}

export default Home;
