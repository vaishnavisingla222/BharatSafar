
import "./SavedTrips.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function SavedTrips() {
  return (
    <div className="saved-trips-page">
      <Navbar />

      <section className="saved-header">
        <p className="saved-tag">YOUR TRAVEL COLLECTION</p>
        <h1>Your Saved Trips</h1>
        <p>
          Keep your favourite destinations and travel plans
          together in one place.
        </p>
      </section>

      <section className="saved-content">
        <div className="saved-empty">
          <div className="saved-illustration">🧳</div>

          <h2>Your next adventure awaits!</h2>

          <p>
            You haven't saved any trips yet. Explore India,
            discover places you love, and start building
            your travel collection.
          </p>

          <Link to="/explore" className="saved-explore-btn">
            Explore Destinations →
          </Link>
        </div>

        <div className="saved-tip">
          <span>💡</span>
          <p>
            <strong>Travel tip:</strong> Save destinations you
            want to visit so you can plan your next adventure
            more easily.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SavedTrips;
