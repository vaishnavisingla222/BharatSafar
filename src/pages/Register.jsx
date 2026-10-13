import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Frontend validation only.
    // Connect a backend or authentication service to create accounts.
    setError(
      "Form validated! Account creation requires backend authentication."
    );
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-visual">
          <div className="register-visual-content">
            <span className="register-eyebrow">YOUR JOURNEY BEGINS HERE</span>

            <h1>
              Discover India,
              <br />
              One Journey at a Time.
            </h1>

            <p>
              Create your BharatSafar account and start planning
              unforgettable journeys across India.
            </p>

            <div className="register-highlight">
              <span>✦</span>
              <span>Explore destinations. Plan memories.</span>
            </div>
          </div>
        </div>

        <div className="register-form-section">
          <div className="register-form-wrapper">
            <Link to="/" className="register-brand">
              भारत<span>Safar</span>
            </Link>

            <h2>Create Account</h2>
            <p className="register-subtitle">
              Join us and start exploring India.
            </p>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="register-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <label className="register-show-password">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                Show passwords
              </label>

              {error && (
                <p className="register-message" role="status">
                  {error}
                </p>
              )}

              <button type="submit" className="register-submit">
                Create Account <span>→</span>
              </button>
            </form>

            <p className="register-login-text">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

            <Link to="/" className="register-back-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;