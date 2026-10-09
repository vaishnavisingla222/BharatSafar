import { useState } from "react";
import "./Budget.css";

function Budget() {
  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    travelers: "2",
    duration: "3",
    transport: "",
    accommodation: "",
    food: "",
    activities: "",
  });

  const [participants, setParticipants] = useState([
    { name: "Traveller 1", paid: "" },
    { name: "Traveller 2", paid: "" },
  ]);

  const [calculated, setCalculated] = useState(false);

  const travelerCount = Math.max(
    1,
    Math.min(20, Number(formData.travelers) || 1)
  );

  const duration = Math.max(1, Number(formData.duration) || 1);
  const nights = Math.max(0, duration - 1);

  const transport = Number(formData.transport) || 0;
  const accommodation = Number(formData.accommodation) || 0;
  const food = Number(formData.food) || 0;
  const activities = Number(formData.activities) || 0;

  const accommodationTotal = accommodation * nights;
  const foodTotal = food * travelerCount * duration;

  const totalCost =
    transport + accommodationTotal + foodTotal + activities;

  const costPerPerson = totalCost / travelerCount;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setCalculated(false);

    if (name === "travelers") {
      const count = Math.max(
        1,
        Math.min(20, Number(value) || 1)
      );

      setParticipants((previous) =>
        Array.from({ length: count }, (_, index) =>
          previous[index] || {
            name: `Traveller ${index + 1}`,
            paid: "",
          }
        )
      );
    }
  }

  function handleParticipantChange(index, field, value) {
    setParticipants((previous) =>
      previous.map((participant, i) =>
        i === index
          ? { ...participant, [field]: value }
          : participant
      )
    );
  }

  function handleCalculate(event) {
    event.preventDefault();

    setParticipants((previous) =>
      previous.map((participant, index) => ({
        ...participant,
        name: participant.name.trim() || `Traveller ${index + 1}`,
      }))
    );

    setCalculated(true);
  }

  function calculateSettlements() {
    const totalPaid = participants.reduce(
      (sum, participant) => sum + (Number(participant.paid) || 0),
      0
    );

    const share = totalPaid / travelerCount;

    const balances = participants.map((participant, index) => ({
      name: participant.name.trim() || `Traveller ${index + 1}`,
      balance: (Number(participant.paid) || 0) - share,
    }));

    const creditors = balances
      .filter((person) => person.balance > 0.005)
      .map((person) => ({ ...person }));

    const debtors = balances
      .filter((person) => person.balance < -0.005)
      .map((person) => ({ ...person }));

    const settlements = [];
    let debtorIndex = 0;
    let creditorIndex = 0;

    while (
      debtorIndex < debtors.length &&
      creditorIndex < creditors.length
    ) {
      const amount = Math.min(
        -debtors[debtorIndex].balance,
        creditors[creditorIndex].balance
      );

      settlements.push({
        from: debtors[debtorIndex].name,
        to: creditors[creditorIndex].name,
        amount: Math.round(amount * 100) / 100,
      });

      debtors[debtorIndex].balance += amount;
      creditors[creditorIndex].balance -= amount;

      if (Math.abs(debtors[debtorIndex].balance) < 0.005) {
        debtorIndex++;
      }

      if (Math.abs(creditors[creditorIndex].balance) < 0.005) {
        creditorIndex++;
      }
    }

    return { totalPaid, share, settlements };
  }

  const settlementData = calculateSettlements();

  const money = (amount) =>
    `₹${amount.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="budget-page">

      <section className="budget-header">
        <p className="budget-tag">TRAVEL SMARTER</p>
        <h1>Group Travel Budgeter</h1>
        <p>
          Plan your expenses, split costs fairly, and
          make group trips across India easier.
        </p>
      </section>

      <section className="budget-container">
        <form className="budget-card" onSubmit={handleCalculate}>
          <h2>Plan Your Group Trip</h2>
          <p className="budget-subtitle">
            Enter your trip details and estimated expenses.
          </p>

          <div className="budget-field">
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

          <div className="budget-field">
            <label htmlFor="destination">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="e.g. Manali, Goa, Jaipur"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="budget-row">
            <div className="budget-field">
              <label htmlFor="travelers">Travellers</label>
              <input
                id="travelers"
                name="travelers"
                type="number"
                min="1"
                max="20"
                value={formData.travelers}
                onChange={handleChange}
                required
              />
            </div>

            <div className="budget-field">
              <label htmlFor="duration">Duration (days)</label>
              <input
                id="duration"
                name="duration"
                type="number"
                min="1"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h3 className="expense-heading">Estimated Group Expenses</h3>

          <div className="budget-field">
            <label htmlFor="transport">
              Transportation (₹, entire group)
            </label>
            <input
              id="transport"
              name="transport"
              type="number"
              min="0"
              placeholder="2000"
              value={formData.transport}
              onChange={handleChange}
              required
            />
          </div>

          <div className="budget-field">
            <label htmlFor="accommodation">
              Accommodation (₹ per night, entire group)
            </label>
            <input
              id="accommodation"
              name="accommodation"
              type="number"
              min="0"
              placeholder="1500"
              value={formData.accommodation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="budget-field">
            <label htmlFor="food">
              Food (₹ per person, per day)
            </label>
            <input
              id="food"
              name="food"
              type="number"
              min="0"
              placeholder="500"
              value={formData.food}
              onChange={handleChange}
              required
            />
          </div>

          <div className="budget-field">
            <label htmlFor="activities">
              Activities & Other Expenses (₹, entire group)
            </label>
            <input
              id="activities"
              name="activities"
              type="number"
              min="0"
              placeholder="1000"
              value={formData.activities}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="budget-btn">
            Calculate Trip Budget
          </button>
        </form>

        <div className="budget-info">
          <h2>Travel Smarter, Together</h2>
          <p>
            Plan group expenses first, then record how much
            each traveller actually pays.
          </p>

          <div className="budget-tip">
            <div>
              <h3>Student Travel Tip</h3>
              <p>
                Agree on a shared budget before booking.
                Splitting costs helps everyone understand
                their contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {calculated && (
        <section className="budget-results">
          <h2>Your Trip Budget</h2>

          <p>
            {formData.from} → {formData.destination}
          </p>

          <div className="budget-result-grid">
            <div className="budget-result-card">
              <span>Estimated Group Cost</span>
              <h3>{money(totalCost)}</h3>
            </div>

            <div className="budget-result-card">
              <span>Estimated Cost Per Person</span>
              <h3>{money(costPerPerson)}</h3>
            </div>
          </div>

          <h3>Expense Breakdown</h3>

          <div className="budget-breakdown">
            <p>
              Transportation <strong>{money(transport)}</strong>
            </p>
            <p>
              Accommodation ({nights} nights)
              <strong>{money(accommodationTotal)}</strong>
            </p>
            <p>
              Food ({travelerCount} travellers × {duration} days)
              <strong>{money(foodTotal)}</strong>
            </p>
            <p>
              Activities & Other
              <strong>{money(activities)}</strong>
            </p>
            <p className="budget-total-row">
              Total <strong>{money(totalCost)}</strong>
            </p>
          </div>

          <h2>Split Expenses With Your Group</h2>
          <p>
            Enter how much each traveller has actually paid
            toward shared trip expenses.
          </p>

          <div className="budget-participants">
            {participants.map((participant, index) => (
              <div className="budget-participant" key={index}>
                <div className="budget-field">
                  <label htmlFor={`name-${index}`}>
                    Traveller {index + 1} Name
                  </label>
                  <input
                    id={`name-${index}`}
                    type="text"
                    value={participant.name}
                    onChange={(event) =>
                      handleParticipantChange(
                        index,
                        "name",
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="budget-field">
                  <label htmlFor={`paid-${index}`}>
                    Amount Paid (₹)
                  </label>
                  <input
                    id={`paid-${index}`}
                    type="number"
                    min="0"
                    placeholder="0"
                    value={participant.paid}
                    onChange={(event) =>
                      handleParticipantChange(
                        index,
                        "paid",
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="budget-settlement">
            <h3>Group Settlement</h3>

            <p>
              Total actually paid:{" "}
              <strong>{money(settlementData.totalPaid)}</strong>
            </p>

            <p>
              Fair share per person:{" "}
              <strong>{money(settlementData.share)}</strong>
            </p>

            {settlementData.totalPaid === 0 ? (
              <p>
                Enter each traveller's contribution to calculate
                who owes whom.
              </p>
            ) : settlementData.settlements.length === 0 ? (
              <p>Everyone has contributed equally. All settled!</p>
            ) : (
              settlementData.settlements.map((settlement, index) => (
                <p key={index} className="budget-settlement-row">
                  <strong>{settlement.from}</strong> pays{" "}
                  <strong>{settlement.to}</strong>{" "}
                  {money(settlement.amount)}
                </p>
              ))
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Budget;