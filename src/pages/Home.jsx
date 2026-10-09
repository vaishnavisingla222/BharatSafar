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
        </div>
      </section>
      <section className="features">
        <div className="section-heading">
          <p>TRAVEL SMARTER</p>
          <h2>Everything You Need for Your Journey</h2>
        </div>
      </section>
      <section className="features">
        <div className="feature-marquee">
          <div className="feature-track">
            <div className="feature-item">
              🗺️ <span>Explore Destinations</span>
            </div>

            <div className="feature-item">
              🧳 <span>Plan Your Trip</span>
            </div>

            <div className="feature-item">
              💰 <span>Manage Your Budget</span>
            </div>

            <div className="feature-item">
              🎉 <span>Discover Festivals</span>
            </div>

            {/* Duplicate items for continuous scrolling */}
            <div className="feature-item">
              🗺️ <span>Explore Destinations</span>
            </div>

            <div className="feature-item">
              🧳 <span>Plan Your Trip</span>
            </div>

            <div className="feature-item">
              💰 <span>Manage Your Budget</span>
            </div>

            <div className="feature-item">
              🎉 <span>Discover Festivals</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
