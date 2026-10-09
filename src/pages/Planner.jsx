import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Planner.css";
import Navbar from "../components/Navbar";

function Planner() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "",
  });

  const [tripPlan, setTripPlan] = useState(null);
  const [error, setError] = useState("");
  const [editingTripId, setEditingTripId] = useState(null);

  useEffect(() => {
    const destination = location.state?.destination;

    if (destination) {
      setFormData((previousData) => ({
        ...previousData,
        destination: destination,
      }));
    }
  }, [location.state]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.from.trim() ||
      !formData.destination.trim() ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.travelers
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    if (
      formData.from.trim().toLowerCase() ===
      formData.destination.trim().toLowerCase()
    ) {
      setError("Starting location and destination must be different.");
      return;
    }

    if (formData.endDate < formData.startDate) {
      setError("End date cannot be before the start date.");
      return;
    }

    const existingTrips = JSON.parse(
      localStorage.getItem("bharatSafarTrips") || "[]",
    );

    let savedTrip;
    let updatedTrips;

    if (editingTripId !== null) {
      savedTrip = {
        id: editingTripId,
        ...formData,
      };

      updatedTrips = existingTrips.map((trip) =>
        trip.id === editingTripId ? savedTrip : trip,
      );
    } else {
      savedTrip = {
        id: Date.now(),
        ...formData,
      };

      updatedTrips = [...existingTrips, savedTrip];
    }

    localStorage.setItem("bharatSafarTrips", JSON.stringify(updatedTrips));

    setTripPlan(savedTrip);
    setEditingTripId(null);
    setError("");
  }

  function handleEditTrip() {
    setFormData({
      from: tripPlan.from,
      destination: tripPlan.destination,
      startDate: tripPlan.startDate,
      endDate: tripPlan.endDate,
      travelers: tripPlan.travelers,
    });

    setEditingTripId(tripPlan.id);
    setTripPlan(null);
  }

  return (
    <div className="planner-page">
      <Navbar />

      <section className="planner-header">
        <p className="planner-tag">PLAN YOUR JOURNEY</p>
        <h1>Plan Your Perfect Trip</h1>
        <p>
          Tell us about your journey and start creating your perfect India
          travel plan.
        </p>
      </section>

      <section className="planner-container">
        <form className="planner-card" onSubmit={handleSubmit}>
          <div className="planner-field">
            <label htmlFor="from">Starting Location</label>
            <input
              id="from"
              name="from"
              type="text"
              placeholder="e.g. Delhi"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>

          <div className="planner-field">
            <label htmlFor="destination">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="e.g. Manali"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="planner-row">
            <div className="planner-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                min={new Date().toLocaleDateString("en-CA")}
                required
              />
            </div>

            <div className="planner-field">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                min={
                  formData.startDate || new Date().toLocaleDateString("en-CA")
                }
                required
              />
            </div>
          </div>

          <div className="planner-field">
            <label htmlFor="travelers">Number of Travelers</label>
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              required
            >
              <option value="">Select travelers</option>
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6">6+ Travelers</option>
            </select>
          </div>

          {error && (
            <p className="planner-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="plan-trip-btn">
            ✨ {editingTripId !== null ? "Update Trip" : "Create Trip Plan"}
          </button>
        </form>
      </section>

      {tripPlan && (
        <section className="trip-summary">
          <p className="planner-tag">YOUR TRIP DETAILS</p>
          <h2>🎉 Your Trip Plan is Ready!</h2>

          <div className="trip-summary-grid">
            <div>
              <span>📍 Route</span>
              <strong>
                {tripPlan.from} → {tripPlan.destination}
              </strong>
            </div>

            <div>
              <span>🗓️ Start Date</span>
              <strong>{tripPlan.startDate}</strong>
            </div>

            <div>
              <span>🗓️ End Date</span>
              <strong>{tripPlan.endDate}</strong>
            </div>

            <div>
              <span>👥 Travelers</span>
              <strong>
                {tripPlan.travelers === "6"
                  ? "6+ Travelers"
                  : `${tripPlan.travelers} ${
                      tripPlan.travelers === "1" ? "Traveler" : "Travelers"
                    }`}
              </strong>
            </div>
          </div>

          <button
            type="button"
            className="edit-trip-btn"
            onClick={handleEditTrip}
          >
            Edit Trip Details
          </button>
        </section>
      )}
    </div>
  );
}

export default Planner;
