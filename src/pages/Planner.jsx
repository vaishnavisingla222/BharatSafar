import "./Planner.css";
import Navbar from "../components/Navbar";

function Planner() {
  return (
    <div className="planner-page">
      <Navbar />

      <section className="planner-header">
        <p className="planner-tag">PLAN YOUR JOURNEY</p>

        <h1>Plan Your Perfect Trip</h1>

        <p>
          Tell us a little about your journey and start creating
          your perfect India travel plan.
        </p>
      </section>

      <section className="planner-container">
        <div className="planner-card">

          <div className="planner-field">
            <label>From</label>
            <input
              type="text"
              placeholder="Enter starting location"
            />
          </div>

          <div className="planner-field">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>

          <div className="planner-row">
            <div className="planner-field">
              <label>Start Date</label>
              <input type="date" />
            </div>

            <div className="planner-field">
              <label>End Date</label>
              <input type="date" />
            </div>
          </div>

          <div className="planner-field">
            <label>Number of Travelers</label>

            <select>
              <option value="">Select travelers</option>
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6">6+ Travelers</option>
            </select>
          </div>

          <button className="plan-trip-btn">
            ✨ Create Trip Plan
          </button>

        </div>
      </section>
    </div>
  );
}

export default Planner;