import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import banner from "../assets/banner.png";

function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const welcomeMessage = `Namaste and welcome to Bharat Safar, your companion
for exploring the incredible beauty of India!

Discover amazing destinations, explore vibrant festivals,
plan your trips, estimate your travel budget, and save your
favourite journeys.

Whether you are dreaming of the mountains, relaxing beaches,
royal palaces, or peaceful spiritual destinations, Bharat Safar
is here to help you plan your next adventure.

Choose your destination, start planning, and get ready to
experience the incredible diversity of India.

Happy travelling, and enjoy your journey with Bharat Safar!`;

  
const handleWelcomeAudio = () => {
  if (!("speechSynthesis" in window)) {
    alert("Audio guidance is not supported in this browser.");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(welcomeMessage);
  speech.lang = "en-IN";
  speech.rate = 0.88;
  speech.pitch = 1;

  const voices = window.speechSynthesis.getVoices();

  const indianVoice = voices.find(
    (voice) =>
      voice.lang.toLowerCase() === "en-in" &&
      /natural|neural|premium/i.test(voice.name)
  ) || voices.find(
    (voice) => voice.lang.toLowerCase() === "en-in"
  );

  if (indianVoice) {
    speech.voice = indianVoice;
  }

  speech.onstart = () => setIsSpeaking(true);
  speech.onend = () => setIsSpeaking(false);
  speech.onerror = () => setIsSpeaking(false);

  window.speechSynthesis.speak(speech);
};

  return (
    <div className="home">
      <section className="hero">
        <img src={banner} alt="BharatSafar Banner" className="hero-banner" />
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
        <div className="hero-content">
          <h1>
            Your Journey Across <span> Incredible India 🇮🇳</span>
          </h1>

          <p className="hero-description">
            Discover beautiful destinations, plan your trips, explore hidden
            gems, and travel smarter with BharatSafar.
          </p>
          <Link to="/explore" className="explore-btn">
            Explore Destinations →
          </Link>
        </div>
        <button className="welcome-audio-btn" onClick={handleWelcomeAudio}>
          {isSpeaking
            ? "⏹ Stop Welcome Message"
            : "🔊 Listen to Welcome Message"}
        </button>
      </section>

      {/* Explore India Through Videos */}
      <section className="video-section">
        <div className="video-heading">
          <span className="video-tag">EXPERIENCE INDIA</span>
          <h2>India Through Your Lens</h2>
          <p>
            Discover India's breathtaking landscapes, vibrant cultures, and
            unforgettable travel experiences.
          </p>
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/-u_jZQgxkMU?rel=0&modestbranding=1"
            title="Discover India with BharatSafar"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <p className="video-caption">
          <span>✦</span> Discover India. Plan your next adventure with
          BharatSafar.
        </p>
      </section>
    </div>
  );
}

export default Home;
