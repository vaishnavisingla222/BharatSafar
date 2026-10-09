import "./Budget.css";
import Navbar from "../components/Navbar";

function Budget() {
  return (
    <div className="budget-page">
      <Navbar />

      <section className="budget-header">
        <p className="budget-tag">TRAVEL SMARTER</p>
        <h1>Plan Your Travel Budget</h1>
        <p>
          Estimate your expenses and plan an unforgettable trip
          across India without overspending.
        </p>
      </section>

      <section className="budget-container">
        <div className="budget-card">
          <h2>💰 Calculate Your Trip Cost</h2>
          <p className="budget-subtitle">
            Enter your trip details to get started.
          </p>

          <div className="budget-field">
            <label>From</label>
            <input
              type="text"
              placeholder="Your current Location"
            />
          </div>

          <div className="budget-field">
            <label>Destination</label>
            <input
              type="text"
              placeholder="e.g. Manali, Goa, Jaipur"
            />
          </div>

          <div className="budget-row">
            <div className="budget-field">
              <label>Number of Travelers</label>
              <input type="number" min="1" placeholder="2" />
            </div>

            <div className="budget-field">
              <label>Duration (days)</label>
              <input type="number" min="1" placeholder="3" />
            </div>
          </div>

          <h3 className="expense-heading">Estimated Expenses</h3>

          <div className="budget-field">
            <label>Transportation (₹)</label>
            <input type="number" min="0" placeholder="2000" />
          </div>

          <div className="budget-field">
            <label>Accommodation (₹ per night)</label>
            <input type="number" min="0" placeholder="1500" />
          </div>

          <div className="budget-field">
            <label>Food (₹ per person, per day)</label>
            <input type="number" min="0" placeholder="500" />
          </div>

          <div className="budget-field">
            <label>Activities & Other Expenses (₹)</label>
            <input type="number" min="0" placeholder="1000" />
          </div>

          <button className="budget-btn">
            Calculate Budget
          </button>
        </div>

        <div className="budget-info">
          <div className="budget-info-icon">🧳</div>
          <h2>Travel Within Your Budget</h2>
          <p>
            Plan smarter by estimating transport, stays, food
            and activities before you begin your journey.
          </p>

          <div className="budget-tip">
            <span>💡</span>
            <div>
              <h3>Student Travel Tip</h3>
              <p>
                Compare transport options, travel in groups,
                and look for affordable stays to save money.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Budget;