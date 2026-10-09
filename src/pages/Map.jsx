
import "./Map.css";
import Navbar from "../components/Navbar";

function Map() {
  return (
    <div className="map-page">
      <Navbar />

      <section className="map-header">
        <p className="map-tag">YOUR NEXT ADVENTURE</p>
        <h1>Explore India on the Map</h1>
        <p>
          Discover destinations across India and find inspiration
          for your next journey.
        </p>
      </section>

      <section className="map-content">
        <div className="map-panel">
          <div className="map-placeholder">
            <div className="map-label label-north">
              🏔️ Himachal Pradesh
            </div>

            <div className="map-label label-east">
              🌿 Northeast India
            </div>

            <div className="map-label label-west">
              🏰 Rajasthan
            </div>

            <div className="map-label label-south">
              🌴 Kerala
            </div>

            <div className="map-center">
              <span>🇮🇳</span>
              <h2>Incredible India</h2>
              <p>So much to explore</p>
            </div>
          </div>
        </div>

        <aside className="map-sidebar">
          <h2>Explore Destinations</h2>
          <p className="map-sidebar-description">
            Get inspired by these popular regions.
          </p>

          <div className="map-destination">
            <span>🏔️</span>
            <div>
              <h3>Himachal Pradesh</h3>
              <p>Mountains & adventure</p>
            </div>
          </div>

          <div className="map-destination">
            <span>🏰</span>
            <div>
              <h3>Rajasthan</h3>
              <p>Forts & heritage</p>
            </div>
          </div>

          <div className="map-destination">
            <span>🌴</span>
            <div>
              <h3>Kerala</h3>
              <p>Backwaters & nature</p>
            </div>
          </div>

          <div className="map-destination">
            <span>🌿</span>
            <div>
              <h3>Northeast India</h3>
              <p>Valleys & hidden gems</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Map;
