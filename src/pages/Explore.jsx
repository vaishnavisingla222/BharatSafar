import "./Explore.css";
import Navbar from "../components/Navbar";
import kerala from "../assets/kerala.png";
import RishikeshMussorie from "../assets/RishikeshMussorie.png";
import sevenSister from "../assets/sevenSister.png";
import west from "../assets/west.png"
function Explore() {
  return (
    <div className="explore-page">
      <Navbar />

      <section className="explore-header">
        <p className="explore-tag">DISCOVER INDIA</p>

        <h1>Explore Incredible India</h1>

        <p>
          Discover beautiful destinations, rich culture, breathtaking
          landscapes and unforgettable experiences across India.
        </p>
      </section>

      <section className="explore-content">
        <div className="category-buttons">
          <button className="active">All</button>
          <button>Mountains</button>
          <button>Beaches</button>
          <button>Heritage</button>
          <button>Culture</button>
        </div>

        <div className="destination-grid">

          <div className="explore-card">
            <div className="card-image mountain">
              <img src={RishikeshMussorie} alt="RishikeshMussorie" />
            </div>

            <div className="card-info">
              <h3>Rishikesh Mussorie</h3>
              <p>Uttrakhand</p>
              <span>🏔️ Mountains</span>
            </div>
          </div>

          <div className="explore-card">
            <div className="card-image beach">
              <img src={kerala} alt="kerala"/>
            </div>

            <div className="card-info">
              <h3>Kerala</h3>
              <p>Kerala</p>
              <span>🌊 Beaches</span>
            </div>
          </div>

          <div className="explore-card">
            <div className="card-image heritage">
              <img src={west} alt="west" />
            </div>

            <div className="card-info">
              <h3>Jaipur</h3>
              <p>Rajasthan & Gujrat</p>
              <span>🏰 Heritage</span>
            </div>
          </div>

          <div className="explore-card">
            <div className="card-image culture">
              <img src={sevenSister} alt="sevenSister" />
            </div>

            <div className="card-info">
              <h3>Seven Sisters</h3>
              <p>East India</p>
              <span>🛕 Culture</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Explore;