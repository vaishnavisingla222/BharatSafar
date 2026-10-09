
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SavedTrips.css";

function SavedTrips() {
  const [savedTrips, setSavedTrips] = useState(() => {
    try {
      const trips = JSON.parse(
        localStorage.getItem("bharatSafarTrips") || "[]"
      );

      return Array.isArray(trips) ? trips : [];
    } catch {
      return [];
    }
  });

  function handleDelete(tripId) {
    const updatedTrips = savedTrips.filter(
      (trip) => trip.id !== tripId
    );

    localStorage.setItem(
      "bharatSafarTrips",
      JSON.stringify(updatedTrips)
    );

    setSavedTrips(updatedTrips);
  }

  return (
    <div className="saved-trips-page">
      <Navbar />

      <main className="saved-trips-container">
        <header className="saved-trips-header">
          <p className="saved-trips-tag">YOUR JOURNEY COLLECTION</p>
          <h1>My Saved Trips</h1>
          <p>
            All your planned journeys, together in one place.
          </p>
        </header>

        {savedTrips.length === 0 ? (
          <section className="saved-empty">
            <div className="saved-empty-icon">🧳</div>
            <h2>No trips saved yet</h2>
            <p>
              Your next adventure starts with a plan.
              Create a trip and it will appear here.
            </p>

            <Link to="/planner" className="saved-plan-btn">
              Plan a Trip
            </Link>

            <Link to="/explore" className="saved-explore-link">
              Explore Destinations
            </Link>
          </section>
        ) : (
          <>
            <p className="saved-trips-count">
              {savedTrips.length}{" "}
              {savedTrips.length === 1 ? "trip" : "trips"} saved
            </p>

            <div className="saved-trips-grid">
              {savedTrips.map((trip) => (
                <article className="saved-trip-card" key={trip.id}>
                  <div className="saved-trip-card-top">
                    <span className="saved-trip-icon">✈️</span>
                    <span className="saved-trip-label">
                      SAVED TRIP
                    </span>
                  </div>

                  <h2>
                    {trip.from} → {trip.destination}
                  </h2>

                  <div className="saved-trip-details">
                    <p>
                      <span>🗓️ Start:</span> {trip.startDate}
                    </p>
                    <p>
                      <span>🗓️ End:</span> {trip.endDate}
                    </p>
                    <p>
                      <span>👥 Travelers:</span>{" "}
                      {trip.travelers === "6"
                        ? "6+ Travelers"
                        : `${trip.travelers} ${
                            trip.travelers === "1"
                              ? "Traveler"
                              : "Travelers"
                          }`}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="saved-delete-btn"
                    onClick={() => handleDelete(trip.id)}
                  >
                    🗑️ Delete Trip
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default SavedTrips;
