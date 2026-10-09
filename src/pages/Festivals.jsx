import "./Festivals.css";

function Festivals() {
  return (
    <div className="festival-page">

      <section className="festival-header">
        <p className="festival-tag">CELEBRATE INDIA</p>

        <h1>Experience India's Festivals</h1>

        <p>
          Discover the colours, traditions, music and celebrations
          that make India's festivals truly special.
        </p>
      </section>

      <section className="festival-content">
        <div className="festival-grid">

          <div className="festival-card">
            <div className="festival-icon">🪔</div>

            <div className="festival-info">
              <h3>Diwali</h3>
              <p>📍 Across India</p>
              <span>October - November</span>

              <p className="festival-description">
                Celebrate the festival of lights with beautiful
                decorations, traditions and celebrations.
              </p>
            </div>
          </div>

          <div className="festival-card">
            <div className="festival-icon">🎨</div>

            <div className="festival-info">
              <h3>Holi</h3>
              <p>📍 Mathura, Uttar Pradesh</p>
              <span>March</span>

              <p className="festival-description">
                Experience the vibrant festival of colours,
                especially around Mathura and Vrindavan.
              </p>
            </div>
          </div>

          <div className="festival-card">
            <div className="festival-icon">🕺</div>

            <div className="festival-info">
              <h3>Navratri</h3>
              <p>📍 Gujarat</p>
              <span>September - October</span>

              <p className="festival-description">
                Experience energetic Garba nights, traditional
                music, dance and colourful celebrations.
              </p>
            </div>
          </div>

          <div className="festival-card">
            <div className="festival-icon">🌸</div>

            <div className="festival-info">
              <h3>Onam</h3>
              <p>📍 Kerala</p>
              <span>August - September</span>

              <p className="festival-description">
                Experience Kerala's harvest festival with
                traditional food, decorations and celebrations.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Festivals;